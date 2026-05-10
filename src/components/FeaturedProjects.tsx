import { motion } from 'framer-motion';
import { ExternalLink, Server, Database, Activity } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const projects = [
  {
    title: 'Enfineo - Digital Banking & Crypto',
    description: 'Designed fault-tolerant financial transaction microservices using Kafka + Redis. Built KYC/KYT pipeline via Sumsub for real-time compliance.',
    icon: <Database className="text-blue-400" size={24} />,
    tech: ['Node.js', 'TypeScript', 'Kafka', 'PostgreSQL', 'Docker'],
    highlights: [
      'Sub-50ms cache response under peak load',
      'Zero regulatory violations via Sumsub KYC',
      'Automated CI/CD with zero-downtime releases',
    ],
    links: [
      { label: 'Code', url: '#', icon: <FiGithub size={16} />, primary: false },
      { label: 'Live Demo', url: '#', icon: <ExternalLink size={16} />, primary: true },
    ]
  },
  {
    title: 'Live Football Analytics Platform',
    description: 'High-performance backend for real-time football data handling and live match updates using event-driven architectures.',
    icon: <Server className="text-green-400" size={24} />,
    tech: ['Node.js', 'TypeScript', 'Kafka', 'Redis', 'PostgreSQL'],
    highlights: [
      'Real-time data handling via Kafka',
      'Optimized query performance',
      'Scalable containerized deployment',
    ],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/search?q=fanzpick&c=apps&hl=en_IN', icon: <FaGooglePlay size={16} />, primary: false },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/fanzpick/id6449597077', icon: <FaApple size={16} />, primary: true },
    ]
  },
  {
    title: 'Notification Microservice',
    description: 'A robust notification engine supporting push, email, and SMS with batch processing capabilities and environment-driven architecture.',
    icon: <Activity className="text-primary" size={24} />,
    tech: ['Node.js', 'Kafka', 'RabbitMQ', 'Redis'],
    highlights: [
      'Kafka/RabbitMQ switchable providers',
      'Batch notifications support',
      'Environment-driven architecture',
    ],
    links: [
      { label: 'Code', url: '#', icon: <FiGithub size={16} />, primary: false },
    ]
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Showcasing scalable backend architectures and production-ready microservices I've built.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.3)] flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-sm flex-grow">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Architecture Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  {project.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium flex items-center gap-1.5 transition-colors ${
                        link.primary 
                          ? 'text-primary hover:text-primary/80 ml-auto' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {link.primary ? (
                        <>{link.label} {link.icon}</>
                      ) : (
                        <>{link.icon} {link.label}</>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
