import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        snow: "#FFFFFF",
        jet: "#353535",
        primary: "#DD1155",
        secondary: "#58FCEC",
        tertiary: "#247BA0",
      },
    },
  },
  plugins: [],
} satisfies Config;
