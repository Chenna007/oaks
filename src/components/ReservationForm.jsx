import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '2',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add submission logic here
    };

    return (
        <section id="reserve" className="py-24 bg-zinc-950 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Content side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
                                Lock <br />It In.
                            </h2>
                            <div className="w-24 h-2 bg-primary"></div>
                            <p className="text-zinc-400 text-xl leading-relaxed max-w-md">
                                Don't leave your night to chance. Book your spot for the best live music experience in Dubai.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-white uppercase tracking-widest">
                                Priority Reservation
                            </h3>
                            <a
                                href="https://wa.me/971508861827"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest hover:scale-105 transition-all shadow-xl shadow-green-500/20 group"
                            >
                                <MessageSquare className="w-8 h-8 group-hover:animate-pulse" />
                                Book via WhatsApp
                            </a>
                            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">
                                Lightning fast response • 24/7 Support
                            </p>
                        </div>
                    </motion.div>

                    {/* Form side */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[3rem]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] block">Guest Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-zinc-900/50 border-b border-white/20 py-4 px-1 text-white focus:border-primary transition-colors outline-none font-bold"
                                        placeholder="E.G. JOHN DOE"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] block">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-zinc-900/50 border-b border-white/20 py-4 px-1 text-white focus:border-primary transition-colors outline-none font-bold"
                                        placeholder="+971 00 000 0000"
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] block">Date</label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full bg-zinc-900/50 border-b border-white/20 py-4 px-1 text-white focus:border-primary transition-colors outline-none font-bold appearance-none"
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] block">Guests</label>
                                    <select
                                        className="w-full bg-zinc-900/50 border-b border-white/20 py-4 px-1 text-white focus:border-primary transition-colors outline-none font-bold appearance-none cursor-pointer"
                                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(n => (
                                            <option key={n} value={n} className="bg-black text-white">{n} Guests</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-6 bg-[#f59e0b] text-black font-black uppercase italic tracking-[0.2em] rounded-2xl hover:bg-white transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-3"
                                >
                                    <Send className="w-5 h-5" />
                                    Request Booking
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReservationForm;
