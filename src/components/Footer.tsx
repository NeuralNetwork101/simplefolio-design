import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-xl font-mono font-semibold text-primary">
              developer
            </a>
            <p className="mt-2 text-gray-600 text-sm max-w-md">
              A passionate developer focused on creating beautiful, functional, and user-friendly applications.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-8"
          >
            <div>
              <h4 className="font-medium text-sm mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-600 text-sm hover-link interactive">Home</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-600 text-sm hover-link interactive">Projects</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-600 text-sm hover-link interactive">Skills</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 text-sm hover-link interactive">About</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 text-sm hover-link interactive">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-3">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 text-sm hover-link flex items-center interactive"
                  >
                    <Github size={14} className="mr-2" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 text-sm hover-link flex items-center interactive"
                  >
                    <Linkedin size={14} className="mr-2" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-gray-600 text-sm hover-link flex items-center interactive"
                  >
                    <Mail size={14} className="mr-2" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-6 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center">
            © {currentYear} Developer Portfolio. Designed & Built with 
            <Heart size={14} className="mx-1 text-red-500" fill="currentColor" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
