import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCertificates } from '../utils/storage';
import SectionTitle from '../components/SectionTitle';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const loadData = () => {
      setCertificates(getCertificates());
    };
    loadData();
  }, []);

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
            Certificates & Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A showcase of my professional certifications and achievements
          </motion.p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {certificates.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No certificates added yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cert.certificateImageURL}
                      alt={cert.certificateTitle}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Click to View</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {cert.certificateTitle}
                    </h3>
                    <p className="text-gray-600 mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-semibold">{cert.year}</span>
                      {cert.credentialURL && (
                        <a
                          href={cert.credentialURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-accent hover:underline"
                        >
                          Verify →
                        </a>
                      )}
                    </div>
                    {cert.credentialID && (
                      <p className="text-sm text-gray-500 mt-2">ID: {cert.credentialID}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedCert.certificateImageURL}
                alt={selectedCert.certificateTitle}
                className="w-full rounded-t-2xl"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  {selectedCert.certificateTitle}
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">Issuer:</span> {selectedCert.issuer}</p>
                  <p><span className="font-semibold">Year:</span> {selectedCert.year}</p>
                  {selectedCert.credentialID && (
                    <p><span className="font-semibold">Credential ID:</span> {selectedCert.credentialID}</p>
                  )}
                  {selectedCert.credentialURL && (
                    <a
                      href={selectedCert.credentialURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
                    >
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Certificates;
