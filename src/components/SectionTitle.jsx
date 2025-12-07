import { motion } from 'framer-motion';

const SectionTitle = ({ children, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;
