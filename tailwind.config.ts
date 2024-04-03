import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        //Strong Cyan
        Scyan: 'hsl(172, 67%, 45%)',
        //Very Dark Cyan
        VDcyan: 'hsl(183, 100%, 15%)',
        //Dark Gray Cyan
        DGcyan: 'hsl(186, 14%, 43%)',
        //Grayish Cyan
        Gcyan: 'hsl(184, 14%, 56%)',
        //Light Grayish Cyan
        LGcyan: 'hsl(185, 41%, 84%)',
        //Very Light Grayish Cyan
        VLGcyan: 'hsl(189, 41%, 97%)'
      }
    },
  },
  plugins: [],
};
export default config;
