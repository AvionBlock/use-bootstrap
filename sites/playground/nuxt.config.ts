import { resolve } from "node:path";

export default defineNuxtConfig({
  modules: [resolve(__dirname, "../../src/module.mjs")],
});
