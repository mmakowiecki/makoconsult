import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Canonical path → localized slug mappings for sitemap hreflang
const enDePairs = [
  ['/', '/'],
  ['/services/', '/leistungen/'],
  ['/about/', '/ueber-mich/'],
  ['/contact/', '/kontakt/'],
  ['/imprint/', '/impressum/'],
  ['/privacy/', '/datenschutz/'],
];

// Build lookup: full EN URL → full DE URL and vice versa
const hreflangMap = new Map();
for (const [enSlug, deSlug] of enDePairs) {
  const enUrl = `https://makoconsult.com/en${enSlug}`;
  const deUrl = `https://makoconsult.com/de${deSlug}`;
  hreflangMap.set(enUrl, { en: enUrl, de: deUrl });
  hreflangMap.set(deUrl, { en: enUrl, de: deUrl });
}

export default defineConfig({
  site: 'https://makoconsult.com',
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://makoconsult.com/',
      serialize(item) {
        const pair = hreflangMap.get(item.url);
        if (pair) {
          item.links = [
            { lang: 'en', url: pair.en },
            { lang: 'de', url: pair.de },
            { lang: 'x-default', url: pair.en },
          ];
        }
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
