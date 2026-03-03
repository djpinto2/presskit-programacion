/**
 * Intro Overlay — Countdown animation & transition
 * Style: horizontal line through number (like the reference portfolio)
 */

export function initIntro() {
  const introEl    = document.getElementById('intro');
  const presskitEl = document.getElementById('presskit');
  const numEl      = document.getElementById('countdown-num');
  const enterWrap  = document.getElementById('enter-wrap');
  const enterBtn   = document.getElementById('enter-btn');

  if (!introEl || !presskitEl || !numEl || !enterBtn) return;

  // ── Config ──────────────────────────────────
  const TOTAL_MS = 3400;  // total countdown duration

  // ── Countdown ───────────────────────────────
  let startTime = null;
  let rafId;

  function easeInCubic(t) {
    return t * t * t;
  }

  function tick(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / TOTAL_MS, 1);
    const eased    = easeInCubic(progress);
    const current  = Math.round(100 - eased * 100);

    numEl.textContent = current;

    // micro-scale pulse
    numEl.classList.add('tick');
    setTimeout(() => numEl.classList.remove('tick'), 70);

    if (progress < 1) {
      rafId = requestAnimationFrame(tick);
    } else {
      numEl.textContent = '0';
      setTimeout(showEnter, 250);
    }
  }

  // ── Show ENTER ──────────────────────────────
  function showEnter() {
    // hide the line+number
    const lineWrap = document.querySelector('.intro-line-wrap');
    if (lineWrap) {
      lineWrap.style.opacity = '0';
      lineWrap.style.transition = 'opacity 0.4s ease';
      lineWrap.style.pointerEvents = 'none';
    }
    // show ENTER
    enterWrap.classList.remove('hidden');
    enterBtn.focus();
  }

  // ── Transition ──────────────────────────────
  function enter() {
    introEl.classList.add('fade-out');
    presskitEl.classList.remove('hidden');
    introEl.addEventListener('transitionend', () => {
      introEl.style.display = 'none';
    }, { once: true });
  }

  enterBtn.addEventListener('click', enter);
  enterBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      enter();
    }
  });

  // ── Start ───────────────────────────────────
  setTimeout(() => {
    rafId = requestAnimationFrame(tick);
  }, 350);
}
