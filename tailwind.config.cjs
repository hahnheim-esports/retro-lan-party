const config = {
  mode: 'jit',
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#363ACC',
          secondary: '#696DFF',
          accent: '#c026d3',
          neutral: '#191D24',
          'base-100': '#ffffff',
          info: '#1e40af',
          success: '#047857',
          warning: '#facc15',
          error: '#dc2626'
        }
      },
    ]
  },

  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        PatuaOne: ['Patua One', 'serif'],
        Rubik: ['Rubik', 'sans-serif'],
      }
    }
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
