import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // https://tailwindcss.com/docs/customizing-colors#using-css-variables
        primary: "rgb(var(--color-primary))",
        primary_light: "rgb(var(--color-primary-light))",
        secondary: "rgb(var(--color-secondary))",
        orange: "rgb(var(--color-orange))",
        light: "rgb(var(--color-light))",
      },
    },
  },
  plugins: [],
} satisfies Config;
