
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-sm md:text-base text-primary font-mono bg-primary/5 px-4 py-1 rounded-full">
                Full-Stack Developer
              </span>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Crafting digital <span className="text-primary">experiences</span> with clean code.
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                I'm a software developer specializing in building exceptional digital experiences. 
                Currently focused on creating accessible, human-centered products.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md transition-transform hover:translate-y-[-2px] interactive"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors interactive"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center">
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-white backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden">
                  <div className="text-5xl md:text-8xl font-mono blur-[0.3px]">{'{ }'}</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <code className="font-mono text-sm">
                  <span className="text-primary">const</span> developer = <span className="text-green-600">'passionate'</span>;
                </code>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <a href="#projects" className="interactive">
          <ChevronDown className="h-8 w-8 text-primary/60" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
