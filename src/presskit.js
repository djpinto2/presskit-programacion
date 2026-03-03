/**
 * Presskit page — scroll reveal & skill bar animations
 */

export function initPresskit() {
  initScrollReveal();
  initSkillBars();
}

// ── Scroll Reveal ──────────────────────────────────────────
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement?.querySelectorAll('.reveal') ?? [];
          let delay = 0;
          siblings.forEach((sib, i) => {
            if (sib === entry.target) delay = i * 80;
          });
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

// ── Skill Bars ────────────────────────────────────────────
function initSkillBars() {
  // Reset all pct labels to 0% on init
  document.querySelectorAll('.skill-row').forEach((row) => {
    const pct = row.querySelector('.skill-pct');
    if (pct) pct.textContent = '0%';
    const fill = row.querySelector('.skill-fill');
    if (fill) fill.style.width = '0%';
  });

  const rows = document.querySelectorAll('.skill-row');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const row   = entry.target;
        const level = parseInt(row.dataset.level, 10) || 0;
        const fill  = row.querySelector('.skill-fill');
        const pct   = row.querySelector('.skill-pct');

        // Stagger each bar based on its index within the parent column
        const siblings = Array.from(row.parentElement?.querySelectorAll('.skill-row') ?? []);
        const idx   = siblings.indexOf(row);
        const delay = idx * 120;

        setTimeout(() => {
          // Animate bar width via CSS transition
          if (fill) fill.style.width = level + '%';

          // Animate the counter 0 → level
          if (pct) animateCounter(pct, 0, level, 1300);
        }, delay);

        observer.unobserve(row);
      });
    },
    { threshold: 0.35 }
  );

  rows.forEach((el) => observer.observe(el));
}

/**
 * Counts from `from` to `to` over `duration` ms,
 * updating el.textContent with "<value>%"
 */
function animateCounter(el, from, to, duration) {
  const startTime = performance.now();

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3); // cubic ease-out
  }

  function step(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value    = Math.round(from + easeOut(progress) * (to - from));
    el.textContent = value + '%';
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
