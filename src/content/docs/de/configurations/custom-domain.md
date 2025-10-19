---
title: "Aangepast domein instellen"
description: Leer hoe je een aangepast domein configureert voor je Dockit documentatiesite met gedetailleerde installatie-instructies voor verschillende hosting platforms.
sidebar:
  order: 6
  label: "[information] Aangepast domein instellen"
---

Het instellen van een aangepast domein voor je Dockit documentatiesite helpt bij het vestigen van je merkidentiteit en zorgt voor een professionele uitstraling. Deze gids behandelt het complete proces voor het configureren van aangepaste domeinen op verschillende hosting platforms.

## Overzicht

Een aangepast domein stelt je in staat om je documentatie te serveren vanaf je eigen gemerkte URL in plaats van het standaard hosting provider subdomein. Bijvoorbeeld:

- **Standaard**: `your-docs.netlify.app` of `your-docs.vercel.app`
- **Aangepast**: `docs.jouwbedrijf.com` of `help.jouwbedrijf.com`

## Vereisten

Voordat je een aangepast domein instelt, zorg ervoor dat je hebt:

1. **Domein eigendom**: Je bezit of beheert het domein dat je wilt gebruiken
2. **DNS toegang**: Mogelijkheid om DNS-records voor je domein te wijzigen
3. **Gedeployde site**: Je Dockit site is al gedeployeerd en werkt
4. **SSL-certificaat**: HTTPS-ondersteuning (meestal automatisch verstrekt)

## Domein configuratie opties

### Subdomein instelling (Aanbevolen)

Een subdomein gebruiken is de meest voorkomende en aanbevolen benadering:

```
docs.jouwbedrijf.com
help.jouwbedrijf.com
support.jouwbedrijf.com
knowledge.jouwbedrijf.com
```

### Root domein instelling

Je kunt ook je root domein gebruiken, hoewel dit extra overwegingen vereist:

```
jouwbedrijf.com
jouwdocs.com
```

### Path-gebaseerde instelling

Serveer documentatie vanaf een specifiek pad:

```
jouwbedrijf.com/docs
jouwbedrijf.com/help
```

## Platform-specifieke installatie

### Netlify configuratie

#### Stap 1: Aangepast domein toevoegen in Netlify

1. Ga naar je site's **Site Settings** in Netlify dashboard
2. Navigeer naar **Domain management** → **Custom domains**
3. Klik op **Add custom domain**
4. Voer je domein in (bijv. `docs.jouwbedrijf.com`)

#### Stap 2: DNS-records configureren

Voeg een CNAME-record toe bij je DNS-provider:

```
Type: CNAME
Naam: docs (of je gekozen subdomein)
Waarde: your-site-name.netlify.app
TTL: 3600 (of Auto)
```

#### Stap 3: HTTPS inschakelen

Netlify verstrekt automatisch SSL-certificaten via Let's Encrypt:

1. Wacht op DNS-propagatie (tot 24 uur)
2. SSL-certificaat wordt automatisch uitgegeven
3. Forceer HTTPS-omleiding in **Site Settings** → **HTTPS**

#### Stap 4: _redirects configureren (Optioneel)

Maak een `_redirects` bestand in je `public/` directory:

```
# public/_redirects

# Forceer HTTPS
http://docs.jouwbedrijf.com/* https://docs.jouwbedrijf.com/:splat 301!

# Omleiden oude paden
/old-docs/* /new-docs/:splat 301
/v1/* /latest/:splat 301

# SPA fallback
/*  /index.html  200
```

### Vercel configuratie

#### Stap 1: Domein toevoegen in Vercel

1. Ga naar je project dashboard
2. Navigeer naar **Settings** → **Domains**
3. Voer je aangepaste domein in
4. Kies de deployment branch

#### Stap 2: DNS configureren

Voor subdomeinen, voeg een CNAME-record toe:

```
Type: CNAME
Naam: docs
Waarde: cname.vercel-dns.com
```

Voor root domeinen, voeg A-records toe:

```
Type: A
Naam: @
Waarde: 76.76.19.61

Type: A  
Naam: @
Waarde: 76.76.19.62
```

#### Stap 3: Domein verifiëren

Vercel zal automatisch je domein verifiëren en SSL-certificaten uitgeven.

#### Stap 4: vercel.json configureren

```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### GitHub Pages configuratie

#### Stap 1: Repository-instellingen configureren

1. Ga naar repository **Settings** → **Pages**
2. Selecteer bron (meestal `main` branch)
3. Voeg aangepast domein toe in het **Custom domain** veld

#### Stap 2: CNAME bestand maken

Maak een `CNAME` bestand in je repository root of `public/` directory:

```
docs.jouwbedrijf.com
```

#### Stap 3: DNS configureren

Voeg een CNAME-record toe die wijst naar GitHub Pages:

```
Type: CNAME
Naam: docs
Waarde: jouwgebruikersnaam.github.io
```

#### Stap 4: HTTPS inschakelen

GitHub Pages verstrekt automatisch SSL-certificaten voor aangepaste domeinen.

### Firebase Hosting configuratie

#### Stap 1: firebase.json configureren

```json
{
  "hosting": {
    "public": "dist",
    "site": "your-project-id",
    "cleanUrls": true,
    "trailingSlash": false,
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

#### Stap 2: Aangepast domein toevoegen

```bash
firebase hosting:channel:deploy live --only hosting
firebase hosting:site:get your-project-id
```

Voeg domein toe in Firebase Console:
1. Ga naar **Hosting** sectie
2. Klik op **Add custom domain**
3. Volg de verificatiestappen

#### Stap 3: DNS-configuratie

Voeg de verstrekte DNS-records toe uit Firebase Console.

## DNS Provider voorbeelden

### Cloudflare DNS

```
Type: CNAME
Naam: docs
Content: your-site.netlify.app
Proxy status: Proxied (oranje wolk)
TTL: Auto
```

Aanvullende Cloudflare-instellingen:
- **SSL/TLS**: Full (strict)
- **Always Use HTTPS**: Aan
- **Automatic HTTPS Rewrites**: Aan

### Google Domains

```
Type: CNAME
Naam: docs
Data: your-site.netlify.app.
TTL: 1 uur
```

### Namecheap DNS

```
Type: CNAME Record
Host: docs  
Waarde: your-site.netlify.app
TTL: Automatic
```

### Route 53 (AWS)

```json
{
  "Type": "CNAME",
  "Name": "docs.jouwbedrijf.com",
  "Value": "your-site.netlify.app",
  "TTL": 300
}
```

## SSL-certificaat configuratie

### Automatische SSL (Aanbevolen)

De meeste moderne hosting platforms bieden automatische SSL:

- **Netlify**: Let's Encrypt (automatisch)
- **Vercel**: Automatische SSL-verstrekking
- **GitHub Pages**: Automatisch voor aangepaste domeinen
- **Firebase**: Google-beheerde certificaten

### Handmatige SSL-configuratie

Voor geavanceerde setups heb je mogelijk handmatige SSL-configuratie nodig:

```nginx
server {
    listen 443 ssl http2;
    server_name docs.jouwbedrijf.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Geavanceerde configuratie

### Meerdere domeinen

Configureer meerdere domeinen voor dezelfde site:

```json
// netlify.toml
[[redirects]]
  from = "https://old-docs.com/*"
  to = "https://docs.jouwbedrijf.com/:splat"
  status = 301
  force = true

[[redirects]]
  from = "https://help.jouwbedrijf.com/*"
  to = "https://docs.jouwbedrijf.com/:splat"
  status = 301
  force = true
```

### Internationalisatie domeinen

Stel verschillende domeinen in voor verschillende talen:

```
docs.jouwbedrijf.com (Nederlands)
docs-en.jouwbedrijf.com (Engels)
docs-de.jouwbedrijf.com (Duits)
docs-fr.jouwbedrijf.com (Frans)
```

### CDN integratie

Configureer CDN voor betere prestaties:

```json
// vercel.json
{
  "functions": {
    "app/api/**/*.js": {
      "maxDuration": 30
    }
  },
  "regions": ["iad1", "sfo1", "fra1"],
  "github": {
    "enabled": false
  }
}
```

## Beveiligings beste praktijken

### HSTS configuratie

Schakel HTTP Strict Transport Security in:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### Content Security Policy

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; media-src 'self'; object-src 'none'; child-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'self';
```

### Aanvullende beveiligingsheaders

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Prestatie-optimalisatie

### DNS-optimalisatie

1. **Gebruik snelle DNS-providers**: Cloudflare, Route 53, of Google DNS
2. **Minimaliseer DNS-lookups**: Verminder externe resource-afhankelijkheden
3. **Schakel DNS prefetching in**: `<link rel="dns-prefetch" href="//example.com">`

### Caching-strategie

```
# Statische assets
Cache-Control: public, max-age=31536000, immutable

# HTML-bestanden
Cache-Control: public, max-age=0, must-revalidate

# API-responsen
Cache-Control: public, max-age=300, s-maxage=600
```

## Monitoring en analytics

### Domein gezondheidsmonitoring

Stel monitoring in voor je aangepaste domein:

```javascript
// Basis uptime monitoring
async function checkDomainHealth() {
  try {
    const response = await fetch('https://docs.jouwbedrijf.com/health');
    if (response.ok) {
      console.log('Domein is gezond');
    } else {
      console.error('Domein gezondheidscheck gefaald');
    }
  } catch (error) {
    console.error('Domein is onbereikbaar:', error);
  }
}

setInterval(checkDomainHealth, 300000); // Check elke 5 minuten
```

### Analytics configuratie

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID', {
    custom_map: {
      'custom_parameter': 'dimension1'
    }
  });
</script>
```

## Probleemoplossing

### Veelvoorkomende problemen

#### DNS-propagatie vertragingen

DNS-wijzigingen kunnen tot 48 uur duren om wereldwijd volledig te propageren:

```bash
# Check DNS-propagatie
dig docs.jouwbedrijf.com
nslookup docs.jouwbedrijf.com
```

Online tools:
- whatsmydns.net
- dnschecker.org

#### SSL-certificaat problemen

Veelvoorkomende SSL-problemen en oplossingen:

1. **Mixed content fouten**: Zorg ervoor dat alle resources HTTPS gebruiken
2. **Certificaat mismatch**: Verifieer dat domeinnamen overeenkomen met certificaat
3. **Verlopen certificaten**: Stel auto-vernieuwing in

#### Omleidingslussen

Voorkom oneindige omleidingen:

```
# Incorrect
https://docs.jouwbedrijf.com → https://docs.jouwbedrijf.com

# Correct  
http://docs.jouwbedrijf.com → https://docs.jouwbedrijf.com
```

#### Prestatieproblemen

Diagnoseer en los prestatieproblemen op:

```bash
# Test site snelheid
curl -w "@curl-format.txt" -o /dev/null -s "https://docs.jouwbedrijf.com"

# Check response headers
curl -I "https://docs.jouwbedrijf.com"
```

### Debug tools

#### DNS debugging

```bash
# Check A-records
dig A docs.jouwbedrijf.com

# Check CNAME-records  
dig CNAME docs.jouwbedrijf.com

# Check MX-records
dig MX jouwbedrijf.com

# Trace DNS-resolutie
dig +trace docs.jouwbedrijf.com
```

#### SSL debugging

```bash
# Check SSL-certificaat
openssl s_client -connect docs.jouwbedrijf.com:443 -servername docs.jouwbedrijf.com

# Test SSL-configuratie
curl -vI https://docs.jouwbedrijf.com
```

## Migratie strategieën

### Zero-downtime migratie

Plan voor naadloze domeinmigratie:

1. **Nieuw domein voorbereiden**: Volledig instellen en testen
2. **DNS bijwerken met lage TTL**: Propagatietijd verkorten
3. **Traffic monitoren**: Letten op eventuele problemen
4. **Omleidingen implementeren**: Gebruikers naar nieuw domein leiden
5. **Interne links bijwerken**: Alle referenties wijzigen
6. **Gebruikers informeren**: De wijziging communiceren

### Migratie checklist

- [ ] Domein eigendom geverifieerd
- [ ] DNS-records geconfigureerd
- [ ] SSL-certificaat actief
- [ ] Omleidingen geïmplementeerd
- [ ] Interne links bijgewerkt
- [ ] Externe referenties geïnformeerd
- [ ] Analytics tracking bijgewerkt
- [ ] SEO-overwegingen aangepakt
- [ ] Monitoring alerts geconfigureerd
- [ ] Rollback plan voorbereid

## Beste praktijken

1. **Kies betekenisvolle subdomeinen**: Gebruik duidelijke, beschrijvende namen
2. **Schakel overal HTTPS in**: Serveer nooit content over HTTP
3. **Monitor domein gezondheid**: Stel uptime monitoring in
4. **Plan voor rampen**: Heb backup domeinen klaar
5. **Documenteer je setup**: Houd configuratierecords bij
6. **Regelmatig onderhoud**: Review en update configuraties
7. **Beveiliging eerst**: Implementeer juiste headers en beleid
8. **Prestaties zijn belangrijk**: Optimaliseer voor snelheid en betrouwbaarheid

## Conclusie

Het instellen van een aangepast domein voor je Dockit documentatiesite verbetert je merkpresentatie en biedt een professionele ervaring voor je gebruikers. Volg de platform-specifieke instructies, implementeer juiste beveiligingsmaatregelen en monitor je domein's gezondheid voor de beste resultaten.

Vergeet niet om grondig te testen in een staging-omgeving voordat je wijzigingen aanbrengt aan productie domeinen, en heb altijd een rollback plan klaar voor het geval van problemen.