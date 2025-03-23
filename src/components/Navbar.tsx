
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, GitHub, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: GitHub, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-xl font-mono font-semibold text-primary interactive"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          developer
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <a 
                  href={item.href} 
                  className="text-sm font-medium hover-link interactive"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 pl-8 border-l border-gray-200">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors interactive"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + (0.1 * index) }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-900 interactive"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ul className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-lg font-medium hover:text-primary transition-colors interactive"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6 mt-12 pt-8 border-t border-gray-100">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors interactive"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
