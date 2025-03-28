export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      maskImage: {
        'gradient-to-t': 'linear-gradient(to top, transparent, black)',
      },
      fontFamily: {
        MADESoulmaze: ['MADESoulmaze', 'sans-serif'],
        MADESoulmazeItalic: ['MADESoulmazeItalic', 'sans-serif'],
        MADESoulmazeOutline: ['MADESoulmazeOutline', 'sans-serif'],
        MADESoulmazeOutlineItalic: ['MADESoulmazeOutlineItalic', 'sans-serif'],
      },
      container: {
        center: true,
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        scrollGradient: {
          '0%': {
            backgroundPosition: '50% 0%',
          },
          '100%': {
            backgroundPosition: '50% -200%',
          },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        scrollGradient: 'scrollGradient 5s linear infinite',
      },
    },
  },
  daisyui: {
    themes: [
      {
        milixstheme: {
          primary: '#8F323D',
          'primary-content': '#ebebeb',
          secondary: '#6b252d',
          'secondary-content': '#ebebeb',
          accent: '#531D24',
          'accent-content': '#ebebeb',
          neutral: '#8f323d',
          'neutral-content': '#ebebeb',
          'base-100': '#1E1E1E',
          'base-200': '#141414',
          'base-300': '#050505',
          'base-content': '#ebebeb',
          info: '#6A2D84',
          'info-content': '#ebebeb',
          success: '#16a34a',
          'success-content': '#ebebeb',
          warning: '#f59e0b',
          'warning-content': '#ebebeb',
          error: '#e11d48',
          'error-content': '#ebebeb',
        },
      },
      'light',
      'dark',
      'cyberpunk',
      'synthwave',
      'pastel',
    ],
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
};
