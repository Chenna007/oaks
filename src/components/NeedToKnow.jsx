import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Shirt, UserCheck, Clock, MapPin, ChevronDown } from 'lucide-react';

const NeedToKnow = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const items = [
        {
            name: "View Menu",
            icon: Utensils,
            content: "Explore our legendary menu featuring epic bites, signature handcrafted cocktails, and the best gastropub classics in Dubai.",
            cta: "Open Menu Link",
            link: "#"
        },
        {
            name: "Dress Code",
            icon: Shirt,
            content: "Smart Casual: No hats, no sportswear, no beachwear and no trainers. Sorry lads – we do not allow sleeveless shirts, open-toed shoes or sandals. Club colours T-shirts & flip-flops are allowed during the EUROS."
        },
        {
            name: "Age Policy",
            icon: UserCheck,
            content: "Oak Live Bar is a strictly 21+ Venue. Original physical ID is required for entry."
        },
        {
            name: "Opening Hours",
            icon: Clock,
            content: (
                <div className="space-y-2">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                        <div key={day} className="flex justify-between text-sm md:text-base border-b border-white/5 pb-1">
                            <span className="font-bold uppercase tracking-wider">{day}</span>
                            <span className="text-primary font-black">1:30 PM – 3 AM</span>
                        </div>
                    ))}
                </div>
            )
        },
        {
            name: "Location",
            icon: MapPin,
            content: "Courtyard by Marriott Hotel - Al Barsha Rd - behind Mall Of Emirates - Al Barsha First - Al Barsha - Dubai.",
            cta: "Open Google Maps",
            link: "https://maps.app.goo.gl/..."
        },
    ];

    return (
        <section id="needtoknow" className="py-24 bg-black px-6">
            <div className="max-w-4xl mx-auto">
                <div className="w-full h-px bg-primary/40 mb-12"></div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter text-center mb-16">
                    Need To Know
                </h2>

                <div className="flex flex-col border-t border-primary/40">
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-primary/40">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="group w-full flex items-center justify-between py-8 transition-all hover:bg-white/5 px-4 text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <item.icon className="w-6 h-6 md:w-10 md:h-10 text-primary" />
                                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-6 h-6 md:w-10 md:h-10 text-white group-hover:text-primary transition-colors" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-12 pt-4 space-y-6">
                                            <div className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                                                {item.content}
                                            </div>
                                            {item.cta && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block border-2 border-primary px-8 py-3 text-primary font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-black transition-all"
                                                >
                                                    {item.cta}
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NeedToKnow;
