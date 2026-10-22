import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import './BackToTop.css';

const SHOW_AFTER = 700;

function BackToTop() {
  const [visible, setVisible] = useState(() => window.scrollY > SHOW_AFTER);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_AFTER);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          className="back-to-top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 18, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.85 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
