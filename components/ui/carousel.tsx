"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";
import { FlipCard } from "./FlipCard";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  videoUrl?: string;
  details: string;
  src: string;
  button: string;
}

interface SlideProps {
  slide: Project;
  index: number;
  current: number;
}

const Slide = ({ slide, index, current }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!slideRef.current) return;
    const rect = slideRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Smaller divisor for subtler movement
    setOffsetX(x / 15);
    setOffsetY(y / 15);
  };

  const handleMouseLeave = () => {
    setOffsetX(0);
    setOffsetY(0);
  };

  const { src, title, description, details } = slide;

  const frontContent = (
    <div
      className="relative w-full h-full"
      style={{
        transform: current === index ? `scale(1.05)` : "scale(1)",
        transition: "transform 0.3s ease",
        cursor: current === index ? "auto" : "default",
      }}
      onMouseMove={current === index ? handleMouseMove : undefined}
      onMouseLeave={current === index ? handleMouseLeave : undefined}
    >
      <div
        className="absolute inset-0 bg-[#1D1F2F] rounded-[1%] flex flex-col items-center justify-center text-white text-center overflow-hidden"
        style={{
          userSelect: "none",
          transform: `translateX(${offsetX}px) translateY(${offsetY}px) translateZ(30px)`,
          transition: "transform 0.3s ease",
        }}
      >
        <img
        className="absolute w-[100%] h-[100%] object-cover overflow-y-hidden"
        alt={title}
        src={src}
        loading="eager"
        decoding="sync"
        style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translateX(${offsetX / 2}px) translateY(${offsetY / 2}px) scale(1.1)`,
            opacity: current === index ? 1 : 0.5,
            transition: "transform 0.3s ease",
        }}
        />

        {current === index && (
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-1000 overflow-x-hidden" />
        )}
        <article
          className="relative p-[4vmin] z-10"
          style={{
            transform: `translateX(${offsetX / 3}px) translateY(${offsetY / 3}px)`,
            transition: "transform 0.3s ease",
          }}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-6">
            {title}
          </h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg px-10">{description}</p>
        </article>
      </div>
    </div>
  );

    const backContent = (
    <div className="flex flex-col items-center justify-start h-full w-full overflow-y-auto text-center">
        <h2 className="text-2xl font-bold mb-4">{title} Details</h2>

        {slide.videoUrl && slide.videoUrl.includes("youtube.com") ? (
          <iframe
            src={`https://www.youtube.com/embed/${new URL(slide.videoUrl).searchParams.get("v")}`}
            title={title}
            className="w-full max-h-[600px] rounded-lg mb-4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={slide.videoUrl}
            controls
            className="w-full max-h-[400px] rounded-lg mb-4"
            preload="metadata"
          />
        )}

        <p className="text-sm md:text-base">{details}</p>
    </div>
    );


  return (
    <li
      ref={slideRef}
      className={`relative w-[70vmin] h-[70vmin] mx-[4vmin] z-10 perspective-[1000px]
      ${current === index ? "opacity-100" : "opacity-50 pointer-events-none"}`}
    >
      <FlipCard frontContent={frontContent} backContent={backContent} />
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: Project[];
}

export function Carousel({ slides }: CarouselProps) {
  const middleIndex = slides.length > 1 ? Math.floor(slides.length / 2) : 0;
  const [current, setCurrent] = useState(middleIndex);
  const id = useId();

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };
  const slideWidth = 70;

  return (
    <motion.div
          className=""
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        <div
            className="w-[70vmin] h-[70vmin] overflow-hidden"
            aria-labelledby={`carousel-heading-${id}`}
            >
            <ul
                className="absolute flex transition-transform duration-1000 ease-in-out"
                style={{
                width: `${slideWidth * slides.length}vmin`,
                transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}
            >
                {slides.map((slide, index) => (
                <Slide key={index} slide={slide} index={index} current={current} />
                ))}
            </ul>
        </div>
        <div className="flex justify-center pt-8">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </motion.div>  
  );
}
