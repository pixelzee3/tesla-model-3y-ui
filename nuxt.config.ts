import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Tesla Model 3/Y UI Simulator',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'public/favicon.svg',
        },
      ],
    },
  },
  ssr: false,
});
