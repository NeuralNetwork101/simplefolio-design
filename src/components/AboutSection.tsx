
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Calendar, MapPin, Lightbulb, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm text-primary font-mono bg-primary/5 px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get to Know Me
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            About Me
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Here's a brief introduction to who I am and what I do.
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full h-96 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Developer workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-mono text-sm">
                  <span className="text-primary">function</span> developCode() {<br/>
                  &nbsp;&nbsp;return <span className="text-green-600">'elegant solutions'</span>;<br/>
                  }
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Hello, I'm [Your Name]</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate full-stack developer with a strong focus on creating clean, efficient, 
              and user-friendly applications. With over 5 years of experience in the field, 
              I've worked on a variety of projects ranging from e-commerce platforms to complex 
              enterprise applications.
            </p>
            <p className="text-gray-600 mb-6">
              My approach to development centers around understanding user needs and business 
              requirements, then translating them into elegant technical solutions. I'm constantly 
              learning new technologies and methodologies to enhance my skill set and deliver 
              better results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="mr-3 bg-primary/10 p-2 rounded-full">
                  <Calendar size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Experience</h4>
                  <p className="text-gray-600 text-sm">5+ Years</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-primary/10 p-2 rounded-full">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Location</h4>
                  <p className="text-gray-600 text-sm">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-primary/10 p-2 rounded-full">
                  <Lightbulb size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Specialization</h4>
                  <p className="text-gray-600 text-sm">Full-Stack Development</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-primary/10 p-2 rounded-full">
                  <BookOpen size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Education</h4>
                  <p className="text-gray-600 text-sm">B.S. Computer Science</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md transition-transform hover:translate-y-[-2px] interactive"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
