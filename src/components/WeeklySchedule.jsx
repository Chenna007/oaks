import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants/assets';

const WeeklySchedule = () => {
    const days = [
        { day: "Monday", event: "Acoustic Raw", image: ASSETS.images.schedule.monday },
        { day: "Tuesday", event: "Ladies Night", image: ASSETS.images.schedule.tuesday },
        { day: "Wednesday", event: "Comedy Mic", image: ASSETS.images.schedule.wednesday },
        { day: "Thursday", event: "Classic Rock", image: ASSETS.images.schedule.thursday },
        { day: "Friday", event: "Metal Night", image: ASSETS.images.schedule.friday },
        { day: "Saturday", event: "Live Bands", image: ASSETS.images.schedule.saturday },
        { day: "Sunday", event: "Alternative Hits", image: ASSETS.images.schedule.sunday },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="schedule" className="py-16 bg-black border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="w-full h-px bg-primary/20 mb-8"></div>
                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white">
                        Weekly Events
                    </h2>
                </div>
                <div className="w-full h-px bg-primary/20 mb-12"></div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {days.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative h-[320px] overflow-hidden rounded-2xl cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.day}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    {item.day}
                                </span>
                                <h3 className="text-white text-2xl font-black uppercase tracking-tighter transform group-hover:-translate-y-1 transition-transform duration-500">
                                    {item.event}
                                </h3>
                                <div className="w-0 group-hover:w-full h-0.5 bg-primary mt-2 transition-all duration-500"></div>
                            </div>

                            {/* Corner Tag */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-8 h-8 border-t border-r border-primary"></div>
                            </div>
                        </motion.div>
                    ))}

                    {/* View Calendar Card */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative h-[320px] overflow-hidden rounded-2xl border-2 border-dashed border-zinc-900 flex flex-col items-center justify-center text-center p-6 hover:border-primary/50 transition-all cursor-pointer bg-zinc-900/10"
                    >
                        <h3 className="text-white text-2xl font-black uppercase italic tracking-tight mb-3">
                            Full Calendar
                        </h3>
                        <p className="text-zinc-600 font-bold uppercase text-[9px] tracking-[0.2em] mb-6">
                            Explore upcoming specials
                        </p>
                        <button className="bg-primary/90 text-black font-black uppercase px-6 py-2.5 tracking-widest text-[10px] hover:bg-white transition-all">
                            View List
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WeeklySchedule;
