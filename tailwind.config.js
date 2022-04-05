module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      maxWidth: {
        menu: 25,
      },
      maxHeight: {
        menu: 25,
      },
      colors: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
  corePlugins: { transform: false, translate: false, boxShadow: false },
};
