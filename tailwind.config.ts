import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  darkMode: "class", // Enables class-based dark mode (✅ Correct)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        textDark: "#171717",
        textGray: "#4a4a4a",
        navbar: "#000000",
        accent: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
        highlightLight: "#1E40AF", // Blue for light mode highlights
        highlightDark: "#FACC15", // Yellow for dark mode highlights
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"], /* Apply Lato as default */
        montserrat: ["Montserrat", "sans-serif"], /* Use for headings */
        mono: ["monospace", "monospace"], /* Keep monospace for specific text */
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;