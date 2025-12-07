import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProfile, getSkills, getProjects } from '../utils/storage';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setProfile(getProfile());
      setSkills(getSkills().slice(0, 6));
      setProjects(getProjects().slice(0, 3));
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Animated Background Lights */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl"
          ></motion.div>
          
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 right-32 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl"
          ></motion.div>
          
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"
          ></motion.div>
          
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, -70, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-32 left-32 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-secondary mb-6"
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #1E293B, #3B82F6, #60A5FA, #3B82F6, #1E293B)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {profile?.name || 'Your Name'}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-primary mb-8"
            >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {profile?.title || 'Computer Science Student'}
              </motion.span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              {profile?.description || 'Passionate about building elegant solutions to complex problems.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/projects"
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link
                to="/resume"
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={profile?.profilePictureURL || 'https://via.placeholder.com/400'}
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {profile?.description || 'Passionate about building elegant solutions to complex problems.'}
              </p>

              <div className="space-y-4">
                {profile?.education?.slice(0, 1).map((edu) => (
                  <div key={edu.id} className="flex items-start space-x-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-semibold text-secondary">{edu.institution}</h4>
                      <p className="text-gray-600">{edu.degree}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="My technical expertise">Skills & Technologies</SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-secondary mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="bg-primary h-2 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{skill.level}%</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-secondary text-white rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-105"
            >
              View All Skills
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Check out my recent work">Featured Projects</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.thumbnailURL}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-primary hover:text-accent font-semibold transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Have a project in mind? Let's discuss how we can collaborate!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
