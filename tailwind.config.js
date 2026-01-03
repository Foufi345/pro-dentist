/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
      theme: {
            extend: {
                  colors: {
                        'warm-beige': '#fafaf9',
                        'stone-earth': '#f5f5f4',
                        'muted-gold': '#78716c',
                        'dark-taupe': '#1e293b',
                        'bronze': '#57534e',
                        // Fresh vibrant colors
                        'teal': {
                              50: '#f0fdfa',
                              100: '#ccfbf1',
                              400: '#2dd4bf',
                              500: '#14b8a6',
                              600: '#0d9488',
                              700: '#0f766e',
                        },
                        'sky': {
                              50: '#f0f9ff',
                              100: '#e0f2fe',
                              400: '#38bdf8',
                              500: '#0ea5e9',
                        }
                  },
                  fontFamily: {
                        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
                  },
                  animation: {
                        'fade-in': 'fadeIn 0.6s ease-out',
                        'slide-up': 'slideUp 0.6s ease-out',
                        'slide-down': 'slideDown 0.6s ease-out',
                        'scale-in': 'scaleIn 0.5s ease-out',
                        'counter': 'counter 2s ease-out',
                  },
                  keyframes: {
                        fadeIn: {
                              '0%': { opacity: '0' },
                              '100%': { opacity: '1' },
                        },
                        slideUp: {
                              '0%': { transform: 'translateY(30px)', opacity: '0' },
                              '100%': { transform: 'translateY(0)', opacity: '1' },
                        },
                        slideDown: {
                              '0%': { transform: 'translateY(-30px)', opacity: '0' },
                              '100%': { transform: 'translateY(0)', opacity: '1' },
                        },
                        scaleIn: {
                              '0%': { transform: 'scale(0.9)', opacity: '0' },
                              '100%': { transform: 'scale(1)', opacity: '1' },
                        },
                  },
            },
      },
      plugins: [],
}
