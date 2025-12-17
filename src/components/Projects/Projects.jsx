import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce website with payment integration, user authentication, and admin dashboard.',
      image: '/src/assets/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      github: 'https://github.com/yourusername/project1',
      live: 'https://yourproject1.vercel.app',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task management application with drag-and-drop functionality and team collaboration features.',
      image: '/src/assets/images/project2.jpg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'React',
      github: 'https://github.com/yourusername/project2',
      live: 'https://yourproject2.vercel.app',
    },
    {
      id: 3,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with authentication, posts, comments, and likes functionality.',
      image: '/src/assets/images/project3.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'Node.js',
      github: 'https://github.com/yourusername/project3',
      live: null,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with real-time data, forecasts, and beautiful UI.',
      image: '/src/assets/images/project4.jpg',
      technologies: ['React', 'API Integration', 'Chart.js'],
      category: 'React',
      github: 'https://github.com/yourusername/project4',
      live: 'https://yourproject4.vercel.app',
    },
    {
      id: 5,
      title: 'Portfolio CMS',
      description: 'Content Management System for portfolios with admin panel and dynamic content management.',
      image: '/src/assets/images/project5.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      github: 'https://github.com/yourusername/project5',
      live: 'https://yourproject5.vercel.app',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, comments, and user profiles.',
      image: '/src/assets/images/project6.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      category: 'Full Stack',
      github: 'https://github.com/yourusername/project6',
      live: 'https://yourproject6.vercel.app',
    },
  ];

  const categories = ['All', 'Full Stack', 'React', 'Node.js'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-dark'
                    : 'bg-darkGray text-lightGray hover:bg-primary/20 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-darkGray rounded-lg overflow-hidden border border-primary/10 hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-dark overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Ctext fill="%2300D9FF" font-family="Arial" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EProject Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lightGray mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-mediumGray text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-dark text-primary px-3 py-1 rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-mediumGray hover:text-primary transition-colors"
                    >
                      <FaGithub size={20} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-mediumGray hover:text-primary transition-colors"
                      >
                        <FaExternalLinkAlt size={18} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
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

export default Projects;
