import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ASSETS } from '../constants/assets';

const Testimonials = () => {
    // Double the reviews to ensure we have enough width for a seamless loop
    const reviews = [...ASSETS.reviews, ...ASSETS.reviews];

    return (
        <section id="testimonials" className="py-16 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                {/* Google Rating Header */}
                <div className="inline-flex items-center gap-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 px-5 py-2.5 rounded-full mb-6">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                    </div>
                    <span className="text-white font-black uppercase text-[10px] tracking-widest">
                        4.4 Stars from 207+ Reviews
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                    Guest Reviews
                </h2>
            </div>

            {/* Seamless Marquee Container */}
            <div className="relative flex overflow-hidden py-6">
                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 80, // Slightly faster marquee
                            ease: "linear",
                        },
                    }}
                    className="flex gap-4 whitespace-nowrap"
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[280px] md:w-[450px] bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col justify-between group hover:border-primary/30 transition-all"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-current" />
                                    ))}
                                </div>
                                <p className="text-white text-base md:text-xl font-bold uppercase italic leading-tight whitespace-normal line-clamp-3">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-6 border-t border-white/5 pt-5">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-zinc-800">
                                    <img
                                        src={review.photo}
                                        alt={review.name}
                                        className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-black uppercase text-sm tracking-wider">
                                        {review.name}
                                    </h4>
                                    <span className="text-primary font-bold text-[9px] uppercase tracking-[0.2em]">
                                        Verified Fan
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default Testimonials;
