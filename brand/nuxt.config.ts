export default defineNuxtConfig({
  components: [
    {
      path: 'components/dialog',
      prefix: 'dialog',
      global: true,
      extensions: ['vue'],
    },
    {
      path: 'components',
      extensions: ['vue'],
    },
  ],
});
