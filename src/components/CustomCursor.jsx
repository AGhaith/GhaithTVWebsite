import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    document.body.style.cursor = 'none';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(dotRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.1
      });
    };

    const xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.6, ease: "power3"});
    const yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.6, ease: "power3"});

    gsap.ticker.add(() => {
      xTo(mouseX);
      yTo(mouseY);
    });

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' || 
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      gsap.ticker.remove();
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hovering' : ''}`} />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
