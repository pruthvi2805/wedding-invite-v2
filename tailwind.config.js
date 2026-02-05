/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Editorial Palette
                beige: {
                    100: '#EDE2DA', // Warm Soft Beige Background
                    200: '#E5DCD4',
                },
                ivory: {
                    100: '#F4ECE6', // Warm Ivory Tint (Cards)
                    200: '#FAF5F1',
                },
                charcoal: {
                    DEFAULT: '#2C2C2C', // Primary Text
                    light: '#4A4A4A',
                },
                'dusty-rose': {
                    DEFAULT: '#C98F8F', // Accent
                    light: '#D4A3A3',
                },
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
            letterSpacing: {
                'tight-editorial': '-0.03em',
                'widest-editorial': '0.2em',
            },
            fontSize: {
                'hero-name': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
                'editorial-label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.15em' }],
            },
            boxShadow: {
                'editorial': '0 4px 20px -5px rgba(201, 143, 143, 0.15)', // Very subtle dusty rose glow
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
