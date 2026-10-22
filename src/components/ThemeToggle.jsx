import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import './ThemeToggle.css';

const STORAGE_KEY = 'theme';
const THEME_COLORS = { light: '#dde3e8', dark: '#3a0f34' };

function getInitialTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    const root = document.documentElement;

    root.classList.add('theme-switching');
    root.setAttribute('data-theme', next);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[next]);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable, theme still applies for this visit */
    }

    window.setTimeout(() => root.classList.remove('theme-switching'), 500);
    setTheme(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="theme-toggle"
      onClick={toggleTheme}
    >
      <Sun size={14} className="theme-toggle-icon theme-toggle-sun" />
      <Moon size={14} className="theme-toggle-icon theme-toggle-moon" />

      <motion.span
        className="theme-toggle-thumb"
        initial={false}
        animate={{ x: isDark ? 28 : 0, rotate: isDark ? 360 : 0 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      >
        {isDark ? <Moon size={13} /> : <Sun size={13} />}
      </motion.span>
    </button>
  );
}

export default ThemeToggle;
