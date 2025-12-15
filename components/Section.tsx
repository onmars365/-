import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-6"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;