"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: false, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: "#ff0000" },
          links: { enable: true, color: "#ff0000", distance: 150 },
          move: { enable: true, speed: 2 },
          number: { value: 60 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 5 } },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
