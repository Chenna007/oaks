import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-black px-6">
            <div className="max-w-6xl mx-auto">
                <div className="w-full h-px bg-primary/40 mb-12"></div>

                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase leading-tight tracking-tighter max-w-4xl">
                        Experience the rhythm of the night. Electrifying live performances, unfiltered comedy, and raw rock energy.
                    </h2>

                    <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-widest italic">
                        Oak Live Bar - Al Barsha, Dubai
                    </h3>

                    <div className="w-full h-px bg-primary/40 my-8"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400">
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                                Looking for the OG party bar in Al Barsha, Dubai? Look no further than Oak Live Bar – the ultimate neighbourhood hangout for locals.
                            </p>
                            <p className="text-lg leading-relaxed">
                                As a premier live music destination, our reputation for raw, unfiltered energy is well-deserved, and we're proud to offer some of the best alternative rock and metal experiences in the city.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                Our bar is home to Dubai's most electrifying live performances, along with some epic handcrafted cocktails that will leave you feeling like a million bucks. With two bars spread over two levels, there's always plenty of space for all your friends to enjoy the bangin' vibes, great times, and finger-lickin' food that we're known for.
                            </p>
                            <p className="text-lg leading-relaxed font-bold text-zinc-100 italic">
                                Whether you're looking for a place to unwind after a long day at work or party the night away with your besties, Oak Live Bar has everything you need to make your night unforgettable.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-primary/40 mt-16"></div>
            </div>
        </section>
    );
};

export default About;
