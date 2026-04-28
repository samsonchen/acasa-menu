/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F0A93B',
          deep: '#D08A20',
          soft: '#FFF3DD',
        },
        ink: {
          DEFAULT: '#2A2A2A',
          soft: '#555555',
          mute: '#9A9A9A',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          2: '#F7F7F7',
        },
        line: {
          DEFAULT: '#EEEEEE',
          soft: '#F2F2F2',
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.05), 0 1px 8px rgba(0,0,0,.04)',
      },
      borderRadius: {
        card: '14px',
      },
      fontFamily: {
        zh: ["'Noto Sans TC'", "'Noto Sans JP'", "'Noto Sans KR'", 'system-ui', '-apple-system', 'sans-serif'],
        ja: ["'Noto Sans JP'", "'Noto Sans TC'", 'sans-serif'],
        ko: ["'Noto Sans KR'", "'Noto Sans TC'", 'sans-serif'],
        en: ["'Noto Sans TC'", 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .2s ease',
        slideUp: 'slideUp .26s cubic-bezier(.2,.8,.2,1)',
      },
    },
  },
  plugins: [],
}
