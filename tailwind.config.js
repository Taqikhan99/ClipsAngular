module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    opacity: ({ after }) => after(['disabled'])
    
  },
  plugins: [],
}
