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

const CountdownUnit = ({ label, value, index }) => {
    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="relative">
                <span className="font-serif text-5xl md:text-7xl text-charcoal font-medium tracking-tight leading-none">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="mt-4 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-dusty-rose font-semibold">
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
        <section className="flex flex-col items-center justify-center px-6 py-32 w-full">
            <div className="w-full max-w-4xl text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8 }}
                    variants={itemVariants}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="font-sans text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-dusty-rose font-semibold block mb-6">
                        The Celebration Begins In
                    </span>
                    {/* Minimalist Divider */}
                    <div className="w-px h-16 bg-gradient-to-b from-charcoal/0 via-charcoal/20 to-charcoal/0 mx-auto" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-x-24 gap-y-16">
                    <CountdownUnit label="Days" value={timeLeft.days} index={0} />
                    <CountdownUnit label="Hours" value={timeLeft.hours} index={1} />
                    <CountdownUnit label="Minutes" value={timeLeft.minutes} index={2} />
                    <CountdownUnit label="Seconds" value={timeLeft.seconds} index={3} />
                </div>

                <motion.div
                    className="mt-24 flex items-center justify-center gap-4 text-charcoal-light/40"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em]">
                        March 12, 2026
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
