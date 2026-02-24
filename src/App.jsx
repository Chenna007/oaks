import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import VenueDeals from './components/VenueDeals';
import About from './components/About';
import Testimonials from './components/Testimonials';
import WeeklySchedule from './components/WeeklySchedule';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsOn from './components/WhatsOn';
import NeedToKnow from './components/NeedToKnow';
import Facilities from './components/Facilities';
import OffersTicker from './components/OffersTicker';

const App = () => {
  const [showFAB, setShowFAB] = useState(true);
  const reserveRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the 'Lock It In' section is visible, hide the floating bar
        setShowFAB(!entry.isIntersecting);
      },
      { threshold: 0.2 } // Hide when 20% of the section is visible
    );

    if (reserveRef.current) {
      observer.observe(reserveRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToReserve = () => {
    const element = document.querySelector('#reserve');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-primary selection:text-black overflow-x-hidden">
      <OffersTicker />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatsOn />
        <Facilities />
        <VenueDeals />
        <WeeklySchedule />
        <NeedToKnow />
        <Testimonials />
        <div ref={reserveRef}>
          <ReservationForm />
        </div>
      </main>

      <Footer />

      {/* Floating Action Bar (Thumb-Zone) */}
      <AnimatePresence>
        {showFAB && (
          <motion.nav
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-1/2 w-[calc(100%-2rem)] max-w-md bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-2.5 rounded-[2rem] flex gap-2.5 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: ["0 0 0 rgba(245,158,11,0)", "0 0 20px rgba(245,158,11,0.4)", "0 0 0 rgba(245,158,11,0)"]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={scrollToReserve}
              className="flex-[2] h-14 bg-[#f59e0b] text-black font-black uppercase italic tracking-wider rounded-2xl transition-all shadow-lg shadow-orange-500/20"
            >
              Reserve Table
            </motion.button>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/971508861827"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-14 bg-[#25D366] text-white flex items-center justify-center rounded-2xl transition-all shadow-lg shadow-green-500/20"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
