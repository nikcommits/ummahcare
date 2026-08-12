---
name: UmmahCare
description: Ruhige, klare Orientierung für islamisch integrierte Lebensberatung online.
colors:
  ink: '#173C3A'
  ink-soft: '#435E5C'
  canvas: '#F8FAF9'
  surface: '#FFFFFF'
  teal-soft: '#E6EEEB'
  teal-brand: '#C4DDD8'
  gold-brand: '#AA9663'
  error: '#8B3246'
  success: '#276749'
typography:
  display:
    fontFamily: 'Inclusive Sans, Arial, sans-serif'
    fontSize: 'clamp(2.5rem, 7vw, 5rem)'
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: '-0.03em'
  headline:
    fontFamily: 'Inclusive Sans, Arial, sans-serif'
    fontSize: 'clamp(2rem, 5vw, 3.5rem)'
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: '-0.02em'
  body:
    fontFamily: 'Inclusive Sans, Arial, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'Inclusive Sans, Arial, sans-serif'
    fontSize: '1rem'
    fontWeight: 600
    lineHeight: 1.3
rounded:
  field: '8px'
  control: '12px'
  surface: '16px'
spacing:
  xs: '4px'
  sm: '8px'
  md: '16px'
  lg: '24px'
  xl: '32px'
  section-sm: '64px'
  section-lg: '96px'
components:
  button-primary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.surface}'
    rounded: '{rounded.control}'
    padding: '14px 20px'
    height: '52px'
  button-secondary:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '14px 20px'
    height: '52px'
  input:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.field}'
    padding: '14px 16px'
    height: '52px'
---

# Design System: UmmahCare

## 1. Overview

**Creative North Star: "Der ruhige Gesprächsraum"**

Die Website fühlt sich an wie ein heller, geordneter Raum vor einem vertraulichen Gespräch: ruhig, offen und eindeutig. Das historische Logo liefert blasses Teal und gedämpftes Gold; die digitale Oberfläche verdichtet diese Herkunft zu kontrastreichem Dunkelteal, echtem Off-White und sparsamem Gold.

Keine Therapieportal-, Wellness-, Luxus-, Coaching-Funnel- oder SaaS-Ästhetik. Struktur und Sprache tragen Vertrauen. Dekoration bleibt dem Logo und wenigen ruhigen Flächen vorbehalten.

**Key Characteristics:**

- mobile-first, luftig, kontrastreich
- zwei gleichwertige und dauerhaft eindeutige Gesprächswege
- flache Flächen statt Kartenstapel oder Glas
- Gold als seltenes Markensignal, nie als Lesefarbe
- progressive Verbesserung ohne versteckten Kerninhalt

## 2. Colors

Dunkelteal trägt Text und Aktionen. Helle Tealtöne strukturieren. Gold bleibt Markenspur.

### Primary

- **Gesprächsraum-Dunkelteal** (`#173C3A`): Fließtext, Headlines, Primärbuttons und Fokusindikator. Kontrast auf `#F8FAF9`: 11.49:1.

### Secondary

- **Logo-Teal** (`#C4DDD8`): ausgewählte Flächen, Wegwahl und ruhige Abschnittswechsel; Text darauf immer `#173C3A`.

### Tertiary

- **Gedämpftes Logogold** (`#AA9663`): Logo, feine Symbole und kleine dekorative Akzente. Kontrast auf `#F8FAF9` nur 2.76:1; deshalb nie für Text, Fokus oder alleinige Zustandsanzeige.

### Neutral

- **Klares Off-White** (`#F8FAF9`): Seitenhintergrund.
- **Weiß** (`#FFFFFF`): Formulare und interaktive Oberflächen.
- **Nebel-Teal** (`#E6EEEB`): ruhige Sektionen und Trennflächen.
- **Gedämpfte Tinte** (`#435E5C`): Sekundärtext, nur bei verifiziertem AA-Kontrast.
- **Fehler-Bordeaux** (`#8B3246`): Fehlertext und Fehlerrahmen plus Symbol/Text.
- **Bestätigungsgrün** (`#276749`): Erfolgsmeldungen plus Symbol/Text.

**The Gold Is Not Text Rule.** Gold ist Akzent, nie Informationsträger.

**The Two Paths Rule.** Wege unterscheiden sich durch Namen, Text, Symbol und Auswahlzustand, nie durch Rosa/Blau-Codierung.

## 3. Typography

**Display Font:** Inclusive Sans (lokal, mit Arial-Fallback)
**Body Font:** Inclusive Sans (lokal, mit Arial-Fallback)

**Character:** Eine humanistische Sans hält lange deutsche Wörter lesbar und wirkt zugänglich statt klinisch. Die vorhandene Schreibschrift bleibt ausschließlich Bestandteil des Logo-Bildes.

### Hierarchy

- **Display** (600, `clamp(2.5rem, 7vw, 5rem)`, 1.04): nur H1; `text-wrap: balance`; maximal 18 Wörter.
- **Headline** (600, `clamp(2rem, 5vw, 3.5rem)`, 1.1): Hauptabschnitte; `text-wrap: balance`.
- **Title** (600, `1.375rem`, 1.25): Themen, Personen und Schritte.
- **Body** (400, `1.125rem`, 1.65): maximal 70ch; `text-wrap: pretty`.
- **Label** (600, `1rem`, normaler Zeichenabstand): Buttons, Navigation und Formulare; keine All-Caps-Serien.

**The Logo Script Rule.** Schreibschrift wird nicht als Webfont nachgebaut und nie für Headlines oder Lesetext benutzt.

## 4. Elevation

Flach als Standard. Tiefe entsteht durch Tonflächen, Abstand und volle 1px-Rahmen. Ein weicher Schatten erscheint nur bei schwebender Navigation oder angehobenem Hover-Zustand.

### Shadow Vocabulary

- **Ambient Low** (`0 8px 24px rgba(23, 60, 58, 0.10)`): nur schwebende Navigation und Hover einer auswählbaren Wegfläche.
- **Focus** (`0 0 0 3px #173C3A` mit `2px` Offset): alle fokussierbaren Elemente.

**The Flat-By-Default Rule.** Wenn mehr als zwei Schatten gleichzeitig im Viewport sichtbar sind, ist die Oberfläche zu unruhig.

## 5. Components

### Buttons

- **Shape:** ruhig gerundet (`12px`), mindestens `52px` hoch, große Textlabels.
- **Primary:** `#173C3A` auf `#FFFFFF`; für „Erstgespräch buchen“.
- **Secondary:** weiß mit vollem 1px-Dunkeltealrahmen; für „Über WhatsApp fragen“.
- **Hover / Focus:** maximal `translateY(-2px)` und Ambient-Low-Schatten; dunkler Fokusring bleibt sichtbar.
- **Disabled:** nur wenn technisch zwingend; nicht als Ersatz für eine erklärende Validierung. Grund daneben nennen.

### Cards / Containers

- **Corner Style:** `16px` für auswählbare Wegflächen und Personenmodule.
- **Background:** `#FFFFFF`, `#E6EEEB` oder `#C4DDD8`; keine verschachtelten Karten.
- **Border:** voller 1px-Rahmen in einer dunkelteal-basierten, AA-sicheren Abstufung.
- **Internal Padding:** `24px` mobil, `32px` ab 768px.

### Inputs / Fields

- **Style:** dauerhaft sichtbares Label, `52px` Mindesthöhe, `8px` Radius, voller 1px-Rahmen.
- **Focus:** 2px Dunkeltealrahmen plus klarer Fokusumriss.
- **Error:** Fehlertext direkt am Feld, Fehler-Symbol, `aria-describedby`; zusätzliche Fehlerzusammenfassung mit Fokus.
- **Success:** Bestätigung mit Text und Symbol; Formularzustand nicht nur farblich wechseln.

### Navigation

- Kompakte Wort-Bild-Marke, Sprunglinks nur zu echten Entscheidungen und ein ruhiger Kontaktlink.
- Mobil kein Hamburger-Menü, solange maximal vier Ziele bestehen; horizontale Kernlinks können zugunsten eines eindeutigen „Gesprächsweg wählen“-Links reduziert werden.
- Skip-Link ist erstes fokussierbares Element.

### Gesprächsweg-Wahl

- Zwei semantisch gruppierte, vollflächig klickbare Optionen.
- Mobil untereinander, Desktop gleichbreit nebeneinander.
- Auswahl zeigt dunklen 2px-Rahmen, Häkchen, Name und Zielgruppe; nie nur Farbwechsel.
- Ohne JavaScript bleiben beide Personenmodule und alle eindeutig benannten Links erreichbar.

## 6. Do's and Don'ts

### Do:

- **Do** mobile Hero und Wegwahl zuerst testen: 320px, 375px, 768px und 1280px.
- **Do** Gold auf höchstens 10% einer Ansicht begrenzen.
- **Do** Kerninhalt ohne JavaScript sichtbar und nutzbar halten.
- **Do** externe WhatsApp-, Calendly- und Zoom-Wechsel vor dem Link erklären.
- **Do** Inclusive Sans lokal samt Lizenz ausliefern oder vor Bau eine gleichwertige lokale Alternative freigeben.

### Don't:

- **Don't** klinischen Praxis-, Therapieportal- oder Krankenhaus-Look bauen.
- **Don't** esoterische Wellness-, Mystik- oder Luxusästhetik verwenden.
- **Don't** laute Coaching-, Funnel- oder SaaS-Landingpage-Muster einsetzen.
- **Don't** religiöse Stockfoto-Klischees oder erfundene Vertrauenssignale verwenden.
- **Don't** Kontaktwege für Schwestern und Brüder vermischen.
- **Don't** Gold für Fließtext, Fokus oder alleinige Zustandsanzeige nutzen.
- **Don't** Gradienttext, Glassmorphism, Seitenstreifen an Karten, verschachtelte Karten oder wiederholte Mini-Eyebrows bauen.
- **Don't** Scroll-Stacking ohne neue explizite Freigabe einsetzen.
