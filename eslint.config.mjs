/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- MUDOU AQUI (antes era só 'tailwindcss')
    autoprefixer: {},
  },
};

export default config;