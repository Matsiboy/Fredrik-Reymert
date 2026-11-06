# Fredrik Reymert – nettside

En responsiv, enkeltside firmaside for tjenester innen dykking, arborist/trepleie og gartner-/anleggsarbeid.

Designet ble laget i MagicPath. Prosjektet bruker React, Vite og Tailwind og kan publiseres med GitHub Pages.

## Oppdater nettsiden

**Alle vanlige endringer i innhold gjøres i [src/App.jsx](src/App.jsx).** Der kan du redigere foretaksnavn, tjenester, tekst, erfaring, referanser, bilder og kontaktinformasjon. CSS- og byggekonfigurasjonen trenger normalt ikke endres.

**Før publisering:** Bytt eksempelopplysninger om erfaring, sertifiseringer, referanser, telefonnummer, e-post og organisasjonsnummer til dokumenterbare opplysninger. Illustrasjonsbilder fra Unsplash er ikke bilder av firmaets egne arbeider.

## Kjør lokalt

```bash
npm install
npm run dev
```

## Publiser på GitHub Pages

1. Gå til **Settings → Pages** i GitHub-repositoriet.
2. Under **Build and deployment → Source**, velg **GitHub Actions**.
3. Arbeidsflyten `.github/workflows/deploy.yml` bygger og publiserer automatisk ved hver push til `main`.

Planlagt adresse: https://matsiboy.github.io/Fredrik-Reymert/

Kontaktskjemaet åpner et e-postutkast hos besøkeren (`mailto:`); det sender ikke en melding fra en server og lagrer ikke data.
