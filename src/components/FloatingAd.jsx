import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FloatingAd = () => {
  const [isMinimized, setIsMinimized] = useState(true); // Start minimized
  const adRef = useRef(null);

  // Close popup when clicking outside (but keep minimized button visible)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adRef.current && !adRef.current.contains(event.target)) {
        setIsMinimized(true); // Only minimize, don't hide completely
      }
    };

    if (!isMinimized) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMinimized]);

  return (
    <motion.div
      ref={adRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {isMinimized ? (
        // Minimized State - Always visible floating button with attention effects
        <motion.button
          onClick={() => setIsMinimized(false)}
          className="relative bg-gradient-to-r from-primary to-accent text-white p-4 rounded-full shadow-2xl transform transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 20px 25px -5px rgba(59, 130, 246, 0.3)',
              '0 25px 50px -12px rgba(59, 130, 246, 0.5)',
              '0 20px 25px -5px rgba(59, 130, 246, 0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary opacity-75"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.75, 0, 0.75],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          
          {/* Notification badge */}
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
          >
            !
          </motion.span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </motion.button>
        ) : (
          // Expanded State
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-80 sm:w-96 border-2 border-primary"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-2 right-2"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
              <h3 className="text-lg font-bold mb-1">Love This Template?</h3>
              <p className="text-sm opacity-90">Get it now for your own portfolio!</p>
              
              {/* Close Button (only minimize, not completely hide) */}
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-all"
                  aria-label="Minimize"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-white">
              <div className="space-y-3">
                {/* Buy Button */}
                <motion.a
                  href="https://www.delive.online/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Buy This Template
                  </span>
                </motion.a>

                {/* See All Templates Button */}
                <motion.a
                  href="https://www.delive.online/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-white text-primary border-2 border-primary py-3 px-6 rounded-xl font-semibold text-center shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 mt-3"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    See All Templates
                  </span>
                </motion.a>

                {/* Edit/Modify Button */}
                <Link to="/admin">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gray-100 text-gray-700 border border-gray-300 py-2.5 px-6 rounded-xl font-medium text-center shadow-sm hover:shadow-md hover:bg-gray-200 transition-all duration-300 mt-3"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit / Modify Website
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* Footer Text */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Customize everything via Admin Panel
              </p>
            </div>
          </motion.div>
        )}
    </motion.div>
  );
};

export default FloatingAd;
