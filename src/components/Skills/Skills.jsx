import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, 
  FaGithub, FaNpm, FaPython, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiVercel, 
  SiVite, SiRedux, SiFigma, SiMysql, SiFirebase 
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 'Advanced' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 'Advanced' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 'Intermediate' },
    { name: 'Express', icon: <SiExpress />, color: '#000000', level: 'Advanced' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: 'Advanced' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 'Expert' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 'Advanced' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', level: 'Intermediate' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717', level: 'Intermediate' },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC', level: 'Intermediate' },
    { name: 'Vite', icon: <SiVite />, color: '#646CFF', level: 'Intermediate' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37', level: 'Intermediate' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000', level: 'Intermediate' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', level: 'Intermediate' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', level: 'Beginner' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', level: 'Intermediate' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E', level: 'Beginner' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-darkGray/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-dark p-6 rounded-lg border border-primary/10 hover:border-primary transition-all duration-300 flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Icon */}
                <div 
                  className="text-5xl mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-lightGray text-sm font-medium text-center group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>

                {/* Hover Info */}
                <div className="absolute inset-0 bg-primary/95 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-dark font-bold text-lg mb-1">{skill.name}</p>
                    <p className="text-dark text-sm">{skill.level}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
