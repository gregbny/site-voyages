const TRIP = {
  meta: {
    id: "sodra-karr-2026",
    title: "Södra Kärr",
    flag: "🇸🇪",
    heroEmoji: "🧺",
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [
      { text: "Jeu 23 – Mer 29 Juillet", highlight: true },
      { text: "👨‍👩‍👧‍👦 Famille + beaux-parents" },
      { text: "🏡 Maison familiale" },
      { text: "🧺 Loppis & nature" }
    ],
    people: ["Greg", "Sofie"],
    personTag: "♥",
    mapCenter: [56.55, 16.25],
    mapZoom: 9
  },

  pages: [
    /* ================================================================
       PAGE 0 — TRAJET
       ================================================================ */
    {
      id: "trajet",
      tab: "🛳 Trajet",
      type: "custom",
      banner: { accent: "amber", badge: "Jeudi 23 → Vendredi 24 Juillet", title: "Route & Nuit sur le Bateau", sub: "La grande transhumance vers la Suède" },
      sections: [
        { type: "label", text: "🚗 Jeudi 23 — la route" },
        { type: "infobox", color: "amber", title: "Checklist voiture", items: [
          "<b>Tablettes chargées</b> + films/séries <b>téléchargés la veille</b> (pas de wifi fiable en route).",
          "Snacks + gourdes remplies, sacs à portée de main.",
          "<b>Pause toutes les 2h</b> — viser les aires avec jeux.",
          "Papiers du bateau + <b>passeports</b> dans la boîte à gants, pas dans le coffre."
        ]},
        { type: "label", text: "⛴ Jeudi soir — le bateau" },
        { type: "infobox", color: "violet", title: "Embarquement & nuit à bord", items: [
          "Arriver <b>~1h avant l'embarquement</b> — la file des voitures est longue en été.",
          "Monter en cabine avec un <b>petit sac nuit</b> préparé (pyjamas, brosses à dents, affaires du matin) — on ne redescend pas à la voiture pendant la traversée.",
          "Dîner à bord : réserver tôt ou prévoir un pique-nique de cabine.",
          "Pour les enfants : le pont extérieur au départ, c'est le vrai début des vacances.",
        ]},
        { type: "label", text: "🚗 Vendredi 24 — débarquement & arrivée" },
        { type: "infobox", color: "green", title: "Cap sur Södra Kärr", items: [
          "Petit-déj à bord avant le débarquement (ou thermos + brioches préparés).",
          "<b>Courses en route</b> vers la maison : un Willys ou ICA sur l'itinéraire — le frigo de la maison vous attend vide.",
          "Arrivée, installation… et c'est parti pour 5 jours de rien faire organisé."
        ]}
      ]
    },

    /* ================================================================
       PAGE 1 — LE COIN
       ================================================================ */
    {
      id: "coin",
      tab: "🏖 Le Coin",
      type: "custom",
      banner: { accent: "teal", badge: "24 → 29 Juillet", title: "Autour de la Maison", sub: "Plages, port, forêt — tout à moins de 10 min" },
      sections: [
        { type: "label", text: "🧭 La philosophie de la semaine" },
        { type: "infobox", color: "green", title: "Pas de programme", items: [
          "C'est une semaine de <b>famille et de repos</b> : grasses matinées, jardin, nature, loppis.",
          "Cette page est un <b>garde-manger d'idées</b>, pas un planning — on pioche selon la météo et l'humeur.",
          "Les excursions (Kalmar, Öland, Glasriket) sont là <b>si l'envie vient</b> — zéro obligation."
        ]},
        { type: "label", text: "🏖 Plages & port (Bergkvara, 5–8 min)" },
        { type: "cards", items: [
          { emoji: "🏖", name: "Dalskär", addr: "Bergkvara", color: "teal", body: "LA plage familiale du coin : sable, jetée, <b>minigolf</b>, kiosque à glaces, beach-volley. L'après-midi type des enfants.", verdict: "Gratuit (minigolf payant) — à 10 min.", mapsQuery: "Dalskär+Bergkvara" },
          { emoji: "🛝", name: "Badudden", addr: "Bergkvara", color: "teal", body: "Petite plage avec ponton et <b>toboggan</b> pour les plus petits, cabines de change simples.", mapsQuery: "Badudden+Bergkvara" },
          { emoji: "⚓", name: "Port de Bergkvara", addr: "Bergkvara hamn", color: "amber", body: "Bateaux de pêche, promenade du soir, glace sur le quai. L'un des plus vieux ports de commerce de la Baltique.", verdict: "Idéal en fin de journée.", mapsQuery: "Bergkvara+hamn" },
          { emoji: "🏯", name: "Kristianopel", addr: "~10 min au sud (Blekinge)", color: "violet", body: "Minuscule village fortifié dans ses <b>remparts du 17e siècle</b> : roses trémières, port de plaisance, café et glace. Une balade d'1h parfaite.", verdict: "Le détour charmant du coin.", mapsQuery: "Kristianopel" }
        ]},
        { type: "label", text: "🌲 Nature & jardin" },
        { type: "infobox", color: "teal", title: "Les classiques de l'été suédois", items: [
          "<b>Myrtilles :</b> pleine saison fin juillet — cueillette libre en forêt (<i>allemansrätten</i>), prévoir des petits pots.",
          "<b>Kubb</b> au jardin : le jeu de quilles suédois — les beaux-parents ont sûrement un set.",
          "<b>Grillkväll :</b> soirée grillades — saucisses <i>grillkorv</i>, pain, moutarde suédoise.",
          "<b>Baignade :</b> Baltique ~18°C — rafraîchissante, les enfants s'en fichent.",
          "Moustiques le soir près de l'eau — répulsif.",
        ]}
      ]
    },

    /* ================================================================
       PAGE 2 — LOPPIS
       ================================================================ */
    {
      id: "loppis",
      tab: "🧺 Loppis",
      type: "custom",
      banner: { accent: "coral", badge: "Le sport national de l'été", title: "Loppis !", sub: "Brocantes, vide-greniers et trouvailles" },
      sections: [
        { type: "label", text: "🧺 Le rituel" },
        { type: "infobox", color: "coral", title: "Comment ça marche", items: [
          "En été, la campagne suédoise se couvre de panneaux <b>« LOPPIS »</b> peints à la main en bord de route — granges, jardins, garages. <b>S'arrêter, c'est la règle.</b>",
          "Le samedi matin est le grand jour, mais en juillet il y en a tous les jours.",
          "Vaisselle, jouets, vélos, meubles, verre de Småland — les prix sont dérisoires.",
          "<b>💡 Prévoir des espèces :</b> beaucoup de stands n'acceptent que <b>Swish</b> (réservé aux comptes bancaires suédois) ou le cash. Les beaux-parents peuvent swisher et on les rembourse.",
        ]},
        { type: "label", text: "📍 Les valeurs sûres du coin" },
        { type: "cards", items: [
          { emoji: "🏫", name: "Loppisskolan", addr: "Påboda (12 min de la maison)", color: "coral", body: "Un loppis géant installé dans <b>une ancienne école</b> : salles entières de meubles, vaisselle, livres, jouets, dans un décor d'époque.", verdict: "L'institution locale — à 12 min de la maison.", warn: "Horaires variables : appeler le 070-581 51 61.", mapsQuery: "Loppisskolan+Påboda" },
          { emoji: "🗓", name: "Agenda des loppis & marchés", addr: "Commune de Torsås", color: "neutral", body: "Le calendrier d'été de la commune (loppis, marchés, concerts) : <b>visittorsas.se/evenemang</b>. Pour la région Kalmar : <b>svenskaloppisar.se</b>.", verdict: "Un coup d'œil le vendredi soir pour planifier le samedi." }
        ]},
        { type: "label", text: "🎯 Missions enfants" },
        { type: "infobox", color: "green", title: "Pour les jumeaux", items: [
          "Budget <b>20 SEK chacun par loppis</b> — négociation en anglais encouragée.",
          "Mission : trouver le truc le plus bizarre à moins de 10 SEK.",
          "Les jouets et BD suédoises (<i>Bamse</i> !) sont les meilleurs souvenirs pas chers."
        ]}
      ]
    },

    /* ================================================================
       PAGE 3 — EXCURSIONS
       ================================================================ */
    {
      id: "excursions",
      tab: "🚗 Excursions",
      type: "custom",
      banner: { accent: "violet", badge: "Si l'envie vient", title: "3 Excursions en Réserve", sub: "Kalmar · Öland · Glasriket" },
      sections: [
        { type: "label", text: "🏰 Kalmar (~40 min)" },
        { type: "cards", items: [
          { emoji: "🏰", name: "Kalmar Slott", addr: "Kungsgatan 1, Kalmar", price: "~160 SEK/adulte", color: "violet", body: "L'un des plus beaux châteaux Renaissance de Scandinavie, sur l'eau, avec douves et remparts. Activités enfants l'été (chasse au trésor, salles d'époque).", verdict: "La meilleure excursion « château » du séjour — enfants souvent gratuits ou tarif réduit.", mapsQuery: "Kalmar+Slott" },
          { emoji: "🏘", name: "Kvarnholmen & vieille ville", addr: "Kalmar centrum", color: "amber", body: "Le centre historique fortifié : places pavées, cathédrale baroque, cafés, boutiques. Se combine avec le château en une journée.", mapsQuery: "Kvarnholmen+Kalmar" }
        ]},
        { type: "label", text: "🌾 Öland — l'île (pont gratuit depuis Kalmar)" },
        { type: "cards", items: [
          { emoji: "🦁", name: "Ölands Djurpark", addr: "Färjestaden, Öland", price: "~250–300 SEK/pers", color: "coral", body: "Zoo + parc d'attractions + parc aquatique, juste après le pont. La journée « plaisir des enfants » si on veut la faire.", warn: "C'est le poste cher du séjour — vérifier tarifs/horaires en ligne.", mapsQuery: "Ölands+Djurpark+Färjestaden" },
          { emoji: "🛡", name: "Eketorps borg", addr: "Sud d'Öland (~1h de la maison)", price: "~150 SEK/adulte", color: "violet", body: "Fort de l'âge du fer <b>entièrement reconstruit</b> : remparts, maisons, animaux, costumes, combats l'été. Les enfants deviennent vikings pendant 2h.", verdict: "Le meilleur rapport plaisir/prix côté Öland.", mapsQuery: "Eketorps+borg+Öland" },
          { emoji: "🌾", name: "Moulins & plages d'Öland", addr: "Toute l'île", color: "teal", body: "Moulins à vent en bois, plages de l'ouest, paysages de l'alvar (steppe UNESCO au sud). Une virée en voiture avec arrêts photo suffit.", mapsQuery: "Öland" }
        ]},
        { type: "label", text: "🔮 Glasriket — le royaume du verre (~50 min)" },
        { type: "cards", items: [
          { emoji: "🔮", name: "Kosta (Kosta Boda)", addr: "Kosta, Lessebo", color: "emerald", body: "Le cœur du <b>Glasriket</b> : démonstrations de <b>souffleurs de verre</b> (hypnotisant pour les enfants), boutique-outlet Kosta Boda, musée.", verdict: "Démonstrations souvent gratuites — vérifier les horaires de soufflage du jour.", mapsQuery: "Kosta+Glascenter" }
        ]},
        { type: "label", text: "🚗 Le 29 juillet — départ vers Stockholm" },
        { type: "infobox", color: "amber", title: "La suite du voyage", items: [
          "Mercredi 29/07 : route Södra Kärr → Stockholm (~410 km, 4h30 avec pause), <b>check-in Åsögatan 190 à 16h</b>.",
          "Voir le guide <b>« Stockholm 2026 »</b> — jour 1."
        ]}
      ]
    },

    /* ================================================================
       PAGE 4 — CARTE
       ================================================================ */
    {
      id: "carte",
      tab: "🗺 Carte",
      type: "fullmap"
    }
  ],

  mapData: {
    1: { center:[56.37, 16.07], zoom:11, pts:[
      { p:[56.3309, 16.0477], label:'🏡 Södra Kärr' },
      { p:[56.3906, 16.0898], label:'🏖 Dalskär' },
      { p:[56.3908, 16.0704], label:'⚓ Port de Bergkvara' },
      { p:[56.4247, 16.0708], label:'🏫 Loppisskolan Påboda' },
      { p:[56.2546, 16.0430], label:'🏯 Kristianopel' }
    ]},
    2: { center:[56.661, 16.36], zoom:13, pts:[
      { p:[56.6580, 16.3552], label:'🏰 Kalmar Slott' },
      { p:[56.6648, 16.3662], label:'🏘 Kvarnholmen' }
    ]},
    3: { center:[56.55, 16.48], zoom:9, pts:[
      { p:[56.6687, 16.4866], label:'🦁 Ölands Djurpark' },
      { p:[56.2928, 16.4841], label:'🛡 Eketorps borg' },
      { p:[56.6517, 16.4722], label:'🌉 Pont d\'Öland (Färjestaden)' }
    ]},
    4: { center:[56.8475, 15.3941], zoom:12, pts:[
      { p:[56.8475, 15.3941], label:'🔮 Kosta (Glasriket)' }
    ]}
  },

  dayColors: { 1:'#0D9488', 2:'#7C3AED', 3:'#F97316', 4:'#059669' }
};
