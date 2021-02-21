require("dotenv").config();
const logger = require("consola").withScope("@lihbr/lihbr-obs");

const ci = require("@lihbr/utils-netlify.ci");
const envConfig = require("@lihbr/utils-nuxt.env");

const pkg = require("./package.json");

module.exports = async () => {
  // Inject Netlify deploy context URL
  if (ci.isNetlify()) {
    process.env.APP_URL = ci.getFinalDeployUrl({ branchDomains: [] });
    logger.info(`Deploying on: ${process.env.APP_URL}`);
  }

  // Configure application environment
  const env = envConfig(pkg, {}, {});

  return {
    /*
     ** Application target
     */
    target: "static",

    /*
     ** Build target
     */
    modern: false, // env.DEV ? false : "client",

    /*
     ** Application directory
     */
    srcDir: "src/",

    /*
     ** Generate
     */
    generate: {
      crawler: false,
      fallback: true,
      routes: []
    },

    /*
     ** Head of the page, handled by head module
     */
    head: {},

    /*
     ** Customize the progress-bar color
     */
    loading: { color: env.APP_ACCENT_COLOR },

    /*
     ** Global CSS
     */
    css: [
      "@fontsource/antic-slab/latin-400.css",
      "@fontsource/roboto/latin-300.css",
      "@fontsource/roboto/latin-300-italic.css",
      "@fontsource/roboto/latin-500.css",
      "@fontsource/roboto/latin-500-italic.css",
      "@fontsource/roboto/latin-700.css",
      "@fontsource/roboto/latin-700-italic.css",
      "~/assets/sass/style.sass"
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["~/plugins/smart-link", "~/plugins/filters"],

    /*
     ** Nuxt.js build modules
     */
    buildModules: [
      [
        "@lihbr/utils-nuxt.head",
        {
          lang: env.APP_LANG,
          name: env.APP_NAME,
          description: env.APP_DESC,
          metaImage: {
            og: env.APP_METAIMG_OG,
            tw: env.APP_METAIMG_TW
          },
          twitterHandle: env.APP_TWITTER_HANDLE,
          backgroundColor: env.APP_BACKGROUND_COLOR,
          accentColor: env.APP_ACCENT_COLOR,
          titleFormat: env.APP_TITLE_FORMAT,
          url: env.APP_URL
        }
      ],
      "@lihbr/utils-nuxt.statistics",
      "@nuxtjs/eslint-module",
      [
        "@nuxtjs/tailwindcss",
        {
          configPath: "~~/tailwind.config.js",
          exposeConfig: false,
          viewer: false
        }
      ],
      [
        "@nuxtjs/color-mode",
        {
          preference: "system",
          fallback: "light",
          classPrefix: "",
          classSuffix: "",
          storageKey: "color-mode"
        }
      ],
      "@nuxtjs/global-components",
      ["@nuxtjs/netlify-files", { existingFilesDirectory: __dirname }],
      "nuxt-svg-loader"
    ],

    /*
     ** Env
     */
    env: {
      TWITCH_CHANNEL: process.env.TWITCH_CHANNEL,
      CONFIG_URL: process.env.CONFIG_URL,
      CONFIG_TIMEOUT: parseInt(process.env.CONFIG_TIMEOUT) || 15000,
      ...env
    },

    /*
     ** Server configuration
     */
    server: {
      host: env.APP_HOST,
      port: env.APP_PORT
    },

    /*
     ** Build
     */
    build: {
      html: {
        minify: {
          minifyCSS: false,
          minifyJS: false
        }
      }
    }
  };
};
