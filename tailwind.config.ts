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
        background: "var(--background)",
        foreground: "var(--foreground)",
        colors: {
          'red': "var(--red)",
          'orange': "var(--orange)",
          'yellow': "var(--yellow)",
          'green': "var(--green)",
          'blue': "var(--blue)",
          'purple': "var(--purple)",
          'pink': "var(--pink)",
          'black': "var(--black)",
          'gray-dark': "var(--gray-dark)",
          'gray': "var(--gray)",
          'gray-light': "var(--gray-light)",
          'white': "var(--white)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
