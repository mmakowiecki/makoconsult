import { ui, type Lang } from './ui';
import { routes } from './routes';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return (ui[lang] as Record<string, string>)[key] || (ui['en'] as Record<string, string>)[key] || key;
  };
}

export function getLocalizedPath(lang: Lang, canonicalPath: string): string {
  const localizedSlug = routes[lang]?.[canonicalPath] ?? canonicalPath;
  return `/${lang}${localizedSlug}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'de' : 'en';
}

export function getAlternateUrl(lang: Lang, canonicalPath: string): string {
  const altLang = getAlternateLang(lang);
  return getLocalizedPath(altLang, canonicalPath);
}
