# UmmahCare Website

Statische Astro-Website für islamisch integrierte Lebensberatung online.

## Entwicklung

```bash
npm install
npm run dev
npm run format
npm run typecheck
npm run build
```

Der Produktions-Build liegt in `dist/`.

## Stack

- Astro 7 mit TypeScript strict
- Tailwind CSS 4
- Astro Content Collections mit Markdown
- Inclusive Sans, lokal unter `public/fonts/` samt OFL-Lizenz

## Routen

- `/` – gemeinsame Kernseite
- `/kontakt/schwestern/` – fester Weg zu Jessica
- `/kontakt/brueder/` – fester Weg zu Mario
- `/impressum/` und `/datenschutz/` – gesperrte Pflichtseiten-Shells

## Inhalte

Marketing- und Kontakttexte liegen unter `src/content/`. Struktur und Validierung stehen in `src/content.config.ts`.

## Veröffentlichungssperre

Alle Routen sind aktuell `noindex, nofollow`. Buchung, WhatsApp und Formular sind technisch deaktiviert. Vor Preview/Go-live fehlen Preis, exakte Qualifikationen, Nummern, Calendly-Links, Formularprozess, geprüfter Krisenhinweis, Rechtsdaten und Domain.
