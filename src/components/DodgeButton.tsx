import { useState, useRef, useCallback } from "react";

interface DodgeButtonProps {
  children: React.ReactNode;
}

const DodgeButton = ({ children }: DodgeButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = useCallback(() => {
    // Generate random position to dodge
    const maxX = 200;
    const maxY = 150;
    const newX = (Math.random() - 0.5) * 2 * maxX;
    const newY = (Math.random() - 0.5) * 2 * maxY;
    
    setPosition({ x: newX, y: newY });
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    handleMouseEnter();
  }, [handleMouseEnter]);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      className="px-4 py-2 text-xs bg-muted text-muted-foreground rounded-md border border-border hover:bg-muted/80 transition-all duration-200 select-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
    </button>
  );
};

export default DodgeButton;
