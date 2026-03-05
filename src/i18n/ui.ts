export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Buttons
    'btn.consultation': 'Book a Free Consultation',
    'btn.services': 'Explore All Services',
    'btn.about': 'Learn More About Me',
    'btn.send': 'Send Message',

    // Footer
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© {year} MAKO Consult. All rights reserved.',
    'footer.tagline': 'Strategic Marketing Consultancy',

    // Contact form
    'form.name': 'Your Name',
    'form.email': 'Your Email',
    'form.message': 'Your Message',
    'form.namePlaceholder': 'Full name',
    'form.emailPlaceholder': 'email@company.com',
    'form.messagePlaceholder': 'Tell me about your situation and what you\'re looking for...',

    // Misc
    'skipToContent': 'Skip to content',
    'translationPending': 'Translation Pending',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',

    // Buttons
    'btn.consultation': 'Kostenloses Erstgespräch buchen',
    'btn.services': 'Alle Leistungen entdecken',
    'btn.about': 'Mehr über mich erfahren',
    'btn.send': 'Nachricht senden',

    // Footer
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.copyright': '© {year} MAKO Consult. Alle Rechte vorbehalten.',
    'footer.tagline': 'Strategische Marketingberatung',

    // Contact form
    'form.name': 'Ihr Name',
    'form.email': 'Ihre E-Mail',
    'form.message': 'Ihre Nachricht',
    'form.namePlaceholder': 'Vollständiger Name',
    'form.emailPlaceholder': 'email@unternehmen.de',
    'form.messagePlaceholder': 'Erzählen Sie mir von Ihrer Situation und was Sie suchen...',

    // Misc
    'skipToContent': 'Zum Inhalt springen',
    'translationPending': 'Übersetzung ausstehend',
    'menu.open': 'Menü öffnen',
    'menu.close': 'Menü schließen',
  },
} as const;
