// script.js

document.addEventListener('DOMContentLoaded', function () {
  // set year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', () => {
    if (!nav) return;
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
    }
  });

  // close mobile nav on link click
  document.querySelectorAll('#nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 700 && nav) nav.style.display = '';
    });
  });

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // menu filtering
  const filters = document.querySelectorAll('.filter');
  const items = document.querySelectorAll('.menu-item');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(it => {
        if (filter === 'all' || it.dataset.category === filter) {
          it.style.display = 'block';
        } else {
          it.style.display = 'none';
        }
      });
    });
  });

  // reservation form (dummy)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const dt = form.querySelector('[name="datetime"]').value;
      if (!name || !phone || !dt) {
        alert('Please fill name, phone and date/time.');
        return;
      }
      // For now just show confirmation (replace with AJAX / backend integration)
      alert(`Thanks ${name}! Your reservation request for ${new Date(dt).toLocaleString()} has been received.`);
      form.reset();
    });
  }
});
