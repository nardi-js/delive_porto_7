import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProfile, getSkills } from '../utils/storage';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setProfile(getProfile());
      setSkills(getSkills());
    };
    loadData();
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 md:mb-6 break-words">
                {profile?.name || 'Your Name'}
              </h1>
              <p className="text-lg sm:text-xl text-primary mb-4 md:mb-6 break-words">{profile?.title || 'Computer Science Student'}</p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                {profile?.description || 'Passionate about building elegant solutions to complex problems.'}
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {profile?.socials?.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="text-4xl hover:text-primary transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="My academic journey">Education</SectionTitle>

          <div className="space-y-8">
            {profile?.education?.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-8 border-l-4 border-primary"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">{edu.institution}</h3>
                      <p className="text-lg text-primary">{edu.degree}</p>
                    </div>
                    <span className="text-gray-600 font-semibold mt-2 md:mt-0">{edu.year}</span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      {profile?.experience && profile.experience.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle subtitle="My professional journey">Experience</SectionTitle>

            <div className="space-y-8">
              {profile.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-8 border-l-4 border-accent"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">{exp.company}</h3>
                        <p className="text-lg text-accent">{exp.position}</p>
                      </div>
                      <span className="text-gray-600 font-semibold mt-2 md:mt-0">{exp.year}</span>
                    </div>
                    {exp.description && (
                      <p className="text-gray-700">{exp.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="My technical expertise">Skills & Proficiency</SectionTitle>

          {Object.entries(groupedSkills).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-secondary mb-6">{category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{skill.icon}</span>
                        <span className="text-lg font-semibold text-secondary">{skill.name}</span>
                      </div>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                        className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun Facts / Personal Interests */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12">Fun Facts & Interests</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '💻', title: 'Code Enthusiast', text: 'Love exploring new technologies and frameworks' },
                { icon: '🎯', title: 'Problem Solver', text: 'Enjoy tackling complex algorithmic challenges' },
                { icon: '🌱', title: 'Continuous Learner', text: 'Always learning and improving my skills' }
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
                >
                  <div className="text-6xl mb-4">{fact.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{fact.title}</h3>
                  <p className="text-white/90">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
