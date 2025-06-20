// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ax-background': '#0A192F',    // Deep Navy Blue
        'ax-foreground': '#CCD6F6',    // Light grayish-blue (primary text)
        'ax-primary': '#64FFDA',       // Vibrant Teal/Mint (accent)
        'ax-primary-dark': '#52D8C9',  // Darker Teal for hover
        'ax-card': '#112240',           // Lighter Navy (card backgrounds)
        'ax-border': '#233554',         // Subtle border color
        'ax-muted': '#8892B0',          // Muted grayish-blue (secondary text)
        'ax-lightest-slate': '#A8B2D1',// For less prominent text or icons
        'white': '#FFFFFF',
        'black': '#000000',
        'transparent': 'transparent',
      },
      fontFamily: {
        // Example: Using Inter as a premium sans-serif font. Make sure to import it.
        sans: ['Inter', 'sans-serif'], // You'd need to add Inter via a font provider or local files
        // If Inter is not available, fallback to the previous one or a system UI stack
        // sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'cta': '0 10px 15px -3px rgba(100, 255, 218, 0.1), 0 4px 6px -2px rgba(100, 255, 218, 0.05)', // Custom shadow for primary CTA
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // For line clamping job descriptions etc.
    require('@tailwindcss/aspect-ratio'),
  ],
};