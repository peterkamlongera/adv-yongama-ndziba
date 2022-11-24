// /** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      display: ["Petrona"],
      body: ["Martel"]
    },
    gridTemplateRows: {
      pancake: "auto 1fr auto"
    },
    fontSize: {
      'ms': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'color-1': '#212738',
      'color-2': '#7A7978',
      'color-3': '#EDF2EF',
      'black': '#141414',
      'color-5': '#353D03',
    },
    backgroundImage: {
      'pattern-1': "url('./assets/svg/confetti-doodles.svg')",
      'pattern-2': "url('../../assets/svg/texture.svg')",
      'pattern-3': "url('../../assets/svg/squares.svg')",
      'pattern-4': "url('../../assets/svg/bg-1.svg')",
      'pattern-5': "url('../../assets/imgs/background-2.jpg')"
    },
    extend: {
  plugins: [],
  }
}
}
