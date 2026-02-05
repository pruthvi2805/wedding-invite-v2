/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    50: '#FDFCFA',
                    100: '#E5E0D8',  // Rich Oatmeal background for unmistakable contrast
                    200: '#EBE5D9',
                },
                charcoal: {
                    800: '#3A3A3A',
                    900: '#2C2C2C',  // Main text
                },
                'rose-gold': {
                    400: '#C98F7B',
                    500: '#B76E79',  // Primary accent
                    600: '#A35863',
                },
                'white-card': '#FFFFFF', // Explicit pure white cardstock
            },
            boxShadow: {
                'premium': '0 35px 70px -15px rgba(163, 88, 99, 0.2)',
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
