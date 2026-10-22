import { useEffect } from 'react';

const CARD_SELECTOR =
  '.skill-card, .project-card, .experience-card, .education-card, .certifications';

// Writes the cursor position into --mx / --my on the hovered card so the
// CSS spotlight (see index.css) can follow the pointer.
function useSpotlight() {
  useEffect(() => {
    const handlePointerMove = (event) => {
      const card = event.target.closest?.(CARD_SELECTOR);
      if (!card) return;

      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };

    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => document.removeEventListener('pointermove', handlePointerMove);
  }, []);
}

export default useSpotlight;
