import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';

const CoupleReveal = () => {
    const { couple, tagline, events } = weddingData;
    const primaryEvent = events[0];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Editorial ease
        }
    };

    return (
        <section className="flex flex-col items-center justify-center px-6 py-24 md:py-32 overflow-hidden w-full">
            <motion.div
                className="w-full max-w-md flex flex-col items-center" // Enforcing same max-width for names and cards
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Top Label */}
                <motion.span
                    variants={itemVariants}
                    className="text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-dusty-rose font-sans font-semibold mb-8"
                >
                    Are Getting Married
                </motion.span>

                {/* Names Block - Vertical Stack for Poster Feel */}
                <motion.div variants={itemVariants} className="w-full text-center space-y-0 mb-12">
                    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-charcoal font-medium tracking-tighter leading-[0.9]">
                        {couple.groom.name}
                    </h1>

                    <div className="py-2 md:py-4">
                        <span className="font-serif text-3xl md:text-4xl text-dusty-rose italic">
                            &
                        </span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-charcoal font-medium tracking-tighter leading-[0.9]">
                        {couple.bride.name}
                    </h1>
                </motion.div>

                {/* Event Summary Card - "Printed" Look */}
                <motion.div
                    className="w-full p-8 md:p-10 editorial-card rounded-[2rem] text-center"
                    variants={itemVariants}
                >
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal-light mb-4">
                        {primaryEvent.date}
                    </p>

                    <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-tight mb-2">
                        The Celebration
                    </h2>

                    <p className="font-serif text-lg text-dusty-rose italic">
                        {primaryEvent.venue.city}, {primaryEvent.venue.state}
                    </p>
                </motion.div>

                {/* Tagline as a footer to this poster */}
                <motion.p
                    className="mt-12 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-charcoal-light/60"
                    variants={itemVariants}
                >
                    {tagline}
                </motion.p>
            </motion.div>
        </section>
    );
};

export default CoupleReveal;
