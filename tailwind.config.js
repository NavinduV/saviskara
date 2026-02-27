/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true, // Ensures containers are centered
      padding: {
        '2xl': '6rem', // Custom padding for 2xl breakpoint
      },
    },
    extend: {
      animation: {
        pulse: 'pulse 2.5s infinite',
        bounce: 'bounce 14s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        inter: [`var(--font-inter)`, 'sans-serif'],
        raleway: [`var(--font-raleway)`, 'sans-serif'],
      },
      colors: {
        primary: '#1E1C1C',
        body: '#f4f4f4',
        accent: '#FFBF00',
        // accent:'#fb8500',
      },
    },
  },
  plugins: [],
};
