import React from 'react';
import { ASSETS } from '../constants/assets';

const VenueDeals = () => {
    const deals = [
        {
            title: "Happy Hour",
            time: "Daily 1:30 PM - 9:00 PM",
            image: ASSETS.images.happyHour,
            accent: "Drinks"
        },
        {
            title: "Lunch Deals",
            time: "Daily 1:00 PM - 5:00 PM",
            image: ASSETS.images.lunchDeals,
            accent: "Dining"
        },
        {
            title: "Sunday Brunch",
            time: "1:00 PM - 9:30 PM",
            image: ASSETS.images.sundayBrunch,
            accent: "Party"
        },
    ];

    return (
        <section id="deals" className="py-24 bg-zinc-950 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="h-px w-full bg-primary/20 mb-8"></div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">
                            Venue <br />
                            <span className="text-primary">Deals.</span>
                        </h2>
                        <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-xs">Premium Offers Daily</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {deals.map((deal, index) => (
                        <div
                            key={index}
                            className="group relative h-[500px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2"
                        >
                            <img
                                src={deal.image}
                                alt={deal.title}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                            <div className="absolute inset-0 p-10 flex flex-col justify-between border border-white/5 hover:border-primary/30 rounded-[2rem] transition-colors">
                                <div className="flex justify-between items-start">
                                    <div className="bg-[#f59e0b] text-black font-black px-4 py-1 uppercase text-[10px] tracking-widest">
                                        {deal.accent}
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        →
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-4xl font-black text-white uppercase tracking-tight leading-none group-hover:text-primary transition-colors drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                                        {deal.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
                                    <p className="text-zinc-300 font-bold uppercase text-[11px] tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {deal.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VenueDeals;
