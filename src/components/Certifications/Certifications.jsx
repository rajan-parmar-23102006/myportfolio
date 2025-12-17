import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Udemy / Coursera',
      date: 'December 2024',
      description: 'Comprehensive course covering MERN stack development',
      file: '/src/assets/certificates/cert1.pdf',
    },
    {
      id: 2,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'November 2024',
      description: 'Advanced React concepts including hooks, context, and Redux',
      file: '/src/assets/certificates/cert2.pdf',
    },
    {
      id: 3,
      title: 'Node.js & Express.js',
      issuer: 'Coursera',
      date: 'October 2024',
      description: 'Backend development with Node.js and Express framework',
      file: '/src/assets/certificates/cert3.pdf',
    },
    {
      id: 4,
      title: 'MongoDB Developer Course',
      issuer: 'MongoDB University',
      date: 'September 2024',
      description: 'Database design and management with MongoDB',
      file: '/src/assets/certificates/cert4.pdf',
    },
    {
      id: 5,
      title: 'JavaScript Algorithms',
      issuer: 'FreeCodeCamp',
      date: 'August 2024',
      description: 'Data structures and algorithms in JavaScript',
      file: '/src/assets/certificates/cert5.pdf',
    },
    {
      id: 6,
      title: 'Git & GitHub Essentials',
      issuer: 'LinkedIn Learning',
      date: 'July 2024',
      description: 'Version control and collaboration with Git',
      file: '/src/assets/certificates/cert6.pdf',
    },
  ];

  const handleDownload = (file, title) => {
    // Create a temporary link to download the file
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-darkGray/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark p-6 rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <FaCertificate className="text-primary text-3xl group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-mediumGray">{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-lightGray mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-primary text-sm font-semibold mb-3">{cert.issuer}</p>

                {/* Description */}
                <p className="text-mediumGray text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(cert.file, cert.title)}
                  className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-dark font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                >
                  <FaDownload />
                  <span>Download Certificate</span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
