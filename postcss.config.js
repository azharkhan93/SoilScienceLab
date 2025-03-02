module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      corePlugins: {
        preflight: false, // ❌ Disable Tailwind's global resets
      },
    },
  }