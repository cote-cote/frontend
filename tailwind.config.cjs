/** @type {import('tailwindcss').Config} */

const px0_2000 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) }

export default {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/routes/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: px0_2000,
      fontSize: px0_2000,
      lineHeight: px0_2000,
      minWidth: px0_2000,
      maxWidth: px0_2000,
      minHeight: px0_2000,
      maxHeight: px0_2000,
      spacing: px0_2000,
      width: px0_2000,
      height: px0_2000,
      margin: px0_2000,
      padding: px0_2000,
      borderRadius: px0_2000,
    },
  },
  plugins: [],
}
