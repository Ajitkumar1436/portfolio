import { motion } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Production Microservices', value: '10+' },
  { label: 'Events / Day', value: '100K+' },
  { label: 'System Uptime', value: '99.9%' },
];

export function Stats() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 md:p-8 rounded-2xl text-center border border-white/5 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
