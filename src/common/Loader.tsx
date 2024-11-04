import React from 'react';
import { motion } from 'framer-motion';
import s from './Loader.module.css';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1],
      yoyo: true,
      repeat: Infinity,
    },
  },
};

export const Loader = () => {
  return (
    <motion.div
      className={s.loadingContainer} // Стилизация контейнера
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          className={s.loadingCircle} // Стилизация кружков
          variants={loadingCircleVariants}
        />
      ))}
    </motion.div>
  );
};

export default Loader;
