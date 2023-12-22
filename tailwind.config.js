/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4", // Replace with your primary color hex code
        secondary: "#334155", // Replace with your secondary color hex code
        accent: "#06b6d4", // Replace with your accent color hex code
        // You can add more colors if needed
      },
    },
  },
  plugins: [],
};
