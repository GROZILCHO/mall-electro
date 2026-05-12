import React from "react";

interface AnimatedPatternProps {
  speed?: number;
}

const AnimatedPattern: React.FC<AnimatedPatternProps> = ({ speed = 0.6 }) => {
  const durationClass = speed <= 0.3 ? "animated-pattern-fast" : speed >= 1 ? "animated-pattern-slow" : "animated-pattern";

  return (
    <svg
      className={`absolute inset-0 h-full w-full opacity-[0.08] animate-fade-in ${durationClass}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8AA3C0" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
};

export default AnimatedPattern;
