import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getResume, getProfile, getSkills } from '../utils/storage';
import SectionTitle from '../components/SectionTitle';

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setResume(getResume());
      setProfile(getProfile());
      setSkills(getSkills());
    };
    loadData();
  }, []);

  const handleDownload = () => {
    alert('PDF download feature - In production, this would download a PDF version of the resume');
  };

  const handleViewCV = () => {
    alert('Full CV viewer - In production, this would open the full CV in a new window');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">{profile?.name || 'Your Name'}</h1>
            <p className="text-2xl mb-6">{profile?.title || 'Computer Science Student'}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
              <button
                onClick={handleViewCV}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-colors font-semibold"
              >
                View Full CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Summary */}
            {resume?.summary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <span className="text-primary">📝</span> Professional Summary
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">{resume.summary}</p>
              </motion.div>
            )}

            {/* Education */}
            {profile?.education && profile.education.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <span className="text-primary">🎓</span> Education
                </h2>
                <div className="space-y-6">
                  {profile.education.map((edu) => (
                    <div key={edu.id} className="border-l-4 border-primary pl-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
                          <p className="text-lg text-primary">{edu.institution}</p>
                        </div>
                        <span className="text-gray-600 font-semibold mt-2 md:mt-0">{edu.year}</span>
                      </div>
                      {edu.description && (
                        <p className="text-gray-700 mt-2">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Experience */}
            {profile?.experience && profile.experience.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <span className="text-primary">💼</span> Experience
                </h2>
                <div className="space-y-6">
                  {profile.experience.map((exp) => (
                    <div key={exp.id} className="border-l-4 border-accent pl-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-secondary">{exp.position}</h3>
                          <p className="text-lg text-accent">{exp.company}</p>
                        </div>
                        <span className="text-gray-600 font-semibold mt-2 md:mt-0">{exp.year}</span>
                      </div>
                      {exp.description && (
                        <p className="text-gray-700 mt-2">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Skills */}
            {skills && skills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <span className="text-primary">⚡</span> Skills & Technologies
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.id} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                      <span className="text-2xl">{skill.icon}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-secondary">{skill.name}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Achievements */}
            {resume?.achievements && resume.achievements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <span className="text-primary">🏆</span> Achievements & Awards
                </h2>
                <ul className="space-y-3">
                  {resume.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Interested in working together?</h3>
              <p className="mb-6 text-lg">Let's discuss how I can contribute to your team!</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {profile?.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  >
                    {profile.email}
                  </a>
                )}
                {profile?.socials?.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-colors font-semibold"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
