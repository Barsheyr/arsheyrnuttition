/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Urbanist", "sans-serif"],
    },
    extend: {
      colors: {
        green70: "#CBEA7B",
        green75: "#D3EE91",
        green80: "#DCF1A7",
        green85: "#E5F5BD",
        green90: "#EEF8D3",
        green95: "#F6FBE9",
        green97: "#FAFDF2",
        green99: "#FDFEFB",
        darkGreen15: "#1A3129",
        darkGreen20: "#234338",
        darkGreen25: "#2C5446",
        darkGreen30: "#346454",
        darkGreen40: "#468671",
        darkGreen60: "#79B9A4",
        darkGreen80: "#BCDCD1",
        darkGreen90: "#DDEDE8",
        body: "#F1F1F3",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#DCF1A7",
        },
      },
    ],
  },
};
