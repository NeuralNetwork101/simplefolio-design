
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "Tailwind CSS", "Redux", "Responsive Design"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel", "RESTful APIs", "GraphQL", "MySQL", "MongoDB"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "AWS", "Firebase", "Webpack", "Vite", "Linux", "Jest", "Cypress"]
  }
];

const SkillsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm text-primary font-mono bg-primary/5 px-4 py-1 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tech Stack
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A comprehensive list of my technical skills and technologies I work with.
          </motion.p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-pill px-3 py-1 text-sm bg-gray-100 rounded-full"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.2) + (skillIndex * 0.05) }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 p-8 bg-primary/5 rounded-xl border border-primary/10"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">My Development Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">Clean Code</h4>
              <p className="text-gray-600 text-sm">Writing maintainable, readable, and efficient code that follows best practices.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">User-Centered</h4>
              <p className="text-gray-600 text-sm">Focusing on creating intuitive, accessible, and enjoyable user experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-gray-600 text-sm">Constantly exploring new technologies and improving my skills and knowledge.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
