import standupImg from '../assets/standup.png';

const WhatsOn = () => {
    const events = [
        {
            days: "MON WED FRI",
            title: "Live Music",
            description: "The home of live music in the UAE. From acoustic to Rock N Roll, we go live three nights a week.",
            image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            days: "TUESDAY",
            title: "Ladies Night",
            description: "Energetic ladies night in Al Barsha. Handcrafted cocktails and alternative hits all night.",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
        },
        {
            days: "THURSDAY",
            title: "Comedy Mic",
            description: "Unfiltered and raw. Weekly comedy bringing the best local talent to our stage.",
            image: standupImg,
        },
    ];

    return (
        <section id="whatson" className="py-20 bg-black border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="w-full h-px bg-primary/30 mb-10"></div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter text-center mb-16">
                    What's On
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="space-y-6 group">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                                <div className="absolute top-4 left-0 z-20 bg-primary px-4 py-1.5">
                                    <span className="text-black font-black text-[10px] uppercase tracking-widest">{event.days}</span>
                                </div>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{event.title}</h3>
                                <div className="w-12 h-0.5 bg-primary"></div>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {event.description}
                                </p>
                                <button className="text-primary font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Details <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-primary/30 mt-16"></div>
            </div>
        </section>
    );
};

export default WhatsOn;
