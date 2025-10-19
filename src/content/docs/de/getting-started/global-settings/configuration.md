---
title: Globale configuratie
description: Configureer DocKit's globale instellingen, thema opties en site-brede voorkeuren.

---

DocKit biedt flexibele globale configuratieopties om het uiterlijk, gedrag en functionaliteit van je documentatiesite aan te passen. Deze gids behandelt alle essentiële instellingen die je kunt configureren.

## Configuratiebestanden

DocKit gebruikt verschillende configuratiebestanden die zich bevinden in de `src/config/` directory:

```
src/config/
├── config.json      # Hoofdsite configuratie
├── theme.json       # Thema en styling opties  
├── menu.json        # Navigatiemenu structuur
├── social.json      # Social media links
└── locals.json      # Lokalisatie instellingen
```

## Hoofdconfiguratie (`config.json`)

Het hoofdconfiguratiebestand regelt de basisinstellingen van je site:

```json
{
  "site": {
    "title": "DocKit Documentatie",
    "description": "Mooie documentatie gemakkelijk gemaakt",
    "author": "Jouw naam",
    "email": "jouw.email@voorbeeld.com",
    "base_url": "https://jouwdomein.com"
  },
  "metadata": {
    "meta_author": "DocKit Team",
    "meta_image": "/images/og-image.png",
    "meta_description": "Maak mooie documentatie met DocKit"
  }
}
```

### Configuratieopties

| Optie | Type | Beschrijving |
|--------|------|-------------|
| `site.title` | String | De hoofdtitel van je site |
| `site.description` | String | Korte beschrijving van je documentatie |
| `site.author` | String | Standaard auteursnaam |
| `site.email` | String | Contact e-mailadres |
| `site.base_url` | String | De productie URL van je site |
| `metadata.meta_image` | String | Standaard Open Graph afbeelding |

## Thema configuratie (`theme.json`)

Pas het visuele uiterlijk van je site aan:

```json
{
  "theme": {
    "primary_color": "#2563eb",
    "secondary_color": "#64748b", 
    "accent_color": "#06b6d4",
    "background_color": "#ffffff",
    "text_color": "#1e293b"
  },
  "layout": {
    "sidebar_width": "280px",
    "content_max_width": "1200px",
    "enable_breadcrumbs": true,
    "enable_toc": true
  },
  "features": {
    "dark_mode": true,
    "search": true,
    "print_button": true,
    "edit_page": true
  }
}
```

### Thema opties

#### Kleuren
- `primary_color`: Hoofdmerkkleur voor links en knoppen
- `secondary_color`: Secundaire elementen en randen
- `accent_color`: Highlights en call-to-action elementen
- `background_color`: Hoofdachtergrondkleur
- `text_color`: Standaardtekstkleur

#### Layout
- `sidebar_width`: Breedte van de navigatiezijbalk
- `content_max_width`: Maximale breedte van het contentgebied
- `enable_breadcrumbs`: Toon/verberg breadcrumb navigatie
- `enable_toc`: Toon/verberg inhoudsopgave

#### Functies
- `dark_mode`: Donkere modus schakelaar inschakelen
- `search`: Site zoekfunctionaliteit inschakelen
- `print_button`: Printknop op pagina's tonen
- `edit_page`: "Bewerk deze pagina" links tonen

## Navigatiemenu (`menu.json`)

Definieer de navigatiestructuur van je site:

```json
{
  "main": [
    {
      "name": "Aan de slag",
      "url": "/getting-started/",
      "children": [
        {
          "name": "Introductie", 
          "url": "/getting-started/introduction/"
        },
        {
          "name": "Globale instellingen",
          "url": "/getting-started/global-settings/"
        }
      ]
    },
    {
      "name": "Gidsen",
      "url": "/guides/"
    },
    {
      "name": "Referentie", 
      "url": "/reference/"
    }
  ]
}
```

## Sociale links (`social.json`)

Configureer sociale media en externe links:

```json
{
  "social": [
    {
      "name": "GitHub",
      "icon": "github",
      "url": "https://github.com/jouwgebruikersnaam/jouw-repo"
    },
    {
      "name": "Twitter",
      "icon": "twitter", 
      "url": "https://twitter.com/jouwgebruikersnaam"
    },
    {
      "name": "Discord",
      "icon": "discord",
      "url": "https://discord.gg/your-server"
    }
  ]
}
```

## Lokalisatie (`locals.json`)

Stel meertalige ondersteuning in:

```json
{
  "defaultLocale": "nl",
  "locales": {
    "nl": {
      "label": "Nederlands",
      "lang": "nl",
      "dir": "ltr"
    },
    "en": {
      "label": "English", 
      "lang": "en",
      "dir": "ltr"
    }
  }
}
```

## Beste praktijken

### Prestaties
- Houd configuratiebestanden klein en gefocust
- Gebruik juiste datatypes (strings, booleans, numbers)
- Vermijd diep geneste structuren

### Onderhoud  
- Documenteer je aangepaste configuraties
- Gebruik versiebeheer voor configuratiewijzigingen
- Test configuratiewijzigingen eerst in ontwikkeling

### Beveiliging
- Commit nooit gevoelige data naar configuratiebestanden
- Gebruik omgevingsvariabelen voor geheimen
- Valideer configuratie-inputs