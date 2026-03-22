const TRIP = {
  meta: {
    id: "londres-2026",
    title: "Londres 2026",
    flag: "🇬🇧",
    heroEmoji: "🏙",
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [
      { text: "27–30 Avril", highlight: true },
      { text: "👨‍👩‍👧‍👦 2A + 2E (7 ans)" },
      { text: "🏨 Bayswater" },
      { text: "🚂 Eurostar" }
    ],
    people: ["Greg", "Sofie"],
    personTag: "♥",
    mapCenter: [51.508, -0.130],
    mapZoom: 12
  },

  pages: [
    /* ================================================================
       PAGE 0 — AVANT LE DÉPART
       ================================================================ */
    {
      id: "avant",
      tab: "✈️ Avant",
      type: "custom",
      banner: { accent: "amber", badge: "Avant le départ", title: "Logistique & Préparation", sub: "Documents, apps, stratégie transport" },
      sections: [
        { type: "label", text: "📍 Adresses clés" },
        { type: "cards", items: [
          { emoji: "🏨", name: "Thistle London Hyde Park", addr: "104 Bayswater Road, W2 3HL", color: "amber", body: "Métro : Bayswater ou Queensway (2 min à pied). Paddington à 15 min.", mapsQuery: "104+Bayswater+Road+London+W2+3HL" },
          { emoji: "🚂", name: "St Pancras International", addr: "Euston Road, London N1C 4QP", color: "neutral", body: "Terminus Eurostar. WC gratuits niveau bas. Taxi file officielle sur Midland Road.", mapsQuery: "St+Pancras+International+Euston+Road+London+N1C+4QP" }
        ]},
        { type: "label", text: "🚨 À faire maintenant" },
        { type: "infobox", color: "red", title: "Checklist obligatoire", items: [
          "<b>ETA</b> — Electronic Travel Authorisation, ~10£, en ligne, 1 mois avant. Obligatoire pour les Européens en 2026.",
          "<b>Passeports</b> — Valides après le 30 Avril. PAS de Carte d'Identité.",
          "<b>CEAM</b> — Carte Européenne d'Assurance Maladie valide."
        ]},
        { type: "label", text: "📱 Apps à installer" },
        { type: "apps", items: [
          { icon: "🗺", name: "Citymapper", desc: "10× plus précis que Google Maps pour les bus et sorties de métro exactes.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🚽", name: "Toilets4London", desc: "Localise les WC gratuits. Vital avec des jumeaux de 7 ans.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🚕", name: "Bolt", desc: "Souvent moins cher qu'Uber à Londres.", tag: "nice", tagLabel: "Recommandé" },
          { icon: "💳", name: "Revolut / N26", desc: "Payer en livres sans frais de change. Configurer avant.", tag: "nice", tagLabel: "Recommandé" }
        ]},
        { type: "divider" },
        { type: "label", text: "🚇 Transport — la règle d'or" },
        { type: "infoboxGroup", items: [
          { color: "red", title: "PAS d'Oyster Card", items: ["Obsolète. 7£ de caution non remboursable. N'achetez pas."] },
          { color: "green", title: "Ce qu'il faut faire", items: [
            "Carte bancaire sans contact ou Apple/Google Pay directement sur les portiques.",
            "Chaque adulte garde <b>toujours la même carte</b> → \"Daily Cap\" (plafond journalier automatique).",
            "Enfants 7 ans : <b>GRATUITS</b> sur bus & métro avec un adulte payant. Portiques larges ensemble."
          ]}
        ]},
        { type: "divider" },
        { type: "label", text: "💡 Suggestions & Réflexions" },
        { type: "infoboxGroup", items: [
          { color: "amber", title: "J2 est surchargé — à alléger", items: [
            "NHM + Science Museum + London Eye + South Bank + Covent Garden en un jour avec des jumeaux de 7 ans = épuisement garanti à 16h.",
            "<b>Suggestion :</b> Choisir NHM <i>ou</i> Science Museum (pas les deux), et garder le London Eye pour un autre jour ou le supprimer. L'Eye coûte ~110£ et la queue est longue — la vue depuis la Tate Modern Switch House (7ème étage, gratuit) est presque aussi belle."
          ]},
          { color: "amber", title: "Tour de Londres — à questionner", items: [
            "~95£ pour la famille, très dense, beaucoup de marche. Si vous réduisez les grosses activités payantes, c'est la première à sauter.",
            "<b>Alternative gratuite :</b> Vue extérieure du Tower Bridge + marche le long de la Tamise = 90% du plaisir visuel pour 0£. Le <b>Young V&A</b> (Bethnal Green, gratuit) est bien plus adapté aux enfants de 7 ans."
          ]},
          { color: "teal", title: "Idée : une demi-journée \"Shopping Adultes\"", items: [
            "Sofie a de nombreux spots shopping (UNIQLO, MUJI, Rokit×2, Choosing Keeping, Moomin Shop, Neal's Yard...). Prévoir un créneau J4 matin sans musée pour en profiter à Covent Garden / Carnaby Street."
          ]},
          { color: "red", title: "⚠ Columbia Road Flower Market", items: [
            "Sofie l'a sur sa carte mais ce marché est <b>ouvert dimanche uniquement</b>. Votre séjour est lundi-jeudi — c'est raté. À prévoir pour un prochain voyage !"
          ]}
        ]}
      ]
    },

    /* ================================================================
       PAGE 1 — LUNDI 27 AVRIL (Jour 1)
       ================================================================ */
    {
      id: "jour1",
      tab: "Lundi J1",
      type: "day",
      dayNumber: 1,
      banner: { accent: "amber", badge: "Jour 1 · Lundi 27 Avril", title: "L'Arrivée & Notting Hill", sub: "St Pancras → Hôtel → Portobello Road → Churchill Arms" },
      timeline: [
        {
          time: "11h30\n12h30",
          title: "🚂 Extraction St Pancras",
          items: [
            { text: "Arrivée Eurostar → suivre \"Way Out\"." },
            { text: "WC gratuits dans la galerie marchande (niveau bas) avant de sortir.", type: "tip" },
            { text: "<b>Taxi :</b> File Black Cab officielle (Midland Road). ~25-30£, 25 min. Recommandé J1 avec valises." },
            { text: "Métro possible : Piccadilly Line → South Ken → Circle → Bayswater. Déconseillé avec bagages.", type: "sub" }
          ]
        },
        {
          time: "13h00\n14h30",
          title: "🥞 Déjeuner Brunch",
          items: [
            { text: "<b>Farm Girl</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-farm-girl');return false\">↗ Adresses</a> · 59A Portobello Rd · \"Island Pancakes\" sarrasin/coco · ~70£ pour 4." },
            { text: "Plan B : Eggbreak (30 Uxbridge St) si >20 min d'attente.", type: "sub" }
          ]
        },
        {
          time: "14h30\n16h30",
          title: "📸 Portobello — l'itinéraire photo",
          items: [
            { text: "Angle <b>Chepstow Villas/Portobello Rd</b> → Denbigh Terrace → remonter Portobello → <b>Lancaster Road</b> (maisons violettes) → St Luke's Mews (Love Actually).", type: "tip" },
            { text: "🎯 Mission enfants : \"Compter les maisons roses\" — le gagnant choisit la glace." },
            { text: "Snack : <b>Buns From Home</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-buns-from-home');return false\">↗ Adresses</a> (128 Talbot Rd) · brioches cannelle/chocolat feuilletées." }
          ]
        },
        {
          time: "16h30\n18h30",
          title: "🏴‍☠️ Diana Memorial Playground",
          items: [
            { text: "Entrée ultra-surveillée (on ne rentre pas sans enfant). Café parents à l'intérieur." },
            { text: "Plan pluie : Science Museum (ouvert jusqu'à 18h).", type: "warn" }
          ]
        },
        {
          time: "19h00",
          title: "🌸 Dîner — The Churchill Arms <a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-the-churchill-arms');return false\">↗ Adresses</a>",
          items: [
            { text: "119 Kensington Church St · pub fleuri, cuisine thaïlandaise · ~80£." },
            { text: "Demander \"Pad Thai for kids\" (non épicé).", type: "sub" },
            { text: "Plan B (fatigue) : Pizza Express ou Uber Eats hôtel.", type: "sub" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 2 — MARDI 28 AVRIL (Jour 2)
       ================================================================ */
    {
      id: "jour2",
      tab: "Mardi J2",
      type: "day",
      dayNumber: 2,
      banner: { accent: "coral", badge: "Jour 2 · Mardi 28 Avril", title: "Dinosaures & Roue Géante", sub: "South Ken → London Eye → South Bank → Covent Garden" },
      timeline: [
        {
          time: "08h30",
          title: "☕ Petit-déj & Bus Panoramique",
          items: [
            { text: "Pret A Manger ou Costa près de l'hôtel." },
            { text: "Bus 70 : monter à l'étage tout devant — manège gratuit !", type: "tip" }
          ]
        },
        {
          time: "09h45\n12h30",
          title: "🦕 Natural History Museum",
          items: [
            { text: "Entrée <b>Exhibition Road</b> (souvent vide) — pas Cromwell Rd !", type: "tip" },
            { text: "Route : Zone Rouge (volcans) → Hall Hintze (baleine) → <b>Zone Bleue : Dinosaures</b> 🦖" },
            { text: "Boutique dinos = piège. Fixez un budget avant d'entrer (\"un truc à 5£\").", type: "warn" }
          ]
        },
        {
          time: "12h30\n13h30",
          title: "🥗 Déjeuner",
          items: [
            { text: "☀️ Beau temps : sandwichs Paul + jardin du V&A (bassin central)." },
            { text: "🌧 Pluie : V&A Café (Gambling Room) — le plus beau café de musée au monde." }
          ]
        },
        {
          time: "13h30\n15h00",
          title: "🔬 Science Museum — Wonderlab",
          items: [
            { text: "Monter direct au <b>Wonderlab: The Equinor Gallery</b> — pas le RDC.", type: "tip" },
            { text: "Spectacles chimie, barres de friction, système solaire géant. Le spot le plus fun de Londres pour les enfants." }
          ]
        },
        {
          time: "15h00\n16h00",
          title: "🎡 London Eye",
          items: [
            { text: "Métro South Ken → Westminster." },
            { text: "Photo Big Ben + cabine rouge : sortie du métro, immédiatement à gauche.", type: "tip" },
            { text: "WC AVANT de monter (County Hall) — aucune toilette dans les capsules !", type: "warn" },
            { text: "Prévoir 20 min de queue de sécurité même avec billet." }
          ]
        },
        {
          time: "16h30\n18h30",
          title: "🌊 Marche South Bank",
          items: [
            { text: "Skate Park sous le pont → Gabriel's Wharf → Tate Modern (Turbine Hall gratuit)." }
          ]
        },
        {
          time: "19h00",
          title: "🍱 Dîner — Seven Dials Market <a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-seven-dials-market');return false\">↗ Adresses</a>",
          items: [
            { text: "Traversée Millennium Bridge (Harry Potter) → Bus 15 → Covent Garden." },
            { text: "<b>Seven Dials Market</b> (35 Earlham St) · food court entrepôt de bananes · ~15-20£/pers. Anti-dispute : chacun choisit." }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 3 — MERCREDI 29 AVRIL (Jour 3)
       ================================================================ */
    {
      id: "jour3",
      tab: "Mercredi J3",
      type: "day",
      dayNumber: 3,
      banner: { accent: "violet", badge: "Jour 3 · Mercredi 29 Avril", title: "Momies, Couronne & Hipsters", sub: "British Museum → Tour de Londres → Brick Lane" },
      timeline: [
        {
          time: "09h30\n11h30",
          title: "🏛 British Museum — Commando",
          items: [
            { text: "Éviter les gros sacs à dos (fouille)." },
            { text: "Room 4 : Pierre de Rosette · Room 18 : Frises du Parthénon · Rooms 62-63 : <b>Les Momies</b> 😱" },
            { text: "Sortie par la porte arrière (Montague Place) pour éviter la foule.", type: "tip" }
          ]
        },
        {
          time: "12h00\n13h15",
          title: "🍺 The Museum Tavern",
          items: [
            { text: "49 Great Russell St (en face) · pub victorien · Karl Marx y buvait · Fish & Chips · ~70£." }
          ]
        },
        {
          time: "13h30\n16h30",
          title: "⚔️ Tour de Londres",
          items: [
            { text: "Métro Holborn → Bank → DLR Tower Gateway." },
            { text: "Crown Jewels : si queue, divisez-vous (un parent + enfants → canons, swap)." },
            { text: "🦅 Défi corbeaux : en trouver 6 (légende : s'ils partent, le royaume s'effondre)." }
          ]
        },
        {
          time: "16h30\n19h00",
          title: "🎨 East End & Brick Lane",
          items: [
            { text: "Street art : grue de Roa (Hanbury St) + chercher les Space Invaders sur les murs." },
            { text: "🥯 <b>Beigel Bake</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-beigel-bake');return false\">↗ Adresses</a> · 159 Brick Lane · enseigne <b>BLANCHE</b> (pas la jaune !) · Salt Beef mythique ~6£." },
            { text: "🎵 <b>Rough Trade East</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-rough-trade-east');return false\">↗ Adresses</a> (Old Truman Brewery) · LE disquaire + photobooth vintage." }
          ]
        },
        {
          time: "19h30",
          title: "🍛 Dîner — Dishoom <a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-dishoom-shoreditch');return false\">↗ Adresses</a>",
          items: [
            { text: "<b>Dishoom Shoreditch</b> · 7 Boundary St · meilleur indien de Londres · Y aller à 17h30 ou réserver." },
            { text: "Alternative : Masala Zone · family friendly · pas de queue.", type: "sub" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 4 — JEUDI 30 AVRIL (Jour 4)
       ================================================================ */
    {
      id: "jour4",
      tab: "Jeudi J4",
      type: "day",
      dayNumber: 4,
      banner: { accent: "teal", badge: "Jour 4 · Jeudi 30 Avril", title: "Bonus & Retour", sub: "King's Cross → Eurostar → Paris" },
      timeline: [
        {
          time: "09h00",
          title: "🧳 Check-out",
          items: [
            { text: "Laisser les bagages à la réception ou utiliser <b>Stasher.com</b> (consigne proche St Pancras)." }
          ]
        },
        {
          time: "10h30\n12h30",
          title: "⚡ Quartier libre — au choix",
          items: [
            { text: "🧙 <b>Harry Potter</b> — Platform 9¾ (King's Cross). Photo du panneau mural (gratuit) vs. queue photo pro (payante)." },
            { text: "🐻 <b>Paddington</b> — Statue à la gare de Paddington. Bateau Little Venice → Camden (risqué pour le timing)." },
            { text: "🛍 <b>Hamleys</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-hamleys');return false\">↗ Adresses</a> — Regent Street, 7 étages. ⚠ Crise de larmes garantie à la sortie." }
          ]
        },
        {
          time: "12h30\n13h30",
          title: "🧀 Déjeuner — Coal Drops Yard",
          items: [
            { text: "<b>Morty & Bob's</b> · Grilled Cheese sandwiches réconfortants avant le train." }
          ]
        },
        {
          time: "13h45",
          title: "🚨 St Pancras — Zone de Danger",
          items: [
            { text: "Billets Eurostar sur papier ou téléphone chargé.", type: "warn" },
            { text: "Douanes FR + UK : prévoir 45 min." },
            { text: "Videz la petite monnaie dans les boîtes de charité ou achetez des chocolats." }
          ]
        },
        {
          time: "14h31",
          title: "🚂 Départ !",
          items: [
            { text: "Dodo des enfants garanti dans les 30 premières minutes. 😴" }
          ]
        }
      ],
      rainPlans: [
        { if: "Si prévu : Notting Hill", then: "<b>Westfield London</b> (Shepherd's Bush) — Lego Store + KidZania (ville miniature pour enfants, réserver à l'avance)." },
        { if: "Si prévu : South Bank", then: "<b>Sea Life Aquarium</b> — juste à côté du London Eye, 100% intérieur." },
        { if: "Si prévu : Tour de Londres", then: "<b>Museum of London Docklands</b> — gratuit, génial, zone \"Mudlarks\", moins de monde." }
      ]
    },

    /* ================================================================
       PAGE 5 — CARNET D'ADRESSES
       ================================================================ */
    {
      id: "adresses",
      tab: "🍽 Adresses",
      type: "addresses",
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "Restos, Cafés & Shopping", sub: "£ <10£ · ££ 15-25£ · £££ >30£ par personne" },
      zones: [
        {
          label: "📍 J1 Notting Hill",
          sections: [
            {
              label: "🍽 Manger — Jour 1",
              cards: [
                { emoji: "🥞", name: "Farm Girl", addr: "59A Portobello Rd, W11 3DB", price: "££", color: "amber", body: "Brunch Instagram. Pancakes moelleux, lattés à la rose, avocado toast. Cadre coloré.", verdict: "Les enfants adorent les pancakes. Arriver avant 12h (pas de résa WE).", mapsQuery: "Farm+Girl+59A+Portobello+Rd+London" },
                { emoji: "🍳", name: "Eggbreak", addr: "30 Uxbridge St", price: "££", color: "neutral", body: "Plan B si Farm Girl est plein. Spécialiste des œufs, très gourmand.", mapsQuery: "Eggbreak+30+Uxbridge+St+London" },
                { emoji: "🌸", name: "The Churchill Arms", addr: "119 Kensington Church St", price: "££", color: "coral", body: "Pub le plus fleuri de Londres. Surprise : cuisine thaïlandaise à l'intérieur. ~80£ pour 4.", verdict: "Demander \"Pad Thai for kids\" (non épicé).", mapsQuery: "Churchill+Arms+119+Kensington+Church+St+London" },
                { emoji: "🐟", name: "The Duke of Wellington", addr: "179 Portobello Rd, W11 2ED", price: "££", color: "neutral", body: "Pub gastronomique. Fish & Chips de référence du quartier. Décor anglais classique.", verdict: "Menu enfant dispo. Y aller avant 19h (bruyant après).", mapsQuery: "Duke+Wellington+179+Portobello+Rd+London" },
                { emoji: "🥐", name: "Buns From Home", addr: "128 Talbot Rd, W11 1JR", price: "£", color: "emerald", body: "Brioches feuilletées cannelle/chocolat à emporter uniquement.", verdict: "4 brioches sur un banc = goûter royal pour 15£.", mapsQuery: "Buns+From+Home+128+Talbot+Rd+London" }
              ]
            },
            {
              label: "🛍 Shopping & Spots",
              cards: [
                { emoji: "🔴", name: "Alice's Antiques", addr: "86 Portobello Rd", color: "neutral", body: "La boutique rouge iconique vue dans le film Paddington. Juste pour voir.", mapsQuery: "Alices+Antiques+86+Portobello+Rd+London" },
                { emoji: "📚", name: "The Notting Hill Bookshop", addr: "13 Blenheim Cres", color: "neutral", body: "La vraie librairie du film. Section enfants au fond, très mignonne.", mapsQuery: "Notting+Hill+Bookshop+13+Blenheim+Crescent+London" },
                { emoji: "🍪", name: "Biscuiteers", addr: "194 Kensington Park Rd", color: "neutral", body: "Biscuits décorés à la main. Façade noire/blanche comme un dessin animé. Entrez pour l'odeur et voir les artistes peindre.", mapsQuery: "Biscuiteers+194+Kensington+Park+Rd+London" },
                { emoji: "🧘", name: "UNIQLO + MUJI", addr: "High Street Kensington", color: "pink", body: "Les deux enseignes sont à 2 min l'une de l'autre sur High St Kensington. Parfait si vous passez dans le coin.", person: "Sofie", mapsQuery: "UNIQLO+High+Street+Kensington+London" },
                { emoji: "🏛", name: "Design Museum", addr: "224-238 Kensington High St", color: "pink", body: "Architecture béton brutaliste reconvertie en bâtiment blanc spectaculaire. Boutique design incroyable (gratuit d'entrer juste pour la boutique).", verdict: "Détour 20 min si vous passez devant — la boutique vaut le coup seule.", person: "Sofie", mapsQuery: "Design+Museum+Kensington+London" }
              ]
            },
            {
              label: "📸 Rues & Mews — Spots Photo",
              cards: [
                { emoji: "🌿", name: "Kynance Mews", addr: "South Kensington (près NHM)", color: "pink", body: "La ruelle victorienne la plus photogénique de Londres. Pavés, plantes grimpantes, maisons blanches. 5 min à pied du Natural History Museum.", verdict: "Le spot photo secret de J2 — arriver tôt le matin.", person: "Sofie", mapsQuery: "Kynance+Mews+London" },
                { emoji: "🎨", name: "Colville Terrace + Linden Gardens", addr: "Notting Hill", color: "pink", body: "Les deux rues les plus colorées de Notting Hill selon Sofie. Pastel intense, fenêtres à guillotine, jardinières fleuries.", person: "Sofie", mapsQuery: "Colville+Terrace+London+W11" }
              ]
            }
          ]
        },
        {
          label: "📍 J2 South Ken",
          sections: [
            {
              label: "🍽 Manger — Jour 2",
              cards: [
                { emoji: "🍔", name: "Honest Burgers", addr: "24 Thurloe St, South Ken", price: "££", color: "coral", body: "Viande brit de qualité, frites au romarin. Service rapide.", verdict: "Chaises hautes, coloriages. Nettement meilleur que McDo.", mapsQuery: "Honest+Burgers+24+Thurloe+St+London" },
                { emoji: "☕", name: "V&A Garden Café", addr: "Victoria & Albert Museum", price: "££", color: "neutral", body: "Self-service dans la plus belle cour de musée. Bassin central.", verdict: "Laisser courir les enfants dans le jardin intérieur.", mapsQuery: "Victoria+Albert+Museum+Cromwell+Rd+London" },
                { emoji: "🏪", name: "Seven Dials Market", addr: "35 Earlham St", price: "£-££", color: "coral", body: "Food court dans un entrepôt de bananes. Des dizaines de stands.", verdict: "Anti-dispute familiale : chacun choisit son plat, même table.", mapsQuery: "Seven+Dials+Market+35+Earlham+St+London" },
                { emoji: "🥟", name: "Din Tai Fung", addr: "Covent Garden", price: "££", color: "neutral", body: "Dumplings. Les enfants voient les chefs plier les raviolis derrière la vitre.", verdict: "Réserver à l'avance. Spectacle garanti.", mapsQuery: "Din+Tai+Fung+Covent+Garden+London" },
                { emoji: "🥩", name: "Flat Iron", addr: "17-18 Henrietta St", price: "££", color: "neutral", body: "Steak unique à 13£. Glace offerte à la sortie !", verdict: "Excellent rapport qualité/prix.", mapsQuery: "Flat+Iron+Henrietta+St+London" },
                { emoji: "🍔", name: "Shake Shack", addr: "Covent Garden — 24 Market Building WC2E 8RD", price: "££", color: "coral", body: "Le burger qui ne se discute pas. Frites parfaites, milk-shake, ambiance cool sous la halle de Covent Garden.", verdict: "Les deux cartes de la famille ont ce spot — c'est un signe. 🤌", mapsQuery: "Shake+Shack+Covent+Garden+London" }
              ]
            }
          ]
        },
        {
          label: "📍 J3 East End",
          sections: [
            {
              label: "🍽 Manger — Jour 3",
              cards: [
                { emoji: "🥯", name: "Beigel Bake", addr: "159 Brick Lane — enseigne BLANCHE", price: "£", color: "amber", body: "Institution. Ouvert 24h/24. Bagel \"Salt Beef\" mythique ~6£. On mange debout.", verdict: "L'enseigne BLANCHE, pas la jaune à côté !", mapsQuery: "Beigel+Bake+159+Brick+Lane+London" },
                { emoji: "🍛", name: "Dishoom Shoreditch", addr: "7 Boundary St, E2 7JE", price: "££", color: "amber", body: "Le meilleur indien de Londres. Déco Bombay. Queue fréquente.", verdict: "Y aller à 17h30 ou réserver longtemps à l'avance.", mapsQuery: "Dishoom+Shoreditch+7+Boundary+St+London" },
                { emoji: "🐟", name: "Poppies Fish & Chips", addr: "Hanbury Street, Spitalfields", price: "££", color: "neutral", body: "Rétro. Serveurs en tenue années 50, Juke Box. Poisson ultra frais primé.", mapsQuery: "Poppies+Fish+Chips+Hanbury+St+London" },
                { emoji: "🍫", name: "Dark Sugars", addr: "141 Brick Lane", price: "£", color: "neutral", body: "Chocolat chaud avec copeaux coupés devant vous. Pour le goûter.", mapsQuery: "Dark+Sugars+141+Brick+Lane+London" },
                { emoji: "☕", name: "Sip & Rise Café & Bakery", addr: "Brick Lane area", price: "£", color: "pink", body: "Café/bakery recommandé par Sofie pour une pause qualité dans le quartier.", person: "Sofie", mapsQuery: "Sip+Rise+Cafe+Bakery+London" },
                { emoji: "🍽", name: "118 The Lane", addr: "118 Brick Lane E1", price: "££", color: "pink", body: "Restaurant sur Brick Lane, alternative plus sit-down que le Beigel Bake.", person: "Sofie", mapsQuery: "118+Brick+Lane+London" }
              ]
            },
            {
              label: "🛍 Shopping & Balades — Jour 3",
              cards: [
                { emoji: "🎵", name: "Rough Trade East", addr: "Old Truman Brewery, 91 Brick Lane", color: "amber", body: "LE disquaire culte de Londres. Immense. Vinyles, CD, scène live, café, photobooth vintage.", mapsQuery: "Rough+Trade+East+Brick+Lane+London" },
                { emoji: "👗", name: "Rokit Vintage", addr: "101 Brick Lane E1", color: "pink", body: "Vintage multi-étages. Années 70-90. Le meilleur dépôt-vente du coin selon Sofie. (Aussi présent à Covent Garden.)", person: "Sofie", mapsQuery: "Rokit+101+Brick+Lane+London" },
                { emoji: "🐻", name: "Redchurch Street", addr: "Shoreditch E2", color: "pink", body: "La rue la plus tendance de Shoreditch. Concept stores, galeries, cafés. 5 min de Brick Lane. Idéal avant Dishoom.", person: "Sofie", mapsQuery: "Redchurch+Street+Shoreditch+London" },
                { emoji: "🧒", name: "Young V&A (Museum of Childhood)", addr: "Cambridge Heath Rd, Bethnal Green", color: "pink", body: "Musée entièrement dédié aux enfants. Jouets historiques, déguisements, espace créatif. 15 min à pied de Brick Lane. Gratuit.", verdict: "Alternative à la Tour de Londres si les enfants sont fatigués — ils adorent.", person: "Sofie", mapsQuery: "Young+V%26A+Museum+Bethnal+Green+London" }
              ]
            },
            {
              label: null,
              infobox: { color: "red", title: "⚠ Columbia Road Flower Market — ATTENTION", items: [
                "Sofie l'a mise sur sa carte, mais ce marché est <b>ouvert le dimanche uniquement</b>. Votre voyage est lundi-jeudi. Ce n'est pas possible cette fois. À garder pour un prochain séjour !"
              ]}
            }
          ]
        },
        {
          label: "📍 J4 Central",
          sections: [
            {
              label: "🛍 Shopping — Central",
              cards: [
                { emoji: "🧸", name: "Hamleys", addr: "188 Regent St", color: "amber", body: "Le plus grand magasin de jouets du monde. 7 étages. Démonstrateurs de drones partout.", verdict: "Difficile d'en sortir les enfants sans crise de larmes.", mapsQuery: "Hamleys+188+Regent+St+London" },
                { emoji: "🟡", name: "Lego Store", addr: "Leicester Square", color: "neutral", body: "Le plus grand du monde. Big Ben en Lego géant. Paradis garanti.", mapsQuery: "Lego+Store+Leicester+Square+London" },
                { emoji: "🦸", name: "Forbidden Planet", addr: "179 Shaftesbury Ave", color: "neutral", body: "Comics, figurines, manga, Harry Potter. Le top geek.", mapsQuery: "Forbidden+Planet+179+Shaftesbury+Ave+London" },
                { emoji: "👗", name: "Rokit Covent Garden", addr: "42 Shelton St WC2H 9HZ", color: "pink", body: "L'autre adresse Rokit vintage. Plus centrale, pratique pour J4.", person: "Sofie", mapsQuery: "Rokit+42+Shelton+St+Covent+Garden+London" },
                { emoji: "✏️", name: "Choosing Keeping", addr: "21 Tower St, Covent Garden", color: "pink", body: "Papeterie haut de gamme — carnets japonais, stylos, objets de bureau rares. Un des shops les plus beaux du quartier.", person: "Sofie", mapsQuery: "Choosing+Keeping+21+Tower+St+London" },
                { emoji: "🧡", name: "The Moomin Shop", addr: "Covent Garden Market", color: "pink", body: "La boutique officielle Moomin. Peluches, céramiques, livres illustrés. Les jumeaux vont adorer.", verdict: "Stop indispensable si les enfants connaissent les Moomins.", person: "Sofie", mapsQuery: "Moomin+Shop+Covent+Garden+London" }
              ]
            },
            {
              label: "🏞 Parcs & Détente",
              cards: [
                { emoji: "🌳", name: "St James's Park Playground", addr: "St James's Park, SW1A", color: "pink", body: "Aire de jeux dans le parc royal le plus central de Londres. Parfait pour une pause avant l'Eurostar — à 15 min de St Pancras.", person: "Sofie", mapsQuery: "St+James+Park+Playground+London" }
              ]
            },
            {
              label: "🍽 Manger — Central",
              cards: [
                { emoji: "🥗", name: "Neal's Yard", addr: "Neal's Yard, Covent Garden WC2H", color: "pink", body: "Petite cour cachée colorée à souhait — murs peints, plantes, cafés bio. Plusieurs restos/cafés autour. Cachée dans une ruelle.", verdict: "Le spot Instagram secret de Covent Garden que 90% des touristes ratent.", person: "Sofie", mapsQuery: "Neal%27s+Yard+Covent+Garden+London" },
                { emoji: "🥘", name: "Bill's Restaurant", addr: "St Martin's Courtyard, WC2E 9AB", price: "££", color: "pink", body: "Brasserie anglaise chaleureuse. Petit-déj, brunch et dîner. Cadre fleuri. Bon menu enfant.", verdict: "Option sûre pour toute la famille si les kids sont à bout.", person: "Sofie", mapsQuery: "Bills+Restaurant+St+Martins+Courtyard+London" },
                { emoji: "🧊", name: "Chin Chin Dessert Club", addr: "54 Greek St, Soho", price: "£", color: "neutral", body: "Glaces à l'azote liquide (fumée !). WOW pour les enfants.", mapsQuery: "Chin+Chin+Dessert+Club+54+Greek+St+London" },
                { emoji: "🦆", name: "Haozhan", addr: "8 Gerrard St, Chinatown", price: "££", color: "neutral", body: "Canard laqué excellent (sans les os). Incontournable Chinatown.", mapsQuery: "Haozhan+8+Gerrard+St+London" }
              ]
            }
          ]
        },
        {
          label: "🛒 Survie",
          sections: [
            {
              label: "🛒 Supermarchés",
              cards: [
                { emoji: "🥗", name: "M&S Food", addr: "Marks & Spencer — partout", price: "££", color: "amber", body: "Le top qualité. Sandwiches, cookies, chips \"Prawn Cocktail\". Idéal pour pique-niquer dans les parcs.", verdict: "Meal Deal ~5£ (sandwich + boisson + snack)." },
                { emoji: "🏪", name: "Tesco Express / Sainsbury's", addr: "Partout en ville", price: "£", color: "neutral", body: "Meal Deal à 4£ — le déjeuner des Londoniens. Le plus économique." }
              ]
            },
            {
              label: "💡 Astuces Malines",
              infoboxes: [
                { color: "green", title: "Économies au resto", items: [
                  "<b>\"Carafe of tap water\"</b> — eau du robinet gratuite et excellente. ~15£ d'économie par repas.",
                  "<b>Service charge :</b> si 12.5% est déjà sur la facture, ne rajoutez rien.",
                  "Pique-niquer à Hyde Park ou Kensington Gardens avec M&S = top."
                ]},
                { color: "amber", title: "Souvenirs pas chers", items: [
                  "<b>Primark Oxford St</b> — t-shirts HP, pyjamas London, chaussettes Union Jack : 2-5£.",
                  "<b>Supermarché</b> — Yorkshire Tea, Digestives, Cadbury Dairy Milk, Jaffa Cakes : 3× moins cher que les boutiques touristiques.",
                  "<b>Prises UK</b> : interrupteur ON/OFF sur le mur. Si le téléphone ne charge pas, cherchez l'interrupteur !"
                ]}
              ]
            }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 6 — CARTE
       ================================================================ */
    {
      id: "carte",
      tab: "🗺 Carte",
      type: "fullmap"
    },

    /* ================================================================
       PAGE 7 — BUDGET
       ================================================================ */
    {
      id: "budget",
      tab: "💰 Budget",
      type: "budget",
      banner: { accent: "emerald", badge: "Budget", title: "Estimation 2026", sub: "Pour la famille (2 adultes + 2 enfants)" },
      tables: [
        {
          label: "🎟 Entrées & Transport",
          headers: ["Poste", "Coût", "Famille", "Note"],
          rows: [
            ["London Eye", "~35£/A", "~110£", "-10% en ligne"],
            ["Tower of London", "~34£/A", "~95£", "Gratuit <5 ans"],
            ["Métro (Daily Cap)", "~8.50£/A", "~17£/j", "Enfants gratuits"],
            ["Taxi gare ↔ hôtel", "~25£/trajet", "~50£", "+si bouchons"]
          ]
        },
        {
          label: "🍽 Repères Repas",
          headers: ["Repas type", "Par pers.", "Famille"],
          rows: [
            ["Brunch (Farm Girl)", "~18£", "~70£"],
            ["Fish & Chips pub", "~20£", "~65£"],
            ["Food Court (Dials)", "~15£", "~60£"],
            ["Meal Deal supermarché", "~4-5£", "~18£"],
            ["Glace (camion 99)", "~4£", "~16£"],
            ["Pinte de bière 🍺", "~7.50£", "—"]
          ]
        },
        {
          label: "📊 Total Estimé",
          headers: ["Catégorie", "Estimation"],
          rows: [
            ["Entrées (Eye + Tour)", "~200£"],
            ["Transport local (3 jours)", "~50£"],
            ["Taxis (2 trajets)", "~50£"],
            ["Repas (3 dîners + déj)", "~450£"],
            ["Shopping / Souvenirs", "~100-200£"]
          ],
          footer: ["TOTAL (hors hôtel + Eurostar)", "850–950£"]
        }
      ],
      note: "Hors hébergement et transport Paris–Londres."
    }
  ],

  mapData: {
    1: { center:[51.510,-0.198], zoom:13, pts:[
      { p:[51.5318,-0.1236], label:'🚂 St Pancras' },
      { p:[51.5111,-0.1870], label:'🏨 Hôtel' },
      { p:[51.5143,-0.2042], label:'🥞 Farm Girl' },
      { p:[51.5183,-0.2012], label:'📸 Portobello Rd' },
      { p:[51.5049,-0.1932], label:'🌸 Churchill Arms' },
      { p:[51.5156,-0.2022], label:'♥ Colville Terrace' },
      { p:[51.5003,-0.1944], label:'♥ UNIQLO/MUJI' },
      { p:[51.5000,-0.2002], label:'♥ Design Museum' }
    ]},
    2: { center:[51.500,-0.155], zoom:12, pts:[
      { p:[51.4967,-0.1764], label:'🦕 NHM' },
      { p:[51.4967,-0.1740], label:'🔬 Science Mus.' },
      { p:[51.5033,-0.1192], label:'🎡 London Eye' },
      { p:[51.5074,-0.0994], label:'🏛 Tate Modern' },
      { p:[51.5124,-0.1263], label:'🍱 Seven Dials' },
      { p:[51.4974,-0.1850], label:'♥ Kynance Mews' },
      { p:[51.5120,-0.1226], label:'🍔 Shake Shack' }
    ]},
    3: { center:[51.519,-0.085], zoom:13, pts:[
      { p:[51.5194,-0.1270], label:'🏛 British Museum' },
      { p:[51.5081,-0.0759], label:'⚔️ Tower' },
      { p:[51.5222,-0.0717], label:'🥯 Brick Lane' },
      { p:[51.5225,-0.0764], label:'🛍 Spitalfields' },
      { p:[51.5261,-0.0737], label:'🍛 Dishoom' },
      { p:[51.5244,-0.0746], label:'♥ Redchurch St' },
      { p:[51.5289,-0.0553], label:'♥ Young V&A' },
      { p:[51.5222,-0.0717], label:'♥ Rokit' }
    ]},
    4: { center:[51.516,-0.130], zoom:13, pts:[
      { p:[51.5322,-0.1234], label:'🧙 Platform 9¾' },
      { p:[51.5154,-0.1755], label:'🐻 Paddington' },
      { p:[51.5322,-0.1232], label:'🧀 Coal Drops Yard' },
      { p:[51.5091,-0.1413], label:'🛍 Hamleys' },
      { p:[51.5145,-0.1263], label:'♥ Neal\'s Yard' },
      { p:[51.5118,-0.1229], label:'♥ Moomin Shop' },
      { p:[51.5010,-0.1383], label:'♥ St James\'s Park' }
    ]}
  },

  dayColors: { 1:'#F59E0B', 2:'#F97316', 3:'#7C3AED', 4:'#0D9488' }
};
