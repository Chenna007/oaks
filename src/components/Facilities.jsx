import React from 'react';
import { motion } from 'framer-motion';
import { Car, Accessibility, ShieldCheck, Coffee } from 'lucide-react';

const Facilities = () => {
    const items = [
        {
            title: "Valet Parking",
            description: "Seamless arrival with our dedicated professional valet team at your service.",
            icon: Car,
        },
        {
            title: "Accessible Access",
            description: "Full physical handicapped assistance and accessible facilities throughout the venue.",
            icon: Accessibility,
        },
        {
            title: "Safety & Security",
            description: "A secure environment with professional security staff ensuring your peace of mind.",
            icon: ShieldCheck,
        },
        {
            title: "Event Lounge",
            description: "Exclusive mezzanine space for private rituals, corporate events, and VIP gatherings.",
            icon: Coffee,
        },
    ];

    return (
        <section id="facilities" className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="w-full h-px bg-primary/20 mb-12"></div>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                        World Class <span className="text-primary italic">Facilities.</span>
                    </h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-primary/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(255,165,0,0.3)] transition-all">
                                <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors relative z-10">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed font-bold uppercase tracking-wider relative z-10 group-hover:text-zinc-400 transition-colors">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Facilities;
