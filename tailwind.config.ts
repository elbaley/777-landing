import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: 'url("/home-icon.png")',
        collective: 'url("/collective-icon.png")',
        analytics: 'url("/analytics-icon.png")',
        feed: 'url("/feed-icon.png")',
      },
      maxWidth: {
        container: "1140px",
      },
      colors: {
        dark0: "#0F0F0F",
        dark1: "#1E1E1E",
        dark2: "#2C2C2C",
        dark3: "#444444",
        logo4: "#A27DF9",
        success: "#68F899",
        borderGreen: "#1CEFB4",
        action: "#A27DF9",
      },
    },
  },
  plugins: [],
};
export default config;
