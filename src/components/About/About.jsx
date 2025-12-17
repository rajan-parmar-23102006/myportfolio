import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-darkGray/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="w-72 h-72 bg-darkGray rounded-lg border-2 border-primary/30 flex items-center justify-center overflow-hidden hover:border-primary transition-all duration-300">
                <p className="text-mediumGray text-center px-4">Add your photo to<br/>src/assets/images/profile.jpg</p>
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-4 text-mediumGray">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="text-primary font-semibold">Hetvi Parmar</span>, a passionate 
                <span className="text-lightGray font-semibold"> Full Stack Developer</span> currently pursuing 
                B.Tech in Computer Engineering (4th Semester).
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in building modern, responsive web applications using the <span className="text-primary font-semibold">MERN Stack</span>. 
                I love turning ideas into reality through clean code and elegant design.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in web development has equipped me with strong problem-solving skills and a keen eye for detail. 
                I'm constantly learning new technologies and improving my craft.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new web technologies, contributing to open-source projects, 
                or working on personal projects that challenge my skills.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all">
                  <h3 className="text-3xl font-bold text-primary">10+</h3>
                  <p className="text-sm text-mediumGray">Projects</p>
                </div>
                <div className="text-center p-4 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all">
                  <h3 className="text-3xl font-bold text-primary">5+</h3>
                  <p className="text-sm text-mediumGray">Certifications</p>
                </div>
                <div className="text-center p-4 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all">
                  <h3 className="text-3xl font-bold text-primary">2+</h3>
                  <p className="text-sm text-mediumGray">Years Learning</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
