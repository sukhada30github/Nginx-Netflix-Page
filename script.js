// The Enchanted Archives — interactive effects
const particleContainer = document.getElementById('particles');
const toast = document.getElementById('toast');
const spellMessages = [
  'A hidden door has appeared. Follow your curiosity.',
  'A little courage can change the whole story.',
  'The stars have left a message: keep going.',
  'Your next chapter is waiting to be written.',
  'Wonder is a kind of magic. Never lose it.'
];
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// Generate a gentle stream of floating magical dust.
function createParticle() {
  if (!particleContainer) return;
  const particle = document.createElement('span');
  particle.className = 'particle';
  particle.textContent = Math.random() > 0.5 ? '✦' : '·';
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.fontSize = `${8 + Math.random() * 12}px`;
  particle.style.animationDuration = `${7 + Math.random() * 9}s`;
  particle.style.opacity = `${0.25 + Math.random() * 0.55}`;
  particleContainer.appendChild(particle);
  setTimeout(() => particle.remove(), 17000);
}
for (let i = 0; i < 24; i++) setTimeout(createParticle, i * 180);
setInterval(createParticle, 650);

// Reveal sections when they enter the viewport.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .feature-card').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Mobile navigation.
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
menuToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

// House selection cards.
const houseResult = document.getElementById('houseResult');
document.querySelectorAll('.house-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.house-card').forEach(item => item.classList.remove('selected'));
    card.classList.add('selected');
    houseResult.textContent = `${card.dataset.house}: ${card.dataset.description}`;
    showToast(`${card.dataset.house} welcomes you.`);
  });
});

// Wand/spell effects: burst around the button and a rotating message.
function makeBurst(x, y, count = 18) {
  for (let i = 0; i < count; i++) {
    const spark = document.createElement('span');
    spark.className = 'magic-burst';
    spark.textContent = ['✦', '✧', '·'][Math.floor(Math.random() * 3)];
    spark.style.left = `${x + (Math.random() - 0.5) * 130}px`;
    spark.style.top = `${y + (Math.random() - 0.5) * 60}px`;
    spark.style.fontSize = `${12 + Math.random() * 18}px`;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 950);
  }
}
document.getElementById('spellCast').addEventListener('click', event => {
  const rect = event.currentTarget.getBoundingClientRect();
  makeBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 26);
  const message = spellMessages[Math.floor(Math.random() * spellMessages.length)];
  document.getElementById('spellMessage').textContent = message;
});
document.getElementById('magicButton').addEventListener('click', event => {
  const rect = event.currentTarget.getBoundingClientRect();
  makeBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 22);
  showToast('✨ A little magic has entered your day.');
});

// Subtle parallax response on larger screens.
const heroArt = document.querySelector('.hero-art');
if (heroArt && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelector('.hero').addEventListener('mousemove', event => {
    const bounds = heroArt.getBoundingClientRect();
    const dx = (event.clientX - bounds.left - bounds.width / 2) / bounds.width;
    const dy = (event.clientY - bounds.top - bounds.height / 2) / bounds.height;
    heroArt.style.setProperty('--tilt-x', `${dy * -2}deg`);
    heroArt.style.setProperty('--tilt-y', `${dx * 2}deg`);
    heroArt.style.transform = `perspective(900px) rotateX(${dy * -1.2}deg) rotateY(${dx * 1.2}deg)`;
  });
  document.querySelector('.hero').addEventListener('mouseleave', () => {
    heroArt.style.transform = '';
  });
}
