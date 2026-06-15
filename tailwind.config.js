/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef3fa',
          100: '#d4e0ee',
          200: '#a5bfdb',
          300: '#6e94be',
          400: '#3d6da0',
          500: '#234e85',
          600: '#1a3a5c',
          700: '#142e49',
          800: '#0f2238',
          900: '#0a1626',
          950: '#050b14',
        },
        royal: '#2563eb',
        // Paleta da marca: azul + branco apenas.
        // Mantemos os nomes "orange", "gold", "sparkred" como tokens semanticos
        // (accent primario, secundario, destaque) para evitar refator amplo,
        // mas todas as cores agora sao tons de azul.
        orange: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#60a5fa',
        },
        gold: {
          DEFAULT: '#38bdf8',
          dark: '#0284c7',
        },
        sparkred: '#1e3a8a',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 18s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spark-rise': 'sparkRise 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 30px rgba(37,99,235,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(37,99,235,0.7)' },
        },
        sparkRise: {
          '0%': { transform: 'translateY(20px) scale(0.5)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(-120px) scale(1.2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
