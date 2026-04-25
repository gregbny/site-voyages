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
    mapCenter: [51.512, -0.150],
    mapZoom: 12,
    startDate: "2026-04-27",
    timezone: "Europe/London"
  },

  pages: [
    /* ================================================================
       PAGE 0 — AVANT LE DÉPART
       ================================================================ */
    {
      id: "avant",
      tab: "✈️ Avant",
      type: "custom",
      banner: { accent: "amber", badge: "Avant le départ", title: "Logistique & Préparation", sub: "Philosophie, adresses, transport, apps" },
      sections: [
        { type: "label", text: "🎯 L'esprit du voyage" },
        { type: "infobox", color: "emerald", title: "Léger · Familial · Économique", items: [
          "Pas de grosses attractions payantes (Tour, Eye, musées chers). Un seul musée : le <b>Natural History Museum</b>, gratuit.",
          "<b>Parcs et balades</b> en priorité : Hyde Park, Holland Park, parcours Notting Hill, Brick Lane/Shoreditch.",
          "<b>Soirées flexibles</b> : pas de dîner fixe planifié. On décide chaque soir selon météo et fatigue — typiquement 1 soir pub + 2 soirs hôtel (takeaway / M&S).",
          "<b>J2 et J3 interchangeables</b> selon la météo."
        ]},

        { type: "label", text: "📍 Adresses clés" },
        { type: "cards", items: [
          { emoji: "🏨", name: "Thistle London Hyde Park", addr: "104 Bayswater Road, W2 3HL", color: "amber", body: "Métro : Bayswater ou Queensway (2 min à pied). Petit-déj inclus. Frigo en chambre (pas de micro-ondes). 2 chambres reliées + salle de bain.", mapsQuery: "Thistle+Hyde+Park+104+Bayswater+Road+London+W2+3HL" },
          { emoji: "🚂", name: "St Pancras International", addr: "Euston Road, London N1C 4QP", color: "neutral", body: "Terminus Eurostar. WC gratuits niveau bas. File taxi officielle sur Midland Road.", mapsQuery: "St+Pancras+International+Euston+Road+London+N1C+4QP" }
        ]},

        { type: "label", text: "🚨 À faire maintenant" },
        { type: "infoboxGroup", items: [
          { color: "red", title: "Obligatoire avant le départ", items: [
            "<b>ETA</b> — Electronic Travel Authorisation, ~10£, en ligne, au moins 1 mois avant. Obligatoire pour les Européens depuis 2025.",
            "<b>Passeports</b> — valides après le 30 avril. PAS de Carte d'Identité.",
            "<b>CEAM</b> — Carte Européenne d'Assurance Maladie valide pour chacun."
          ]},
          { color: "amber", title: "Réservation NHM — J2", items: [
            "Entrée gratuite mais <b>créneau à réserver en ligne</b> sur <a href=\"https://www.nhm.ac.uk/visit.html\" target=\"_blank\">nhm.ac.uk/visit</a>.",
            "Viser un créneau vers <b>10h30</b> (petit-déj hôtel pas trop long) ou <b>11h</b> (pour souffler).",
            "Horaires : 10h00–17h50 · dernière entrée 17h30."
          ]}
        ]},

        { type: "label", text: "📱 Apps à installer" },
        { type: "apps", items: [
          { icon: "🗺", name: "Citymapper", desc: "10× plus précis que Google Maps pour les bus et sorties de métro exactes. Indispensable.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🚽", name: "Toilets4London", desc: "Localise les WC gratuits. Vital avec des enfants de 7 ans.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🚕", name: "Bolt", desc: "Souvent moins cher qu'Uber à Londres.", tag: "nice", tagLabel: "Recommandé" },
          { icon: "💳", name: "Revolut / N26", desc: "Payer en livres sans frais de change. À configurer avant.", tag: "nice", tagLabel: "Recommandé" }
        ]},

        { type: "divider" },

        { type: "label", text: "🚇 Transport — la règle d'or" },
        { type: "infoboxGroup", items: [
          { color: "red", title: "PAS d'Oyster Card", items: ["Obsolète. 7£ de caution non remboursable. N'achetez pas."] },
          { color: "green", title: "Ce qu'il faut faire", items: [
            "Carte bancaire sans contact (ou Apple/Google Pay) directement sur les portiques.",
            "Chaque adulte garde <b>toujours la même carte</b> → \"Daily Cap\" (plafond journalier automatique à ~8.90£).",
            "Enfants 7 ans : <b>GRATUITS</b> sur bus & métro avec un adulte payant. Passez les portiques larges ensemble."
          ]},
          { color: "teal", title: "Bus à l'étage = manège gratuit", items: [
            "Dès que possible, préférez le bus rouge à étage au métro. Montez à l'étage, tout devant — les enfants adorent.",
            "Ligne <b>94</b> (Bayswater Rd → Oxford St → Piccadilly) : top pour rentrer à l'hôtel depuis le centre."
          ]}
        ]},

        { type: "divider" },

        { type: "label", text: "🛒 Courses & stratégie soirées" },
        { type: "infobox", color: "amber", title: "Plan provisions", items: [
          "<b>Waitrose Queensway</b> (2 min de l'hôtel) : le plus pratique pour un premier ravitaillement en arrivant — snacks, yaourts, cocas, chocolat, pâtisseries pour le frigo.",
          "<b>M&S Foodhall Notting Hill Gate</b> : meilleure qualité, ~8 min de l'hôtel, à faire <b>au retour</b> de la balade J1 (pas au début).",
          "<b>Répartition type sur 3 soirs</b> : 1 soir pub (pinte + frites pour l'ambiance) + 2 soirs hôtel (fish & chips à emporter ou pique-nique M&S/Waitrose). On décide chaque soir.",
          "Budget dîners estimé : <b>~£80–120 sur 3 soirs</b> (vs ~£300 en restos)."
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
      banner: { accent: "amber", badge: "Jour 1 · Lundi 27 Avril", title: "Arrivée & Notting Hill", sub: "St Pancras → Hôtel → Farm Girl → Parcours photo → Hyde Park" },
      timeline: [
        {
          time: "11h30\n12h30",
          title: "🚂 Extraction St Pancras",
          items: [
            { text: "Arrivée Eurostar → suivre \"Way Out\"." },
            { text: "WC gratuits dans la galerie marchande (niveau bas) avant de sortir.", type: "tip" },
            { text: "St Pancras → Hôtel : Black Cab file officielle Midland Road · ~25–30£ · 25 min. Ne pas prendre les rabatteurs à l'intérieur de la gare.", type: "move" }
          ]
        },
        {
          time: "13h00\n14h30",
          title: "🥞 Déjeuner — Farm Girl",
          items: [
            { text: "<b>Farm Girl</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-farm-girl');return false\">↗ Adresses</a> · 59A Portobello Rd. Un lundi midi hors vacances scolaires anglaises = peu de monde attendu." },
            { text: "Spécialité : Island Pancakes sarrasin/coco, brunch coloré, bons pour les enfants. ~70£ pour 4." },
            { text: "Plan B si plein : Eggbreak (30 Uxbridge St), 4 min à pied.", type: "sub" }
          ]
        },
        {
          time: "14h30\n16h30",
          title: "📸 Parcours Notting Hill — les spots de Sofie",
          items: [
            { text: "Tracé Sofie : <b>Point of view</b> (Portobello Rd, hauteur Blenheim Crescent / Lonsdale Rd) → <b>Colville Terrace</b> → <b>Colville Square Gardens</b> → <b>Saint Lukes Mews</b> (Love Actually) → <b>Westbourne Grove</b> puis redescente vers l'hôtel.", type: "tip" },
            { text: "🎯 <b>Mission enfants</b> : chacun choisit une couleur de maison (rose, bleu, jaune, violet). On prend une photo de chaque trouvaille. Le gagnant choisit la glace du soir." },
            { text: "Goûter : <b>Buns From Home</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-buns-from-home');return false\">↗ Adresses</a> · 128 Talbot Rd · brioches cannelle/chocolat feuilletées à emporter. 4 brioches = goûter royal pour ~15£." },
            { text: "Ouvrir l'œil sur les pubs/restos du chemin — pour décider du dîner le soir même.", type: "sub" },
            { text: "Lundi = <b>pas de marché Portobello</b> (fermé en semaine). Les boutiques sont ouvertes, pas les stands.", type: "warn" }
          ]
        },
        {
          time: "16h30\n18h30",
          title: "🌳 Hyde Park — le gros morceau juste sous l'hôtel",
          items: [
            { text: "Entrée par <b>Lancaster Gate</b> ou <b>Black Lion Gate</b>. On se pose dans l'herbe, on cherche les écureuils (ultra apprivoisés), on goûte." },
            { text: "Boucle possible : Italian Gardens → Long Water → Serpentine. Pas d'objectif, juste décompresser après le voyage.", type: "tip" },
            { text: "Diana Memorial Playground → <b>retiré</b> (était fermé/mort aux derniers essais).", type: "sub" }
          ]
        },
        {
          time: "18h30\n19h00",
          title: "🛒 Waitrose Queensway — provisions",
          items: [
            { text: "Sur le chemin retour : 98-101 Queensway, 2 min de l'hôtel. Remplir le frigo de la chambre (yaourts, cocas, snacks, chocolat, pâtisseries).", type: "tip" },
            { text: "Sofie aime les épices/avocats de chez Waitrose — et c'est nettement plus proche que le M&S de Notting Hill Gate.", type: "sub" }
          ]
        },
        {
          time: "19h00\n22h00",
          title: "🌙 Soir J1 — dîner au feeling",
          items: [
            { text: "<b>Fatigue post-voyage</b> → pique-nique hôtel avec les courses Waitrose + fish & chips à emporter de <b>Hobson's</b> (9 Porchester Rd, 5 min). Option recommandée ce soir-là.", type: "tip" },
            { text: "<b>Envie de sortir</b> → <b>The Champion</b> (1 Wellington Terrace) · pub 1838, pinte + frites, ~5 min de l'hôtel." },
            { text: "<b>Kids-friendly facile</b> → Queensway à 3 min : Pizza Pilgrims, Five Guys, Taza Kebab." },
            { text: "Repéré un spot pendant la balade ? On en reparle.", type: "sub" }
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
      banner: { accent: "coral", badge: "Jour 2 · Mardi 28 Avril", title: "Dinosaures & Covent Garden", sub: "NHM → Shake Shack → Chinatown → shopping Covent" },
      timeline: [
        {
          time: "08h00\n09h30",
          title: "☕ Petit-déj hôtel — attention au temps",
          items: [
            { text: "Petit-déj inclus à l'hôtel. <b>Viser 45 min max</b> pour ne pas y passer la matinée.", type: "warn" },
            { text: "Partir vers 9h30 pour viser le créneau NHM de 10h30." }
          ]
        },
        {
          time: "10h30\n12h30",
          title: "🦕 Natural History Museum",
          items: [
            { text: "Hôtel → NHM : métro <b>Circle line</b>, Bayswater → South Kensington (4 stations, ~8 min, sans changement). Sortie Exhibition Road.", type: "move" },
            { text: "<b>Entrée Exhibition Road</b> (souvent moins de monde que Cromwell Road).", type: "tip" },
            { text: "Route conseillée : Hall Hintze (baleine au plafond) → Zone Bleue <b>Dinosaures</b> 🦖 (rex animatronique) → Zone Rouge (volcans, simulateur tremblement de terre) si buffer." },
            { text: "Réservation gratuite à faire en ligne avant le départ — créneau garanti.", type: "sub" },
            { text: "Boutique dinos = piège. Fixer un budget avant d'entrer (\"un truc à 5£\").", type: "warn" }
          ]
        },
        {
          time: "12h45\n13h45",
          title: "🍔 Déjeuner — Shake Shack Covent Garden",
          items: [
            { text: "NHM → Covent Garden : métro <b>Piccadilly line</b>, South Kensington → Covent Garden (4 stations, ~11 min).", type: "move" },
            { text: "<b>Shake Shack</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-shake-shack-covent-garden');return false\">↗ Adresses</a> · 24 Market Building, sous la halle de Covent Garden. Burger + frites + milk-shake, valeur sûre famille. ~55£ pour 4." }
          ]
        },
        {
          time: "13h45\n17h30",
          title: "🏮 Covent Garden + Chinatown en mode balade",
          items: [
            { text: "<b>Neal's Yard</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-neal-s-yard');return false\">↗ Adresses</a> — petite cour cachée, murs peints pastel. Le spot photo que 90% des touristes ratent.", type: "tip" },
            { text: "<b>Chinatown</b> (5 min à pied vers Leicester Square) — vitrines avec canards laqués suspendus, porte de la Terre Céleste, boutiques asiatiques. Rigolo pour les enfants, gratuit, photogénique." },
            { text: "<b>Shopping en boucle autour de Covent</b> : UNIQLO (rouvert il y a 3 semaines, énorme), MUJI, Moomin Shop, Choosing Keeping (papeterie), Boots, ARKET. Tout en 10 min à pied.", type: "sub" },
            { text: "<b>St Martin's Courtyard</b> + <b>Seven Dials</b> : petites rues, concept stores. Bien pour décompresser entre deux boutiques." },
            { text: "🟡 <b>Option si gros buffer</b> : London Transport Museum (Covent Garden Piazza) — adultes £24.50, enfants gratuits. Playzone enfants, vieux bus/trams, simulateur. ~2h. Cher pour 2 adultes mais adoré des enfants de 7 ans.", type: "sub" }
          ]
        },
        {
          time: "17h30\n18h30",
          title: "🚌 Retour — bus 94 à l'étage",
          items: [
            { text: "Depuis Piccadilly Circus / Oxford Street → Notting Hill Gate. Monter à l'étage tout devant : c'est le manège gratuit du jour.", type: "tip" }
          ]
        },
        {
          time: "19h00\n22h00",
          title: "🌙 Soir J2 — dîner",
          items: [
            { text: "<b>Option pub ambiance</b> → <b>The Champion</b> (proche hôtel) · pinte + frites, puis on rentre grignoter au frigo. Soir idéal pour ça.", type: "tip" },
            { text: "<b>Option hôtel</b> → takeaway <b>Hobson's Fish & Chips</b> (9 Porchester Rd) ou <b>Pizza Pilgrims</b> Queensway." },
            { text: "<b>Si on traîne au centre</b> → manger à Chinatown (ramen, dim sum) avant de rentrer en bus 94." }
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
      banner: { accent: "violet", badge: "Jour 3 · Mercredi 29 Avril", title: "Holland Park & Brick Lane", sub: "Kyoto Garden → Playground → Spitalfields → Brick Lane" },
      timeline: [
        {
          time: "09h30\n12h00",
          title: "🌿 Holland Park — Kyoto Garden & Playground",
          items: [
            { text: "Hôtel → Holland Park : <b>à pied</b> ~1,6 km / 20 min, quartier arboré. (Alt. métro Bayswater → Holland Park, Circle line, 5 min.)", type: "move" },
            { text: "<b>Kyoto Garden</b> : jardin japonais, cascade, carpes koi, très joli en fin avril. Accès libre et gratuit.", type: "tip" },
            { text: "<b>Holland Park Adventure Playground</b> : grande aire de jeux 5–14 ans, tyrolienne 25 m, mur d'escalade, bascule 10 places. Gratuit. Les enfants y sont occupés ~1h tranquille." },
            { text: "Matinée sans pression : on laisse les enfants fatiguer leurs jambes pendant qu'on boit un café.", type: "sub" }
          ]
        },
        {
          time: "12h00\n12h30",
          title: "🏛 Design Museum — boutique (optionnel)",
          items: [
            { text: "Sortie sud de Holland Park, 224 Kensington High St. <b>Collection permanente et boutique gratuites</b> (pas d'expo payante)." },
            { text: "Juste un passage si buffer : l'architecture intérieure et la boutique design valent le détour seules. ~20–30 min.", type: "sub" }
          ]
        },
        {
          time: "13h00\n14h30",
          title: "🥙 Déjeuner Brick Lane — freestyle",
          items: [
            { text: "Holland Park → Liverpool Street : métro <b>Central line</b> direct (~20 min), puis 8 min à pied vers le nord via Bishopsgate.", type: "move" },
            { text: "<b>Old Spitalfields Market</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-old-spitalfields-market');return false\">↗ Adresses</a> · marché couvert ouvert en semaine, tables communes, cafés et stands variés. <b>Plus \"assis\" et plus calme</b> que Brick Lane pour déjeuner avec les enfants. Le bon plan sit-down du J3.", type: "tip" },
            { text: "Alternative : <b>118 The Lane</b> sur Brick Lane même, petit restaurant sit-down repéré par Sofie.", type: "sub" },
            { text: "⚠ On évite le <b>Beigel Bake</b> en déjeuner principal (pas de tables, on mange debout). Gardé pour le goûter.", type: "warn" }
          ]
        },
        {
          time: "14h30\n18h00",
          title: "🎨 Parcours Brick Lane / Shoreditch",
          items: [
            { text: "Rues à voir (calmes en milieu de semaine) : <b>Fournier Street</b>, <b>Wilkes Street</b>, <b>Princelet Street</b>, <b>Brushfield Street</b>, <b>Redchurch Street</b>.", type: "tip" },
            { text: "🎯 <b>Chasse aux Space Invaders</b> : chercher les pixel-art de l'artiste Invader planqués sur les murs. Les enfants en repèrent plus que les parents. Prendre 1 photo à chaque trouvaille." },
            { text: "<b>Rough Trade East</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-rough-trade-east');return false\">↗ Adresses</a> · Old Truman Brewery · disquaire culte, photobooth vintage, café." },
            { text: "<b>Rokit</b> (101 Brick Lane) · friperie vintage multi-étages." },
            { text: "🥯 <b>Beigel Bake</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-beigel-bake');return false\">↗ Adresses</a> · 159 Brick Lane, enseigne <b>BLANCHE</b> (pas la jaune d'à côté) · bagel Salt Beef mythique ~6£ en <b>goûter</b>. Ouvert 24h/24." }
          ]
        },
        {
          time: "18h00\n19h00",
          title: "🍺 Apéro — 91 Brick Lane",
          items: [
            { text: "<b>91 Brick Lane</b> (Old Truman Brewery) · terrasse extérieure, grandes tables en bois, petite cour abritée. Un verre tranquille pendant que les enfants courent.", type: "tip" },
            { text: "Alternative café : <b>Brick Lane Coffee Shop</b>.", type: "sub" }
          ]
        },
        {
          time: "19h00\n22h00",
          title: "🌙 Soir J3 — dîner",
          items: [
            { text: "Retour Liverpool Street → Bayswater : métro Circle/Hammersmith (~20 min).", type: "move" },
            { text: "<b>Retour tardif / fatigue</b> → fish & chips à emporter <b>Hobson's</b> sur le chemin (Queensway), manger à l'hôtel. Recommandé.", type: "tip" },
            { text: "<b>Courses M&S</b> Notting Hill Gate si pas déjà fait J1 + pique-nique hôtel." },
            { text: "<b>Si pub pas fait J2</b> → <b>The Champion</b> pour une pinte rapide." }
          ]
        }
      ],
      rainPlans: [
        { if: "Si gros orage toute la journée", then: "<b>Basculer J2 sur J3</b> : faire le NHM mercredi (intérieur), garder Holland Park + Brick Lane pour un jour sec. Les deux programmes sont interchangeables." },
        { if: "Si averses en matinée seulement", then: "Retarder Holland Park l'après-midi, commencer par le <b>Design Museum</b> (intérieur, gratuit) puis enchaîner quand ça se lève." }
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
      banner: { accent: "teal", badge: "Jour 4 · Jeudi 30 Avril", title: "Courses & Retour", sub: "M&S Marble Arch → Boots → St Pancras → Eurostar 14h31" },
      timeline: [
        {
          time: "09h00\n09h30",
          title: "🧳 Check-out",
          items: [
            { text: "Petit-déj une dernière fois, puis check-out. Laisser les bagages à la réception de l'hôtel pour la matinée." },
            { text: "Alt. : <b>Stasher.com</b> (consigne à proximité de St Pancras) si on préfère déposer les valises directement près du train.", type: "sub" }
          ]
        },
        {
          time: "09h30\n11h30",
          title: "🛒 Matinée tranquille — M&S + Boots",
          items: [
            { text: "Hôtel → Marble Arch : <b>à pied</b> ~15 min le long de Hyde Park (joli) ou métro Bayswater → Paddington + bus 94.", type: "move" },
            { text: "Direction <b>Marks & Spencer Marble Arch</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-m-s-marble-arch');return false\">↗ Adresses</a> · Oxford Street. Ramener de quoi manger dans le train (sandwiches, salades, biscuits) + souvenirs food (Yorkshire Tea, Digestives, Cadbury, Jaffa Cakes).", type: "tip" },
            { text: "<b>Boots</b> à côté pour la parapharmacie (crèmes, cosmétiques UK intéressants, souvenirs pas chers)." },
            { text: "Balade Oxford Street côté Marble Arch si envie — Primark Oxford St pour les souvenirs enfants à 2-5£ (t-shirts, chaussettes, pyjamas).", type: "sub" },
            { text: "Éviter les grosses activités matin : train à 14h31, pas le temps. On reste léger.", type: "warn" }
          ]
        },
        {
          time: "11h30\n13h00",
          title: "🥪 Déjeuner + récup bagages",
          items: [
            { text: "Retour à l'hôtel (bus 94 direct Oxford Street → Bayswater Rd), récupérer les bagages, déjeuner rapide à l'hôtel ou en Queensway." },
            { text: "Alt. : déjeuner chez <b>Dishoom King's Cross</b> si envie de se faire plaisir avant le train — c'est juste à côté de St Pancras.", type: "sub" }
          ]
        },
        {
          time: "13h00\n14h00",
          title: "🚨 St Pancras — Zone de Danger",
          items: [
            { text: "Marble Arch → St Pancras : Central line → Oxford Circus → Victoria line → King's Cross St Pancras (~15 min).", type: "move" },
            { text: "Arriver 1h15 avant le départ (13h15 au plus tard). Billets Eurostar sur téléphone chargé ou papier.", type: "warn" },
            { text: "Douanes FR + UK : prévoir 45 min de marge." },
            { text: "Vider la petite monnaie £ dans les boîtes de charité ou acheter des chocolats." }
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
        { if: "Si on a plus de temps que prévu (plan backup)", then: "<b>Platform 9¾</b> (King's Cross) — panneau mural gratuit, photo famille · puis <b>Coal Drops Yard</b> pour un café (à 3 min à pied de St Pancras)." },
        { if: "Si les enfants réclament de la féerie", then: "<b>Hamleys</b> (188 Regent St, 7 étages de jouets) — prévoir crise de larmes à la sortie ⚠. À faire uniquement si le timing train est confortable." }
      ]
    },

    /* ================================================================
       PAGE 5 — CARNET D'ADRESSES
       ================================================================ */
    {
      id: "adresses",
      tab: "🍽 Adresses",
      type: "addresses",
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "Restos, cafés, parcs & shopping", sub: "£ <10£ · ££ 15-25£ · £££ >30£ par personne" },
      zones: [
        {
          label: "📍 J1 Notting Hill",
          sections: [
            {
              label: "🍽 Manger & Boire",
              cards: [
                { emoji: "🥞", name: "Farm Girl", addr: "59A Portobello Rd, W11 3DB", price: "££", color: "amber", body: "Brunch Instagram. Island Pancakes sarrasin/coco, avocado toast, lattés à la rose. Cadre coloré.", verdict: "Arriver avant 12h un lundi = tranquille. ~70£ pour 4.", mapsQuery: "Farm+Girl+59A+Portobello+Rd+London" },
                { emoji: "🍳", name: "Eggbreak", addr: "30 Uxbridge St, W8 7SY", price: "££", color: "neutral", body: "Plan B si Farm Girl est plein (4 min à pied). Spécialiste des œufs, très gourmand.", mapsQuery: "Eggbreak+30+Uxbridge+St+London" },
                { emoji: "🥐", name: "Buns From Home", addr: "128 Talbot Rd, W11 1JR", price: "£", color: "emerald", body: "Brioches feuilletées cannelle, chocolat, pistache à emporter uniquement.", verdict: "4 brioches sur un banc = goûter royal pour ~15£.", mapsQuery: "Buns+From+Home+128+Talbot+Rd+London" },
                { emoji: "🍺", name: "The Sun In Splendour", addr: "7 Portobello Road, W11 3DA", price: "££", color: "pink", body: "Pub Notting Hill. Sur le chemin de la balade J1, repéré par Sofie pour l'ambiance.", person: "Sofie", mapsQuery: "Sun+In+Splendour+Portobello+London" },
                { emoji: "🍺", name: "The Hillgate", addr: "24 Hillgate St, W8 7SR", price: "£££", color: "pink", body: "Gastropub Notting Hill repéré par Sofie. Ambiance chic mais note salée (\"tu sors de là avec 120£\"). Plutôt en apéro qu'en dîner complet.", person: "Sofie", mapsQuery: "The+Hillgate+Notting+Hill+London" },
                { emoji: "🥞", name: "Fluffy Fluffy Bayswater", addr: "Bayswater W2", price: "££", color: "pink", body: "Soufflé-pancakes japonais façon nuage. Option goûter sucré pour les enfants, à 3 min de l'hôtel.", person: "Sofie", mapsQuery: "Fluffy+Fluffy+Bayswater+London" }
              ]
            },
            {
              label: "📸 Parcours photo Sofie",
              cards: [
                { emoji: "🎨", name: "Colville Terrace + Colville Square Gardens", addr: "Notting Hill W11", color: "pink", body: "Les rues les plus colorées de Notting Hill selon Sofie. Pastel intense, fenêtres à guillotine, jardinières fleuries.", person: "Sofie", mapsQuery: "Colville+Terrace+London+W11" },
                { emoji: "💕", name: "Saint Lukes Mews", addr: "Notting Hill W11 1DF", color: "pink", body: "La ruelle pavée du film Love Actually (scène des pancartes). Maisons pastel, très photogénique.", verdict: "Le must photo du J1.", person: "Sofie", mapsQuery: "St+Lukes+Mews+Notting+Hill+London" },
                { emoji: "🛍", name: "Westbourne Grove", addr: "Notting Hill W11", color: "pink", body: "Rue commerçante chic de Notting Hill. Boutiques, cafés, concept stores. À traverser en redescendant vers l'hôtel.", person: "Sofie", mapsQuery: "Westbourne+Grove+London+W11" },
                { emoji: "🌿", name: "Linden Gardens", addr: "Notting Hill W2", color: "pink", body: "Petite rue jolie repérée par Sofie, point de vue discret.", person: "Sofie", mapsQuery: "Linden+Gardens+Notting+Hill+London" },
                { emoji: "📸", name: "Point of view — Portobello haut", addr: "Portobello Rd × Lonsdale / Blenheim Crescent W11", color: "pink", body: "Spot photo Sofie : perspective descendante sur Portobello Road et façades pastel. Deux points repérés à hauteur d'Elgin puis de Lonsdale.", person: "Sofie", mapsQuery: "Portobello+Road+Lonsdale+Road+London+W11" },
                { emoji: "🍰", name: "Cheeky Scone", addr: "Notting Hill Gate", price: "£", color: "pink", body: "Scones maison repérés par Sofie dans le coin de l'hôtel. Pause sucrée possible.", person: "Sofie", mapsQuery: "Cheeky+Scone+Notting+Hill+London" }
              ]
            },
            {
              label: "🏞 Parcs",
              cards: [
                { emoji: "🌳", name: "Hyde Park", addr: "Juste sous l'hôtel", color: "emerald", body: "Le gros parc royal, écureuils ultra apprivoisés, Serpentine, Italian Gardens. Entrées Lancaster Gate ou Black Lion Gate. Gratuit.", verdict: "Décompression garantie après l'Eurostar. ~1h30 tranquille en fin de J1.", mapsQuery: "Hyde+Park+London" }
              ]
            }
          ]
        },
        {
          label: "📍 J2 NHM & Covent",
          sections: [
            {
              label: "🦕 Activités",
              cards: [
                { emoji: "🦕", name: "Natural History Museum", addr: "Cromwell Rd, South Ken SW7 5BD", color: "coral", body: "Gratuit. Entrer par Exhibition Road. Dinosaures, baleine bleue au plafond, volcans. Réservation en ligne conseillée (créneau garanti).", verdict: "Le seul musée du voyage — on y va à fond.", mapsQuery: "Natural+History+Museum+London" },
                { emoji: "🚇", name: "London Transport Museum", addr: "Covent Garden Piazza WC2E 7BB", color: "neutral", body: "Adultes £24.50 (annual pass), enfants gratuits. Playzone dédiée, vieux bus/trams, simulateur de conduite métro.", verdict: "Option si gros buffer l'après-midi — adoré des enfants de 7 ans mais cher pour 2 adultes.", mapsQuery: "London+Transport+Museum+Covent+Garden" }
              ]
            },
            {
              label: "🍽 Manger",
              cards: [
                { emoji: "🍔", name: "Shake Shack Covent Garden", addr: "24 Market Building, WC2E 8RD", price: "££", color: "coral", body: "Burger qui ne se discute pas. Frites parfaites, milk-shake. Sous la halle de Covent Garden.", verdict: "Déjeuner J2 validé — les deux cartes de la famille ont ce spot.", mapsQuery: "Shake+Shack+Covent+Garden+London" },
                { emoji: "🦆", name: "Haozhan", addr: "8 Gerrard St, Chinatown", price: "££", color: "neutral", body: "Canard laqué excellent (sans les os). Incontournable Chinatown si on y dîne le soir.", mapsQuery: "Haozhan+8+Gerrard+St+London" },
                { emoji: "🍦", name: "Chin Chin Dessert Club", addr: "54 Greek St, Soho", price: "£", color: "neutral", body: "Glaces à l'azote liquide (fumée !). Spectacle garanti pour les enfants.", mapsQuery: "Chin+Chin+Dessert+Club+Soho+London" }
              ]
            },
            {
              label: "🛍 Shopping & balades",
              cards: [
                { emoji: "🌈", name: "Neal's Yard", addr: "Neal's Yard, Covent Garden WC2H", color: "pink", body: "Petite cour cachée colorée : murs peints, plantes, cafés bio. Cachée dans une ruelle.", verdict: "Le spot Instagram secret que 90% des touristes ratent.", person: "Sofie", mapsQuery: "Neals+Yard+Covent+Garden+London" },
                { emoji: "🧡", name: "The Moomin Shop", addr: "Covent Garden Market", color: "pink", body: "Boutique officielle Moomin. Peluches, céramiques, livres illustrés.", person: "Sofie", mapsQuery: "Moomin+Shop+Covent+Garden+London" },
                { emoji: "✏️", name: "Choosing Keeping", addr: "21 Tower St, Covent Garden", color: "pink", body: "Papeterie haut de gamme : carnets japonais, stylos rares, objets de bureau. Un des plus beaux shops du quartier.", person: "Sofie", mapsQuery: "Choosing+Keeping+21+Tower+St+London" },
                { emoji: "👕", name: "UNIQLO Covent Garden", addr: "Covent Garden", color: "pink", body: "Nouveau flagship énorme rouvert 3 semaines avant le voyage. Si besoin de bases enfants/adultes à bas prix.", person: "Sofie", mapsQuery: "UNIQLO+Covent+Garden+London" },
                { emoji: "🏮", name: "Chinatown", addr: "Gerrard Street WC2H", color: "coral", body: "Vitrines avec canards rôtis suspendus, porte de la Terre Céleste, boutiques asiatiques. Rigolo pour les enfants, gratuit.", mapsQuery: "Chinatown+London" },
                { emoji: "👗", name: "Rokit Covent Garden", addr: "42 Shelton St WC2H 9HZ", color: "pink", body: "Friperie vintage multi-étages. Années 70-90.", person: "Sofie", mapsQuery: "Rokit+42+Shelton+St+Covent+Garden+London" },
                { emoji: "🧺", name: "MUJI Covent Garden", addr: "Long Acre, Covent Garden", color: "pink", body: "Basiques japonais : papeterie, petits objets, vêtements simples. À combiner avec UNIQLO juste à côté.", person: "Sofie", mapsQuery: "MUJI+Covent+Garden+London" },
                { emoji: "👕", name: "ARKET Store", addr: "Covent Garden WC2", color: "pink", body: "Scandi minimaliste, belles matières, bien coupé. Rayon enfants intéressant.", person: "Sofie", mapsQuery: "ARKET+Covent+Garden+London" },
                { emoji: "🛍", name: "TK Maxx", addr: "Covent Garden", price: "£", color: "pink", body: "Déstockage marques. Très aléatoire mais parfois de très belles trouvailles pas chères.", person: "Sofie", mapsQuery: "TK+Maxx+Covent+Garden+London" },
                { emoji: "💊", name: "Boots Covent Garden", addr: "Long Acre, Covent Garden", price: "£", color: "pink", body: "Utile pour dépannages parapharmacie en journée + souvenirs cosmétiques UK.", person: "Sofie", mapsQuery: "Boots+Long+Acre+Covent+Garden" },
                { emoji: "🍽", name: "Bill's Covent Garden", addr: "St Martin's Courtyard WC2E", price: "££", color: "pink", body: "Brasserie chaîne britannique repérée par Sofie dans St Martin's Courtyard. Option solide si Shake Shack bondé.", person: "Sofie", mapsQuery: "Bills+St+Martins+Courtyard+London" },
                { emoji: "🍪", name: "Puffy Cookies Soho", addr: "Soho W1", price: "£", color: "pink", body: "Cookies américains géants et moelleux. Tentation sucrée en remontant vers Chinatown.", person: "Sofie", mapsQuery: "Puffy+Cookies+Soho+London" }
              ]
            }
          ]
        },
        {
          label: "📍 J3 Holland & Brick Lane",
          sections: [
            {
              label: "🌿 Parcs & musées",
              cards: [
                { emoji: "🌸", name: "Kyoto Garden", addr: "Holland Park W8", color: "violet", body: "Jardin japonais, cascade, carpes koi. Accès libre et gratuit. Ouvert 7h30 → ~20h30 fin avril.", verdict: "Très beau en fin avril. Début idéal du J3.", mapsQuery: "Kyoto+Garden+Holland+Park+London" },
                { emoji: "🛝", name: "Holland Park Adventure Playground", addr: "Holland Park W8", color: "violet", body: "Aire de jeux 5-14 ans. Tyrolienne 25m, mur d'escalade, bascule 10 places. Gratuit.", verdict: "Les enfants y tiennent 1h facile — parfait pour souffler.", mapsQuery: "Holland+Park+Adventure+Playground+London" },
                { emoji: "🏛", name: "Design Museum", addr: "224-238 Kensington High St", color: "pink", body: "Collection permanente et boutique GRATUITES (pas d'expo payante). Architecture béton brutaliste reconvertie, bâtiment blanc spectaculaire.", verdict: "Sortie sud de Holland Park — 20-30 min si buffer.", person: "Sofie", mapsQuery: "Design+Museum+Kensington+London" }
              ]
            },
            {
              label: "🍽 Manger Brick Lane",
              cards: [
                { emoji: "🏪", name: "Old Spitalfields Market", addr: "16 Horner Square, E1 6EW", price: "£-££", color: "violet", body: "Marché couvert, ouvert en semaine. Stands et cafés variés, tables communes. Plus calme et plus assis que Brick Lane.", verdict: "Le bon plan déjeuner sit-down du J3 freestyle.", mapsQuery: "Old+Spitalfields+Market+London" },
                { emoji: "🍽", name: "118 The Lane", addr: "118 Brick Lane E1", price: "££", color: "pink", body: "Petit resto sit-down repéré par Sofie sur Brick Lane même. Alternative au marché.", person: "Sofie", mapsQuery: "118+Brick+Lane+London" },
                { emoji: "🥯", name: "Beigel Bake", addr: "159 Brick Lane — enseigne BLANCHE", price: "£", color: "amber", body: "Institution ouverte 24h/24. Bagel Salt Beef mythique ~6£. On mange debout.", verdict: "À prendre en GOÛTER, pas en déjeuner. L'enseigne BLANCHE, pas la jaune à côté !", mapsQuery: "Beigel+Bake+159+Brick+Lane+London" },
                { emoji: "🍺", name: "91 Brick Lane", addr: "91 Brick Lane, Old Truman Brewery", price: "££", color: "pink", body: "Terrasse extérieure, grandes tables en bois, petite cour abritée. Pour un verre tranquille en fin d'après-midi.", person: "Sofie", mapsQuery: "91+Brick+Lane+London" },
                { emoji: "☕", name: "Brick Lane Coffee Shop", addr: "157 Brick Lane E1", price: "£", color: "pink", body: "Café de quartier pour une pause.", person: "Sofie", mapsQuery: "Brick+Lane+Coffee+Shop+London" }
              ]
            },
            {
              label: "🎨 Balades & shopping",
              cards: [
                { emoji: "🎵", name: "Rough Trade East", addr: "Old Truman Brewery, 91 Brick Lane", color: "violet", body: "LE disquaire culte de Londres. Immense. Vinyles, CD, scène live, café, photobooth vintage.", mapsQuery: "Rough+Trade+East+Brick+Lane+London" },
                { emoji: "👗", name: "Rokit Vintage Brick Lane", addr: "101 Brick Lane E1", color: "pink", body: "Vintage multi-étages. Années 70-90. Le meilleur dépôt-vente du coin selon Sofie.", person: "Sofie", mapsQuery: "Rokit+101+Brick+Lane+London" },
                { emoji: "🏘", name: "Fournier / Wilkes / Princelet Streets", addr: "Spitalfields E1", color: "pink", body: "Rues géorgiennes (ex-huguenotes puis juives). Les plus belles du quartier, calmes en semaine.", person: "Sofie", mapsQuery: "Fournier+Street+London" },
                { emoji: "🏙", name: "Brushfield Street", addr: "Spitalfields E1 6AA", color: "pink", body: "Rue en face du marché de Spitalfields, enfilade de façades victoriennes et boutiques. Bonne perspective photo.", person: "Sofie", mapsQuery: "Brushfield+Street+London" },
                { emoji: "🎨", name: "Redchurch Street", addr: "Shoreditch E2", color: "pink", body: "Rue la plus tendance de Shoreditch. Concept stores, galeries, cafés. 5 min de Brick Lane.", person: "Sofie", mapsQuery: "Redchurch+Street+Shoreditch+London" },
                { emoji: "👾", name: "Space Invaders", addr: "Brick Lane / Shoreditch", color: "violet", body: "Pixel-art de l'artiste Invader cachés sur les murs du quartier. Mission chasse aux trésors pour les enfants.", mapsQuery: "Space+Invaders+Brick+Lane+London" }
              ]
            },
            {
              label: null,
              infobox: { color: "red", title: "⚠ Columbia Road Flower Market — pas cette fois", items: [
                "Sofie l'a mis sur sa carte, mais ce marché est <b>ouvert uniquement le dimanche</b>. Votre voyage est lundi-jeudi. À garder pour un prochain séjour."
              ]}
            }
          ]
        },
        {
          label: "🍺 Soirées & Survie",
          sections: [
            {
              label: "🍺 Pubs & takeaway proches hôtel",
              cards: [
                { emoji: "🍺", name: "The Champion", addr: "1 Wellington Terrace, W2 4LW", price: "££", color: "emerald", body: "Pub traditionnel de 1838, face aux Kensington Gardens. Très proche hôtel, ambiance authentique.", verdict: "Le pub du soir par défaut. Pinte + frites + on rentre.", mapsQuery: "The+Champion+Wellington+Terrace+London" },
                { emoji: "🍺", name: "Bayswater Arms", addr: "99 Queensway, W2 4QH", price: "££", color: "neutral", body: "Pub corner traditionnel, terrasse. Bon fish & chips complet (~£60-80 famille).", mapsQuery: "Bayswater+Arms+Queensway+London" },
                { emoji: "🐟", name: "Hobson's Fish & Chips", addr: "9 Porchester Road, W2 5DP", price: "££", color: "emerald", body: "Fish & chips artisanal, poisson frais Billingsgate. Takeaway. 5 min de l'hôtel.", verdict: "Le meilleur takeaway poisson du quartier. ~£30-40 famille.", mapsQuery: "Hobsons+Fish+Chips+Porchester+Road+London" },
                { emoji: "🍕", name: "Pizza Pilgrims Queensway", addr: "38 Queensway, W2 3RS", price: "££", color: "neutral", body: "Pizza napolitaine artisanale. 3 min de l'hôtel. Valeur sûre kids-friendly.", mapsQuery: "Pizza+Pilgrims+Queensway+London" },
                { emoji: "🍔", name: "Five Guys Queensway", addr: "59-63 Queensway, W2 4QH", price: "££", color: "neutral", body: "Burgers. Solution facile si les enfants sont à bout.", mapsQuery: "Five+Guys+Queensway+London" },
                { emoji: "🌯", name: "Taza Kebab House", addr: "35A Queensway, W2 4QJ", price: "£", color: "neutral", body: "Shawarma/kebab libanais honnête. 3 min de l'hôtel. ~£25-35 famille.", mapsQuery: "Taza+Kebab+Queensway+London" }
              ]
            },
            {
              label: "🛒 Courses",
              cards: [
                { emoji: "🛒", name: "Waitrose Queensway", addr: "98-101 Queensway, W2 4QH", price: "££", color: "emerald", body: "Le plus proche de l'hôtel (2 min). Plats préparés, sandwiches, épices que Sofie aime. Premier ravitaillement J1.", verdict: "À faire en fin de J1 au retour de la balade.", person: "Sofie", mapsQuery: "Waitrose+Queensway+London" },
                { emoji: "🛒", name: "M&S Foodhall Notting Hill Gate", addr: "113-119 Notting Hill Gate, W11 3LB", price: "££", color: "amber", body: "Meilleure qualité. Meal Deal ~£5 (sandwich + boisson + snack). 8 min de l'hôtel.", verdict: "Option si Waitrose ne suffit pas.", mapsQuery: "M%26S+Notting+Hill+Gate+London" },
                { emoji: "🛒", name: "M&S Marble Arch", addr: "458 Oxford Street, W1C 1AP", price: "££", color: "teal", body: "Le plus grand M&S de la zone. Pour les courses souvenirs + repas train du J4.", verdict: "Destination principale du J4 matin.", mapsQuery: "M%26S+Marble+Arch+Oxford+Street+London" },
                { emoji: "💊", name: "Boots Oxford Street", addr: "Marble Arch area", price: "£", color: "teal", body: "Parapharmacie UK : crèmes, cosmétiques, souvenirs pas chers.", mapsQuery: "Boots+Marble+Arch+Oxford+Street+London" },
                { emoji: "🏪", name: "Tesco Express Queensway", addr: "62-64 Queensway, W2 3RL", price: "£", color: "neutral", body: "Dépannage rapide. Meal Deal 4£. 3 min de l'hôtel.", mapsQuery: "Tesco+Express+Queensway+London" }
              ]
            },
            {
              label: "💡 Astuces",
              infoboxes: [
                { color: "green", title: "Économies au resto", items: [
                  "<b>\"Carafe of tap water\"</b> — eau du robinet gratuite et excellente.",
                  "<b>Service charge :</b> si 12.5% est déjà sur la facture, ne rajoutez rien.",
                  "Pique-niquer à Hyde Park avec M&S/Waitrose = top et très anglais."
                ]},
                { color: "amber", title: "Souvenirs pas chers", items: [
                  "<b>Primark Oxford St</b> — t-shirts HP, pyjamas, chaussettes Union Jack : 2-5£.",
                  "<b>Supermarchés</b> — Yorkshire Tea, Digestives, Cadbury Dairy Milk, Jaffa Cakes : 3× moins cher que les boutiques touristiques.",
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
      banner: { accent: "emerald", badge: "Budget", title: "Estimation 2026 — version allégée", sub: "Pour la famille (2 adultes + 2 enfants)" },
      tables: [
        {
          label: "🎟 Entrées & Activités",
          headers: ["Poste", "Coût", "Note"],
          rows: [
            ["London Transport Museum", "~£49", "🟡 Optionnel J2"]
          ],
          footer: ["NHM, Holland Park, Hyde Park, Design Museum", "Gratuits"]
        },
        {
          label: "🚇 Transport",
          headers: ["Poste", "Coût", "Famille"],
          rows: [
            ["Taxi St Pancras → hôtel", "~25-30£", "~30£"],
            ["Métro/bus (Daily Cap × 3j)", "~8.90£/A/j", "~55£"],
            ["Métro J4 (M&S + gare)", "~5£/A", "~10£"],
            ["Enfants métro/bus", "Gratuit", "—"]
          ],
          footer: ["Transport total", "~95£"]
        },
        {
          label: "🍽 Repères repas",
          headers: ["Repas type", "Par pers.", "Famille"],
          rows: [
            ["Brunch Farm Girl (J1 midi)", "~18£", "~70£"],
            ["Shake Shack (J2 midi)", "~14£", "~55£"],
            ["Spitalfields Market (J3 midi)", "~12£", "~50£"],
            ["Pub pinte + frites (1 soir)", "~10£", "~35£"],
            ["Hobson's Fish & Chips takeaway", "~10£", "~35£"],
            ["Pique-nique M&S/Waitrose", "~6£", "~25£"],
            ["Petit-déj hôtel", "Inclus", "—"]
          ]
        },
        {
          label: "📊 Total estimé",
          headers: ["Catégorie", "Estimation"],
          rows: [
            ["Entrées & activités", "~0-50£"],
            ["Transport local", "~95£"],
            ["Déjeuners (3 jours)", "~175£"],
            ["Dîners (3 soirs flexibles)", "~95£"],
            ["Provisions Waitrose/M&S", "~50£"],
            ["Souvenirs (M&S + Boots + Primark)", "~80-150£"]
          ],
          footer: ["TOTAL (hors hôtel + Eurostar)", "~£500-600"]
        }
      ],
      note: "Hors hébergement et transport Paris-Londres. Allégé de ~40% par rapport à la version initiale grâce au retrait Tower/Eye/British Museum et à la stratégie soirées flexibles."
    }
  ],

  catColors: {
    food: '#F97316',
    shop: '#EC4899',
    park: '#10B981',
    see: '#8B5CF6',
    errand: '#14B8A6',
    logistics: '#6B7280'
  },

  catLabels: {
    food: 'Restos',
    shop: 'Shopping',
    park: 'Parcs',
    see: 'Culture',
    errand: 'Courses',
    logistics: 'Transport'
  },

  mapData: {
    1: { center:[51.513,-0.192], zoom:14, pts:[
      // Logistique
      { p:[51.5318,-0.1263], label:'🚂 St Pancras', cat:'logistics' },
      { p:[51.5111,-0.1870], label:'🏨 Hôtel Thistle', cat:'logistics' },
      // Parcs
      { p:[51.5095,-0.1812], label:'🌳 Hyde Park', cat:'park' },
      // Restos & cafés
      { p:[51.5143,-0.2042], label:'🥞 Farm Girl', cat:'food' },
      { p:[51.5108,-0.1990], label:'🍳 Eggbreak', cat:'food' },
      { p:[51.5157,-0.1990], label:'🥐 Buns From Home', cat:'food' },
      { p:[51.5106,-0.1976], label:'🍰 Cheeky Scone', cat:'food' },
      { p:[51.5131,-0.1879], label:'🥞 Fluffy Fluffy', cat:'food' },
      { p:[51.5128,-0.1860], label:'🍺 Sun In Splendour', cat:'food' },
      { p:[51.5079,-0.1976], label:'🍺 The Hillgate', cat:'food' },
      { p:[51.5117,-0.1885], label:'🍺 The Champion', cat:'food' },
      { p:[51.5145,-0.1893], label:'🐟 Hobson\'s F&C', cat:'food' },
      { p:[51.5128,-0.1870], label:'🍺 Bayswater Arms', cat:'food' },
      { p:[51.5134,-0.1856], label:'🍕 Pizza Pilgrims', cat:'food' },
      { p:[51.5125,-0.1863], label:'🍔 Five Guys', cat:'food' },
      { p:[51.5135,-0.1855], label:'🌯 Taza Kebab', cat:'food' },
      // Parcours photo
      { p:[51.5170,-0.1975], label:'🎨 Colville Terrace', cat:'see' },
      { p:[51.5165,-0.2010], label:'💕 St Lukes Mews', cat:'see' },
      { p:[51.5140,-0.1960], label:'🛍 Westbourne Grove', cat:'shop' },
      { p:[51.5124,-0.2013], label:'📸 Point of view', cat:'see' },
      { p:[51.5133,-0.2016], label:'📸 Point of view 2', cat:'see' },
      { p:[51.5122,-0.1907], label:'🌿 Linden Gardens', cat:'see' },
      // Courses
      { p:[51.5126,-0.1861], label:'🛒 Waitrose', cat:'errand' },
      { p:[51.5092,-0.1960], label:'🛒 M&S Notting Hill', cat:'errand' },
      { p:[51.5124,-0.1864], label:'🛒 Tesco Express', cat:'errand' }
    ]},
    2: { center:[51.505,-0.140], zoom:13, pts:[
      // Activités
      { p:[51.4967,-0.1764], label:'🦕 NHM', cat:'see' },
      { p:[51.5129,-0.1223], label:'🚇 Transport Museum', cat:'see' },
      { p:[51.5111,-0.1305], label:'🏮 Chinatown', cat:'see' },
      { p:[51.5145,-0.1263], label:'🌈 Neal\'s Yard', cat:'see' },
      // Restos & cafés
      { p:[51.5120,-0.1226], label:'🍔 Shake Shack', cat:'food' },
      { p:[51.5113,-0.1312], label:'🦆 Haozhan', cat:'food' },
      { p:[51.5140,-0.1315], label:'🍦 Chin Chin Dessert', cat:'food' },
      { p:[51.5125,-0.1264], label:'🍽 Bill\'s Covent', cat:'food' },
      { p:[51.5127,-0.1324], label:'🍪 Puffy Cookies', cat:'food' },
      // Shopping
      { p:[51.5118,-0.1229], label:'🧡 Moomin Shop', cat:'shop' },
      { p:[51.5134,-0.1280], label:'✏️ Choosing Keeping', cat:'shop' },
      { p:[51.5131,-0.1242], label:'👕 UNIQLO', cat:'shop' },
      { p:[51.5138,-0.1247], label:'👗 Rokit Covent', cat:'shop' },
      { p:[51.5129,-0.1245], label:'🧺 MUJI', cat:'shop' },
      { p:[51.5126,-0.1251], label:'👕 ARKET', cat:'shop' },
      { p:[51.5121,-0.1257], label:'🛍 TK Maxx', cat:'shop' },
      // Courses
      { p:[51.5131,-0.1245], label:'💊 Boots Covent', cat:'errand' }
    ]},
    3: { center:[51.515,-0.110], zoom:12, pts:[
      // Parcs & musées
      { p:[51.5030,-0.2050], label:'🌸 Kyoto Garden', cat:'park' },
      { p:[51.5040,-0.2038], label:'🛝 Holland Playground', cat:'park' },
      { p:[51.5000,-0.2002], label:'🏛 Design Museum', cat:'see' },
      // Balades & culture
      { p:[51.5203,-0.0745], label:'🏘 Fournier Street', cat:'see' },
      { p:[51.5190,-0.0763], label:'🏙 Brushfield Street', cat:'see' },
      { p:[51.5237,-0.0763], label:'🎨 Redchurch Street', cat:'see' },
      // Restos & cafés
      { p:[51.5193,-0.0755], label:'🏪 Spitalfields Market', cat:'food' },
      { p:[51.5209,-0.0727], label:'🍽 118 The Lane', cat:'food' },
      { p:[51.5225,-0.0720], label:'🥯 Beigel Bake', cat:'food' },
      { p:[51.5215,-0.0725], label:'🍺 91 Brick Lane', cat:'food' },
      { p:[51.5224,-0.0719], label:'☕ Brick Lane Coffee', cat:'food' },
      // Shopping
      { p:[51.5216,-0.0723], label:'🎵 Rough Trade East', cat:'shop' },
      { p:[51.5220,-0.0730], label:'👗 Rokit Brick Lane', cat:'shop' }
    ]},
    4: { center:[51.516,-0.155], zoom:13, pts:[
      // Logistique
      { p:[51.5322,-0.1234], label:'🚂 St Pancras', cat:'logistics' },
      { p:[51.5111,-0.1870], label:'🏨 Hôtel', cat:'logistics' },
      // Courses
      { p:[51.5144,-0.1559], label:'🛒 M&S Marble Arch', cat:'errand' },
      { p:[51.5148,-0.1565], label:'💊 Boots Oxford St', cat:'errand' }
    ]}
  },

  dayColors: { 1:'#F59E0B', 2:'#F97316', 3:'#7C3AED', 4:'#0D9488' }
};
