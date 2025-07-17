import { createLogger } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

const SCSS_Logger = {
  warn() {
    return;
  },
};

const logger = createLogger("error", { prefix: "custom" });

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  components: [
    { path: "~/components/adapters", pathPrefix: false, prefix: "b" },
    "~/components",
  ],

  css: [path.resolve(__dirname, "assets", "styles/_main.scss")],

  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          logger: SCSS_Logger,
        },
      },
    },
  },

  modules: ["shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "fb",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
