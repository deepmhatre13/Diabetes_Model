/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Futuristic Light Mode Colors
        'primary-bg': '#d0f7ff',
        'secondary-bg': '#caf0f8', 
        'tertiary-gradient': '#a3ecff',
        'glass-card': '#e0fbfc',
        'border-neon': '#a0eaff',
        'primary-text': '#0a0a23',
        'secondary-text': '#3a3a50',
        'accent-neon': '#00d4ff',
        'button-neon': '#00e0ff',
        'icon-accent': '#48dbfb',
        'form-field': '#ccf3f9',

        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },

      backgroundImage: {
        'light-gradient': 'linear-gradient(135deg, #d0f7ff, #caf0f8)',
        'dark-gradient': 'linear-gradient(135deg, #0f172a, #1e293b)',
        'accent-gradient': 'linear-gradient(to right, #00e0ff, #a3ecff, #48dbfb)',
      },

      boxShadow: {
        'neon-light': '0 0 20px rgba(0,224,255,0.3)',
        'neon-dark': '0 0 10px rgba(0,224,255,0.5)',
        'glow': '0 0 20px rgba(0,224,255,0.4)',
      },

      fontFamily: {
        'sans': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,224,255,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0,224,255,0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}