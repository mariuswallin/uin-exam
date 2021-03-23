## Installere alt her med

- npm install eller bare skriv yarn

## SLETT disse hvis du ikke skal bruke Styled Components

/styles/Global.js
/styles/Styles.js
/styles/Theme.js
babel-plugin-macros.config.js
styled-components i package.json
babel-plugin-macros i package.json

## Oppdater disse hvis du IKKE skal bruke Styled Components

App.js => Fjerne <Theme>
Component.js => Slette denne

## Du MÅ

- Gjøre nødvendige endringer på navn på filer (eks. Component.js, yourService.js) og
  andre steder det gir mening. Dette er KUN en boilerplate
- Legge til filer, funksjonalitet etc som du trenger for å løse oppgaven du skal gjøre

## Lage .env fil

Du MÅ lage en .env fil hvor du limer inn det som står i .env.demo at det skal virke
Har laget en .env.demo fil med en variable som eksempel
For å bruke den må man skrive process.env.REACT_APP_ADD_YOUR_NAME
F.eks trenger vi den der vi setter opp Sanity (se utils/client.js)

## Det kan hende du MÅ

- Restarte VSCode for etter at du har endret navn på .env filen da eslint kan krangle

## Se readme filer i hver mappe

Les README.md i hver mappe om du vil se hva mappen er til
