// ============================================
// MAIN.JS - Minimal, purposeful interactions
// ============================================

(function() {
  'use strict';

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav-open');
      navToggle.classList.toggle('active');
    });
  }

  // Header scroll effect
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Terminal typing effect (optional enhancement)
  const terminalCursor = document.querySelector('.terminal-line .cursor');
  if (terminalCursor) {
    // Cursor is already animated via CSS
  }

  // Copy code blocks on click
  document.querySelectorAll('pre code').forEach(block => {
    block.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(block.textContent);
        
        // Visual feedback
        const originalBg = block.parentElement.style.borderColor;
        block.parentElement.style.borderColor = 'var(--color-accent)';
        setTimeout(() => {
          block.parentElement.style.borderColor = originalBg;
        }, 1000);
      } catch (err) {
        console.log('Failed to copy code');
      }
    });
    
    block.style.cursor = 'pointer';
    block.title = 'Click to copy';
  });

})();
