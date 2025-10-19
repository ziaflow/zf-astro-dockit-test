---
title: Grid Component
description: Een flexibel grid layout systeem voor het organiseren van content in responsieve kolommen.
sidebar:
  order: 4
---

Het Grid component biedt een responsief grid layout systeem dat zich automatisch aanpast aan verschillende schermformaten, waardoor het perfect is voor het organiseren van kaarten, contentblokken of andere elementen.

## Props

| Prop | Type | Vereist | Standaard | Beschrijving |
|------|------|----------|---------|-------------|
| `columns` | number | Nee | 2 | Aantal kolommen om weer te geven op grotere schermen |

## Functies

- **Responsief ontwerp** - Past automatisch aan van meerkoloms naar enkele kolom op mobiel
- **Flexibele kolommen** - Ondersteunt 1-6 kolommen op grotere schermen
- **Automatische spatiëring** - Consistente ruimtes tussen grid items
- **Slot content** - Accepteert elke content als kinderen
- **Mobile-first** - Enkele kolom op kleine schermen, aanpasbaar op grotere schermen

## Gebruiksvoorbeelden

### Twee kolommen grid (Standaard)
```mdx
import Grid from "../../../../components/user-components/Grid.astro";
import { Card } from '@astrojs/starlight/components';

<Grid>
  <Card title="Functie een">
    Beschrijving van de eerste functie
  </Card>
  <Card title="Functie twee">
    Beschrijving van de tweede functie
  </Card>
</Grid>
```

### Drie kolommen grid
```mdx
import Grid from "../../../../components/user-components/Grid.astro";
import { Card } from '@astrojs/starlight/components';

<Grid columns={3}>
  <Card title="Aan de slag">
    Snelstartgids
  </Card>
  <Card title="Configuratie">
    Setup en aanpassing
  </Card>
  <Card title="Deployment">
    Je site publiceren
  </Card>
</Grid>
```

### Vier kolommen grid
```mdx
import Grid from "../../../../components/user-components/Grid.astro";
import { Card } from '@astrojs/starlight/components';

<Grid columns={4}>
  <Card title="HTML">
    Semantische markup
  </Card>
  <Card title="CSS">
    Moderne styling
  </Card>
  <Card title="JavaScript">
    Interactieve functies
  </Card>
  <Card title="Astro">
    Statische site generatie
  </Card>
</Grid>
```

### Gemengde content grid
```mdx
import Grid from "../../../../components/user-components/Grid.astro";
import { Card, Badge } from '@astrojs/starlight/components';

<Grid columns={2}>
  <div>
    <h3>Documentatie</h3>
    <p>Complete gidsen en API referentie</p>
    <Badge text="Bijgewerkt" variant="success" />
  </div>
  
  <Card title="Snelle links">
    - [Installatie](/install)
    - [Configuratie](/config)
    - [Voorbeelden](/examples)
  </Card>
</Grid>
```

## Responsief gedrag

Het Grid component past zich aan verschillende schermformaten aan:
- **Mobiel**: Altijd enkele kolom
- **Tablet**: 2 kolommen (ongeacht columns prop)
- **Desktop**: Gespecificeerde aantal kolommen