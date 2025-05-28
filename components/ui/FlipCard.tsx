import { useState } from "react";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export function FlipCard({ frontContent, backContent }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className="w-full h-full overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
        className="absolute w-full h-full backface-hidden overflow-hidden rounded-lg"
        style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
        }}
        >
        <div className="w-full h-full scale-[1.]">
            {frontContent}
        </div>

        <button
            onClick={handleFlip}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 overflow-hidden cursor-pointer"
        >
            View Project
        </button>
        </div>


        {/* Back Side */}
        <div
            className="absolute bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-600 w-full h-full backface-hidden overflow-hidden rounded-lg"
            style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
            }}
            >
                <div className="w-full h-full text-white p-6 flex flex-col justify-start items-center overflow-y-auto">
                    {backContent}
                    <button
                    onClick={handleFlip}
                    className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 cursor-pointer"
                    >
                    Back
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
