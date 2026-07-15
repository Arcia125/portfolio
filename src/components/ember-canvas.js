import React, { useEffect, useRef } from 'react';

// Signature element: a field of square "pixel embers" that drift upward and
// cool from ember-orange to violet as they rise — a nod to the fire-animation
// project, rendered without anti-aliasing for a sprite feel. The pointer
// scatters nearby embers. Respects prefers-reduced-motion with a static field.

const GRID = 4; // embers snap to a 4px grid when drawn

// ember #ff8c42 -> violet #6b5aa8, interpolated by particle life
const lerp = (a, b, t) => a + (b - a) * t;
const emberColor = (t, alpha) => {
  const r = Math.round(lerp(255, 107, t));
  const g = Math.round(lerp(140, 90, t));
  const b = Math.round(lerp(66, 168, t));
  return `rgba(${r},${g},${b},${alpha})`;
};

// fade in fast, then dim as the ember cools; never dip below a visible floor
const emberAlpha = life => {
  const fadeIn = Math.min(1, life / 0.1);
  return fadeIn * (0.45 + 0.55 * (1 - life));
};

const randomSize = () => {
  const roll = Math.random();
  if (roll < 0.6) return GRID;
  if (roll < 0.9) return GRID * 2;
  return GRID * 3;
};

const spawnParticle = (width, height, randomY = false) => ({
  x: Math.random() * width,
  y: randomY ? Math.random() * height : height + GRID * 3,
  vx: (Math.random() - 0.5) * 0.3,
  vy: -(0.5 + Math.random() * 0.9),
  size: randomSize(),
  life: randomY ? Math.random() : 0, // 0 = just born, 1 = burnt out
  // per-frame life increment: a full burn takes ~12-35s, long enough for an
  // ember spawned below the canvas to rise most of the way through the hero
  rate: 0.0005 + Math.random() * 0.0009,
  phase: Math.random() * Math.PI * 2, // horizontal wobble offset
});

const EmberCanvas = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    // willReadFrequently keeps the canvas in software memory. Besides matching
    // our usage, it avoids a Firefox failure mode where an accelerated canvas
    // surface can't be shared with a software compositor and displays as an
    // opaque black rectangle.
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;
    let time = 0;
    let lastFrame = 0;
    const pointer = { x: -9999, y: -9999 };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.fillStyle = emberColor(p.life, emberAlpha(p.life));
        // integer positions keep edges crisp; free (non-grid) movement keeps
        // the drift smooth instead of ticking in 4px jumps
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
      }
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = Math.ceil(rect.width);
      height = Math.ceil(rect.height);
      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(200, Math.floor(width / 7));
      particles = Array.from(
        { length: reduceMotion ? Math.floor(count * 1.4) : count },
        () => spawnParticle(width, height, true)
      );
      if (reduceMotion) drawFrame();
    };

    const step = now => {
      // scale all movement by real frame time so the drift speed is the same
      // at 30, 60, or 144Hz (clamped so background-tab pauses don't teleport)
      const dt = lastFrame ? Math.min(now - lastFrame, 50) : 16.7;
      lastFrame = now;
      const f = dt / 16.7;
      time += dt / 1000;
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.life += p.rate * f;
        p.x += (p.vx + Math.sin(time * 1.4 + p.phase) * 0.2) * f;
        p.y += p.vy * f;

        // pointer scatters nearby embers
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 110 * 110 && dist2 > 0.01) {
          const dist = Math.sqrt(dist2);
          const force = ((110 - dist) / 110) * 0.6;
          p.x += (dx / dist) * force * 5 * f;
          p.y += (dy / dist) * force * 5 * f;
          p.life += 0.004 * f; // stirring an ember burns it faster
        }

        if (p.life >= 1 || p.y < -GRID * 3) {
          particles[i] = spawnParticle(width, height);
        }
      }
      drawFrame();
      rafId = window.requestAnimationFrame(step);
    };

    const onPointerMove = e => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    window.addEventListener('resize', resize);
    if (!reduceMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerleave', onPointerLeave);
      rafId = window.requestAnimationFrame(step);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export { EmberCanvas };
