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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <section className="flex items-center justify-center px-6 py-32 bg-cream-100 overflow-hidden">
            <motion.div
                className="w-full max-w-4xl text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Decorative Element */}
                <motion.div variants={itemVariants} className="mb-12">
                    <div className="w-16 h-px bg-rose-gold-500/20 mx-auto" />
                </motion.div>

                {/* Names Section */}
                <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                    <h1 className="font-serif text-6xl md:text-9xl font-semibold tracking-tighter text-charcoal-900 leading-none">
                        {couple.groom.name}
                    </h1>

                    <div className="flex items-center justify-center gap-6 py-2">
                        <div className="h-px flex-1 bg-rose-gold-500/10 max-w-[40px] md:max-w-[80px]" />
                        <span className="font-serif text-4xl md:text-6xl text-rose-gold-500 italic">
                            &
                        </span>
                        <div className="h-px flex-1 bg-rose-gold-500/10 max-w-[40px] md:max-w-[80px]" />
                    </div>

                    <h1 className="font-serif text-6xl md:text-9xl font-semibold tracking-tighter text-charcoal-900 leading-none">
                        {couple.bride.name}
                    </h1>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    className="mt-12 font-serif text-xl md:text-3xl text-charcoal-800/80 font-light italic tracking-wide"
                    variants={itemVariants}
                >
                    {tagline}
                </motion.p>

                {/* Event Summary */}
                <motion.div
                    className="mt-16 inline-block px-10 py-8 border border-rose-gold-500/20 bg-white-card material-card shadow-premium rounded-3xl"
                    variants={itemVariants}
                >
                    <p className="font-sans text-sm md:text-base uppercase tracking-[0.3em] text-charcoal-800 font-medium">
                        {primaryEvent.date}
                    </p>
                    <div className="h-px w-8 bg-rose-gold-500/30 mx-auto my-4" />
                    <p className="font-serif text-lg md:text-xl text-rose-gold-600 italic">
                        {primaryEvent.venue.city}, {primaryEvent.venue.state}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CoupleReveal;
