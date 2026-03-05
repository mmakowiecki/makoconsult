export const routes: Record<string, Record<string, string>> = {
  en: {
    '/': '/',
    '/services': '/services',
    '/about': '/about',
    '/contact': '/contact',
    '/imprint': '/imprint',
    '/privacy': '/privacy',
  },
  de: {
    '/': '/',
    '/services': '/leistungen',
    '/about': '/ueber-mich',
    '/contact': '/kontakt',
    '/imprint': '/impressum',
    '/privacy': '/datenschutz',
  },
};

/** Reverse lookup: from a localized slug back to the canonical path */
export function getCanonicalPath(lang: string, localizedSlug: string): string {
  const langRoutes = routes[lang];
  if (!langRoutes) return localizedSlug;
  for (const [canonical, localized] of Object.entries(langRoutes)) {
    if (localized === localizedSlug) return canonical;
  }
  return localizedSlug;
}
