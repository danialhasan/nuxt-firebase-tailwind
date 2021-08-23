module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "calendh",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/firebase" // nuxt firebase module
  ],
  // This is how the docs organizes its firebase related code: https://firebase.nuxtjs.org/guide/getting-started#example-configuration
firebase:{
config:{
      apiKey: "<copy this from firebase console>",
      authDomain: "<copy this from firebase console>",
      projectId: "<copy this from firebase console>",
      storageBucket: "<copy this from firebase console>",
      messagingSenderId: "<copy this from firebase console>",
      appId: "<copy this from firebase console>",
},services:{auth:true // example}
},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: "_nuxt",
    extractCss: true,
    babel: {
      presets: ({ isServer }) => [
        [
          "@nuxt/babel-preset-app",
          {
            targets: isServer
              ? { node: "10.21.0" }
              : { browsers: ["defaults"] },
          },
        ],
      ],
    },
  },
};
