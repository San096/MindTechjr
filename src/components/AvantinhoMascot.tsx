import { motion } from 'motion/react';

interface AvantinhoMascotProps {
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export function AvantinhoMascot({ size = 'md', animate = true }: AvantinhoMascotProps) {
  const sizeMap = {
    sm: 40,
    md: 60,
    lg: 80,
  };

  const dimension = sizeMap[size];

  const MascotSVG = (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Glow effect */}
      <circle cx="50" cy="50" r="45" fill="url(#glow)" opacity="0.3" />
      
      {/* Body */}
      <ellipse cx="50" cy="55" rx="30" ry="35" fill="url(#bodyGradient)" />
      
      {/* Antennas */}
      <line x1="35" y1="20" x2="30" y2="10" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
      <line x1="65" y1="20" x2="70" y2="10" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
      <circle cx="30" cy="10" r="4" fill="#60a5fa" className="animate-pulse" />
      <circle cx="70" cy="10" r="4" fill="#60a5fa" className="animate-pulse" />
      
      {/* Eyes */}
      <ellipse cx="40" cy="45" rx="8" ry="12" fill="#1e293b" />
      <ellipse cx="60" cy="45" rx="8" ry="12" fill="#1e293b" />
      <circle cx="42" cy="43" r="3" fill="white" />
      <circle cx="62" cy="43" r="3" fill="white" />
      
      {/* Smile */}
      <path d="M 35 60 Q 50 70 65 60" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Arms */}
      <ellipse cx="20" cy="60" rx="8" ry="15" fill="url(#armGradient)" transform="rotate(-20 20 60)" />
      <ellipse cx="80" cy="60" rx="8" ry="15" fill="url(#armGradient)" transform="rotate(20 80 60)" />
      
      <defs>
        <radialGradient id="glow">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="armGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (!animate) {
    return MascotSVG;
  }

  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {MascotSVG}
    </motion.div>
  );
}
