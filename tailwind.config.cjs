const alpha = (variableName) => {
  // some tailwind magic to allow us to specify opacity with CSS variables (eg: bg-app/80)
  // https://tailwindcss.com/docs/customizing-colors#using-css-variables
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `hsla(var(${variableName}), <alpha-value>)`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          stroke: alpha("--blue-stroke"),
          fill: alpha("--blue-fill"),
          hover: alpha("--blue-hover"),
          active: alpha("--blue-active"),
          text: {
            DEFAULT: alpha("--blue-text"),
            hover: alpha("--blue-text-hover"),
            active: alpha("--blue-text-active"),
            disabled: alpha("--blue-text-disabled"),
          },
          dropshadow: alpha("--blue-dropshadow"),
        },
        white: {
          stroke: alpha("--white-stroke"),
          fill: alpha("--white-fill"),
          hover: alpha("--white-hover"),
          active: alpha("--white-active"),
          text: {
            DEFAULT: alpha("--white-text"),
            hover: alpha("--white-text-hover"),
            active: alpha("--white-text-active"),
            disabled: alpha("--white-text-disabled"),
          },
          dropshadow: alpha("--white-dropshadow"),
        },
        error: {
          stroke: alpha("--error-stroke"),
          fill: alpha("--error-fill"),
          hover: alpha("--error-hover"),
          active: alpha("--error-active"),
          text: {
            DEFAULT: alpha("--error-text"),
            hover: alpha("--error-text-hover"),
            active: alpha("--error-text-active"),
            disabled: alpha("--error-text-disabled"),
          },
          dropshadow: alpha("--error-dropshadow"),
        },
      },
    },
    keyframes: {
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.56)" },
        to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
      },
      slideDownAndFade: {
        from: { opacity: 0, transform: "translateY(-2px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      slideLeftAndFade: {
        from: { opacity: 0, transform: "translateX(2px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      slideUpAndFade: {
        from: { opacity: 0, transform: "translateY(2px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      slideRightAndFade: {
        from: { opacity: 0, transform: "translateX(-2px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
    },
    animation: {
      slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideRightAndFade:
        "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
  plugins: [],
};
