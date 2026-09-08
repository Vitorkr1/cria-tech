'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  opacity: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let raf = 0;
    let resizeHandler: (() => void) | undefined;
    let mouseHandler: ((e: MouseEvent) => void) | undefined;
    let startTimer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    function start() {
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let W = 0;
      let H = 0;
      let particles: Particle[] = [];
      const mouse = { x: -9999, y: -9999 };
      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      const NUM = isMobile ? 16 : 60;

      function resize() {
        W = canvas!.width = window.innerWidth;
        H = canvas!.height = window.innerHeight;
      }
      resize();
      resizeHandler = resize;
      window.addEventListener('resize', resize);

      function createParticles() {
        particles = Array.from({ length: NUM }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.6 + 0.6,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.45 + 0.15,
        }));
      }
      createParticles();

      const handleMouse = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };
      mouseHandler = handleMouse;
      window.addEventListener('mousemove', handleMouse);

      function draw() {
        ctx!.clearRect(0, 0, W, H);
        particles.forEach((p) => {
          // leve atração/repulsão ao mouse
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const dist = Math.hypot(mdx, mdy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (mdx / dist) * force * 0.25;
            p.y += (mdy / dist) * force * 0.25;
          }

          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(0, 73, 255, ${p.opacity})`;
          ctx!.fill();

          p.x += p.dx;
          p.y += p.dy;
          if (p.x < 0 || p.x > W) p.dx *= -1;
          if (p.y < 0 || p.y > H) p.dy *= -1;
        });

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 120) {
              ctx!.beginPath();
              ctx!.strokeStyle = `rgba(0,73,255,${0.09 * (1 - dist / 120)})`;
              ctx!.lineWidth = 0.6;
              ctx!.moveTo(p1.x, p1.y);
              ctx!.lineTo(p2.x, p2.y);
              ctx!.stroke();
            }
          }
        }
        raf = requestAnimationFrame(draw);
      }
      draw();
    }

    // Adia o início do canvas até depois do primeiro paint/hydration,
    // para não competir com o carregamento inicial da página no mobile.
    const win = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (typeof win.requestIdleCallback === 'function') {
      win.requestIdleCallback(() => {
        startTimer = setTimeout(start, 50);
      });
    } else {
      startTimer = setTimeout(start, 300);
    }

    return () => {
      cancelled = true;
      if (startTimer) clearTimeout(startTimer);
      cancelAnimationFrame(raf);
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
      if (mouseHandler) window.removeEventListener('mousemove', mouseHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
}
