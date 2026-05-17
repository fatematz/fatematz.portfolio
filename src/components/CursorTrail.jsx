"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 20;

const CursorTrail = () => {
  const dotsRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // First position follows mouse
      positions.current[0].x +=
        (mouse.current.x - positions.current[0].x) * 0.35;
      positions.current[0].y +=
        (mouse.current.y - positions.current[0].y) * 0.35;

      // Each next position follows the previous one (trail effect)
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        positions.current[i].x +=
          (positions.current[i - 1].x - positions.current[i].x) * 0.35;
        positions.current[i].y +=
          (positions.current[i - 1].y - positions.current[i].y) * 0.35;
      }

      // Update DOM
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const scale = 1 - i / TRAIL_LENGTH;
        const opacity = (1 - i / TRAIL_LENGTH) * 0.8;
        dot.style.transform = `translate(${positions.current[i].x}px, ${positions.current[i].y}px) translate(-50%, -50%) scale(${scale})`;
        dot.style.opacity = opacity;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="absolute top-0 left-0 rounded-full bg-[#f7edee]"
          style={{
            width: `${12 - i * 0.4}px`,
            height: `${12 - i * 0.4}px`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;