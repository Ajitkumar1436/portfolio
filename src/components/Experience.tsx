import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Antier Solutions Pvt. Ltd., Mohali',
    period: 'Sep 2022 - Present',
    description: 'Architected 10+ production microservices in Node.js/TypeScript. Built Kafka + RabbitMQ pipelines processing 100K+ events/day. Reduced DB query time by 40% with caching and indexing. Orchestrated containerized deployments on AWS/Kubernetes maintaining 99.9% uptime.',
    skills: ['Node.js', 'TypeScript', 'Kafka', 'RabbitMQ', 'AWS', 'Kubernetes', 'Docker'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Antier Solutions Pvt. Ltd., Mohali',
    period: 'Mar 2022 - Sep 2022',
    description: 'Shipped RESTful APIs in Node.js with MySQL/PostgreSQL backends. Implemented RabbitMQ messaging in a live production environment.',
    skills: ['Node.js', 'MySQL', 'PostgreSQL', 'RabbitMQ', 'REST APIs'],
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-secondary/10 dark:bg-black/40 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground"
        >
          Professional Experience
        </motion.h2>

        <div className="relative border-l border-border ml-4 md:ml-0 md:pl-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,1)] ring-4 ring-background z-10" />
                
                {/* Desktop Line - hidden on mobile, central on desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-[1px] bg-border -translate-x-1/2" />

                <div className="md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>

                <div className="md:col-span-3 md:pl-12 glass p-6 rounded-xl border border-border relative group hover:border-primary/30 transition-colors">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
