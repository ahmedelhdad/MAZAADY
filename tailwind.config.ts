import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        text:'#D20653',
        title:'#828282',
        btnFirstbg:'#D20653',
        yellow:'#FF951D',
        textColor:'#4F4F4F',
        textBlack:'#363333',
        colorLive:'#D20653',
        textwhite:'#FFFFFF',
        textBlackcolor:'#333333'
      }
    },
  },
  plugins: [],
};
export default config;
