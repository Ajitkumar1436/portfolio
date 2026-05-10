import { motion } from 'framer-motion';
import { Mail, Send, Phone } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-secondary/10 dark:bg-black/40 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Let's Connect</h2>
              <p className="text-muted-foreground text-lg">
                I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="mailto:ajitmaurya1436@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="font-medium">ajitmaurya1436@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+918728870234" className="flex items-center gap-4 text-foreground hover:text-green-500 transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-border group-hover:border-green-500/50 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Phone</p>
                  <p className="font-medium">+91-8728870234</p>
                </div>
              </a>
              
              <a href="https://github.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <FiGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">GitHub</p>
                  <p className="font-medium">github.com/ajit</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/ajit-kumar-05836015b" className="flex items-center gap-4 text-foreground hover:text-blue-500 transition-colors group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-border group-hover:border-blue-500/50 transition-colors">
                  <FiLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/ajit-kumar</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-border flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
              <input 
                type="text" 
                id="name" 
                className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
              <input 
                type="email" 
                id="email" 
                className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="bg-primary text-primary-foreground font-medium rounded-lg px-6 py-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mt-2">
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
