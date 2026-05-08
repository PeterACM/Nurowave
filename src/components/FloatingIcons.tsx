import React from 'react';
import { motion } from 'motion/react';
import { Brain, Activity, Zap, Waves, Microscope, HeartPulse, Sparkles, Binary } from 'lucide-react';

const icons = [
  { Icon: Brain, color: 'text-primary' },
  { Icon: Activity, color: 'text-tertiary' },
  { Icon: Zap, color: 'text-accent' },
  { Icon: Waves, color: 'text-primary' },
  { Icon: Microscope, color: 'text-slate-400' },
  { Icon: HeartPulse, color: 'text-tertiary' },
  { Icon: Sparkles, color: 'text-accent' },
  { Icon: Binary, color: 'text-primary' },
];

export const FloatingIcons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-[0.07]">
      {[...Array(20)].map((_, i) => {
        const { Icon, color } = icons[i % icons.length];
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 15 + Math.random() * 25;
        const delay = Math.random() * -20;
        const size = 16 + Math.random() * 24;

        return (
          <motion.div
            key={i}
            className={`absolute ${color}`}
            initial={{ 
                top: `${top}%`, 
                left: `${left}%`, 
                rotate: 0,
                opacity: 0 
            }}
            animate={{ 
                top: [`${top}%`, `${(top + 10) % 100}%`, `${top}%`],
                left: [`${left}%`, `${(left + 15) % 100}%`, `${left}%`],
                rotate: [0, 180, 360],
                opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
                duration, 
                repeat: Infinity, 
                delay,
                ease: "linear" 
            }}
            style={{ width: size, height: size }}
          >
            <Icon size={size} strokeWidth={1} />
          </motion.div>
        );
      })}
    </div>
  );
};
