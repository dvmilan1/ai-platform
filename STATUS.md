# Meridavo — STATUS.md
> **Dit is de enige bron van waarheid.**
> Begin elke Claude-sessie met: kopieer dit bestand → plak in de chat.
> Update na elke bouwsessie en elke strategische beslissing.
> Commit altijd naar GitHub repo `ai-platform` na elke update.

---

## Laatste update
**Datum:** Mei 2026
**Huidige sprint:** Sprint 1 afronden — vanavond
**Volgende sprint:** Sprint 2 — Marketingwebsite

---

## Visie en positionering

**Wat is Meridavo?**
AI-platform dat fungeert als de verbindingslaag boven alle bedrijfssystemen. Verbindt data, begrijpt processen en stuurt werk automatisch aan met AI. Gericht op MKB dat werkt met 5-20 losse tools zonder overzicht.

**Kernboodschap**
"Wat als je organisatie nooit meer een stap mist? Een organisatie die verbonden is, werkt sneller. Ons platform brengt die verbinding - tussen mensen, systemen en beslissingen."

**Tagline**
"Overzicht op elk moment. Actie zonder vertraging."

**Openingsvraag pitch**
"Weet jij op dit moment precies wat er in je bedrijf speelt?"

**Positionering naar klanten**
AI recruitment & hiring performance platform - recruitment is de ingang, platform is modulair uitbreidbaar.

**Positionering intern / investeerders**
AI Business Orchestration Layer - verbindingslaag die alle systemen aanstuurt.

**Langetermijnvisie**
Groeien naar "operating system for business" - de AI-laag die alle systemen van een bedrijf aanstuurt en begrijpt.

**Wat we oplossen**
Geen tool-probleem maar een workflow-probleem. AI zegt wat je moet doen, waarom en in welke volgorde.

**Rode lijn**
"Is dit sterrenrestaurant-niveau, of nemen we de makkelijke weg?" Niet settelen voor een 7 als een 10 mogelijk is.

---

## Technische stack

| Component | Technologie | Details | Status |
|-----------|------------|---------|--------|
| Server | Hetzner VPS CAX11 | Nuremberg - IP 91.99.224.53 | Live |
| Domein | meridavo.com | | Live |
| SSL | Certbot | Automatisch verlengd | Actief |
| Webserver | Nginx | Reverse proxy | Actief |
| Process manager | PM2 | Herstart bij reboot | Actief |
| Runtime | Node.js v20 + Express | | Actief |
| Frontend | HTML / CSS / JavaScript | | Actief |
| Database | Supabase PostgreSQL | Frankfurt EU | Gekoppeld |
| Auth | Supabase Auth | | Werkt |
| AI | Claude API | Enige AI nu | Gekoppeld |
| Code | GitHub: ai-platform | | Actief |
| E-mail | Resend | | Nog niet |
| Betalingen | Mollie | | Nog niet |

**Bewuste keuzes:**
- Netlify vervangen door Hetzner VPS
- Alleen Claude nu - multi-AI op ideelijst
- Eigen integratie-engine - geen Zapier of Make

---

## Sprint 1 - Fundament
**Status: Gedeeltelijk klaar - vanavond afronden**

### Klaar
- Supabase gekoppeld
- 10 tabellen aangemaakt
- Row-level security per bedrijf
- Inlogsysteem werkt
- Server / domein / SSL / PM2
- CORS / rate limiting / max 5 inlogpogingen

### Vanavond bouwen
- [ ] RBAC rollen in code (Eigenaar, Manager, Medewerker, Gast)
- [ ] Actie-log middleware (6 maanden bewaren)
- [ ] Auto-uitloggen na 30 min inactiviteit
- [ ] Wachtwoord vergeten functie
- [ ] Data migreren en RLS testen
- [ ] AVG talentpool opt-in systeem

---

## Sprint 2 - Marketingwebsite
**Status: Nog niet begonnen**
- [ ] Homepagina hero met openingsvraag
- [ ] Probleemblok 3 doelgroepen
- [ ] Prijzenpagina configureerbaar
- [ ] 14-daagse trial zonder creditcard
- [ ] Aanmeldformulier 4 stappen
- [ ] Calendly koppeling
- [ ] Nginx beveiligingsheaders OWASP A02

---

## Sprint 3 - Beheerderspanel + Mollie + Partner
**Status: Nog niet begonnen**
- [ ] Admin dashboard
- [ ] Klantenbeheer en gebruikersbeheer
- [ ] Personalisatie per klant
- [ ] Churn signalering 14 dagen
- [ ] Mollie iDEAL + SEPA
- [ ] Abonnementenbeheer configureerbaar
- [ ] Facturen PDF
- [ ] Partnerprogramma
- [ ] 2FA eigenaar OWASP A07
- [ ] Logging mislukte pogingen OWASP A09

---

## Sprint 4 - Vacaturesysteem + AI tools
**Status: Nog niet begonnen**
- [ ] Vacature aanmaken met AI
- [ ] ROI dashboard
- [ ] Vacature widget 3 varianten
- [ ] Google Jobs JSON-LD automatisch
- [ ] Carrièrepagina-builder
- [ ] Wet DBA checker
- [ ] AI vacature-coach optioneel
- [ ] Scorecards optioneel
- [ ] Quality-of-hire tracker optioneel

---

## Sprint 5 - AI Decision Engine + Rapportages
**Status: Nog niet begonnen**
- [ ] Daily Briefing wow feature - max 3 prioriteiten
- [ ] Daily Briefing per e-mail 8:00
- [ ] Pijplijn signalering + kanaal aanbeveling
- [ ] Feedbackloop per gebruiker
- [ ] Talent rediscovery AVG-compliant
- [ ] Pipeline snapshot rapport
- [ ] Wekelijkse State of Hiring e-mail
- [ ] MKB-Hire-Index benchmark toggle
- [ ] Export PDF en CSV

---

## Sprint 6 - Platform updates + Kandidaatervaring
**Status: Nog niet begonnen**
- [ ] Dashboard cockpit 30-sec overzicht
- [ ] Semantisch zoeken vector-embeddings
- [ ] Kandidaatkaart uitbreiden
- [ ] No-login sollicitatie 3 stappen max 2 min
- [ ] Status-transparantie verwachte beslissingsdatum
- [ ] Anonieme NPS kandidaten
- [ ] WhatsApp sollicitatie optioneel

---

## Sprint 7 - Lancering
**Status: Nog niet begonnen - deadline EU AI Act 2 augustus 2026**
- [ ] Onboarding restaurant-principe
- [ ] Aha-moment binnen 60 sec
- [ ] AI-vragenknop altijd zichtbaar
- [ ] Onboarding checklist max 5 acties
- [ ] E-mail lifecycle dag 1/3/7/14
- [ ] EU AI Act compliance
- [ ] Content-engine wekelijks artikel
- [ ] OWASP A03/A05/A08/A10
- [ ] Eindtest volledige flow

---

## Pakketstructuur

### Product A - Self-service

| Pakket | Prijs | Gebruikers |
|--------|-------|-----------|
| Starter | ~49/mnd | 1 |
| Groei | ~99/mnd | 3 |
| Business | ~249/mnd | 10 |
| Enterprise | Maatwerk | Onbeperkt |

> Prijzen indicatief - nog definitief te bepalen. Altijd configureerbaar vanuit beheerderspanel, nooit hardcoded. Modules per pakket uitwerken voor Sprint 2.

### Product B - Done-for-you

| Dienst | Prijs |
|--------|-------|
| AI-scan | 500-1000 eenmalig |
| Basis implementatie | 2000-5000 eenmalig |
| Volledig maatwerk | 5000-15000 eenmalig |
| Maandelijks beheer | 250-750/mnd |

**Partner vergoeding:** 15-20% configureerbaar
**Partners:** SRA, OAMKB, Novaa

---

## Doelgroepen

| Doelgroep | Pijnpunt | Timing |
|-----------|---------|--------|
| Recruitmentbureaus | Meerdere opdrachtgevers geen overzicht | Nu |
| Interne HR / recruiters | LinkedIn + Excel geen systeem | Nu |
| MKB zakelijk | 5-20 losse tools | Jaar 1 |
| Sector specifiek | Horeca zorg finance | Jaar 2+ |

---

## Koppelingen - prioriteit na lancering
1. HubSpot
2. Pipedrive
3. Moneybird
4. Exact Online
5. AFAS

**Gratis publieke API's toevoegen:**
- KvK API - bedrijfsinformatie bij aanmelding
- CBS loondata - benchmarks
- BTW-validatie
- Google Maps - locatie vacatures

**Vangnet zonder directe koppeling:**
- CSV upload
- API webhook ontvangen
- Handmatige invoer met AI-verrijking

---

## Kosten

| Component | Productie |
|-----------|----------|
| Hetzner VPS | 3.29/mnd |
| Supabase | 25/mnd |
| Claude API | 20-50/mnd |
| Daily Briefing engine | 8-25/mnd |
| Resend | 5-20/mnd |
| Mollie | 0.25 + 1.8% per transactie |
| Domein | 10/jaar |
| **Totaal** | **31-103/mnd** |

Break-even: 2-3 klanten. Winstgevend bij 3-5 klanten.

---

## Merkidentiteit

**Kleuren — exact uit logo (imagecolorpicker.com)**

| Variabele | HEX | Gebruik |
|-----------|-----|---------|
| --green-dark | #325d4b | Donkerste groen M-symbool |
| --green-mid | #32946d | Lichtste groen M-symbool |
| --white | #f6f8f6 | Tekst, MERIDAVO lettertype |
| --black | #010b09 | Achtergrond donker |

**CSS variabelen — altijd via :root aanpassen, nooit hardcoden:**
```css
:root {
  --green-dark:  #325d4b;
  --green-mid:   #32946d;
  --white:       #f6f8f6;
  --black:       #010b09;
}
```

**Logo — gebruik altijd het PNG-bestand:**
- Bestand: `/assets/logo-meridavo.png`
- Nooit nabouwen in CSS — altijd het originele bestand gebruiken
- Vanavond uploaden naar GitHub onder /assets/

**Lettertypes:**
| Gebruik | Font |
|---------|------|
| Headers | Syne |
| Body | DM Sans |
| Mono / code | DM Mono |

**Kleurprincipe:**
- Primair: groen + wit
- Zwart als extra accent — niet dominant
- Alles wijzigbaar via CSS variabelen in één bestand
- Later: kleur per klant instelbaar via beheerderspanel

---

## Wetgeving
- AVG: data in EU, RLS, verwerkersovereenkomst, audit-log 6 maanden, talentpool opt-in max 1 jaar
- EU AI Act: deadline 2 augustus 2026 - Sprint 7
- Wet DBA: checker ingebouwd als standaard feature

---

## Ideelijst - later beslissen
- Multi-AI orchestratie Claude + GPT-4o + Gemini + DeepSeek
- Self-scheduling kandidaten
- One-way video sollicitaties
- Skills taxonomie Nederland
- Internal mobility module
- Medewerkersbegeleiding
- Referral-systeem
- ROI-calculator website na klantdata
- Mobiele native app
- Voice AI screening
- Publieke API + webhooks
- White-label voor bureaus
- Besparingsteller subtiel
- Recruitmentbureau-pilots
- Agentic AI sourcing
- Community na 100+ klanten

---

## Werkwijze

**Begin elke sessie:**
1. Open GitHub repo ai-platform
2. Kopieer STATUS.md volledig
3. Plak in Claude chat
4. Direct bouwen

**Na elke bouwsessie:**
1. Zeg "Update STATUS.md"
2. Claude maakt nieuwe versie
3. Commit naar GitHub

**Na elke strategische beslissing:**
Direct verwerken voor je de chat sluit.

---

## Documenten overzicht

| Document | Versie | Status |
|----------|--------|--------|
| Systeemoverzicht | v3.1 | Klaar |
| Bouwplan | v3.1 | Klaar |
| Kennisbank template | v1.0 | Klaar |
| STATUS.md | v1.1 | Dit bestand |
