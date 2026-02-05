import { useEffect } from 'react';
import { motion } from 'framer-motion';

const LetterLanding = ({ onComplete }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete?.();
        }, 4500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <section className="h-screen w-full flex flex-col items-center justify-between py-24 bg-cream-100 relative overflow-hidden select-none">
            {/* Background Paper Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

            {/* 1. TOP SPACE (For Balance) */}
            <div className="h-12" />

            {/* 2. CENTER: THE BESPOKE MONOGRAM */}
            <div className="relative flex flex-col items-center gap-8 z-10 w-full max-w-2xl px-6">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#C98F7B" />
                                <stop offset="100%" stopColor="#A35863" />
                            </linearGradient>
                        </defs>

                        <motion.path
                            d="M20 80 V25 C20 25 50 20 50 45 C50 70 20 65 20 65"
                            fill="none"
                            stroke="url(#gold-gradient)"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                        />

                        <motion.path
                            d="M30 80 L55 25 L80 80 M41 55 H69"
                            fill="none"
                            stroke="url(#gold-gradient)"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2.5, ease: "easeInOut", delay: 1.2 }}
                        />

                        <motion.path
                            d="M10 50 C10 50 30 45 50 50 C70 55 90 50 90 50"
                            fill="none"
                            stroke="#C98F7B"
                            strokeWidth="0.5"
                            opacity="0.3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 2.5 }}
                        />
                    </svg>

                    <motion.div
                        className="absolute inset-0 bg-rose-gold-500/5 blur-3xl rounded-full -z-10"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                    />
                </div>

                {/* Minimalist Intro Text (Avoids repetition with the Reveal section) */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 3.2 }}
                >
                    <p className="font-serif text-2xl md:text-3xl text-charcoal-400 font-light italic tracking-[0.1em]">
                        A Wedding Invitation
                    </p>
                    <div className="w-12 h-px bg-rose-gold-500/20 mx-auto mt-6" />
                </motion.div>
            </div>

            {/* 3. BOTTOM: SCROLL INDICATOR (Fixed position avoid overlap) */}
            <motion.div
                className="flex flex-col items-center gap-4 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4.2 }}
            >
                <p className="font-sans text-[9px] uppercase tracking-[0.5em] text-rose-gold-600 font-bold opacity-60">
                    Scroll to unveil
                </p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="w-px h-16 bg-gradient-to-b from-rose-gold-500/40 to-transparent"
                />
            </motion.div>
        </section>
    );
};

export default LetterLanding;
