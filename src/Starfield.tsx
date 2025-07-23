import { useEffect, useRef } from 'react';

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nebulaRef1 = useRef<HTMLDivElement>(null);
  const nebulaRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5,
      dx: Math.random() * 0.1,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#0a0a10';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'white';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
        star.x -= star.dx;
        if (star.x < 0) star.x = width;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -3,
        }}
      />
      <div
        ref={nebulaRef1}
        style={{
          position: 'fixed',
          top: '-20%',
          left: '-20%',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(128,0,128,0.3), transparent 70%)',
          animation: 'nebulaFloat 40s ease-in-out infinite',
          zIndex: -2,
        }}
      />
      <div
        ref={nebulaRef2}
        style={{
          position: 'fixed',
          bottom: '-20%',
          right: '-20%',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(186,85,211,0.2), transparent 70%)',
          animation: 'nebulaFloat2 60s ease-in-out infinite',
          zIndex: -2,
        }}
      />
    </>
  );
}

export default Starfield;
