---
title: Button Component
description: Een eenvoudig, aanpasbaar button component met meerdere stijlvarianten.
sidebar:
  order: 5
---

Het Button component biedt een schoon, toegankelijk button element dat kan worden gestyled met verschillende varianten om te passen bij je ontwerpbehoeften.

## Props

| Prop | Type | Vereist | Beschrijving |
|------|------|----------|-------------|
| `label` | string | Ja | De tekst getoond op de knop |
| `link` | string | Ja | De URL waar de knop naar toe moet linken |
| `variant` | string | Nee | Stijlvariant (primary, secondary, outline, etc.) |

## Functies

- **Meerdere varianten** - Verschillende visuele stijlen voor verschillende gebruikssituaties
- **Toegankelijke links** - Juist gestructureerde anchor elementen
- **Responsief ontwerp** - Past zich aan aan verschillende schermformaten
- **Aangepaste styling** - Eenvoudig uit te breiden met extra CSS klassen
- **Semantische HTML** - Gebruikt juiste link elementen voor navigatie

## Gebruiksvoorbeelden

### Primaire knop
```mdx
import Button from "../../../../components/user-components/Button.astro";

<Button 
  label="Aan de slag" 
  link="/getting-started" 
  variant="primary" 
/>
```

### Secundaire knop
```mdx
import Button from "../../../../components/user-components/Button.astro";

<Button 
  label="Meer leren" 
  link="/docs" 
  variant="secondary" 
/>
```

### Outline knop
```mdx
import Button from "../../../../components/user-components/Button.astro";

<Button 
  label="Bekijk bron" 
  link="https://github.com/your-repo" 
  variant="outline" 
/>
```

### Meerdere knoppen
```mdx
import Button from "../../../../components/user-components/Button.astro";

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <Button 
    label="Download" 
    link="/download" 
    variant="primary" 
  />
  <Button 
    label="Documentatie" 
    link="/docs" 
    variant="secondary" 
  />
  <Button 
    label="GitHub" 
    link="https://github.com/your-repo" 
    variant="outline" 
  />
</div>
```

## Beschikbare varianten

Het component ondersteunt verschillende knopstijlen via de `variant` prop:

- **primary** - Hoofdstijl voor call-to-action
- **secondary** - Secundaire actie styling  
- **outline** - Gecontureerde knopstijl
- **ghost** - Minimale styling met hover effecten
- **danger** - Voor destructieve of waarschuwingsacties

## Styling

Knoppen erven styling van het thema's button CSS klassen:
- `.btn` - Basis knopstijlen
- `.btn-primary` - Primaire variant stijlen
- `.btn-secondary` - Secundaire variant stijlen
- `.btn-outline` - Outline variant stijlen