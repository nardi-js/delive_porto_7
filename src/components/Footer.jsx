import { motion } from 'framer-motion';
import { getProfile } from '../utils/storage';
import { useState } from 'react';

const Footer = () => {
  const [profile] = useState(() => getProfile());

  return (
    <footer className="bg-secondary text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300">
              {profile?.description || 'Building elegant solutions to complex problems.'}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {profile?.socials?.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:scale-110 transition-transform"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            {profile?.email && (
              <p className="text-gray-300 mt-4">
                <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
                  {profile.email}
                </a>
              </p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} {profile?.name || 'Portfolio'}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
