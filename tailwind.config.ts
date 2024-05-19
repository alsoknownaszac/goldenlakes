import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  images: {
    deviceSizes: [375, 640, 744, 1024, 1280],
    imageSizes: [256, 540, 670],
    formats: ["image/avif", "image/webp"],
  },
  theme: {
    fontFamily: {
      satoshi: ["Satoshi"],
      display: ['"Clash Display"'],
    },
    // screens: {
    //   sm: "435px",
    //   lg: "804px",
    //   xl: "1340px",
    // },
    screens: {
      sm: "375px",
      sm_0: "640px",
      lg: "744px",
      lg_0: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      // padding: {
      //   sm: "1.313rem",
      //   lg: "2.5rem",
      //   xl: "5.5rem",
      // },
    },
  },
  plugins: [
    function ({ addVariant }: any | null) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

export default config;
