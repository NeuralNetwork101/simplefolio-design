import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project2',
    title: 'Portfolio Dashboard',
    description: 'A responsive dashboard for tracking investments and financial portfolios. Built with Vue.js and Firebase, featuring real-time data updates.',
    tags: ['Vue.js', 'Firebase', 'Chart.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project3',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks and projects. Implements drag-and-drop functionality and team collaboration features.',
    tags: ['TypeScript', 'React', 'Redux', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm text-primary font-mono bg-primary/5 px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Work
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A selection of projects that showcase my skills and experience in software development.
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono py-1 px-2 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors interactive"
                    aria-label="View GitHub repository"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors interactive"
                    aria-label="View live project"
                  >
                    <span className="text-sm">Demo</span>
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover-link interactive font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View more projects on GitHub
            <ExternalLink size={16} className="ml-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
