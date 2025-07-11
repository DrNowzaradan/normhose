"use client";

import { useParallax } from 'react-scroll-parallax';

const Bubble = ({ speed, top, left, size }) => {
  const { ref } = useParallax({ speed: speed });

  return (
    <div
      ref={ref}
      className="absolute bg-[#ff8900] rounded-full filter blur-[120px] opacity-30"
      style={{
        top: top,
        left: left,
        width: size,
        height: size,
      }}
    />
  );
};

export default Bubble;