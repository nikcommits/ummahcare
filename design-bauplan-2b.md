# UmmahCare Design-Bauplan – Phase 2b

**Status:** Entwurf zur Implementierungsfreigabe  
**Datum:** 2026-08-12  
**Grundlage:** freigegebene Architektur, `copy-g2c.md`, Brand-Assets, lokale UX-Leitplanken und `DESIGN.md`  
**Astro-Bau:** bis expliziter Freigabe gesperrt

## 1. Gestaltungsrichtung

**Leitidee:** Der ruhige Gesprächsraum. Nutzer kommen oft mit Unsicherheit, lesen auf dem Handy und brauchen Einordnung statt Reiz. Deshalb: heller Tageslicht-Charakter, dunkelteal getragene Lesbarkeit, großzügige Abstände, wenige klare Aktionen.

**Farbstrategie:** restrained. Dunkelteal und Off-White tragen 90% der Oberfläche. Blasses Teal gliedert. Gold bleibt Logo- und Detailakzent.

**Bildstrategie:** In Phase 1 keine generischen Personen-, Gebets- oder Beratungsszenen. Logo-Motiv als ruhige Markenillustration. Echte Porträts von Jessica und Mario erst einsetzen, wenn passende, freigegebene Dateien vorliegen; Module funktionieren bis dahin typografisch ohne Platzhalter-Silhouetten.

## 2. Design-Tokens

| Rolle      | Wert      | Nutzung                                   |
| ---------- | --------- | ----------------------------------------- |
| Ink        | `#173C3A` | Text, Headline, Primärbutton, Fokus       |
| Ink soft   | `#435E5C` | Sekundärtext nach Kontrastprüfung         |
| Canvas     | `#F8FAF9` | Seitenhintergrund                         |
| Surface    | `#FFFFFF` | Formulare, Interaktion                    |
| Teal soft  | `#E6EEEB` | Abschnittsflächen                         |
| Teal brand | `#C4DDD8` | ausgewählte Weg-/Vertrauensflächen        |
| Gold brand | `#AA9663` | Logo, kleine dekorative Details; nie Text |
| Error      | `#8B3246` | Fehler plus Text/Symbol                   |
| Success    | `#276749` | Erfolg plus Text/Symbol                   |

Abstandsskala: `4, 8, 12, 16, 24, 32, 48, 64, 96px`.  
Radien: Felder `8px`, Controls `12px`, große Flächen `16px`.  
Content: maximal `1200px`; Lesetext maximal `70ch`; mobile Randbreite `20px`, Tablet `32px`, Desktop `48px`.

## 3. Typografie

- Eine lokal ausgelieferte humanistische Sans: **Inclusive Sans** als Ziel; Lizenzdatei und Fontdateien sind Bauvoraussetzung.
- Logo-Schreibschrift bleibt Bildbestandteil, nicht Webfont.
- H1: `clamp(2.5rem, 7vw, 5rem)`, 600, Zeilenhöhe 1.04.
- H2: `clamp(2rem, 5vw, 3.5rem)`, 600, Zeilenhöhe 1.1.
- Body: `1.125rem`, Zeilenhöhe 1.65; auf sehr kleinen Displays mindestens `1rem`.
- Lange deutsche Wörter bei 320px testen. Keine erzwungenen Worttrennungen in Buttons.

## 4. Kernseite `/`

### Header

- Links: kompaktes Logo; Bildmarke und Wortmarke nicht kleiner als lesbar rendern.
- Rechts: maximal drei Sprungziele plus „Gesprächsweg wählen“.
- Mobil: Logo plus direkter Sprung zur Wegwahl; kein unnötiges Menü.
- Skip-Link vor Header.

### Hero

- Mobile Reihenfolge: Überzeile, H1, Subline, Lead, Wegwahl, Markenmotiv.
- Desktop: 7/5-Split. Copy und Wegwahl links, Markenmotiv rechts auf ruhiger Teal-Fläche.
- Wegwahl ist primäre Interaktion, nicht sekundärer Link.
- Zwei Optionen: „Für Schwestern / Gespräch mit Jessica“ und „Für Brüder / Gespräch mit Mario“.
- Auswahl scrollt zum passenden Personenmodul und setzt nur progressive UI-Hervorhebung. Ohne JavaScript bleiben beide Wege voll nutzbar.

### Glaube und Gespräch

- Ruhige Textsektion mit maximal 70ch.
- Ein einzelner Goldstrich oder Logo-Detail darf Abschnitt markieren; kein Icon-Kartengitter.

### Themen

- Vier Themen als responsive Liste, nicht als vier identische Marketingkarten.
- Desktop: zweispaltige Liste mit klaren Titeln und kurzen Texten; Mobil: einspaltig.
- Trennung durch Abstand und 1px-Linien, nicht Schatten.

### Leistungsgrenze

- Volle Dunkelteal-Fläche mit weißem Text.
- „Was die Beratung ist. Und was nicht.“ erhält hohe Priorität vor Personen-/Kontaktmodulen.
- Krisenplatzhalter sichtbar als redaktioneller Sperrhinweis im Entwurf; niemals in Preview als fertige Aussage tarnen.

### Personenmodule

- Jessica und Mario gleichwertig. Desktop nebeneinander, mobil nacheinander.
- Reihenfolge: Zielgruppe, Name, Rollenbeschreibung, Qualifikation-Platzhalter, Dauer, Preis-Platzhalter, Buchungsbutton, WhatsApp-Button, Formularlink.
- Externen Wechsel direkt vor jeweiliger Aktion erklären.
- Keine Portrait-Platzhalter. Freigegebenes Portrait später optional oberhalb des Namens im gleichen Seitenverhältnis für beide.

### Ablauf

- Echte Sequenz mit vier nummerierten Schritten; Nummern hier zulässig, weil Reihenfolge Bedeutung trägt.
- Mobil vertikal, Desktop horizontal oder 2 × 2. Verbindungslinie nur dekorativ und nicht als alleinige Bedeutungsquelle.

### Vertraulichkeit

- Teal-soft-Fläche mit zwei klaren Aussagen: Gespräche vertraulich; Kontakt/Buchung nicht anonym.
- Kein Schloss-Symbol als unbelegtes Sicherheitsversprechen.

### FAQ

- Native `<details>`/`<summary>`.
- Erste Frage standardmäßig geschlossen; alle Antworten im HTML.
- Fokus, Plus/Minus und `aria`-kompatible Browsersemantik; keine JS-Abhängigkeit.

### Abschluss

- Wiederholt nur Wegwahl, nicht sechs gemischte CTAs.
- Nach Auswahl erscheint optional eine sticky mobile Aktionsleiste mit exakt zwei passenden Aktionen. Ohne Auswahl keine generischen Kontaktlinks.

## 5. Kontaktseiten

- Kontext im Hero fest: „Kontakt für Schwestern / Jessica“ oder „Kontakt für Brüder / Mario“.
- Drei klar getrennte Wege in Reihenfolge: 50-Minuten-Session, WhatsApp, Formular.
- Externe Wege als normale Links; Formular bleibt darunter als ruhiger Fallback.
- Kein Wechsel-Link zum anderen Gesprächsweg im Conversion-Bereich.

### Formular

- Einspaltig, Label über Feld, Hilfe direkt darunter.
- Zielstruktur bis Prozessfreigabe: freiwillige Ansprache; genau eine bestätigte Rückkontaktmöglichkeit; freiwillige grobe Einordnung; Datenschutzhinweis.
- Keine Diagnose-, Gesundheits- oder intimen Pflichtfragen.
- Submit bleibt aktiv. Ungültige Eingabe erzeugt Fokus auf Fehlerzusammenfassung plus Inline-Fehler.
- Erfolg ersetzt Formular durch klare Bestätigung und erwarteten nächsten Schritt.
- Technische Felder bleiben unimplementiert, bis Prozess und Rechtstext freigegeben sind.

## 6. Zustände

| Zustand       | Spezifikation                                                                      |
| ------------- | ---------------------------------------------------------------------------------- |
| Default       | 1px-Rahmen, weiße oder ruhige Teal-Fläche                                          |
| Hover         | maximal `translateY(-2px)`, Ambient-Low-Schatten, keine Layoutverschiebung         |
| Focus visible | 3px `#173C3A`, 2px Offset; nie entfernt                                            |
| Selected      | 2px Dunkeltealrahmen, Häkchen, Text „Ausgewählt“                                   |
| Error         | `#8B3246`-Rahmen plus Symbol, Inline-Text und Zusammenfassung                      |
| Success       | `#276749` plus Häkchen und explizite Bestätigung                                   |
| Disabled      | nur technisch zwingend; Grund sichtbar; keine kritische Information nur im Tooltip |
| Loading       | Buttontext bleibt erkennbar, `aria-busy=true`, Doppelabsenden gesperrt             |

## 7. Responsive Verhalten

- `320–767px`: eine Spalte; Wegwahl und Personenmodule gestapelt; Touch-Ziele mindestens 44 × 44px.
- `768–1151px`: zwei Spalten nur bei ausreichender Textbreite; Hero darf noch einspaltig bleiben.
- ab `1152px`: 7/5-Hero, gleichwertige Personenmodule nebeneinander, maximale Contentbreite `1200px`.
- Keine Desktop-Reihenfolge per CSS visuell umdrehen, wenn Fokus-/DOM-Reihenfolge dadurch abweicht.

## 8. Motion

- Hero-Einstieg: Logo und Copy als ein orchestrierter, kurzer Fade/Translate von maximal `280ms`.
- Controls: Hover/Press `160–180ms`, `ease-out`.
- FAQ: keine animierte Höhe; Browserzustand oder kurzer Iconwechsel.
- Inhalte sind vor Animation sichtbar. Kein universelles Fade-in aller Sektionen.
- `prefers-reduced-motion: reduce`: Transformationen und Scrollverhalten sofort, Zustandswechsel ohne Bewegung.

## 9. Freigabeprüfung

- [ ] Gestaltungsrichtung „ruhiger Gesprächsraum“ freigegeben
- [ ] Palette und Gold-Regel freigegeben
- [ ] Inclusive Sans als lokale Schrift freigegeben oder Alternative genannt
- [ ] Bildstrategie ohne Stockmotive freigegeben
- [ ] Hero mit zentraler Zwei-Wege-Wahl freigegeben
- [ ] Dunkle Leistungsgrenzen-Sektion freigegeben
- [ ] Personenmodule und Kontaktseiten-Zustände freigegeben
- [ ] Motion ohne Scroll-Stacking freigegeben
- [ ] Danach: explizites Go für Astro-Bau

## 10. Noch gesperrt

Preis, exakte Qualifikationen, WhatsApp-Nummern, Calendly-Links, Formularprozess, Krisenhinweis, Rechtsdaten, Domain und produktive Indexierung bleiben offen. Designfreigabe ersetzt keine Go-live-Freigabe.

## 11. Quellenkritische Prüfung mit Designwissen 03

Nach ausdrücklicher Freigabe am 2026-08-12 wurde der Bauplan projektbezogen gegen NotebookLM „Designwissen 03 – Visuelles UI-Design“ (`a990f14e-6307-47e4-8cff-3f30fcd2e102`) geprüft. Conversation: `43190ec5-7073-40b4-99a4-8eae4fa85831`.

**Quellen im Notebook:**

- Timothy Samara: _Design Elements_, 3rd Edition
- Jeff Johnson: _Designing with the Mind in Mind_
- Adam Wathan und Steve Schoger: _Refactoring UI_

**Bestätigt und bereits im Bauplan enthalten:**

- eine Schriftfamilie mit klarer Hierarchie statt unnötiger Fontwechsel
- Gold nie als alleiniger Informationsträger
- hoher Luminanzkontrast zwischen Dunkelteal und Off-White
- Gruppierung primär durch Nähe und Abstand statt Boxenrauschen
- begrenzte 4-/8px-basierte Abstandsskala
- redundanter Auswahlzustand aus Rahmen, Häkchen und Text
- wenige kurze Bewegungen unter 300ms sowie `prefers-reduced-motion`

**Quellenkritisch nicht übernommen:**

- Erste NotebookLM-Antwort erfand einen persönlichen Buchungsbereich und bezeichnete die Website als App. Nach Korrektur nicht weiterverwendet.
- Serifenschrift plus Sans war eine projektspezifische Empfehlung, kein notwendiges Quellenprinzip. Der Bauplan bleibt bei einer humanistischen Sans.
- „Warm-Sand“ widerspricht der festgelegten klaren Off-White-/Teal-Richtung. `#F8FAF9` bleibt bestehen.
- Native `<details>/<summary>` werden nicht als automatische Garantie vollständiger Barrierefreiheit behandelt. Semantik, Fokus, Beschriftung und Browserprüfung bleiben Pflicht.
- Quellen zeigen Spannung zwischen flacher Gruppierung und subtiler Tiefe. UmmahCare bleibt flach als Standard; ein weicher Schatten ist nur als Interaktionszustand erlaubt.

## 12. Quellen- und Entscheidungsgrenze

Brandfarben wurden aus `assets/brand/ummahcare-logo-original-reference.png` abgeleitet. NotebookLM lieferte Designprinzipien, aber keine Rechts-, Medizin-, Islamrechts- oder Geschäftsentscheidungen. Konkrete Farbwerte, Schriftwahl und Komponentenlogik bleiben projektspezifische Designentscheidungen und benötigen Niks Implementierungsfreigabe.
