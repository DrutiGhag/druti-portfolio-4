import { motion } from 'motion/react';

const tags = {
  div: motion.div,
  article: motion.article,
};

function Reveal({ as = 'div', delay = 0, y = 28, children, ...props }) {
  const Tag = tags[as];

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
