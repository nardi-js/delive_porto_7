import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjects } from '../utils/storage';
import SectionTitle from '../components/SectionTitle';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const allTechs = [...new Set(projects.flatMap(p => p.techStack))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.techStack.includes(filter));

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-secondary mb-6"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore my portfolio of projects showcasing various technologies and problem-solving approaches
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            {allTechs.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === tech
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found with this filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.thumbnailURL}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link to={`/projects/${project.id}`}>
                      <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {project.githubURL && (
                        <a
                          href={project.githubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {project.liveDemoURL && (
                        <a
                          href={project.liveDemoURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <Link
                        to={`/projects/${project.id}`}
                        className="ml-auto text-primary hover:text-accent font-semibold transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
