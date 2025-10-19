---
title: NewCard Component
description: Een moderne kaartcomponent met iconen, hover effecten en gradient randen voor het tonen van content.
sidebar:
  order: 2
---

Het NewCard component is een veelzijdig, modern kaartelement perfect voor het tonen van functies, diensten of contentblokken. Het bevat mooie styling, icoon ondersteuning en interactieve hover effecten.

## Props

| Prop | Type | Vereist | Standaard | Beschrijving |
|------|------|----------|---------|-------------|
| `icon` | string | Nee | - | Starlight icoon naam om weer te geven |
| `title` | string | Ja | - | De kaart titel (ondersteunt HTML) |
| `iconColor` | string | Nee | - | Aangepaste kleur voor het icoon |
| `size` | string | Nee | "large" | Kaart grootte variant ("large" of "sm") |

## Functies

- **Icoon integratie** - Gebruikt Starlight's icoon systeem
- **Twee grootte varianten** - Grote (standaard) en kleine opties
- **Hover animatie** - Pijl icoon met rotatie effect
- **Gradient styling** - Moderne gradient randen en achtergronden
- **HTML ondersteuning** - Titel prop ondersteunt HTML content
- **Responsief ontwerp** - Past zich aan aan verschillende schermformaten
- **Slot content** - Accepteert aangepaste content in de kaart body

## Gebruiksvoorbeelden

### Basis NewCard
```mdx
import NewCard from "../../../../components/user-components/NewCard.astro";

<NewCard 
  title="Aan de slag"
  icon="rocket"
>
  Snelle setup gids om je documentatiesite in minuten draaiend te krijgen.
</NewCard>
```

### Kleine kaart variant
```mdx
import NewCard from "../../../../components/user-components/NewCard.astro";

<NewCard 
  title="Configuratie"
  icon="setting"
  size="sm"
>
  Pas je site-instellingen en uiterlijk aan.
</NewCard>
```

### Kaart met aangepaste icoon kleur
```mdx
import NewCard from "../../../../components/user-components/NewCard.astro";

<NewCard 
  title="API Referentie"
  icon="document"
  iconColor="#3b82f6"
>
  Volledige API documentatie en voorbeelden.
</NewCard>
```

### Grid van NewCards
```mdx
import NewCard from "../../../../components/user-components/NewCard.astro";
import Grid from "../../../../components/user-components/Grid.astro";

<Grid columns={3}>
  <NewCard title="Installeren" icon="add-document">
    Kom snel aan de slag
  </NewCard>
  
  <NewCard title="Configureren" icon="setting">
    Pas je setup aan
  </NewCard>
  
  <NewCard title="Deployen" icon="rocket">
    Publiceer je site
  </NewCard>
</Grid>
```

## Grootte varianten

### Grote kaarten (Standaard)
- Volledige padding (py-12 px-10)
- 2rem icoon grootte
- Bevat hover pijl animatie
- Best voor functie showcases

### Kleine kaarten
- Compacte padding (p-6)
- 1.4rem icoon grootte
- Geen pijl animatie
- Perfect voor compacte layouts

## Beschikbare iconen

Het component gebruikt Starlight's icoon bibliotheek. Populaire iconen omvatten:

- `rocket` - Voor starts/lanceringen
- `setting` - Voor configuratie
- `document` - Voor documentatie
- `add-document` - Voor nieuwe content
- `laptop` - Voor development
- `star` - Voor uitgelichte content

Zie de [Starlight icoon referentie](https://starlight.astro.build/reference/icons/) voor een complete lijst.

## Styling

Het component bevat:
- **Gradient achtergronden** - Subtiele kleurovergangen
- **Border effecten** - Moderne gradient randen
- **Hover staten** - Vloeiende overgangen
- **Dark mode ondersteuning** - Automatische kleur aanpassingen

## Beste praktijken

- Gebruik consistente iconen binnen een grid
- Houd titels kort en impactvol
- Groepeer gerelateerde kaarten samen
- Gebruik aangepaste icoon kleuren spaarzaam
- Test beide grootte varianten om de beste fit te vinden