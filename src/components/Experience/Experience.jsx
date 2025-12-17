import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer Intern',
      company: 'Tech Company Name',
      duration: 'June 2024 - August 2024',
      description: [
        'Developed and maintained web applications using MERN stack',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Implemented RESTful APIs and integrated third-party services',
        'Improved application performance by 30% through code optimization',
      ],
      type: 'Internship',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Freelance',
      duration: 'January 2024 - May 2024',
      description: [
        'Built responsive websites for clients using React and Tailwind CSS',
        'Designed and implemented user-friendly interfaces',
        'Worked directly with clients to understand requirements',
        'Delivered 5+ projects on time and within budget',
      ],
      type: 'Freelance',
    },
    {
      id: 3,
      title: 'Web Development Trainee',
      company: 'Learning Institute',
      duration: 'August 2023 - December 2023',
      description: [
        'Completed intensive training in full-stack web development',
        'Built multiple projects including e-commerce and social media platforms',
        'Learned industry best practices and modern development workflows',
        'Achieved top performer recognition in the program',
      ],
      type: 'Training',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="text-primary">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark"></div>

                {/* Content Card */}
                <div className="bg-darkGray p-6 rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-primary" />
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-lightGray mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{exp.company}</p>
                  
                  <div className="flex items-center gap-2 text-mediumGray text-sm mb-4">
                    <FaCalendar size={14} />
                    <span>{exp.duration}</span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-mediumGray text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
