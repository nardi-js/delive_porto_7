import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../utils/storage';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const projectData = getProjectById(id);
    setProject(projectData);
    if (projectData?.thumbnailURL) {
      setSelectedImage(projectData.thumbnailURL);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-primary hover:text-accent">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src={selectedImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/projects" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Projects
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 md:mb-6">About This Project</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 break-words">
                  {project.longDescription}
                </p>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-secondary mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges & Solutions */}
                {(project.challenges || project.solutions) && (
                  <div className="mb-8">
                    {project.challenges && (
                      <>
                        <h3 className="text-2xl font-bold text-secondary mb-4">Challenges</h3>
                        <p className="text-gray-700 mb-6">{project.challenges}</p>
                      </>
                    )}
                    {project.solutions && (
                      <>
                        <h3 className="text-2xl font-bold text-secondary mb-4">Solutions</h3>
                        <p className="text-gray-700">{project.solutions}</p>
                      </>
                    )}
                  </div>
                )}

                {/* Gallery */}
                {project.galleryImages && project.galleryImages.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-4">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[project.thumbnailURL, ...project.galleryImages].map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(image)}
                          className="relative h-48 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                        >
                          <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {selectedImage === image && (
                            <div className="absolute inset-0 border-4 border-primary"></div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                {/* Tech Stack */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-secondary mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary text-white rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-secondary mb-4">Links</h3>
                  <div className="space-y-3">
                    {project.githubURL && (
                      <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>View on GitHub</span>
                      </a>
                    )}
                    {project.liveDemoURL && (
                      <a
                        href={project.liveDemoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Share */}
                <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-lg shadow-md text-white">
                  <h3 className="text-xl font-bold mb-3">Like This Project?</h3>
                  <p className="mb-4">Check out more of my work or get in touch!</p>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-2 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Get In Touch
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
