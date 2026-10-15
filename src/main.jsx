import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import './motion.css';

function MotionEnhancements({ children }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const selector = [
      'main > section',
      '.feature-card',
      '.setup-card',
      '.install-component',
      '.install-steps-grid article',
      '.language-card',
      '.efith-provider-card',
      '.efith-capability-grid article',
      '.feature-app-card',
      '.feature-block',
      '.product-real-figure',
      '.install-theme-card',
      '.install-process-card'
    ].join(',');

    const observeElements = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        if (element.dataset.motionObserved) return;
        element.dataset.motionObserved = 'true';
        element.classList.add('motion-reveal');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 55}ms`);
        if (observer) observer.observe(element);
        else element.classList.add('motion-visible');
      });
    };

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('motion-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' })
      : null;

    observeElements();
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.getElementById('root'), { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer?.disconnect();
    };
  }, []);

  return children;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionEnhancements><App /></MotionEnhancements>
  </React.StrictMode>
);