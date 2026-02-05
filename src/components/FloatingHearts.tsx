import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
      size: 15 + Math.random() * 25,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-valentine-pink opacity-60"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `heartFloat ${heart.animationDuration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
