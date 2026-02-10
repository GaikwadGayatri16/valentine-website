
// Premium Valentine Week Experience - Enhanced with Carousel
(() => {
  const rnd = (min, max) => Math.random() * (max - min) + min;

  // === DATA ===
  const days = [
    {
      number: 1,
      emoji: '🌹',
      title: 'Rose Day — A Gentle Promise',
      message: 'Like a rose unfolding, my heart opens to you — soft, patient, and full of color. You are the bloom I choose every morning.',
      hearts: '❤️ 💖 💕',
      image: 'assets/rose.jpg'

    },
    {
      number: 2,
      emoji: '💍',
      title: 'Propose Day — A Quiet Question',
      message: 'I would ask you again, under the same sky, with the same trembling hands — will you walk with me through every tomorrow? 💍✨',
      hearts: '💖 ✨ 💕',
      image: 'assets/day2.jpg'
    },
    {
      number: 3,
      emoji: '🍫',
      title: 'Chocolate Day — Sweetness Shared',
      message: 'Life with you tastes sweeter than any chocolate — every small moment with you feels like a celebration of love. 🍫💕',
      hearts: '❤️ 💕 ✨',
      image: 'assets/day3.jpg'
    },
    {
      number: 4,
      emoji: '🧸',
      title: 'Teddy Day — Warm Embrace',
      message: 'If I could turn into a teddy, I’d sit beside you when you’re tired, hold you when you’re sad, and remind you how deeply you are loved. 🧸❤️',
      hearts: '💖 ❤️ 💕',
      image: 'assets/day4.jpg'
    },
    {
      number: 5,
      emoji: '🤝',
      title: 'Promise Day — Steadfast',
      message: 'I promise to be alwqays there for you, to listen, to laugh, and to love — through every season and every reason.',
      hearts: '✨ ❤️ 💖',
      image: 'assets/day5.jpg'
    },
    {
      number: 6,
      emoji: '🤗',
      title: 'Hug Day — Close to You',
      message: 'Every hug from you feels like home — safe, warm, and full of love. Let me hold you whenever the world feels heavy. 🤗💖',
      hearts: '💕 ❤️ ✨',
      image: 'assets/day6.jpg'
    },
    {
      number: 7,
      emoji: '💋',
      title: 'Kiss Day — Saved For Us',
      message: 'One kiss from you says everything my heart feels — love, care, comfort, and forever. This love is sealed with you. 💋❤️',
      hearts: '❤️ 💖 💕',
      image: 'assets/day7.jpg'
    }
  ];

  let currentDay = 0;

  // === FLOATING HEARTS ANIMATION ===
  function makeHeart() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = ['❤️', '💖', '💕', '✨', '🎀'][Math.floor(Math.random() * 5)];
    const size = Math.floor(rnd(35, 55));
    h.style.fontSize = size + 'px';
    
    // Random starting position
    const startLeft = rnd(5, 95);
    const startTop = rnd(10, 90);
    h.style.left = startLeft + 'vw';
    h.style.top = startTop + 'vh';
    
    // Slow animation with random duration
    const dur = rnd(12, 20).toFixed(2) + 's';
    const delay = rnd(0, 3).toFixed(2) + 's';
    h.style.animationDuration = dur;
    h.style.animationDelay = delay;
    
    container.appendChild(h);
    
    // Remove after animation completes
    setTimeout(() => { h.remove(); }, (parseFloat(dur) + parseFloat(delay)) * 1000 + 500);
  }
  
  // Generate hearts more frequently for a lively background
  setInterval(() => { makeHeart(); }, 600);
  
  // Create initial burst of hearts
  for (let i = 0; i < 12; i++) {
    setTimeout(() => makeHeart(), i * 180);
  }

  // Sparkles: small light particles
  function makeSparkle() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    const s = document.createElement('div');
    s.className = 'sparkle';
    const left = Math.random() * 100;
    const top = 60 + Math.random() * 30;
    s.style.left = left + 'vw';
    s.style.top = top + 'vh';
    s.style.opacity = 0.9;
    container.appendChild(s);
    setTimeout(() => s.remove(), 2200);
  }

  // create occasional sparkles
  setInterval(() => { makeSparkle(); }, 900);

  // === CONFETTI BURST ===
  function confetti(x, y) {
    const symbols = ['❤️', '💖', '✨', '💕', '🌹', '💎', '💋', '🤍'];
    for (let i = 0; i < 30; i++) {
      const c = document.createElement('div');
      c.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      c.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: ${Math.floor(rnd(16, 32))}px;
        pointer-events: none;
        z-index: 9999;
        will-change: transform, opacity;
      `;
      document.body.appendChild(c);
      const angle = (Math.PI * 2 * i) / 30;
      const distance = 100 + Math.random() * 220;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance - 60;
      const duration = 1.3 + Math.random() * 0.9;
      c.animate(
        [
          { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
          { transform: `translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ],
        { duration: duration * 1000, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
      );
      setTimeout(() => c.remove(), duration * 1000 + 50);
    }
  }

  // === UPDATE FEATURED DAY DISPLAY ===
  function updateFeaturedDay(dayIndex) {
    currentDay = dayIndex;
    const day = days[dayIndex];
    const featured = document.getElementById('featuredDay');
    
    featured.innerHTML = `
      <div class="featured-day-image-container">
  <img src="${day.image}" 
       alt="${day.title}" 
       class="featured-day-image"
       onload="this.nextElementSibling.style.display='none';"
       onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
  <div class="featured-day-image-placeholder" style="display:none;">${day.emoji}</div>
</div>

      <div class="featured-day-content">
        <span class="featured-day-number">DAY ${day.number} OF 7</span>
        <h2 class="featured-day-title">${day.title}</h2>
        <p class="featured-day-message">${day.message}</p>
        <div class="featured-day-hearts">${day.hearts}</div>
      </div>
    `;

    // Update counter
    document.getElementById('dayCounter').textContent = day.number;

    // Update mini cards
    const miniCards = document.querySelectorAll('.mini-card');
    miniCards.forEach((card, idx) => {
      card.classList.toggle('active', idx === dayIndex);
    });
  }

  // === POPULATE MINI CAROUSEL ===
  function populateMiniCarousel() {
    const carousel = document.getElementById('miniCarousel');
    carousel.innerHTML = days.map((day, idx) => `
      <button class="mini-card ${idx === 0 ? 'active' : ''}" data-day="${idx}">
        ${day.emoji} Day ${day.number}
      </button>
    `).join('');

    carousel.querySelectorAll('.mini-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const dayIdx = parseInt(btn.getAttribute('data-day'));
        updateFeaturedDay(dayIdx);
        confetti(window.innerWidth / 2, window.innerHeight / 2);
      });
    });
  }

  // === POPULATE ALL DAYS GRID ===
  function populateDaysGrid() {
    const grid = document.getElementById('daysGrid');
    grid.innerHTML = days.map((day, idx) => `
      <div class="day-card" data-day-index="${idx}">
        <div class="day-card-image-container">
          <img src="${day.image}" alt="${day.title}" class="day-card-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="day-card-image-placeholder">${day.emoji}</div>
        </div>
        <div class="day-card-content">
          <h3 class="day-card-title">Day ${day.number}</h3>
          <p class="day-card-message">${day.message}</p>
        </div>
      </div>
    `).join('');

    // Add glow effect on day cards
    grid.querySelectorAll('.day-card').forEach((card, idx) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
      });
      card.addEventListener('click', (e) => {
        updateFeaturedDay(idx);
        document.getElementById('week').scrollIntoView({ behavior: 'smooth' });
        confetti(e.clientX, e.clientY);
      });
    });
  }

  // === CAROUSEL NAVIGATION ===
  function setupCarouselControls() {
    document.getElementById('prevDay').addEventListener('click', () => {
      const newIdx = (currentDay - 1 + days.length) % days.length;
      updateFeaturedDay(newIdx);
      confetti(window.innerWidth / 2, window.innerHeight / 2);
    });

    document.getElementById('nextDay').addEventListener('click', () => {
      const newIdx = (currentDay + 1) % days.length;
      updateFeaturedDay(newIdx);
      confetti(window.innerWidth / 2, window.innerHeight / 2);
    });
  }

  // === SCROLL PROGRESS BAR ===
  function updateScrollBar() {
    let scrollbar = document.getElementById('scrollbar-progress');
    if (!scrollbar) {
      scrollbar = document.createElement('div');
      scrollbar.id = 'scrollbar-progress';
      scrollbar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #ffd700, #c8102e, #ffd700);
        z-index: 10000;
        width: 0%;
        transition: width 0.1s ease;
      `;
      document.body.insertBefore(scrollbar, document.body.firstChild);
    }
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollbar.style.width = scrollPercent + '%';
  }
  window.addEventListener('scroll', updateScrollBar);

  // === CARD TILT & GLOW ===
  window.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.day-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (Math.hypot(mouseX - centerX, mouseY - centerY) < 250) {
        const tiltX = ((mouseY - centerY) / rect.height) * 8;
        const tiltY = ((centerX - mouseX) / rect.width) * 8;
        card.style.setProperty('--tilt-x', tiltX + 'deg');
        card.style.setProperty('--tilt-y', tiltY + 'deg');
      }
    });
  });

  window.addEventListener('mouseleave', () => {
    document.querySelectorAll('.day-card').forEach(card => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });

  // === CORE FUNCTIONALITY ===
  document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startJourney');
    const musicToggle = document.getElementById('musicToggle');
    const audio = document.getElementById('bgMusic');

    // Initialize carousel
    populateMiniCarousel();
    populateDaysGrid();
    setupCarouselControls();
    updateFeaturedDay(0);

    // Start Journey button
    if (startBtn) {
      startBtn.addEventListener('click', (e) => {
        confetti(e.clientX, e.clientY);
        setTimeout(() => {
          document.getElementById('week').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      });
    }

    // Music toggle
    if (musicToggle && audio) {
      musicToggle.addEventListener('click', async () => {
        try {
          if (audio.paused) {
            await audio.play();
            musicToggle.textContent = '🔊 Pause Music';
            musicToggle.setAttribute('aria-pressed', 'true');
          } else {
            audio.pause();
            musicToggle.textContent = '🔈 Play Music';
            musicToggle.setAttribute('aria-pressed', 'false');
          }
        } catch (e) {
          console.warn('Audio play failed', e);
        }
      });
    }

    // Keyboard support
    if (musicToggle) {
      musicToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          musicToggle.click();
        }
      });
    }

    // Carousel keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') document.getElementById('prevDay').click();
      if (e.key === 'ArrowRight') document.getElementById('nextDay').click();
    });
  });

})();
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "24px";
  heart.style.opacity = "0.8";
  heart.style.transition = "transform 4s linear, opacity 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(-120vh)";
    heart.style.opacity = "0";
  }, 50);

  setTimeout(() => heart.remove(), 4000);
}, 1500);
