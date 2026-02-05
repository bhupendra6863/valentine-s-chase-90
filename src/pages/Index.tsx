import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import YesButton from "@/components/YesButton";
import DodgeButton from "@/components/DodgeButton";
import SuccessModal from "@/components/SuccessModal";

const Index = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Big Heart */}
        <div className="text-8xl mb-8 animate-float">
          💝
        </div>
        
        {/* Question */}
        <h1 className="text-4xl md:text-6xl font-cursive text-valentine-deep mb-4 animate-pulse-heart">
          Will you be my
        </h1>
        <h2 className="text-5xl md:text-7xl font-cursive text-valentine-pink mb-12">
          Valentine? 💕
        </h2>
        
        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <YesButton onClick={handleYesClick} />
          <DodgeButton>no</DodgeButton>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} />
    </div>
  );
};

export default Index;
