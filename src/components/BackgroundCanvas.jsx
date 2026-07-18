import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Config
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const blobs = [
      { color: 'rgba(229, 9, 20, 0.4)', basex: width * 0.2, basey: height * 0.1, r: Math.max(width * 0.2, 300), speed: 0.001, offset: 0, mx: 3 },
      { color: 'rgba(76, 29, 149, 0.3)', basex: width * 0.9, basey: height * 0.5, r: Math.max(width * 0.25, 400), speed: 0.0008, offset: 100, mx: 1 },
      { color: 'rgba(9, 130, 229, 0.3)', basex: width * 0.3, basey: height * 1.1, r: Math.max(width * 0.15, 200), speed: 0.0012, offset: 200, mx: 2 },
      { color: 'rgba(229, 9, 145, 0.2)', basex: width * 0.7, basey: -height * 0.2, r: Math.max(width * 0.22, 350), speed: 0.0009, offset: 300, mx: 1.5 }
    ];

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / width - 0.5) * 50;
      mouseY = (e.clientY / height - 0.5) * 50;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;

    const drawGrid = (ctx, w, h, timestamp) => {
      const gridSize = 50;
      const moveSpeed = 0.02; // px per ms
      const offset = (timestamp * moveSpeed) % gridSize;

      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      
      ctx.beginPath();
      
      // Vertical lines
      for (let x = -gridSize; x <= w + gridSize; x += gridSize) {
        let drawX = x + mouseX;
        ctx.moveTo(drawX, 0);
        ctx.lineTo(drawX, h);
      }
      
      // Horizontal lines (moving down)
      const baseOffset = prefersReducedMotion ? 0 : offset;
      for (let y = -gridSize; y <= h + gridSize; y += gridSize) {
        let drawY = y + baseOffset + mouseY;
        ctx.moveTo(0, drawY);
        ctx.lineTo(w, drawY);
      }
      ctx.stroke();
      
      // Radial mask (simulating the mask-image)
      const maskGradient = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w, h) * 0.5);
      maskGradient.addColorStop(0, 'rgba(5, 5, 5, 0)');
      maskGradient.addColorStop(1, 'rgba(5, 5, 5, 1)');
      ctx.fillStyle = maskGradient;
      ctx.fillRect(0, 0, w, h);
    };

    const render = (timestamp) => {
      if (!time) time = timestamp;
      time = timestamp;
      
      // Clear screen
      ctx.fillStyle = '#050505'; // var(--bg)
      ctx.fillRect(0, 0, width, height);

      // Draw Grid
      drawGrid(ctx, width, height, timestamp);

      // Draw Blobs
      ctx.globalCompositeOperation = 'screen';
      
      blobs.forEach(b => {
        // Calculate wandering offsets if not reduced motion
        let ox = 0;
        let oy = 0;
        if (!prefersReducedMotion) {
           ox = Math.sin(timestamp * b.speed + b.offset) * 200;
           oy = Math.cos(timestamp * b.speed + b.offset) * 200;
        }
        
        const x = b.basex + ox + (mouseX * b.mx);
        const y = b.basey + oy + (mouseY * b.mx);
        
        const g = ctx.createRadialGradient(x, y, 0, x, y, b.r);
        g.addColorStop(0, b.color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';

      // Only pause if document is hidden to save battery
      if (!document.hidden) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        time = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default BackgroundCanvas;
