module.exports = {
    mode: "jit",
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          "protoss-pylon": "#00a6fb",
          "calgar-blue": "#0582ca",
          "bauhaus-blue": "#006494",
          "night-dive": "#003554",
          "void": "#051923"
        }
      },
    },
    plugins: [],
  };