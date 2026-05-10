import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-glow">
          <span className="text-primary">Ajit</span>.dev
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <FiLinkedin size={20} />
            </a>
            <ThemeToggle />
            <a href="/ajitkumar_cv.pdf" download className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all text-sm font-medium flex items-center gap-2">
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/5 py-4 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-white transition-colors text-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm font-medium text-muted-foreground">Switch Theme</span>
            <ThemeToggle />
          </div>
          <a href="/ajitkumar_cv.pdf" download className="px-4 py-3 mt-4 rounded-lg bg-primary/10 text-primary text-center font-medium flex items-center justify-center gap-2">
            <Download size={18} /> Download Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
