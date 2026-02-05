import { useState } from 'react';
import { Share2, Check, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/wedding';

const ClosingMessage = () => {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: weddingData.meta.title,
            text: weddingData.messages.shareText,
            url: weddingData.meta.url
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Share error:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(`${weddingData.messages.shareText}\n${weddingData.meta.url}`);
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            } catch (err) {
                console.error('Clipboard error:', err);
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-cream-100 overflow-hidden relative">
            {/* Decorative center heart icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] -z-10">
                <Heart className="w-[80vw] h-[80vw] text-rose-gold-500 fill-current" />
            </div>

            <motion.div
                className="w-full max-w-3xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {/* Message */}
                <div className="mb-16">
                    <Heart className="w-8 h-8 text-rose-gold-500/40 mx-auto mb-8" strokeWidth={1} />
                    <p className="font-serif text-3xl md:text-5xl text-charcoal-900 leading-[1.3] font-medium tracking-tight px-4">
                        "{weddingData.messages.closing}"
                    </p>
                </div>

                {/* Share Button */}
                <motion.div
                    className="relative inline-block"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-4 px-12 py-5
                       bg-rose-gold-500 text-cream-50 font-sans text-sm font-semibold
                       rounded-full shadow-2xl shadow-rose-gold-500/20
                       transition-all duration-300 hover:bg-rose-gold-600 uppercase tracking-[0.2em]"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4" strokeWidth={2} />
                                Link Copied
                            </>
                        ) : (
                            <>
                                <Share2 className="w-4 h-4" strokeWidth={2} />
                                Share Invitation
                            </>
                        )}
                    </button>
                </motion.div>

                {/* Final Footer */}
                <motion.div
                    className="mt-32 pt-12 border-t border-charcoal-900/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="font-serif text-2xl md:text-3xl text-charcoal-800/60 italic">
                        Until we see you there
                    </p>

                    <div className="mt-12 opacity-20">
                        <p className="font-sans text-[9px] uppercase tracking-widest">
                            Crafted for this special union
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ClosingMessage;
