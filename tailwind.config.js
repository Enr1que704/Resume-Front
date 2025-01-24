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
        },
        animation: {
          textGradient: 'textGradient 5s ease infinite',
          "hover-pulse": "hover-pulse 0.5s ease-in-out",
          "expand": "scale-125",
        },
        keyframes: {
          textGradient: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center',
            },
          },
          'hover-pulse': {
            '0%': {
              boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.2)',
            },
            '100%': {
              boxShadow: '0 0 0 2em rgba(255, 0, 0 ,0)'
            }
          }
        },
      },
    },
    plugins: [],
  };


  // module.exports = {
  //   theme: {
  //     extend: {
  //       animation: {
  //         textGradient: 'textGradient 5s ease infinite',
  //       },
  //       keyframes: {
  //         textGradient: {
  //           '0%, 100%': {
  //             'background-size': '200% 200%',
  //             'background-position': 'left center',
  //           },
  //           '50%': {
  //             'background-size': '200% 200%',
  //             'background-position': 'right center',
  //           },
  //         },
  //       },
  //     },
  //   },
  // }