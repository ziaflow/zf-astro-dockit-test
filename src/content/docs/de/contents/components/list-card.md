---
title: ListCard Component
description: Een kaartcomponent voor het weergeven van gecategoriseerde contentlijsten met iconen en artikelaantallen.
sidebar:
  order: 3
---

Het ListCard component creëert aantrekkelijke kaarten die contentcategorieën weergeven met iconen, titels, artikelaantallen en optionele uitgelichte afbeeldingen. Perfect voor het organiseren van documentatiesecties of functielijsten.

## Props

| Prop | Type | Vereist | Beschrijving |
|------|------|----------|-------------|
| `title` | string | Ja | De hoofdtitel getoond in de kaartheader |
| `imageIcon` | string | Ja | Pad naar het icoonafbeelding (40x40px aanbevolen) |
| `number` | number | Ja | Aantal artikelen of items in deze categorie |
| `image` | string | Nee | Optionele uitgelichte afbeelding voor brede kaart layout |

## Functies

- **Icoon weergave** - Toont categorie iconen met juiste alt tekst
- **Artikel teller** - Toont het aantal items in elke categorie
- **Twee layout modi** - Compacte en brede layouts gebaseerd op afbeelding aanwezigheid
- **Responsief ontwerp** - Past zich aan aan verschillende schermformaten
- **Slot content** - Accepteert aangepaste content in de kaart body
- **Afbeelding integratie** - Gebruikt ImageMod component voor geoptimaliseerde afbeeldingen

## Gebruiksvoorbeelden

### Basis ListCard
```mdx
import ListCard from "../../../../components/user-components/ListCard.astro";

<ListCard
  title="Aan de slag"
  imageIcon="/sidebar-icons/Introduction.svg"
  number={5}
>
  Essentiële gidsen om je snel op weg te helpen met Dockit.
</ListCard>
```

### ListCard met uitgelichte afbeelding
```mdx
import ListCard from "../../../../components/user-components/ListCard.astro";

<ListCard
  title="Componenten"
  imageIcon="/sidebar-icons/Themes.svg"
  number={12}
  image="/assets/components-preview.png"
>
  Leer hoe je alle beschikbare componenten gebruikt en aanpast in je documentatie.
</ListCard>
```

### Meerdere ListCards in Grid
```mdx
import ListCard from "../../../../components/user-components/ListCard.astro";
import Grid from "../../../../components/user-components/Grid.astro";

<Grid columns={2}>
  <ListCard
    title="Configuratie"
    imageIcon="/sidebar-icons/Global Settings.svg"
    number={8}
  >
    Pas je site-instellingen, thema en functionaliteit aan.
  </ListCard>

  <ListCard
    title="Navigatie"
    imageIcon="/sidebar-icons/Navigation.svg"
    number={6}
  >
    Stel menu's, breadcrumbs en site navigatie in.
  </ListCard>
</Grid>
```

### ListCard in een functielijst
```mdx
import ListCard from "../../../../components/user-components/ListCard.astro";

<div style="display: flex; flex-direction: column; gap: 1rem;">
  <ListCard
    title="API Referentie"
    imageIcon="/sidebar-icons/API.svg"
    number={25}
  >
    Volledige documentatie van alle beschikbare API endpoints en parameters.
  </ListCard>
  
  <ListCard
    title="Voorbeelden"
    imageIcon="/sidebar-icons/Examples.svg"
    number={15}
  >
    Praktische codevoorbeelden en use cases voor veelvoorkomende scenario's.
  </ListCard>
</div>
```

## Styling

Het component bevat ingebouwde styling voor:
- **Compacte layout**: Icoon, titel en teller in één rij
- **Brede layout**: Uitgelichte afbeelding met content ernaast
- **Hover effecten**: Subtiele animaties bij mouse hover
- **Donkere modus**: Automatische kleur aanpassingen

## Beste praktijken

- Gebruik consistente icoon stijlen en formaten
- Houd titels kort en beschrijvend
- Update de `number` prop wanneer content wijzigt
- Groepeer gerelateerde ListCards samen voor betere organisatie
- Gebruik uitgelichte afbeeldingen spaarzaam voor visuele balans