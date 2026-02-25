import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight">
                            WE CREATE THE MOMENTS PEOPLE LIVE FOR.
                        </h2>

                        <a 
                          href="mailto:info@oaklivebar.com" 
                          className="text-lg text-zinc-400 hover:text-primary transition-colors block"
                        >
                            info@oaklivebar.com
                        </a>

                        <div className="flex gap-6">
                            <a 
                              href="https://www.instagram.com/oaklivebar_official/?hl=en" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>

                            <a 
                              href="https://www.facebook.com/oaklivebar/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Simple Message Section */}
                    <div className="flex flex-col justify-end lg:items-end">
                        <div className="text-left lg:text-right">
                            <h4 className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">
                                ESTABLISHED 2026
                            </h4>

                            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm ml-auto">
                                The ultimate neighbourhood hangout for live music, epic bites, and raw energy in the heart of Al Barsha.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 font-bold text-xs tracking-widest uppercase">

                    <p>2026 © Oak Live Group.</p>

                    <p>
                      Created by{" "}
                      <a
                        href="https://ckr-studios.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white border-b border-zinc-700 hover:border-white hover:text-zinc-200 transition duration-300"
                      >
                        ckrstudios
                      </a>
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
