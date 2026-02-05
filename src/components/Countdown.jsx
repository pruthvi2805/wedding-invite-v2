import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/wedding';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const CountdownUnit = ({ label, value, max, index }) => {
    // Calculate progress for the circular stroke
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / max) * circumference;

    return (
        <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
                {/* Background Track */}
                <svg className="w-full h-full -rotate-90">
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        stroke="#EBE5D9"
                        strokeWidth="1.5"
                        className="opacity-40"
                    />
                    {/* Progress Stroke */}
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        stroke="#B76E79"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{
                            strokeDasharray: circumference,
                        }}
                    />
                </svg>

                {/* Value Display */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-3xl md:text-4xl font-semibold text-charcoal-900 tracking-tighter">
                        {String(value).padStart(2, '0')}
                    </span>
                </div>
            </div>

            {/* Label */}
            <span className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-rose-gold-600 font-medium">
                {label}
            </span>
        </motion.div>
    );
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(null);
    const targetDate = new Date(weddingData.countdown.targetDate).getTime();

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) return null;

    return (
        <section className="flex items-center justify-center px-6 py-32 bg-cream-100 overflow-hidden">
            <div className="w-full max-w-5xl text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8 }}
                    variants={itemVariants}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="font-serif text-xl md:text-2xl text-rose-gold-500 italic block mb-4">
                        With Love & Anticipation
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-charcoal-900 font-medium tracking-tight">
                        The Celebration Begins In
                    </h2>
                    <div className="w-16 h-px bg-charcoal-900/10 mx-auto mt-8" />
                </motion.div>

                <motion.div
                    className="p-10 md:p-16 border border-rose-gold-500/20 bg-white-card material-card shadow-premium rounded-[3rem]"
                    variants={itemVariants}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        <CountdownUnit label="Days" value={timeLeft.days} max={365} index={0} />
                        <CountdownUnit label="Hours" value={timeLeft.hours} max={24} index={1} />
                        <CountdownUnit label="Minutes" value={timeLeft.minutes} max={60} index={2} />
                        <CountdownUnit label="Seconds" value={timeLeft.seconds} max={60} index={3} />
                    </div>
                </motion.div>

                <motion.div
                    className="mt-20 flex items-center justify-center gap-4 text-charcoal-800/40"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="w-8 h-px bg-current" />
                    <p className="font-sans text-[10px] uppercase tracking-[0.5em]">
                        Until March 12, 2026
                    </p>
                    <div className="w-8 h-px bg-current" />
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
