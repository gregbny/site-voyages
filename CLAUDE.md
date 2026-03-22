# Site Voyages — Famille Bonato

## Architecture

```
site-voyages/
  index.html                     # Page d'accueil (liste des voyages)
  framework/
    style.css                    # Design system partagé
    engine.js                    # Moteur de rendu (lit TRIP, génère le DOM)
  trips/
    <trip-id>/
      content.md                 # Contenu éditorial (format libre, travaillé avec d'autres agents)
      places.md                  # Lieux structurés (coordonnées, prix, etc.)
      trip.js                    # Fichier généré — lu par le site
      index.html                 # Shell (~15 lignes, charge framework + trip.js)
```

## Workflow

1. **Contenu** : Les fichiers `.md` sont travaillés librement (Cowork, Gemini, Claude, etc.)
2. **Publication** : Quand l'utilisateur dit "publie [voyage]", Claude lit les `.md` et génère le `trip.js`
3. **Site** : Le navigateur charge `index.html` → `trip.js` → `engine.js` et affiche le guide

## Commande "publie"

Quand l'utilisateur demande de publier un voyage :

1. Lire `content.md` et `places.md` du dossier du voyage
2. Générer `trip.js` selon le format ci-dessous
3. Le site fonctionne immédiatement (ouvrir `index.html` dans le navigateur)

## Format trip.js

```js
const TRIP = {
  meta: {
    id: "trip-id",
    title: "Titre du voyage",
    flag: "🇬🇧",           // emoji drapeau
    heroEmoji: "🏙",         // grand emoji décoratif du hero
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [                  // badges sous le titre
      { text: "Dates", highlight: true },
      { text: "👨‍👩‍👧‍👦 2A + 2E (7 ans)" },
      { text: "🏨 Base" },
    ],
    people: ["Greg", "Sofie"],
    personTag: "♥",           // marqueur pour les choix de Sofie dans les labels carte
    mapCenter: [lat, lng],    // centre de la carte générale
    mapZoom: 12
  },

  // Liste ordonnée des pages (onglets)
  pages: [
    // --- PAGE TYPE: custom (avant le départ, etc.) ---
    {
      id: "avant",
      tab: "✈️ Avant",
      type: "custom",
      banner: { accent: "amber", badge: "Avant le départ", title: "...", sub: "..." },
      sections: [
        { type: "label", text: "📍 Titre de section" },
        { type: "cards", items: [/* cardObj */] },
        { type: "infobox", color: "red|green|amber|coral|violet|teal", title: "...", items: ["HTML string..."] },
        { type: "infoboxGroup", items: [/* infobox objects */] },
        { type: "apps", label: "...", items: [{ icon: "🗺", name: "App", desc: "...", tag: "must|nice", tagLabel: "Label" }] },
        { type: "divider" },
        { type: "spacer" },
      ]
    },

    // --- PAGE TYPE: day ---
    {
      id: "jour1",
      tab: "Lundi J1",
      type: "day",
      dayNumber: 1,           // correspond à mapData[1] et dayColors[1]
      banner: { accent: "amber", badge: "Jour 1 · Date", title: "Thème", sub: "Itinéraire" },
      timeline: [
        {
          time: "09h00\n12h00",  // \n = retour à la ligne
          title: "🏛 Titre activité",
          items: [
            { text: "Description..." },
            { text: "Astuce...", type: "tip" },      // vert avec ✦
            { text: "Détail...", type: "sub" },       // gris avec ↳
            { text: "Attention...", type: "warn" },   // rouge avec !
          ]
        },
      ],
      rainPlans: [  // optionnel
        { if: "Si prévu : X", then: "<b>Alternative</b> — description..." }
      ]
    },

    // --- PAGE TYPE: addresses ---
    {
      id: "adresses",
      tab: "🍽 Adresses",
      type: "addresses",
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "...", sub: "..." },
      zones: [
        {
          label: "📍 Zone 1",
          sections: [
            { label: "🍽 Catégorie", cards: [/* cardObj */] },
          ],
          infoboxes: [  // optionnel, en fin de zone
            { color: "red", title: "...", items: ["..."] }
          ]
        },
      ]
    },

    // --- PAGE TYPE: fullmap ---
    { id: "carte", tab: "🗺 Carte", type: "fullmap" },

    // --- PAGE TYPE: budget ---
    {
      id: "budget",
      tab: "💰 Budget",
      type: "budget",
      banner: { accent: "emerald", badge: "Budget", title: "...", sub: "..." },
      tables: [
        {
          label: "🎟 Catégorie",
          headers: ["Col1", "Col2"],
          rows: [["val1", "val2"]],
          footer: ["Total", "Montant"]  // optionnel
        },
      ],
      note: "Note de bas de page"  // optionnel
    },
  ],

  // Données cartographiques par numéro de jour
  mapData: {
    1: {
      center: [lat, lng],
      zoom: 13,
      pts: [
        { p: [lat, lng], label: "🏛 Nom du lieu" },
        { p: [lat, lng], label: "♥ Choix Sofie" },  // ♥ = filtré par personne
      ]
    },
  },

  // Couleurs d'accent par jour
  dayColors: { 1: '#F59E0B', 2: '#F97316', 3: '#7C3AED', 4: '#0D9488' }
};
```

## Card object

```js
{
  emoji: "🥞",
  name: "Nom",
  addr: "Adresse",          // optionnel
  price: "££",              // optionnel (£, ££, £££ ou SEK équivalent)
  color: "amber",           // amber|coral|violet|teal|emerald|neutral|pink
  body: "Description HTML",
  verdict: "Tip positif",   // optionnel, affiché en vert avec ✦
  warn: "Avertissement",    // optionnel, affiché en rouge avec ⚠
  person: "Sofie",          // optionnel, affiche le tag "♥ Sofie"
  mapsQuery: "Nom+Adresse+Ville"  // pour les liens Google/Apple Maps
}
```

## Accents disponibles

amber, coral, violet, teal, emerald — utilisés cycliquement pour les jours.
Les jours typiques : J1=amber, J2=coral, J3=violet, J4=teal, J5=emerald, puis on boucle.

## Conventions de contenu

- Les textes dans `items` des timeline et infoboxes peuvent contenir du HTML (`<b>`, `<i>`, `<a>`)
- Les références vers des cartes d'adresses utilisent : `<a class="place-ref" href="#" onclick="goToPlace('place-slug');return false">↗ Adresses</a>`
- Le slug est généré depuis le nom : `"Farm Girl"` → `"place-farm-girl"`
- Les coordonnées GPS dans mapData doivent être précises (vérifier sur Google Maps)

## Ajout d'un nouveau voyage à l'accueil

Après avoir créé un nouveau voyage, ajouter une entrée dans `index.html` :
```html
<a href="trips/nouveau-voyage/" class="trip-card">
  <span class="trip-flag">🇫🇷</span>
  <div>
    <h2>Titre</h2>
    <p>Dates · Durée</p>
  </div>
</a>
```
