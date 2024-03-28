// https://nuxt.com/docs/api/configuration/nuxt-config
import { transformerVariantGroup } from 'unocss';

export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['./brand'],
  modules: ['@unocss/nuxt'],
  unocss: {
    preflight: true,
    transformers: [transformerVariantGroup()],
  },
});
