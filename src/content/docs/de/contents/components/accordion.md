---
title: Accordion Component
description: Een inklapbaar content component voor het organiseren van informatie in uitklapbare secties.
sidebar:
  order: 6
---

Het Accordion component creëert inklapbare content secties die helpen informatie op een ruimte-efficiënte manier te organiseren. Gebruikers kunnen op de header klikken om de inhoud uit te klappen of in te klappen.

## Props

| Prop | Type | Vereist | Beschrijving |
|------|------|----------|-------------|
| `type` | string | Nee | Data attribuut voor styling of JavaScript targeting |
| `question` | string | Ja | De header tekst getoond in de accordion |
| `answer` | string/HTML | Ja | De inhoud getoond wanneer accordion is uitgeklapd |

## Functies

- **Interactieve Toggle** - Klik om inhoud uit/in te klappen
- **Icon animatie** - Plus icoon roteert wanneer geschakeld
- **Responsief ontwerp** - Werkt op alle schermformaten
- **Aangepaste styling** - Ondersteunt thema aanpassing
- **Toegankelijk** - Toetsenbord navigatie ondersteuning

## Gebruiksvoorbeelden

### Basis Accordion
```mdx
import Accordion from "../../../../components/user-components/Accordion.astro";

<Accordion 
  question="Wat is Dockit?" 
  answer="Dockit is een modern documentatiethema gebouwd met Astro en Starlight." 
/>
```

### Accordion met Type
```mdx
import Accordion from "../../../../components/user-components/Accordion.astro";

<Accordion 
  type="faq"
  question="Hoe pas ik het thema aan?" 
  answer="Je kunt kleuren, lettertypen en layout aanpassen via de configuratiebestanden." 
/>
```

### Meerdere Accordions
```mdx
import Accordion from "../../../../components/user-components/Accordion.astro";

<Accordion 
  question="Installatie" 
  answer="Voer npm install uit om te beginnen met Dockit." 
/>

<Accordion 
  question="Configuratie" 
  answer="Bewerk het astro.config.mjs bestand om je site aan te passen." 
/>

<Accordion 
  question="Deployment" 
  answer="Deploy naar Netlify, Vercel of elke statische hosting provider." 
/>
```

## Styling

Het component bevat ingebouwde stijlen met ondersteuning voor:
- Lichte en donkere thema varianten
- Hover en focus staten
- Vloeiende animaties
- Aangepaste spatiëring en typografie

## Beste praktijken

- Gebruik duidelijke, beknopte vragen als headers
- Houd antwoordinhoud gefocust en scanbaar
- Groepeer gerelateerde accordions samen
- Gebruik de `type` prop voor consistente styling over vergelijkbare accordions