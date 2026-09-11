/* Shared helpers used by every page. No need to edit this file. */

function initFloatingHearts(containerId, count = 10) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const glyphs = ['🤍', '❤', '♥'];
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.textContent = glyphs[i % glyphs.length];
    span.style.left = `${Math.random() * 94 + 2}%`;
    span.style.animationDuration = `${7 + Math.random() * 6}s`;
    span.style.animationDelay = `${Math.random() * 8}s`;
    span.style.fontSize = `${0.9 + Math.random() * 0.9}rem`;
    el.appendChild(span);
  }
}

function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-dock a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', markActiveNav);
