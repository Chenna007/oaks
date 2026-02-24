import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, Zap } from 'lucide-react';

const OffersTicker = () => {
    const items = [
        "HAPPY HOUR - DAILY 1:30 PM TO 9:00 PM",
        "UP TO 50% OFF ON SELECTED DRINKS",
        "LUNCH DEALS STARTING FROM 45 AED",
        "SUNDAY BRUNCH WITH LIVE BBQ",
        "ROCK N ROLL VIBES ALL NIGHT LONG",
        "WEEKLY COMEDY EXTRAVAGANZA",
    ];

    // Duplicate for seamless scroll
    const scrollingItems = [...items, ...items];

    return (
        <div className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-xl py-2 overflow-hidden border-b border-white/5 z-[110]">
            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                }}
                className="flex whitespace-nowrap gap-12 items-center"
            >
                {scrollingItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <Flame className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-zinc-400 font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase italic">
                            {item}
                        </span>
                        <Star className="w-3 h-3 text-primary rotate-45" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default OffersTicker;
