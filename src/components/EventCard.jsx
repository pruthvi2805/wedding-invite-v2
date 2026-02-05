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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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
                {/* Event Title Block */}
                <motion.div variants={itemVariants} className="mb-10">
                    <span className="font-sans text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-dusty-rose font-semibold block mb-4">
                        Join Us For
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-charcoal font-medium tracking-tight">
                        {event.displayType}
                    </h2>
                </motion.div>

                {/* Illustration - Free Floating */}
                <motion.div
                    className="flex justify-center mb-12"
                    variants={itemVariants}
                >
                    <motion.img
                        src={illustrationPath}
                        alt="Event Illustration"
                        className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-xl" // Subtle drop shadow instead of blur blob
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                {/* Unified Editorial Detail Card */}
                <motion.div
                    className="p-10 editorial-card rounded-[2rem] space-y-8"
                    variants={itemVariants}
                >
                    {/* Date & Time */}
                    <div className="space-y-2">
                        <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light/60 font-semibold">
                            When
                        </p>
                        <p className="font-serif text-3xl text-charcoal font-medium">
                            {event.date}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-dusty-rose">
                            <Clock className="w-4 h-4" />
                            <p className="font-sans text-sm tracking-wide font-medium">
                                {event.time}
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-charcoal/5" />

                    {/* Venue */}
                    <div className="space-y-2">
                        <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light/60 font-semibold">
                            Where
                        </p>
                        <p className="font-serif text-2xl text-charcoal font-medium leading-tight">
                            {event.venue.name}
                        </p>
                        <p className="font-serif text-lg text-charcoal-light italic">
                            {event.venue.fullAddress}
                        </p>
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                        <a
                            href={event.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-charcoal text-beige-100 font-sans text-xs uppercase tracking-widest rounded-full hover:bg-dusty-rose transition-colors duration-300"
                        >
                            <MapPin className="w-3 h-3" />
                            <span>Get Directions</span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default EventCard;
