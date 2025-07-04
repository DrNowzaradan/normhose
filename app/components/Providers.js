"use client";

import { ParallaxProvider } from 'react-scroll-parallax';

export function ParallaxWrapper({ children }) {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  );
}