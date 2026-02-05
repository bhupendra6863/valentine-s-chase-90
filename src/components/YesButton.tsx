interface YesButtonProps {
  onClick: () => void;
}

const YesButton = ({ onClick }: YesButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative px-16 py-6 text-3xl font-bold bg-primary text-primary-foreground rounded-full shadow-[var(--heart-shadow)] hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-pulse-heart"
    >
      <span className="relative z-10">YES! 💕</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-valentine-pink via-valentine-rose to-valentine-pink opacity-0 hover:opacity-20 transition-opacity duration-300" />
    </button>
  );
};

export default YesButton;
