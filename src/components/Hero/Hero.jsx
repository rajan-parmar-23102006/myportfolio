import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Name with fade-in animation */}
        <h1 className="text-5xl md:text-7xl font-bold text-lightGray mb-6 animate-fade-in">
          Hi, I'm <span className="text-primary">Hetvi Parmar</span>
        </h1>

        {/* Rotating Text Animation */}
        <div className="text-2xl md:text-4xl text-mediumGray mb-8 h-16">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'MERN Developer',
              2000,
              'Problem Solver',
              2000,
              'Tech Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Short Description */}
        <p className="text-lg text-mediumGray mb-10 max-w-2xl mx-auto animate-slide-up">
          4th Semester B.Tech Computer Engineering Student passionate about building elegant web solutions with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-primary hover:bg-primaryDark text-dark font-semibold px-8 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            className="border-2 border-primary text-primary hover:bg-primary hover:text-dark font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGray hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightGray hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-lightGray hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
