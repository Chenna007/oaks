import React, { useState, useEffect } from 'react';
import { Search, Instagram, Facebook, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'ABOUT US', href: '#about' },
        { name: 'VENUES', href: '#deals' },
        { name: 'WEEKLY EVENTS', href: '#schedule' },
        { name: 'REVIEWS', href: '#testimonials' },
        { name: 'RESERVATIONS', href: '#reserve' },
    ];

    const facebookUrl = "https://www.facebook.com/oaklivebar/";

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // height of navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed left-0 w-full z-100 transition-all duration-300 ${scrolled ? 'top-0 bg-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'top-8 bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-3 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 relative">
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="Oak Live Bar Logo"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8 ml-auto mr-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-zinc-300 hover:text-primary font-black text-xs tracking-widest transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
                        <a href="https://www.instagram.com/oaklivebar_official/?hl=en" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-primary transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                    <a
                        href="#reserve"
                        onClick={(e) => scrollToSection(e, '#reserve')}
                        className="bg-[#f59e0b] hover:bg-white text-black font-black uppercase text-[10px] tracking-widest px-6 py-2.5 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                    >
                        Reserve Table
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-zinc-950 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-white font-black text-xl tracking-tighter uppercase italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-4 pt-6 border-t border-white/5">
                                <a href="https://www.instagram.com/oaklivebar_official/?hl=en" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-6 h-6 text-[#f59e0b]" />
                                </a>
                                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                                    <Facebook className="w-6 h-6 text-[#f59e0b]" />
                                </a>
                            </div>
                            <a
                                href="#reserve"
                                onClick={(e) => scrollToSection(e, '#reserve')}
                                className="bg-[#f59e0b] text-black font-black uppercase text-center py-4 tracking-widest text-sm mt-4 italic shadow-lg shadow-orange-500/20"
                            >
                                Reserve Table
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
