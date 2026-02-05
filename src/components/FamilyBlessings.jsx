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
        <section className="flex flex-col items-center justify-center px-6 py-24 w-full">
            <motion.div
                className="w-full max-w-md text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
                    <span className="font-sans text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-dusty-rose font-semibold block mb-6">
                        With Love From
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium tracking-tight">
                        The Families
                    </h2>
                </motion.div>

                <div className="space-y-8 md:space-y-12">
                    {/* Groom's Family Card - Editorial Style */}
                    <motion.div
                        className="p-8 md:p-10 editorial-card rounded-[2rem] space-y-4"
                        variants={itemVariants}
                    >
                        <p className="font-sans text-[0.65rem] uppercase tracking-widest text-charcoal-light/60 font-semibold mb-2">
                            Groom's Family
                        </p>
                        <div className="space-y-1">
                            <p className="font-serif text-2xl md:text-3xl text-charcoal font-medium">
                                {couple.groom.parents.father}
                            </p>
                            <div className="py-1">
                                <span className="font-serif text-lg text-dusty-rose italic">&</span>
                            </div>
                            <p className="font-serif text-2xl md:text-3xl text-charcoal font-medium">
                                {couple.groom.parents.mother}
                            </p>
                        </div>
                    </motion.div>

                    {/* Bride's Family Card - Editorial Style */}
                    <motion.div
                        className="p-8 md:p-10 editorial-card rounded-[2rem] space-y-4"
                        variants={itemVariants}
                    >
                        <p className="font-sans text-[0.65rem] uppercase tracking-widest text-charcoal-light/60 font-semibold mb-2">
                            Bride's Family
                        </p>
                        <div className="space-y-1">
                            <p className="font-serif text-2xl md:text-3xl text-charcoal font-medium">
                                {couple.bride.parents.father}
                            </p>
                            <div className="py-1">
                                <span className="font-serif text-lg text-dusty-rose italic">&</span>
                            </div>
                            <p className="font-serif text-2xl md:text-3xl text-charcoal font-medium">
                                {couple.bride.parents.mother}
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-20 md:mt-24 text-center"
                    variants={itemVariants}
                >
                    <p className="font-serif text-lg text-charcoal-light/80 max-w-xs mx-auto leading-relaxed italic">
                        Request the pleasure of your company to celebrate the union of Pruthvi & Akruthi
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default FamilyBlessings;
