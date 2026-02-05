import { motion } from 'framer-motion';
import { weddingData } from '../data/wedding';

const FamilyBlessings = () => {
    const { couple } = weddingData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="flex items-center justify-center px-6 py-32 bg-cream-100">
            <motion.div
                className="w-full max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <motion.div className="text-center mb-16 md:mb-24" variants={itemVariants}>
                    <span className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-rose-gold-600 block mb-4">
                        Honoring Tradition
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 font-medium">
                        With Love & Blessings from
                    </h2>
                    <div className="w-12 h-px bg-rose-gold-500/30 mx-auto mt-8" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
                    {/* Groom's Family Card */}
                    <motion.div
                        className="text-center p-10 border border-rose-gold-500/20 bg-white-card material-card shadow-premium rounded-[2rem] space-y-4"
                        variants={itemVariants}
                    >
                        <p className="font-sans text-xs uppercase tracking-widest text-charcoal-800/40 font-semibold mb-2">
                            Groom's Family
                        </p>
                        <div className="space-y-1">
                            <p className="font-serif text-2xl md:text-3xl text-charcoal-900 font-medium">
                                {couple.groom.parents.father}
                            </p>
                            <p className="font-serif text-xl text-rose-gold-500 italic">
                                &
                            </p>
                            <p className="font-serif text-2xl md:text-3xl text-charcoal-900 font-medium">
                                {couple.groom.parents.mother}
                            </p>
                        </div>
                    </motion.div>

                    {/* Bride's Family Card */}
                    <motion.div
                        className="text-center p-10 border border-rose-gold-500/20 bg-white-card material-card shadow-premium rounded-[2rem] space-y-4"
                        variants={itemVariants}
                    >
                        <p className="font-sans text-xs uppercase tracking-widest text-charcoal-800/40 font-semibold mb-2">
                            Bride's Family
                        </p>
                        <div className="space-y-1">
                            <p className="font-serif text-2xl md:text-3xl text-charcoal-900 font-medium">
                                {couple.bride.parents.father}
                            </p>
                            <p className="font-serif text-xl text-rose-gold-500 italic">
                                &
                            </p>
                            <p className="font-serif text-2xl md:text-3xl text-charcoal-900 font-medium">
                                {couple.bride.parents.mother}
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-20 md:mt-32 text-center"
                    variants={itemVariants}
                >
                    <p className="font-serif text-lg md:text-xl text-charcoal-800/60 max-w-lg mx-auto leading-relaxed">
                        Request the pleasure of your company to celebrate the union of Pruthvi & Akruthi
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FamilyBlessings;
