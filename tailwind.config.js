// 육마당 브랜드 색상·폰트 토큰을 정의하는 Tailwind 설정
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#15110D',
          900: '#0B0805',
          800: '#15110D',
          700: '#221A12',
          600: '#33271A',
        },
        ember: {
          DEFAULT: '#E0531F',
          glow: '#F2A85B',
          deep: '#A13815',
        },
        hanji: {
          DEFAULT: '#F2EBDA',
          warm: '#E8DDC4',
        },
        clay: '#8B5A3C',
        ink: '#2A1F18',
        bone: '#E8DDC4',
      },
      fontFamily: {
        serif: ['"Noto Serif KR"', 'serif'],
        sans: ['"Pretendard Variable"', 'Pretendard', 'system-ui', 'sans-serif'],
        display: ['"Noto Serif KR"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'ember-pulse': 'emberPulse 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
      },
      keyframes: {
        emberPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(40px)' },
          '50%': { opacity: '1', filter: 'blur(60px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
