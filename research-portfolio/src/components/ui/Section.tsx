'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionProps extends Omit<HTMLMotionProps<'div'>, 'title'> {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  ...props 
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px 0px' }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        {...props}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="mt-10">
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default Section;
