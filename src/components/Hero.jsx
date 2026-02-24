import React from 'react';
import { ASSETS } from '../constants/assets';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={ASSETS.images.heroOverlay}
                    className="w-full h-full object-cover"
                >
                    <source src={ASSETS.videos.hero} type="video/mp4" />
                </video>
                {/* Aggressive Dark Overlay for Mobile Readability */}
                <div className="absolute inset-0 bg-black/70 md:bg-black/50 transition-colors" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-2 drop-shadow-2xl">
                    OAK LIVE BAR
                </h1>
                <p className="text-primary text-xl md:text-2xl font-bold tracking-widest uppercase">
                    Dubai's Premier Live Music Venue
                </p>
            </div>
        </section>
    );
};

export default Hero;
