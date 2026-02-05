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
        <section className="min-h-screen flex items-center justify-center px-6 py-24 w-full relative">
            <motion.div
                className="w-full max-w-3xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {/* Message */}
                <div className="mb-16">
                    <p className="font-serif text-3xl md:text-5xl text-charcoal leading-[1.3] font-medium tracking-tight px-4 italic">
                        "{weddingData.messages.closing}"
                    </p>
                </div>

                {/* Share Button - Elegant Pill */}
                <motion.div
                    className="relative inline-block"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-4 px-10 py-5
                       bg-dusty-rose text-beige-100 font-sans text-xs font-semibold
                       rounded-full
                       transition-all duration-500 hover:bg-dusty-rose-light uppercase tracking-[0.2em]"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4" strokeWidth={1.5} />
                                Link Copied
                            </>
                        ) : (
                            <>
                                <Share2 className="w-4 h-4" strokeWidth={1.5} />
                                Share Invitation
                            </>
                        )}
                    </button>
                </motion.div>

                {/* Final Footer */}
                <motion.div
                    className="mt-32 pt-12 border-t border-charcoal/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="font-serif text-2xl text-charcoal-light italic">
                        Until we see you there
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ClosingMessage;
