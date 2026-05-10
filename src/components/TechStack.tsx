import { motion } from 'framer-motion';

const technologies = [
  { name: 'Node.js', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Kafka', category: 'Messaging' },
  { name: 'RabbitMQ', category: 'Messaging' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'Jenkins', category: 'DevOps' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
];

export function TechStack() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20 dark:bg-black/20 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            A comprehensive list of technologies I use to build scalable, resilient, and performant systems.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass px-6 py-3 rounded-full flex items-center gap-2 cursor-default group hover:border-primary/50 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-shadow" />
              <span className="font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
