import yayMeme from "@/assets/yay-meme.png";

interface SuccessModalProps {
  isOpen: boolean;
}

const SuccessModal = ({ isOpen }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-valentine-deep/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card rounded-3xl p-8 shadow-2xl max-w-md mx-4 animate-bounce-slow border-4 border-valentine-rose">
        <div className="text-center">
          <h2 className="text-5xl font-cursive text-valentine-pink mb-6 animate-pulse-heart">
            YAY! 🎉
          </h2>
          <img
            src={yayMeme}
            alt="YAY! Celebration meme"
            className="w-full rounded-2xl shadow-lg mb-6"
          />
          <p className="text-2xl font-cursive text-valentine-deep">
            I knew you'd say yes! 💕
          </p>
          <div className="mt-4 text-4xl">
            💖💖💖
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
