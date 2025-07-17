import { defineNuxtPlugin } from "#app";
import Buefy from "buefy";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("buefy", Buefy);
  nuxtApp.vueApp.use(Buefy);
});
