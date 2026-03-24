// Smooth scroll with offset for fixed header
// Adjusts scroll so that the section <h2> is at the top of the viewport

document.addEventListener('DOMContentLoaded', function() {
  const OFFSET = document.querySelector('.header')?.offsetHeight || 0;
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const section = document.getElementById(targetId);
      if (section) {
        // Find the first h2 in the section
        const h2 = section.querySelector('h2');
        if (h2) {
          e.preventDefault();
          const y = h2.getBoundingClientRect().top + window.pageYOffset - OFFSET - 10;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });
});
