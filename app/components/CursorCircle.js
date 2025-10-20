"use client";
import { useEffect, useState } from "react";

export default function CursorCircle() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none md:flex hidden fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-red-500 z-50 transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
      }}
    ></div>
  );
}
