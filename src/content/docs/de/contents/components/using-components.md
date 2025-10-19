---
title: Componenten gebruiken
description: Leer hoe je componenten gebruikt en aanpast in je documentatie.
sidebar:
  order: 1
---

Dockit biedt meerdere component opties voor het bouwen van rijke, interactieve documentatie. Je hebt toegang tot zowel Astro Starlight's ingebouwde componenten als een verzameling van aangepaste vooraf gemaakte componenten.

## Astro Starlight componenten

Je kunt alle krachtige componenten gebruiken die komen met het Astro Starlight framework. Deze omvatten kaarten, badges, code blokken, tabs en vele andere nuttige documentatie-elementen.

Voor volledige documentatie en gebruiksvoorbeelden van alle beschikbare Starlight componenten, bezoek:
**[https://starlight.astro.build/components/using-components/](https://starlight.astro.build/components/using-components/)**

## Dockit vooraf gemaakte componenten

Naast Starlight componenten, bevat Dockit een verzameling van speciaal gebouwde componenten die specifiek zijn ontworpen voor documentatiebehoeften. Al deze componenten bevinden zich in de `user-components` map.

### Beschikbare aangepaste componenten

De volgende vooraf gemaakte componenten zijn beschikbaar voor gebruik in je documentatie:

- **[Accordion](./accordion)** - Inklapbare content secties voor het organiseren van informatie
- **[Button](./button)** - Aanpasbare knop elementen met verschillende stijlen
- **[Grid](./grid)** - Flexibel grid layout systeem voor het organiseren van content
- **[ListCard](./list-card)** - Kaart-gebaseerde lijsten voor het tonen van functies of items
- **[NewCard](./new-card)** - Verbeterd kaart component met moderne styling

Elk component heeft zijn eigen gedetailleerde documentatiepagina met gebruiksvoorbeelden, props en beste praktijken.

## Component locatie

Alle aangepaste componenten zijn georganiseerd in de volgende structuur:

```
src/
  components/
    user-components/     ← Hoofdaangepaste componenten
      ├── Accordion.astro
      ├── Button.astro
      ├── Grid.astro
      ├── ListCard.astro
      └── NewCard.astro
```

## Aan de slag

Om te beginnen met het gebruik van deze componenten in je documentatie, importeer ze eenvoudig aan het begin van je MDX bestanden en gebruik ze zoals getoond in de individuele component documentatie.