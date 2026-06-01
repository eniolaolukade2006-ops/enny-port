/* ─────────────────────────────────────────
   PORTFOLIO — script.js
   Eniola Olukade | Web Designer · Gamer · Film Buff
───────────────────────────────────────── */

/* ─── CUSTOM CURSOR ─── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  ring.style.left   = e.clientX + 'px';
  ring.style.top    = e.clientY + 'px';
});

// Scale cursor ring on interactive elements
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    ring.style.width  = '60px';
    ring.style.height = '60px';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width  = '36px';
    ring.style.height = '36px';
  });
});

/* ─── MOBILE BURGER MENU ─── */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* ─── SCROLL REVEAL ─── */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* ─── CONTACT FORM ─── */
function handleForm(e) {
  e.preventDefault();

  const successMsg = document.getElementById('form-success');
  successMsg.style.display = 'block';

  // Reset form fields
  e.target.reset();
}