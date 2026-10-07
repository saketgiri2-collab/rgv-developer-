import React, { useEffect, useRef } from 'react';

interface ArchitecturalCanvasProps {
  mousePos: { x: number; y: number };
  isReducedMotion?: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  depth: number;
}

export const ArchitecturalCanvas: React.FC<ArchitecturalCanvasProps> = ({
  mousePos,
  isReducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const currentMouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    targetMouseRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize luxury gold particles
    const particleCount = window.innerWidth < 768 ? 24 : 48;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6,
        speedY: -(Math.random() * 0.25 + 0.08),
        speedX: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.5 + 0.2,
        maxOpacity: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        depth: Math.random() * 0.8 + 0.2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.005;

      // Smooth mouse interpolation
      if (!isReducedMotion) {
        currentMouseRef.current.x += (targetMouseRef.current.x - currentMouseRef.current.x) * 0.05;
        currentMouseRef.current.y += (targetMouseRef.current.y - currentMouseRef.current.y) * 0.05;
      } else {
        currentMouseRef.current = { x: 0.5, y: 0.5 };
      }

      const mx = currentMouseRef.current.x * width;
      const my = currentMouseRef.current.y * height;

      // 1. Base dark charcoal canvas clear
      ctx.fillStyle = '#101012';
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle warm champagne/gold ambient radial gradients
      // Center ambient glow
      const centerGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.42,
        0,
        width * 0.5,
        height * 0.42,
        Math.max(width, height) * 0.6
      );
      centerGlow.addColorStop(0, 'rgba(200, 169, 107, 0.07)');
      centerGlow.addColorStop(0.5, 'rgba(151, 118, 59, 0.03)');
      centerGlow.addColorStop(1, 'rgba(16, 16, 18, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // Interactive mouse follow glow (subtle, non-distracting)
      if (!isReducedMotion) {
        const mouseGlow = ctx.createRadialGradient(mx, my, 0, mx, my, Math.min(width, height) * 0.45);
        mouseGlow.addColorStop(0, 'rgba(216, 192, 138, 0.06)');
        mouseGlow.addColorStop(0.6, 'rgba(200, 169, 107, 0.02)');
        mouseGlow.addColorStop(1, 'rgba(16, 16, 18, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Elegant architectural grid lines
      const gridSize = 64;
      const offsetX = isReducedMotion ? 0 : (currentMouseRef.current.x - 0.5) * 18;
      const offsetY = isReducedMotion ? 0 : (currentMouseRef.current.y - 0.5) * 18 + ((time * 10) % gridSize);

      ctx.save();
      ctx.strokeStyle = 'rgba(200, 169, 107, 0.045)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = (offsetX % gridSize); x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = (offsetY % gridSize); y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Architectural grid intersection dots & coordinate ticks
      ctx.fillStyle = 'rgba(216, 192, 138, 0.15)';
      for (let x = (offsetX % (gridSize * 3)); x < width; x += gridSize * 3) {
        for (let y = (offsetY % (gridSize * 3)); y < height; y += gridSize * 3) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // 4. Thin geometric concentric circles & luxury architectural rings
      ctx.save();
      const centerX = width * 0.5 + (isReducedMotion ? 0 : (currentMouseRef.current.x - 0.5) * 25);
      const centerY = height * 0.42 + (isReducedMotion ? 0 : (currentMouseRef.current.y - 0.5) * 20);

      const rings = [140, 260, 420, 620];
      rings.forEach((r, idx) => {
        ctx.strokeStyle = `rgba(200, 169, 107, ${0.035 - idx * 0.007})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();

        // Subtle dashed accent ring
        if (idx === 1) {
          ctx.save();
          ctx.setLineDash([4, 16]);
          ctx.strokeStyle = 'rgba(216, 192, 138, 0.05)';
          ctx.beginPath();
          ctx.arc(centerX, centerY, r + 24, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      });

      // Subtle architectural crosshair lines through center
      ctx.strokeStyle = 'rgba(200, 169, 107, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX - 180, centerY);
      ctx.lineTo(centerX + 180, centerY);
      ctx.moveTo(centerX, centerY - 180);
      ctx.lineTo(centerX, centerY + 180);
      ctx.stroke();
      ctx.restore();

      // 5. Floating gold particles with subtle drift & parallax
      particles.forEach((p) => {
        if (!isReducedMotion) {
          p.y += p.speedY;
          p.x += p.speedX;

          // Parallax displacement based on particle depth
          const pOffsetX = (currentMouseRef.current.x - 0.5) * p.depth * 30;
          const pOffsetY = (currentMouseRef.current.y - 0.5) * p.depth * 25;

          // Wrap around edges
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          // Pulsing opacity
          p.opacity = (Math.sin(time * 2 + p.x) * 0.5 + 0.5) * p.maxOpacity;

          ctx.fillStyle = `rgba(216, 192, 138, ${Math.max(0.1, p.opacity)})`;
          ctx.beginPath();
          ctx.arc(p.x + pOffsetX, p.y + pOffsetY, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Delicate glow around slightly larger particles
          if (p.size > 1.4) {
            ctx.fillStyle = `rgba(200, 169, 107, ${p.opacity * 0.25})`;
            ctx.beginPath();
            ctx.arc(p.x + pOffsetX, p.y + pOffsetY, p.size * 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          ctx.fillStyle = `rgba(216, 192, 138, 0.3)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 6. Subtle vignette overlay at edges
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        Math.min(width, height) * 0.35,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );
      vignette.addColorStop(0, 'rgba(16, 16, 18, 0)');
      vignette.addColorStop(1, 'rgba(10, 10, 12, 0.75)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [isReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
