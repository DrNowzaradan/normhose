"use client";

// Yeni oluşturduğumuz Bubble bileşenini import ediyoruz
import Bubble from './Bubble';

const bubbles = [
  { top: '10%', left: '10%', size: '15rem', speed: -15 },
  { top: '20%', left: '80%', size: '20rem', speed: -5 },
  { top: '70%', left: '5%', size: '12rem', speed: 5 },
  { top: '80%', left: '60%', size: '18rem', speed: 10 },
  { top: '50%', left: '45%', size: '10rem', speed: -10 },
  { top: '40%', left: '90%', size: '14rem', speed: 15 },
];

const BackgroundBubbles = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {bubbles.map((bubble, index) => (
        // Her bir veri için Bubble bileşenini render ediyoruz ve verileri prop olarak geçiyoruz.
        <Bubble 
          key={index} 
          speed={bubble.speed}
          top={bubble.top}
          left={bubble.left}
          size={bubble.size}
        />
      ))}
    </div>
  );
};

export default BackgroundBubbles;