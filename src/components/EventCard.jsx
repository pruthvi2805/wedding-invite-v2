import { MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
    const illustrationPath = event.id === 'wedding'
        ? '/images/wedding_couple.png'
        : '/images/reception_couple.png';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section
            className="flex items-center justify-center px-6 py-20 md:py-32 bg-cream-100"
        >
            <motion.div
                className="w-full max-w-2xl text-center relative"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Event Title */}
                <motion.h2
                    className="font-serif text-4xl md:text-6xl text-charcoal-900 mb-6 md:mb-10 tracking-tight"
                    variants={itemVariants}
                >
                    {event.displayType}
                </motion.h2>

                {/* Illustration Header */}
                <motion.div
                    className="flex justify-center mb-10"
                    variants={itemVariants}
                >
                    <div className="relative">
                        <div className="absolute -inset-6 bg-rose-gold-500/5 blur-2xl rounded-full" />
                        <motion.img
                            src={illustrationPath}
                            alt="Event Illustration"
                            className="w-44 h-44 md:w-56 md:h-56 object-contain relative z-10"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>

                {/* Temporal Details */}
                <motion.div className="space-y-2 mb-10" variants={itemVariants}>
                    <div className="flex items-center justify-center gap-2 text-rose-gold-600 mb-2">
                        <div className="w-8 h-px bg-current opacity-20" />
                        <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold">
                            Save the Date
                        </span>
                        <div className="w-8 h-px bg-current opacity-20" />
                    </div>
                    <p className="font-serif text-2xl md:text-4xl text-charcoal-800">
                        {event.date}
                    </p>
                    <div className="flex items-center justify-center gap-3 text-rose-gold-600 mt-4">
                        <Clock className="w-5 h-5" strokeWidth={2} />
                        <p className="font-sans text-lg md:text-xl font-normal tracking-wide">
                            {event.time}
                        </p>
                    </div>
                </motion.div>

                {/* Venue Details Card */}
                <motion.div
                    className="mb-12 p-10 border border-rose-gold-500/20 bg-white-card material-card shadow-premium rounded-[2rem]"
                    variants={itemVariants}
                >
                    <p className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-4 font-medium tracking-tight">
                        {event.venue.name}
                    </p>
                    <div className="w-8 h-px bg-rose-gold-500/20 mx-auto mb-4" />
                    <p className="font-sans text-base md:text-lg text-charcoal-800/60 font-medium max-w-sm mx-auto leading-relaxed">
                        {event.venue.fullAddress}
                    </p>
                </motion.div>

                {/* Action Button */}
                <motion.div variants={itemVariants}>
                    <a
                        href={event.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-10 py-4
                       bg-charcoal-900 text-cream-50 font-sans text-sm font-medium
                       rounded-full overflow-hidden transition-all duration-500
                       hover:shadow-[0_20px_40px_rgba(44,44,44,0.2)]"
                    >
                        <div className="absolute inset-0 bg-rose-gold-600 translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                        <MapPin className="relative w-4 h-4" strokeWidth={1.5} />
                        <span className="relative z-10 uppercase tracking-widest">Get Directions</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default EventCard;
