import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Magnat", ...fontFamily.sans],
        primary: ["var(--font-geist-sans)", ...fontFamily.sans],
        nexcellerate: ["Eina-03", ...fontFamily.sans],
      },
      colors: {
        primary: "#A894E8",
        secondary: "#ECCF73",
        tertiary: "#7F9CA2",
        dark: "#282828",
        light: "#F8F5F1",
      },
    },
  },
  plugins: [],
} satisfies Config;
