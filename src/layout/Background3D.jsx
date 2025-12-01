import React, { useEffect, useRef } from 'react';
import useMousePosition from '../hooks/useMousePosition';

/**
 * COMPONENT: 3D BACKGROUND (CANVAS ENGINE)
 * Creates a dynamic 3D mesh sphere background using a native Canvas API.
 */
const Background3D = () => {
  const canvasRef = useRef(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Configuration
    const sphereRadius = 250;
    const particleCount = 100;
    const fov = 400;
    const viewDistance = 500;
    let rotationX = 0;
    let rotationY = 0;

    // Resize Handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // 3D Point Class for projection and rotation
    class Point3D {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }

      rotateX(angle) {
        const rad = angle * (Math.PI / 180);
        const cosa = Math.cos(rad);
        const sina = Math.sin(rad);
        const y = this.y * cosa - this.z * sina;
        const z = this.y * sina + this.z * cosa;
        return new Point3D(this.x, y, z);
      }

      rotateY(angle) {
        const rad = angle * (Math.PI / 180);
        const cosa = Math.cos(rad);
        const sina = Math.sin(rad);
        const z = this.z * cosa - this.x * sina;
        const x = this.z * sina + this.x * cosa;
        return new Point3D(x, this.y, z);
      }

      project(viewWidth, viewHeight, fov, viewDistance) {
        const factor = fov / (viewDistance + this.z);
        const x = this.x * factor + viewWidth / 2;
        const y = this.y * factor + viewHeight / 2;
        return { x, y, scale: factor };
      }
    }

    // Generate Sphere Vertices
    const points = [];
    const numPoints = 80;
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      points.push(new Point3D(x * sphereRadius, y * sphereRadius, z * sphereRadius));
    }

    // Particles (for starfield effect)
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedY: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.1
    }));

    // Animation Loop
    const render = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Particles
      particles.forEach(p => {
        p.y -= p.speedY;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = `rgba(0, 243, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Sphere Interactions & Auto Rotation
      const targetRotX = (y - window.innerHeight / 2) * 0.05;
      const targetRotY = (x - window.innerWidth / 2) * 0.05;
      rotationX += (targetRotX - rotationX) * 0.05;
      rotationY += (targetRotY - rotationY) * 0.05;

      ctx.strokeStyle = 'rgba(188, 19, 254, 0.15)';
      ctx.lineWidth = 1;

      const projectedPoints = [];
      points.forEach(p => {
        const rotated = p.rotateY(rotationY * 0.1).rotateX(rotationX * 0.1);
        const autoRotated = rotated.rotateY(performance.now() * 0.02);
        const proj = autoRotated.project(canvas.width, canvas.height, fov, viewDistance);
        if (proj.scale > 0) {
          projectedPoints.push(proj);
        }
      });

      // Draw Lines (Mesh)
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const d = Math.hypot(
            projectedPoints[i].x - projectedPoints[j].x,
            projectedPoints[i].y - projectedPoints[j].y
          );
          if (d < 50) {
            ctx.beginPath();
            ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
            ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Vertices (Glow Dots)
      projectedPoints.forEach(p => {
        const baseSize = 3 * p.scale;
        const glowSize = Math.max(0.1, baseSize);
        try {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize * 2);
          grad.addColorStop(0, 'rgba(0, 243, 255, 1)');
          grad.addColorStop(1, 'rgba(0, 243, 255, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        } catch (e) {
          ctx.fillStyle = 'rgba(0, 243, 255, 0.5)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [x, y]);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />
  );
};

export default Background3D;
