"use client";

import { useParallax } from 'react-scroll-parallax';

// Baloncukların özelliklerini bir array içinde tanımlayalım.
// Yeni baloncuk eklemek veya mevcutları değiştirmek çok kolay olacak.
const bubbles = [
  { top: '10%', left: '10%', size: '15rem', speed: -15 }, 
  { top: '20%', left: '80%', size: '20rem', speed: -5 },
  { top: '20%', left: '5%', size: '20rem', speed: -5 },  
  { top: '70%', left: '5%', size: '12rem', speed: 5 },   
  { top: '80%', left: '60%', size: '18rem', speed: 10 }, 
  { top: '50%', left: '45%', size: '10rem', speed: -10 },
  { top: '40%', left: '90%', size: '14rem', speed: 15 }, 
];

const BackgroundBubbles = () => {
  return (
    // Bu ana div, tüm ekranı kaplayacak, sabit kalacak ve içeriğin arkasında duracak.
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {bubbles.map((bubble, index) => {
        // Her baloncuk için farklı bir parallax hızıyla useParallax hook'unu kullanıyoruz.
        const { ref } = useParallax({ speed: bubble.speed });
        
        return (
          <div
            key={index}
            ref={ref}
            className="absolute bg-[#ff8900] rounded-full filter blur-[120px] opacity-30"
            style={{
              top: bubble.top,
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundBubbles;