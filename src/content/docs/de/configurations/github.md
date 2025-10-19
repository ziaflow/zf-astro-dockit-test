---
title: "GitHub integratie"
description: Configureer GitHub-integratie voor je Dockit documentatiesite
sidebar:
  order: 5
  label: "[github] GitHub integratie"
---

Verbind je Dockit documentatiesite met GitHub om collaboratieve bewerking en versiebeheer functies in te schakelen.

## Snelle installatie

1. **Repository verbinding**: Koppel je documentatierepository om GitHub-functies in te schakelen
2. **Authenticatie**: Stel GitHub-authenticatie in voor bijdragers
3. **Branch beheer**: Configureer welke branches te gebruiken voor documentatie

## Functies

### Bewerken op GitHub
Schakel "Bewerk deze pagina" links in die gebruikers doorsturen naar het direct bewerken van documentatie op GitHub.

### Versiebeheer
Houd wijzigingen in je documentatie bij met volledige Git-geschiedenis en commit tracking.

### Collaboratieve bewerking
Sta teamleden toe om bij te dragen aan documentatie via GitHub pull requests.

### Automatische deployments
Stel automatische deployments in wanneer wijzigingen worden gepusht naar je main branch.

## Configuratie

### Basis installatie

```json
{
  "github": {
    "repository": "your-username/your-docs-repo",
    "branch": "main",
    "editLinks": true
  }
}
```

### Authenticatie

Configureer GitHub-authenticatie in je site-instellingen:

```javascript
// Voorbeeld GitHub auth configuratie
const githubConfig = {
  clientId: "your-github-app-id",
  redirectUri: "https://your-docs-site.com/auth/callback"
};
```

## Gebruiksvoorbeelden

### Bewerken links
Elke pagina toont een "Bewerken op GitHub" link die het bijbehorende bestand opent in GitHub's editor.

### Pull Request workflow
1. Bijdragers klikken op "Bewerken op GitHub"
2. Maken wijzigingen in GitHub's web editor
3. Dienen pull request in
4. Beoordelen en samenvoegen wijzigingen
5. Site wordt automatisch opnieuw gedeployed

## Beste praktijken

- Houd je repository publiek voor open source documentatie
- Gebruik duidelijke commit berichten voor documentatiewijzigingen
- Stel branch protection rules in voor kwaliteitscontrole
- Schakel GitHub Pages in voor automatische hosting

## Probleemoplossing

### Veelvoorkomende problemen

**Bewerkingslinks werken niet**: Controleer repository URL configuratie
**Authenticatiefouten**: Verifieer GitHub app credentials
**Deployment fouten**: Bekijk GitHub Actions logs

Voor meer gedetailleerde configuratie-opties, raadpleeg de GitHub integratie documentatie.