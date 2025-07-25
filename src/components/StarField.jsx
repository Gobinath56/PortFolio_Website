import React, { useRef, useEffect } from "react";

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Generate stars
    let stars = Array.from({ length: 200 }, () => createStar());

    function createStar() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.05, // horizontal drift
        vy: Math.random() * 0.3 + 0.1, // downward drift
        twinkleOffset: Math.random() * 100,
      };
    }

    let frame = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let star of stars) {
        star.x += star.vx;
        star.y += star.vy;

        // Recycle stars
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        if (star.x < 0) {
          star.x = width;
        } else if (star.x > width) {
          star.x = 0;
        }

        // Twinkle effect
        const brightness =
          0.5 + 0.5 * Math.sin((frame + star.twinkleOffset) * 0.05);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fill();
      }

      frame++;
      requestAnimationFrame(animate);
    }

    animate();

    // Handle screen resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars = Array.from({ length: 200 }, () => createStar());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-[-1]"
    />
  );
};

export default StarField;
