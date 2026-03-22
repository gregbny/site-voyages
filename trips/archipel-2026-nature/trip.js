const TRIP = {
  meta: {
    id: "archipel-2026-nature",
    title: "Archipel — Nature",
    flag: "🇸🇪",
    heroEmoji: "⚓",
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [
      { text: "3–8 Août", highlight: true },
      { text: "👨‍👩‍👧‍👦 2A + 2E (7 ans)" },
      { text: "🚗 Voiture" },
      { text: "🏠 Vaxholm" },
      { text: "~500 €" }
    ],
    people: ["Greg", "Sofie"],
    personTag: "♥",
    mapCenter: [59.42, 18.35],
    mapZoom: 10
  },

  pages: [
    /* ================================================================
       PAGE 0 — AVANT LE DÉPART
       ================================================================ */
    {
      id: "avant",
      tab: "✈️ Avant",
      type: "custom",
      banner: { accent: "amber", badge: "Avant le départ", title: "Vaxholm & Archipel", sub: "Hébergement, budget, recettes, conseils pratiques" },
      sections: [
        { type: "label", text: "🏘 Pourquoi Vaxholm ?" },
        { type: "infobox", color: "teal", title: "Vaxholm — Le cœur de l'archipel", items: [
          "Petite ville de pêcheurs sur une presqu'île à <b>40 min de Stockholm en voiture</b> (ou 1h en ferry SL).",
          "<b>Forteresse</b> du 16e siècle — les enfants adorent.",
          "<b>Réseau de ferries</b> vers l'archipel depuis le quai du centre.",
          "<b>Plages gratuites</b> à 10–15 min à vélo.",
          "<b>Maisons de bois suédoises</b> colorées — le décor de carte postale suédois.",
          "<b>Accès voiture</b> facilement depuis Stockholm.",
          "<b>Prix Airbnb</b> bien inférieurs à Stockholm : une maison avec jardin est trouvable pour 100–150 €/nuit."
        ]},

        { type: "divider" },
        { type: "label", text: "🏡 Hébergement" },
        { type: "infobox", color: "amber", title: "Où chercher l'hébergement", items: [
          "<b>Airbnb / Booking :</b> Cherchez \"Vaxholm family house\", \"Vaxholm stuga\", \"Resarö cottage\".",
          "<b>Zones idéales :</b> Vaxholm centre · Resarö (île reliée par pont, plus calme) · Ingarö (reliée par pont, grandes maisons).",
          "<b>Conseil :</b> Une maison avec jardin et possibilité de barbecue est idéale — vous cuisinerez beaucoup dehors.",
          "<b>Prix indicatif :</b> 1 000–1 600 SEK/nuit (90–150 €) pour une maison 4 pers avec jardin."
        ]},

        { type: "divider" },
        { type: "label", text: "🛒 Stratégie Budget" },
        { type: "infobox", color: "green", title: "Objectif : 500 € max pour la semaine", items: [
          "<b>Petit-déj et dîners 100% maison</b> (5 dîners sur 5).",
          "<b>Pique-niques</b> pour les midis en excursion (3 jours sur 5).",
          "<b>1 déjeuner ou dîner au restaurant</b> en milieu de semaine (tradition, plaisir).",
          "<b>Activités surtout gratuites :</b> plages, randonnées, kayak, pêche, forteresse (entrée modeste).",
          "<b>Courses faites à Willys / Lidl</b> sur le mainland avant d'arriver — les petites épiceries d'îles sont plus chères."
        ]},

        { type: "divider" },
        { type: "label", text: "🍽 Recettes de la semaine" },
        { type: "infobox", color: "coral", title: "Menus du soir — 20–30 min max", items: [
          "<b>J1 — Plateau scandinave :</b> Gravlax, fromage Västerbotten, knäckebröd, harengs marinés, cornichons.",
          "<b>J2 — Grillade suédoise :</b> Grillkorv/falukorv au barbecue, salade de pommes de terre à l'aneth, confiture de lingonberry.",
          "<b>J3 — Pâtes saumon fumé :</b> Pâtes, crème, saumon fumé, citron, câpres — 20 min chrono.",
          "<b>J4 — Pannkakor :</b> Crêpes suédoises épaisses avec lingonberry, crème fraîche, sucre — le dîner préféré de tous les enfants suédois.",
          "<b>J5 — Laxsoppa :</b> Soupe de saumon (bouillon + pommes de terre + poireaux + saumon + crème + aneth) avec knäckebröd."
        ]},

        { type: "divider" },
        { type: "label", text: "💡 Conseils Pratiques Archipel" },
        { type: "infoboxGroup", items: [
          { color: "teal", title: "Nature & Baignade", items: [
            "<b>Eau du robinet :</b> Excellente en Suède — pas besoin d'acheter de l'eau en bouteille (économie non négligeable).",
            "<b>Baignade :</b> L'eau est à 17–19°C en août — rafraîchissante mais tout à fait baignable. Les Suédois s'y jettent sans hésitation.",
            "<b>Soleil :</b> Crème solaire indispensable même par temps couvert. Le soleil est fort dans le nord.",
            "<b>Moustiques :</b> Début août dans l'archipel, il y en a. Prenez un répulsif."
          ]},
          { color: "green", title: "Droits & Bons Plans", items: [
            "<b>Allemansrätten</b> (droit de libre accès à la nature) : vous pouvez ramasser du bois mort et faire un feu sur les rochers (hors période de sécheresse). Expérience magique.",
            "<b>Pêche :</b> Libre depuis les rives en eau salée, sans permis. Ligne simple + appâts du supermarché.",
            "<b>Navigation :</b> Les ferries Waxholmsbolaget sont souvent inclus dans les passes SL — vérifiez votre type de pass avant de partir.",
            "<b>Consigne canettes :</b> Les supermarchés suédois ont un système de consigne (<i>pant</i>) — récupérez l'argent en fin de semaine à la machine."
          ]}
        ]},

        { type: "divider" },
        { type: "label", text: "🗺 Alternatives si Vaxholm ne convient pas" },
        { type: "infoboxGroup", items: [
          { color: "amber", title: "Alternative 1 — Värmdö", items: [
            "40 min à l'est de Stockholm · Grande île reliée par route.",
            "<b>Point fort :</b> Meilleures plages de sable autour de Stockholm — Grisslinge Havsbad (toboggan aquatique, douches, restaurant).",
            "Très apprécié des familles suédoises · Plus facile à trouver en Airbnb.",
            "Programme similaire à Vaxholm, avec plus de plages et moins de ferries."
          ]},
          { color: "amber", title: "Alternative 2 — Norrtälje (comme base)", items: [
            "1h au nord de Stockholm · Sur la côte de Roslagen.",
            "<b>Point fort :</b> Atmosphère de petite ville côtière authentique, archipel extérieur plus sauvage.",
            "Moins touristique que Vaxholm · Logements moins chers.",
            "Excursions : kayak dans l'archipel nord, îles désertes, pêche."
          ]}
        ]}
      ]
    },

    /* ================================================================
       PAGE 1 — LUNDI 3 AOÛT (Jour 1)
       ================================================================ */
    {
      id: "jour1",
      tab: "Lundi J1",
      type: "day",
      dayNumber: 1,
      banner: { accent: "amber", badge: "Jour 1 · Lundi 3 Août", title: "Trajet & Installation", sub: "Stockholm → Courses → Vaxholm → Premier tour à pied" },
      timeline: [
        {
          time: "09h00\n10h30",
          title: "🚗 Départ Stockholm & Courses",
          items: [
            { text: "Récupérer la voiture au P-Hus Medborgarplatsen." },
            { text: "<b>Courses à faire AVANT de partir :</b> Willys ou ICA Maxi à Stockholm pour toute la semaine — les petits commerces de Vaxholm sont plus chers.", type: "warn" },
            { text: "Liste conseillée : avoine/muesli, pain <i>knäckebröd</i>, fromage <i>Västerbotten</i>, beurre, lait, œufs, saumon fumé (<i>gravlax</i>), harengs marinés, <i>köttbullar</i> surgelés, pâtes/riz, légumes, fruits, chips, confiture de lingonberry, jus.", type: "sub" }
          ]
        },
        {
          time: "12h00\n13h00",
          title: "🏠 Arrivée à Vaxholm",
          items: [
            { text: "~40 min de route depuis Södermalm." },
            { text: "Check-in Airbnb / récupération des clés." },
            { text: "Tour du jardin, installation des enfants." }
          ]
        },
        {
          time: "14h00\n17h00",
          title: "🚶 Premier tour de Vaxholm à pied",
          items: [
            { text: "<b>Strandgatan</b> — la rue principale longeant le bras d'eau : maisons en bois rouge et jaune, boutiques d'artisanat local." },
            { text: "<b>Le quai</b> — ferries qui partent vers les îles, vieux bateaux à vapeur, pêcheurs." },
            { text: "Repérer les plages, l'embarcadère, la forteresse depuis le bord." },
            { text: "🎯 Mission enfants : \"Compter les maisons rouges sur Strandgatan\"." }
          ]
        },
        {
          time: "17h30",
          title: "🛝 Parc & Aire de jeux",
          items: [
            { text: "Vaxholm a une petite aire de jeu centrale — décompression après le trajet." }
          ]
        },
        {
          time: "19h00",
          title: "🍽 Dîner maison — Plateau Scandinave",
          items: [
            { text: "<i>Knäckebröd</i> + fromages + <i>gravlax</i> + cornichons + harengs marinés." },
            { text: "Un plateau scandinave, ça prend 10 minutes à préparer et c'est excellent.", type: "tip" },
            { text: "Dîner dans le jardin si le temps le permet.", type: "sub" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 2 — MARDI 4 AOÛT (Jour 2)
       ================================================================ */
    {
      id: "jour2",
      tab: "Mardi J2",
      type: "day",
      dayNumber: 2,
      banner: { accent: "coral", badge: "Jour 2 · Mardi 4 Août", title: "Forteresse & Plage", sub: "Citadel Vaxholm → Pique-nique → Eriksö/Tenöbadet" },
      timeline: [
        {
          time: "09h30\n12h00",
          title: "🏰 Vaxholm Citadel / Kastellet",
          items: [
            { text: "Forteresse sur son île en face de Vaxholm — accès en petit ferry depuis le quai (~10 min)." },
            { text: "Forteresse du 16e siècle, musée d'histoire militaire suédois, vue à 360° sur l'archipel." },
            { text: "<b>Tarifs :</b> ~70 SEK/adulte · Enfants ~30–40 SEK → <b>~220 SEK pour 4</b> (~25 €)." },
            { text: "Les enfants explorent les tours, les souterrains, les canons — parfait pour des 7 ans aventureux.", type: "tip" },
            { text: "Durée : 1h30–2h.", type: "sub" }
          ]
        },
        {
          time: "12h00\n13h00",
          title: "🥪 Pique-nique",
          items: [
            { text: "Sandwichs préparés le matin — mangez sur la forteresse ou sur le quai, face à l'eau." }
          ]
        },
        {
          time: "14h00\n17h30",
          title: "🏖 Eriksö / Tenöbadet — Plage",
          items: [
            { text: "Plage de sable à ~10 min de voiture de Vaxholm." },
            { text: "Eau claire de la Baltique, jetée en bois, endroit familial très populaire." },
            { text: "Barbecue areas, toilettes, douches. <b>Gratuit.</b>" },
            { text: "Idéal pour la baignade des enfants (eau à ~18°C en août).", type: "tip" }
          ]
        },
        {
          time: "17h30",
          title: "🚿 Retour maison + douche",
          items: [
            { text: "Repos avant le dîner." }
          ]
        },
        {
          time: "19h00",
          title: "🍽 Dîner maison — Grillade Suédoise",
          items: [
            { text: "Saucisses suédoises (<i>falukorv</i> ou <i>grillkorv</i>) au barbecue jardin." },
            { text: "Salade de pommes de terre à l'aneth + pain grillé + beurre." },
            { text: "Confiture de lingonberry en accompagnement.", type: "sub" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 3 — MERCREDI 5 AOÛT (Jour 3)
       ================================================================ */
    {
      id: "jour3",
      tab: "Mercredi J3",
      type: "day",
      dayNumber: 3,
      banner: { accent: "violet", badge: "Jour 3 · Mercredi 5 Août", title: "Excursion Île en Ferry", sub: "Vaxholm → Grinda ou Möja → Baignade → Coucher de soleil" },
      timeline: [
        {
          time: "08h30",
          title: "🥪 Préparation & Départ",
          items: [
            { text: "Préparer le pique-nique avant de partir — il n'y a pas grand-chose à acheter sur les îles." },
            { text: "Départ du quai de Vaxholm." }
          ]
        },
        {
          time: "09h00\n10h00",
          title: "⛴ Ferry vers l'archipel",
          items: [
            { text: "<b>Option A — Grinda</b> (~45 min, Waxholmsbolaget) : réserve naturelle, plages de granite rose, eau cristalline, sentiers en forêt.", type: "tip" },
            { text: "<b>Option B — Möja</b> (~2h) : île plus éloignée et plus sauvage, village de pêcheurs, pas de voiture sur l'île. Le trajet en lui-même est magnifique.", type: "sub" },
            { text: "Möja est plus fatigant pour les enfants → bon si vous les savez de bonne constitution.", type: "warn" },
            { text: "<b>Tarifs ferry :</b> ~120–150 SEK A/R adulte. Enfants : vérifier avec le pass SL (souvent inclus).", type: "sub" }
          ]
        },
        {
          time: "10h00\n15h00",
          title: "🏝 Exploration de l'île",
          items: [
            { text: "<b>Grinda :</b> baignade, plongée depuis les rochers, randonnée loop de 2h (facile), pique-nique en lisière de forêt." },
            { text: "<b>Möja :</b> village de pêcheurs, épicerie locale, sentiers côtiers sauvages." },
            { text: "Naviguer dans l'archipel suédois avec les enfants est une expérience inoubliable — c'est le cœur de la semaine.", type: "tip" }
          ]
        },
        {
          time: "16h00\n17h30",
          title: "⛴ Ferry retour",
          items: [
            { text: "Retour au coucher de soleil sur le ferry — apportez des couvertures pour les enfants." }
          ]
        },
        {
          time: "18h30",
          title: "🏠 Retour maison",
          items: [
            { text: "Dépose, douche, repos." }
          ]
        },
        {
          time: "19h00",
          title: "🍽 Dîner maison — Pâtes au Saumon Fumé",
          items: [
            { text: "Pâtes + crème + saumon fumé + citron + câpres — ultra-rapide." },
            { text: "20 min de préparation après une grande journée dehors. Les enfants adorent, 100% suédois dans l'esprit.", type: "tip" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 4 — JEUDI 6 AOÛT (Jour 4)
       ================================================================ */
    {
      id: "jour4",
      tab: "Jeudi J4",
      type: "day",
      dayNumber: 4,
      banner: { accent: "teal", badge: "Jour 4 · Jeudi 6 Août", title: "Vélos & Pêche", sub: "Loop Resarö à vélo → Pique-nique → Pêche au quai" },
      timeline: [
        {
          time: "09h00\n12h00",
          title: "🚴 Location vélos & Balade côtière",
          items: [
            { text: "Location de vélos à Vaxholm — ~50 € pour 4 vélos / demi-journée." },
            { text: "<b>Sentier conseillé :</b> Loop Vaxholm → Resarö → pointe nord → retour par la côte (~8–12 km selon le niveau)." },
            { text: "Resarö est une île reliée par pont : maisons de vacances suédoises, quelques plages cachées, silence total.", type: "tip" },
            { text: "Petite route côtière quasi plate — parfaite pour les enfants.", type: "sub" }
          ]
        },
        {
          time: "12h00\n13h00",
          title: "🥪 Pique-nique en bord de mer",
          items: [
            { text: "Trouvez un rocher plat ou une petite plage en chemin — apporter la couverture." }
          ]
        },
        {
          time: "14h00\n16h00",
          title: "😴 Retour vélos → Repos",
          items: [
            { text: "Sieste / jeux libres dans le jardin." },
            { text: "Les enfants ont besoin de récupérer après le ferry d'hier et les vélos aujourd'hui.", type: "sub" }
          ]
        },
        {
          time: "16h00\n18h00",
          title: "🎣 Pêche depuis le quai",
          items: [
            { text: "La pêche est libre depuis les quais et bords de l'eau en Suède." },
            { text: "Achetez une canne simple et un sachet d'appâts à l'épicerie locale (~50 SEK).", type: "tip" },
            { text: "Aucun permis requis en eau salée.", type: "sub" },
            { text: "🎯 Mission : attraper un crabe ou un poisson — même sans résultat, les enfants adorent." }
          ]
        },
        {
          time: "19h00",
          title: "🥞 Dîner maison — Pannkakor",
          items: [
            { text: "Les crêpes suédoises (<i>pannkakor</i>) sont plus épaisses que les françaises, presque comme des blinis." },
            { text: "Servies avec confiture de lingonberry, crème fraîche, sucre." },
            { text: "C'est le dîner préféré de tous les enfants suédois — et des vôtres aussi, on parie.", type: "tip" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 5 — VENDREDI 7 AOÛT (Jour 5)
       ================================================================ */
    {
      id: "jour5",
      tab: "Vendredi J5",
      type: "day",
      dayNumber: 5,
      banner: { accent: "emerald", badge: "Jour 5 · Vendredi 7 Août", title: "Excursion Norrtälje", sub: "Vaxholm → Norrtälje → Restaurant → Plage → Retour" },
      timeline: [
        {
          time: "09h30",
          title: "🚗 Départ vers Norrtälje",
          items: [
            { text: "~45 min au nord de Vaxholm — une des plus jolies villes de Roslagen." }
          ]
        },
        {
          time: "10h30\n12h00",
          title: "🏘 Norrtälje — Visite ville",
          items: [
            { text: "Centre historique en bois peint, boutiques artisanales, glacier local. <b>Gratuit.</b>" },
            { text: "<b>Norrtälje Hamn :</b> nouveau quartier sur le port avec restaurants, food trucks, plages aménagées." },
            { text: "Glace artisanale suédoise (<i>glass</i>) au bord de l'eau — incontournable.", type: "tip" }
          ]
        },
        {
          time: "12h00\n13h30",
          title: "🍽 Déjeuner au restaurant — L'unique repas assis de la semaine",
          items: [
            { text: "Norrtälje a d'excellents restaurants de fruits de mer accessibles le midi." },
            { text: "<b>Suggestion :</b> restaurant du port, <b>dagens lunch</b> à ~140 SEK/adulte." },
            { text: "~450–550 SEK pour 4 (~50 €) — le seul repas au resto de toute la semaine.", type: "sub" }
          ]
        },
        {
          time: "14h00\n16h30",
          title: "🏖 Bälingebaden — Plage",
          items: [
            { text: "Plages accessibles autour de Norrtälje, eau propre, parfaites pour les enfants." },
            { text: "Baignade, rochers, coquillages. <b>Gratuit.</b>" }
          ]
        },
        {
          time: "17h00",
          title: "🚗 Retour Vaxholm",
          items: [
            { text: "~45 min de route." }
          ]
        },
        {
          time: "19h30",
          title: "🍽 Dîner maison — Laxsoppa",
          items: [
            { text: "Soupe de saumon suédoise : bouillon + pommes de terre + poireaux + saumon coupé en dés + crème + aneth." },
            { text: "Plat national suédois d'été — chaud, réconfortant, rapide.", type: "tip" },
            { text: "Pain <i>knäckebröd</i> en accompagnement.", type: "sub" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 6 — SAMEDI 8 AOÛT (Jour 6)
       ================================================================ */
    {
      id: "jour6",
      tab: "Samedi J6",
      type: "day",
      dayNumber: 6,
      banner: { accent: "amber", badge: "Jour 6 · Samedi 8 Août", title: "Dernier Matin & Départ", sub: "Flâne Vaxholm → Souvenirs → Check-out" },
      timeline: [
        {
          time: "08h30\n10h00",
          title: "☕ Flâne finale à Vaxholm",
          items: [
            { text: "Dernier café dans le jardin." },
            { text: "Tour sur le quai, regarder les ferries partir." },
            { text: "🎯 Mission enfants : \"Acheter un souvenir à Vaxholm\" — les boutiques de Strandgatan ont des figurines en bois, bonbons suédois, cartes postales." }
          ]
        },
        {
          time: "10h30",
          title: "🚗 Check-out & Départ",
          items: [
            { text: "En route selon votre destination suivante (retour France ou étape ?)." }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 7 — CARNET D'ADRESSES
       ================================================================ */
    {
      id: "adresses",
      tab: "🍽 Adresses",
      type: "addresses",
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "Lieux, Plages & Courses", sub: "Principalement self-catering — les bonnes adresses de l'archipel" },
      zones: [
        {
          label: "🏘 Vaxholm",
          sections: [
            {
              label: "🏘 Centre & Points d'intérêt",
              cards: [
                { emoji: "🛍", name: "Strandgatan", addr: "Rue principale, Vaxholm", color: "amber", body: "La rue qui longe le bras d'eau — maisons en bois rouge et jaune, boutiques d'artisanat local, cafés. Le cœur du village.", mapsQuery: "Strandgatan+Vaxholm+Sweden" },
                { emoji: "🏰", name: "Vaxholm Citadel", addr: "Kastellet, Vaxholm", color: "amber", body: "Forteresse du 16e siècle sur son île en face de Vaxholm. Accès en petit ferry (~10 min). Musée d'histoire militaire, vue 360° sur l'archipel.", verdict: "~220 SEK pour 4. Les enfants adorent les tours et souterrains.", mapsQuery: "Vaxholm+Fortress+Kastellet" },
                { emoji: "⛵", name: "Quai des ferries", addr: "Hamnen, Vaxholm", color: "teal", body: "Départ des ferries Waxholmsbolaget vers toutes les îles de l'archipel. Vieux bateaux à vapeur, pêcheurs. Le point névralgique.", verdict: "Vérifiez les horaires sur waxholmsbolaget.se la veille.", mapsQuery: "Vaxholm+hamn+ferry+terminal" },
                { emoji: "🏪", name: "Commerces locaux", addr: "Vaxholm centre", color: "neutral", body: "Petites épiceries et boutiques. Plus cher qu'en ville — faire les grosses courses à Stockholm avant d'arriver.", warn: "Prix 20–30% plus élevés que Willys/ICA Maxi.", mapsQuery: "Vaxholm+centrum" }
              ]
            }
          ]
        },
        {
          label: "🏖 Plages",
          sections: [
            {
              label: "🏖 Plages & Baignade",
              cards: [
                { emoji: "🏖", name: "Eriksö / Tenöbadet", addr: "~10 min en voiture de Vaxholm", color: "coral", body: "Plage de sable en eau claire de la Baltique. Jetée en bois, endroit familial très populaire. Barbecue areas, toilettes, douches.", verdict: "Gratuit. Eau à ~18°C en août — rafraîchissante mais baignable.", mapsQuery: "Tenöbadet+Vaxholm+Sweden" },
                { emoji: "🏝", name: "Grinda", addr: "Île accessible en ferry (~45 min)", color: "teal", body: "Réserve naturelle. Plages de granite rose, eau cristalline, sentiers dans la forêt. Randonnée loop de 2h (facile).", verdict: "Le joyau de l'archipel intérieur. Ferry ~120–150 SEK A/R adulte.", mapsQuery: "Grinda+island+Stockholm+archipelago" },
                { emoji: "🏖", name: "Bälingebaden", addr: "Près de Norrtälje (~45 min)", color: "emerald", body: "Plages accessibles autour de Norrtälje, eau propre, parfaites pour les enfants. Baignade, rochers, coquillages.", verdict: "Gratuit. À combiner avec la journée excursion à Norrtälje (J5).", mapsQuery: "Bälingebaden+Norrtälje+Sweden" }
              ]
            }
          ]
        },
        {
          label: "🛒 Courses",
          sections: [
            {
              label: "🛒 Supermarchés & Provisions",
              cards: [
                { emoji: "🛒", name: "Willys", addr: "Stockholm (avant le départ)", color: "green", body: "Le supermarché discount suédois — les meilleurs prix. Faire le plein pour toute la semaine avant de rejoindre Vaxholm.", verdict: "Priorité absolue J1 matin. Liste : gravlax, knäckebröd, Västerbotten, lingonberry, grillkorv...", mapsQuery: "Willys+Stockholm" },
                { emoji: "🛒", name: "ICA Maxi", addr: "Stockholm ou Täby", color: "green", body: "Grand supermarché avec large choix. Alternative à Willys si plus proche de votre point de départ.", verdict: "Bon rayon poisson fumé et produits suédois typiques.", mapsQuery: "ICA+Maxi+Stockholm" }
              ]
            },
            {
              label: null,
              infoboxes: [
                { color: "green", title: "Astuces courses pour la semaine", items: [
                  "<b>Liste indispensable :</b> avoine/muesli, pain <i>knäckebröd</i>, fromage <i>Västerbotten</i>, beurre, lait, œufs, saumon fumé (<i>gravlax</i>), harengs marinés, <i>köttbullar</i> surgelés, pâtes/riz, légumes, fruits, confiture de lingonberry.",
                  "<b>Grillkorv / falukorv :</b> saucisses pour le barbecue J2 — rayon frais.",
                  "<b>Saumon frais :</b> pour la <i>laxsoppa</i> du J5 — acheter en milieu de semaine à l'épicerie locale pour la fraîcheur.",
                  "<b>Consigne (<i>pant</i>) :</b> gardez vos canettes et bouteilles plastiques — récupérez l'argent en fin de semaine à la machine du supermarché."
                ]}
              ]
            }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 8 — CARTE
       ================================================================ */
    {
      id: "carte",
      tab: "🗺 Carte",
      type: "fullmap"
    },

    /* ================================================================
       PAGE 9 — BUDGET
       ================================================================ */
    {
      id: "budget",
      tab: "💰 Budget",
      type: "budget",
      banner: { accent: "emerald", badge: "Budget", title: "Estimation Archipel 2026", sub: "Pour la famille (2 adultes + 2 enfants) — hors hébergement" },
      tables: [
        {
          label: "🛒 Alimentation",
          headers: ["Poste", "Détail", "Coût"],
          rows: [
            ["Courses semaine", "Petit-dej + pique-niques + 5 dîners maison (Willys)", "~180 €"],
            ["1 restaurant", "Déjeuner Norrtälje, 4 pers", "~50 €"],
            ["Glaces / snacks", "Imprévus, friandises", "~45 €"]
          ],
          footer: ["", "Sous-total", "~275 €"]
        },
        {
          label: "🚗 Transport",
          headers: ["Poste", "Détail", "Coût"],
          rows: [
            ["Carburant", "A/R Stockholm + excursions ~300 km", "~50 €"],
            ["Ferries archipel", "2–3 excursions (Waxholmsbolaget)", "~60 €"]
          ],
          footer: ["", "Sous-total", "~110 €"]
        },
        {
          label: "🎟 Activités",
          headers: ["Poste", "Détail", "Coût"],
          rows: [
            ["Forteresse Vaxholm", "4 entrées + ferry citadel", "~25 €"],
            ["Location vélos", "4 vélos, demi-journée", "~50 €"],
            ["Kayak", "2h pour la famille (optionnel)", "~40 €"],
            ["Pêche", "Canne simple + appâts", "~5 €"]
          ],
          footer: ["", "Sous-total", "~120 €"]
        }
      ],
      note: "Total estimé : ~505 €. Jouez sur le kayak ou la demi-journée vélos pour rester sous les 500 € pile. Hébergement non compris (budget à part)."
    }
  ],

  /* ================================================================
     DONNÉES CARTOGRAPHIQUES
     ================================================================ */
  mapData: {
    1: { center: [59.402, 18.350], zoom: 13, pts: [
      { p: [59.4025, 18.3480], label: '🏘 Vaxholm centre' },
      { p: [59.4030, 18.3500], label: '⛵ Quai ferries' },
      { p: [59.4020, 18.3460], label: '🏪 Strandgatan' }
    ]},
    2: { center: [59.405, 18.360], zoom: 13, pts: [
      { p: [59.4050, 18.3620], label: '🏰 Citadel Vaxholm' },
      { p: [59.4100, 18.3850], label: '🏖 Eriksö/Tenöbadet' }
    ]},
    3: { center: [59.43, 18.56], zoom: 10, pts: [
      { p: [59.4430, 18.5680], label: '🏝 Grinda' },
      { p: [59.5100, 18.7850], label: '🏝 Möja' },
      { p: [59.4025, 18.3480], label: '⛵ Départ Vaxholm' }
    ]},
    4: { center: [59.41, 18.35], zoom: 13, pts: [
      { p: [59.4150, 18.3400], label: '🚴 Loop Resarö' },
      { p: [59.4025, 18.3480], label: '🎣 Quai pêche' }
    ]},
    5: { center: [59.75, 18.70], zoom: 9, pts: [
      { p: [59.7580, 18.7030], label: '🏘 Norrtälje' },
      { p: [59.7600, 18.7100], label: '🍽 Port Norrtälje' },
      { p: [59.7550, 18.7150], label: '🏖 Plage' }
    ]}
  },

  dayColors: { 1: '#F59E0B', 2: '#F97316', 3: '#7C3AED', 4: '#0D9488', 5: '#059669' }
};
