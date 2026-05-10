import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border w-fit text-sm text-primary font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Hi, I'm Ajit <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Senior Software Engineer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            I architect and build scalable, production-grade microservices and robust backend systems. Specializing in Node.js, TypeScript, and event-driven architectures.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors box-glow">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg bg-secondary/50 text-foreground border border-border font-medium flex items-center gap-2 hover:bg-secondary/80 transition-colors">
              <Mail size={18} /> Contact Me
            </a>
            <a href="/ajitkumar_cv.pdf" download className="px-6 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium flex items-center gap-2 hover:bg-primary/20 transition-all">
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass rounded-xl border border-border overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-2 text-xs text-muted-foreground flex items-center gap-2">
                <Terminal size={14} /> server.ts
              </div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base text-foreground">
              <p className="text-primary/80 mb-2">~/{">"} starting backend services...</p>
              <div className="space-y-1">
                <p><span className="text-green-500">✔</span> connected to PostgreSQL</p>
                <p><span className="text-green-500">✔</span> Kafka consumer initialized</p>
                <p><span className="text-green-500">✔</span> RabbitMQ channels active</p>
                <p><span className="text-green-500">✔</span> Redis cache ready</p>
                <p className="mt-4"><span className="text-blue-500">INFO</span> [NestApplication] Application successfully started.</p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-primary inline-block mt-4 align-middle"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
