const TRIP = {
  meta: {
    id: "archipel-2026-varie",
    title: "Suède Intérieure — Variée",
    flag: "🇸🇪",
    heroEmoji: "🏛️",
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [
      { text: "3–8 Août", highlight: true },
      { text: "👨‍👩‍👧‍👦 2A + 2E (7 ans)" },
      { text: "🚗 Voiture" },
      { text: "🏠 Sigtuna" },
      { text: "~535 €" }
    ],
    people: ["Greg", "Sofie"],
    personTag: "♥",
    mapCenter: [59.60, 17.70],
    mapZoom: 9
  },

  pages: [
    /* ================================================================
       PAGE 0 — AVANT LE DÉPART
       ================================================================ */
    {
      id: "avant",
      tab: "✈️ Avant",
      type: "custom",
      banner: { accent: "amber", badge: "Avant le départ", title: "Contexte & Préparation", sub: "Pourquoi cette version, base Sigtuna, stratégie budget" },
      sections: [
        { type: "label", text: "🗺️ Pourquoi cette version" },
        { type: "infobox", color: "violet", title: "Version Variée — le contrepoint", items: [
          "Vous êtes déjà une semaine près de Kalmar avant Stockholm — côte, campagne, nature. Une deuxième semaine entièrement en plein air et archipel, c'est du déjà-vu.",
          "Ce programme propose le <b>contrepoint</b> : villes historiques, châteaux, cathédrales, une ville universitaire vivante. De la nature aussi — mais pas comme thème principal.",
          "<b>Uppsala</b> est sur votre liste. C'est le fil directeur de cette semaine."
        ]},
        { type: "divider" },
        { type: "label", text: "🏡 Base : Sigtuna" },
        { type: "cards", items: [
          { emoji: "🏛", name: "Sigtuna", addr: "Bords du lac Mälaren, 45 min au nord de Stockholm", color: "amber", body: "La plus vieille ville de Suède (fondée vers 980 ap. J.-C.). Village historique lacustre avec ruelles médiévales et la plus vieille rue du pays.", verdict: "Uppsala à 30 min, Stockholm à 45 min, Arlanda à 15 min.", mapsQuery: "Sigtuna+Sweden" }
        ]},
        { type: "infoboxGroup", items: [
          { color: "teal", title: "Sigtuna vs Vaxholm", items: [
            "<b>Ambiance :</b> Village historique lacustre vs archipel maritime.",
            "<b>Rues :</b> Ruelles médiévales, plus vieille rue de Suède vs port et maisons de bois.",
            "<b>Uppsala :</b> 30 min ✓ (vs 1h15 depuis Vaxholm).",
            "<b>Lac Mälaren :</b> En bord de lac — eaux calmes, reflets de forêt, pas de marée."
          ]},
          { color: "green", title: "Hébergement — où chercher", items: [
            "<b>Airbnb / Booking :</b> \"Sigtuna cottage\", \"Sigtuna family house\", \"Märsta lake house\".",
            "<b>Zone :</b> Sigtuna centre · bords du Mälaren · Hammarby/Rosersberg.",
            "<b>Prix :</b> 800–1 400 SEK/nuit pour une maison 4 pers (73–127 €).",
            "<b>Conseil :</b> Cherchez une maison avec accès au lac (<i>brygga</i> = ponton) — l'expérience suédoise par excellence."
          ]}
        ]},
        { type: "divider" },
        { type: "label", text: "🛒 Stratégie Budget" },
        { type: "infobox", color: "amber", title: "Objectif : ~535 € (nourriture + activités + déplacements)", items: [
          "<b>Courses semaine</b> (Willys avant départ) : petit-déj + pique-niques + 4 dîners maison → ~175 €.",
          "<b>1 restaurant assis</b> (Uppsala) → ~55 €.",
          "<b>Carburant</b> (~400 km) → ~60 €.",
          "<b>Entrées :</b> Uppsala Cathedral trésor ~15 € · Gamla Uppsala Museum ~30 € · Skokloster ~35 € · Gripsholm ~35 €.",
          "<b>Bateau/kayak Mälaren</b> → ~40 € · <b>Train vapeur</b> → ~20 €.",
          "<b>Glaces / cafés / snacks</b> → ~50 € · <b>Imprévus</b> → ~20 €."
        ]},
        { type: "infobox", color: "green", title: "Pour rester sous 500 €", items: [
          "Supprimez le train à vapeur ou le château de Skokloster pour rester strictement sous les 500 €."
        ]},
        { type: "divider" },
        { type: "label", text: "💡 Conseils pratiques" },
        { type: "infobox", color: "teal", title: "À savoir", items: [
          "<b>Uppsala le mardi :</b> idéal — moins de week-end touristique, tout est ouvert.",
          "<b>Skokloster :</b> se renseigner sur les horaires de visites guidées en ligne avant.",
          "<b>Gripsholm :</b> billets en ligne recommandés en août.",
          "<b>Lac Mälaren baignade :</b> eau propre, fond sableux ou herbeux — prévoir sandales aquatiques.",
          "<b>GPS fiable :</b> certaines routes vers les châteaux passent par de petits chemins forestiers mal indiqués.",
          "<b>Parking châteaux :</b> tous ont des parkings gratuits — aucun problème avec la voiture."
        ]},
        { type: "divider" },
        { type: "label", text: "🔀 Option hybride" },
        { type: "infobox", color: "violet", title: "Combiner les deux versions ?", items: [
          "<b>Jours 1–2 :</b> Base Sigtuna, Uppsala + Gamla Uppsala (version variée).",
          "<b>Jour 3 :</b> Château Skokloster (version variée).",
          "<b>Jours 4–5 :</b> Déplacer la base vers Vaxholm, excursion archipel + plage (version nature).",
          "<b>Jour 6 :</b> Départ depuis Vaxholm ou Stockholm.",
          "Cela implique deux logements (une nuit de transition), mais c'est faisable si les Airbnb se libèrent bien."
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
      banner: { accent: "amber", badge: "Jour 1 · Lundi 3 Août", title: "Trajet & Première Découverte", sub: "Stockholm → Sigtuna · Stora Gatan · Ruines médiévales" },
      timeline: [
        {
          time: "09h00\n10h00",
          title: "🚗 Départ Stockholm",
          items: [
            { text: "Récupérer la voiture au P-Hus." },
            { text: "<b>Courses AVANT de partir :</b> Willys ou ICA Maxi Stockholm — provisions pour toute la semaine.", type: "warn" },
            { text: "Les épiceries de Sigtuna sont correctes mais pas les moins chères.", type: "sub" },
            { text: "Route vers le nord : A4 / E4 direction Uppsala, sortie Sigtuna.", type: "sub" }
          ]
        },
        {
          time: "10h30",
          title: "✈️ Arrêt optionnel : Arlanda Viewing Point",
          items: [
            { text: "À mi-chemin, le point d'observation des avions d'Arlanda — les enfants de 7 ans sont souvent aussi fascinés par les avions que par n'importe quel musée." },
            { text: "Gratuit · 10 min de pause · La piste la plus proche d'Europe.", type: "tip" }
          ]
        },
        {
          time: "12h00\n13h00",
          title: "🏠 Arrivée Sigtuna & Installation",
          items: [
            { text: "Check-in au logement. Repérer les environs, le lac, les accès." }
          ]
        },
        {
          time: "14h00\n17h00",
          title: "🏛️ Sigtuna — Premier tour",
          items: [
            { text: "<b>Stora Gatan</b> : la plus vieille rue de Suède, pavée, bordée de maisons en bois colorées et de petites boutiques." },
            { text: "<b>Ruines des églises médiévales</b> (St Olof, St Per, St Lars) — ruines romanes en plein air, libres d'accès, magnifiques." },
            { text: "<b>Bord du lac Mälaren</b> : descendre jusqu'à l'eau, repérer le ponton si vous en avez un à la maison." },
            { text: "<b>Sigtuna Museum</b> (optionnel, ~80 SEK/adulte, enfants gratuits) : histoire viking et médiévale — 1h, bien fait pour des enfants curieux.", type: "sub" },
            { text: "🎯 Mission enfants : \"Trouver les 3 ruines d'église sur la carte\".", type: "tip" }
          ]
        },
        {
          time: "18h30",
          title: "🏠 Dîner maison",
          items: [
            { text: "<b>Plateau scandinave d'installation</b> : knäckebröd, fromages, gravlax, harengs marinés." },
            { text: "Dîner dehors si le logement a un espace extérieur avec vue sur le lac.", type: "tip" }
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
      banner: { accent: "coral", badge: "Jour 2 · Mardi 4 Août", title: "Uppsala", sub: "Cathédrale · Château · Campus · Gamla Uppsala" },
      timeline: [
        {
          time: "09h30",
          title: "🚗 Départ Sigtuna → Uppsala",
          items: [
            { text: "30 min de route. Uppsala est la 4e ville de Suède, siège de la plus ancienne université de Scandinavie (1477)." }
          ]
        },
        {
          time: "10h00\n10h45",
          title: "⛪ Uppsala Domkyrka",
          items: [
            { text: "La plus grande cathédrale de Scandinavie — 118 m de haut, gothique, rouge brique, imposante." },
            { text: "À l'intérieur : tombeaux de rois suédois, chapelle de Saint Erik, orgue monumental." },
            { text: "Entrée cathédrale : <b>GRATUITE</b> · Trésor : ~80 SEK/adulte.", type: "tip" },
            { text: "Les enfants lèvent la tête bouche bée. Durée : 45 min.", type: "sub" }
          ]
        },
        {
          time: "11h00\n11h30",
          title: "🏰 Uppsala Slott (extérieur)",
          items: [
            { text: "Au-dessus de la cathédrale, château Renaissance du 16e siècle — vue sur toute la ville." },
            { text: "Extérieur libre d'accès · Musée des Beaux-Arts à l'intérieur (optionnel).", type: "sub" }
          ]
        },
        {
          time: "11h45\n12h45",
          title: "🎓 Campus & Vieille Ville",
          items: [
            { text: "Descendre à pied dans le centre universitaire — bâtiments du 17e siècle, cour de l'université, fontaines." },
            { text: "<b>Fyrisån</b> (la rivière) : les cafés et restaurants le long de l'eau sont la vie universitaire suédoise incarnée." },
            { text: "En août, les étudiants sont moins présents mais l'architecture reste vivante.", type: "sub" }
          ]
        },
        {
          time: "13h00\n14h00",
          title: "🍽️ Déjeuner à Uppsala — le restaurant de la semaine",
          items: [
            { text: "<b>Ofvandahls Konditori</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-ofvandahls-konditori');return false\">↗ Adresses</a> (fondé en 1878) : le plus vieux café d'Uppsala, pâtisseries maison, décor d'époque — un moment unique." },
            { text: "Ou <b>Café Simons</b> · ou <i>dagens lunch</i> dans un café en bord de rivière (~140 SEK/adulte).", type: "sub" },
            { text: "~450–550 SEK pour 4.", type: "sub" }
          ]
        },
        {
          time: "14h30\n16h30",
          title: "🪦 Gamla Uppsala",
          items: [
            { text: "À 5 km du centre (voiture). Trois immenses tumulus funéraires vikings du 5e–6e siècle — les plus grands de Suède." },
            { text: "Vous grimpez dessus, les enfants adorent dévaler les pentes." },
            { text: "<b>Gamla Uppsala Museum</b> (à côté) : histoire viking, rituels, objets fouillés — ~80 SEK/adulte, enfants gratuits.", type: "sub" },
            { text: "Site en plein air librement accessible. Durée : 1h30.", type: "tip" }
          ]
        },
        {
          time: "17h00",
          title: "🚗 Retour Sigtuna",
          items: [
            { text: "30 min de route." }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner maison",
          items: [
            { text: "<b>Soupe de saumon</b> (<i>laxsoppa</i>) : rapide, chaude, parfaite après une grande journée de marche." }
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
      banner: { accent: "violet", badge: "Jour 3 · Mercredi 5 Août", title: "Château de Skokloster", sub: "Le château baroque le mieux conservé d'Europe" },
      timeline: [
        {
          time: "10h00\n12h00",
          title: "🏰 Skokloster Slott",
          items: [
            { text: "Château de Skokloster (Håbo, 25 min de Sigtuna) — au bord du lac Mälaren." },
            { text: "Forteresse baroque du 17e siècle dont l'intérieur n'a pratiquement pas changé depuis 1680, figé dans le temps faute d'argent pour finir les travaux." },
            { text: "Visite guidée obligatoire (incluse dans le billet) — durée 1h · en anglais ou suédois.", type: "sub" },
            { text: "Une des plus grandes collections privées d'armes du 17e siècle au monde, tapisseries, portraits royaux, salons avec meubles d'époque jamais déplacés." },
            { text: "<b>Tarifs :</b> ~120 SEK/adulte · enfants ~60 SEK → ~360 SEK pour 4.", type: "sub" },
            { text: "Les enfants ont l'impression d'entrer dans un film.", type: "tip" }
          ]
        },
        {
          time: "12h30\n13h30",
          title: "🥪 Pique-nique bord du lac Mälaren",
          items: [
            { text: "Le parc de Skokloster descend jusqu'à l'eau — l'un des plus beaux pique-niques possibles." }
          ]
        },
        {
          time: "14h00\n16h00",
          title: "🏖 Baignade au lac",
          items: [
            { text: "La plage du château ou une plage proche — eaux calmes, peu profondes, idéales pour les enfants." },
            { text: "Gratuit.", type: "tip" }
          ]
        },
        {
          time: "16h30",
          title: "🍦 Retour Sigtuna · Glace en ville",
          items: [
            { text: "~30 SEK/boule. Flâne dans Stora Gatan." }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner maison",
          items: [
            { text: "<b>Grillade suédoise</b> (barbecue jardin si possible) : saucisses <i>grillkorv</i>, pain, moutarde suédoise." },
            { text: "Le barbecue estival suédois est un rituel — même en semaine, même sans occasion particulière.", type: "tip" }
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
      banner: { accent: "teal", badge: "Jour 4 · Jeudi 6 Août", title: "Lac Mälaren & Sigtuna", sub: "Bateau · Plage · Détente · Journée lente" },
      timeline: [
        {
          time: "09h30\n11h30",
          title: "⛵ Tour en bateau sur le Mälaren",
          items: [
            { text: "Excursions en bateau depuis Sigtuna en été — tour du lac, observation des manoirs sur les îles, arrêt baignade. ~40 €." },
            { text: "Vérifiez l'opérateur local à Sigtuna (demandez à votre hôte Airbnb — ils sauront).", type: "tip" },
            { text: "<b>Alternative :</b> louer un canoë ou un kayak à Sigtuna pour 2h (~300–400 SEK).", type: "sub" },
            { text: "Les enfants avec des pagaies sur le Mälaren, c'est un souvenir garanti.", type: "tip" }
          ]
        },
        {
          time: "12h00\n13h00",
          title: "🥪 Pique-nique au bord de l'eau",
          items: [
            { text: "Trouver un spot calme au bord du lac." }
          ]
        },
        {
          time: "13h30\n15h30",
          title: "🏖 Plage du lac — baignade libre",
          items: [
            { text: "Le Mälaren est calme, propre, eau à ~20°C en août — différent de la mer, plus doux." },
            { text: "Trouvez une plage proche de Sigtuna (demandez à l'hôte) ou revenez au bord de la maison.", type: "sub" }
          ]
        },
        {
          time: "16h00\n17h30",
          title: "☕ Flâne finale dans Sigtuna",
          items: [
            { text: "Petites boutiques de <b>Stora Gatan</b>, café en terrasse face au lac." },
            { text: "<b>Tant de Sigtuna</b><a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-tant-de-sigtuna');return false\">↗ Adresses</a> : bakery locale avec des pâtisseries maison.", type: "tip" }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner maison",
          items: [
            { text: "<b>Pannkakor</b> (crêpes suédoises épaisses) avec lingonberry et crème fraîche." },
            { text: "Tradition : en Suède, le jeudi soir c'est souvent crêpes — <i>pannkakstorsdagen</i> (\"le jeudi des crêpes\") est une vraie institution.", type: "tip" }
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
      banner: { accent: "emerald", badge: "Jour 5 · Vendredi 7 Août", title: "Mariefred & Gripsholm", sub: "Château Renaissance · Train à vapeur · 1h de route" },
      timeline: [
        {
          time: "09h00\n10h30",
          title: "🚗 Départ Sigtuna → Mariefred",
          items: [
            { text: "1h de route via Strängnäs — belle route." },
            { text: "Mariefred est une petite ville au bord du lac Mälaren. Son château, <b>Gripsholm</b>, est l'image d'Épinal de la Suède.", type: "sub" }
          ]
        },
        {
          time: "10h30\n11h00",
          title: "🏘 Mariefred — arrivée",
          items: [
            { text: "Village en bois peint au bord du lac, marché local parfois le vendredi matin." },
            { text: "Café face au château pour un <i>fika</i> d'arrivée.", type: "tip" }
          ]
        },
        {
          time: "11h00\n12h30",
          title: "🏯 Gripsholm Slott",
          items: [
            { text: "Château du 16e siècle, résidence royale d'été pendant des siècles — rouge brique, tours rondes jumelles, sur l'eau." },
            { text: "Intérieur : portraits royaux suédois depuis le 16e siècle, chambres historiques, théâtre du château." },
            { text: "<b>Tarifs :</b> ~130 SEK/adulte · enfants ~60 SEK → ~380 SEK pour 4.", type: "sub" },
            { text: "Durée : 1h30 · Le parc est librement accessible.", type: "sub" }
          ]
        },
        {
          time: "13h00\n14h00",
          title: "🥪 Pique-nique dans le parc du château",
          items: [
            { text: "Les pelouses descendent jusqu'au lac — pique-nique avec vue sur le château." }
          ]
        },
        {
          time: "14h30\n15h30",
          title: "🚂 Train à vapeur Mariefred → Läggesta (optionnel)",
          items: [
            { text: "Vieux train à vapeur — trajet de 20 min dans un wagon d'époque (6 km). ~50 SEK/pers." },
            { text: "Les enfants adorent les vieilles locomotives · Fonctionne en été uniquement.", type: "tip" },
            { text: "Retour à pied ou en bus local.", type: "sub" }
          ]
        },
        {
          time: "16h30\n17h30",
          title: "🚗 Route retour Sigtuna",
          items: [
            { text: "1h de route." }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner maison",
          items: [
            { text: "<b>Pâtes au saumon fumé</b> ou restes + salade · journée chargée, dîner simple." }
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
      banner: { accent: "amber", badge: "Jour 6 · Samedi 8 Août", title: "Dernier Matin & Départ", sub: "Café au bord du lac · Derniers achats · Route" },
      timeline: [
        {
          time: "08h30\n10h00",
          title: "☕ Sigtuna une dernière fois",
          items: [
            { text: "Café au bord du lac · Derniers achats à Stora Gatan." },
            { text: "<b>Souvenir conseillé :</b> les boutiques de Sigtuna ont de belles choses locales sans être touristiques — céramique, linge de table, confiture artisanale.", type: "tip" }
          ]
        },
        {
          time: "10h00\n11h00",
          title: "🧳 Check-out & Départ",
          items: [
            { text: "Direction selon votre itinéraire de retour." }
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
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "Restos, Musées & Lieux", sub: "Sigtuna · Uppsala · Châteaux" },
      zones: [
        {
          label: "🏛 Sigtuna",
          sections: [
            {
              label: "🏛 Musée & Culture",
              cards: [
                { emoji: "🏛", name: "Sigtuna Museum", addr: "Stora Gatan 55, Sigtuna", price: "~80 SEK/A", color: "amber", body: "Histoire viking et médiévale de la ville. Enfants gratuits. Bien fait pour des enfants curieux.", verdict: "1h de visite, optionnel mais intéressant.", mapsQuery: "Sigtuna+Museum+Stora+Gatan+55+Sigtuna" },
                { emoji: "⛪", name: "Ruines médiévales", addr: "St Olof, St Per, St Lars — Sigtuna", color: "amber", body: "Ruines romanes en plein air, libres d'accès, magnifiques. Les 3 ruines sont dispersées dans la ville.", verdict: "Gratuit. Mission enfants : trouver les 3 ruines sur la carte.", mapsQuery: "Ruines+médiévales+Sigtuna+Sweden" }
              ]
            },
            {
              label: "☕ Café & Boulangerie",
              cards: [
                { emoji: "🥐", name: "Tant de Sigtuna", addr: "Stora Gatan, Sigtuna", price: "~50 SEK", color: "coral", body: "Bakery locale avec des pâtisseries maison. Terrasse face au lac.", verdict: "Le fika parfait de la semaine.", mapsQuery: "Tant+Gransen+Sigtuna" }
              ]
            },
            {
              label: "🛍 Stora Gatan — Shopping",
              cards: [
                { emoji: "🏪", name: "Boutiques Stora Gatan", addr: "Stora Gatan, Sigtuna", color: "amber", body: "La plus vieille rue de Suède, pavée, bordée de maisons en bois colorées. Petites boutiques locales sans être touristiques — céramique, linge de table, confiture artisanale.", verdict: "Souvenirs de qualité, ambiance authentique.", mapsQuery: "Stora+Gatan+Sigtuna+Sweden" }
              ]
            }
          ]
        },
        {
          label: "🎓 Uppsala",
          sections: [
            {
              label: "⛪ Monuments",
              cards: [
                { emoji: "⛪", name: "Uppsala Domkyrka", addr: "Domkyrkoplan, Uppsala", price: "Gratuit (trésor ~80 SEK/A)", color: "violet", body: "La plus grande cathédrale de Scandinavie — 118 m de haut, gothique, rouge brique. Tombeaux de rois suédois, chapelle de Saint Erik, orgue monumental.", verdict: "45 min. Les enfants lèvent la tête bouche bée.", mapsQuery: "Uppsala+Domkyrka+Uppsala+Sweden" },
                { emoji: "🏰", name: "Uppsala Slott", addr: "Uppsala Castle, Uppsala", color: "violet", body: "Château Renaissance du 16e siècle au-dessus de la cathédrale. Vue sur toute la ville. Extérieur libre d'accès.", verdict: "Musée des Beaux-Arts à l'intérieur (optionnel).", mapsQuery: "Uppsala+Slott+Uppsala+Sweden" }
              ]
            },
            {
              label: "🍽 Manger",
              cards: [
                { emoji: "☕", name: "Ofvandahls Konditori", addr: "Sysslomansgatan 5, Uppsala", price: "~~140 SEK/A", color: "coral", body: "Fondé en 1878 — le plus vieux café d'Uppsala. Konditori historique, pâtisseries maison, décor d'époque.", verdict: "Un moment unique. Le restaurant assis de la semaine.", mapsQuery: "Ofvandahls+Konditori+Sysslomansgatan+5+Uppsala" }
              ]
            },
            {
              label: "🪦 Gamla Uppsala",
              cards: [
                { emoji: "🪦", name: "Gamla Uppsala Museum", addr: "Disavägen, Gamla Uppsala", price: "~80 SEK/A, enfants gratuits", color: "violet", body: "Trois immenses tumulus funéraires vikings du 5e–6e siècle — les plus grands de Suède. Musée : histoire viking, rituels, objets fouillés sur place.", verdict: "Les enfants adorent grimper et dévaler les tumulus. 1h30.", mapsQuery: "Gamla+Uppsala+Museum+Sweden" }
              ]
            }
          ]
        },
        {
          label: "🏰 Châteaux",
          sections: [
            {
              label: "🏰 Skokloster",
              cards: [
                { emoji: "🏰", name: "Skokloster Slott", addr: "Skokloster, Håbo", price: "~120 SEK/A · enfants ~60 SEK", color: "teal", body: "Forteresse baroque du 17e siècle au bord du lac Mälaren. Intérieur figé depuis 1680. Visite guidée obligatoire (1h, en anglais ou suédois). Collection d'armes, tapisseries, portraits royaux.", verdict: "Un des secrets les mieux gardés de Suède. Les enfants ont l'impression d'entrer dans un film.", mapsQuery: "Skokloster+Slott+Sweden" }
              ]
            },
            {
              label: "🏯 Gripsholm",
              cards: [
                { emoji: "🏯", name: "Gripsholm Slott", addr: "Mariefred", price: "~130 SEK/A · enfants ~60 SEK", color: "emerald", body: "Château du 16e siècle, résidence royale d'été. Rouge brique, tours rondes jumelles, sur l'eau. Portraits royaux, chambres historiques, théâtre du château.", verdict: "L'image d'Épinal de la Suède. Parc librement accessible. 1h30.", mapsQuery: "Gripsholm+Slott+Mariefred+Sweden" },
                { emoji: "🏘", name: "Mariefred", addr: "Mariefred, Södermanland", color: "emerald", body: "Petite ville en bois peint au bord du lac Mälaren. Marché local parfois le vendredi matin. Café face au château pour un fika d'arrivée.", mapsQuery: "Mariefred+Sweden" },
                { emoji: "🚂", name: "Train à vapeur", addr: "Mariefred → Läggesta", price: "~50 SEK/pers", color: "emerald", body: "Vieux train à vapeur, trajet de 20 min dans un wagon d'époque (6 km). Fonctionne en été uniquement.", verdict: "Les enfants adorent les vieilles locomotives.", mapsQuery: "Östra+Södermanlands+Järnväg+Mariefred" }
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
      banner: { accent: "emerald", badge: "Budget", title: "Estimation ~535 €", sub: "Nourriture + activités + déplacements · 2A + 2E" },
      tables: [
        {
          label: "🛒 Nourriture",
          headers: ["Poste", "Coût"],
          rows: [
            ["Courses semaine (Willys avant départ)", "~175 €"],
            ["1 restaurant Uppsala", "~55 €"],
            ["Glaces / cafés / snacks", "~50 €"]
          ],
          footer: ["Sous-total", "~280 €"]
        },
        {
          label: "🎟 Entrées & Activités",
          headers: ["Poste", "Coût"],
          rows: [
            ["Uppsala Cathedral — trésor", "~15 €"],
            ["Gamla Uppsala Museum", "~30 €"],
            ["Château de Skokloster (4 entrées)", "~35 €"],
            ["Château de Gripsholm (4 entrées)", "~35 €"],
            ["Bateau / kayak Mälaren", "~40 €"],
            ["Train à vapeur Mariefred", "~20 €"]
          ],
          footer: ["Sous-total", "~175 €"]
        },
        {
          label: "🚗 Transport & Divers",
          headers: ["Poste", "Coût"],
          rows: [
            ["Carburant (~400 km)", "~60 €"],
            ["Imprévus", "~20 €"]
          ],
          footer: ["Sous-total", "~80 €"]
        }
      ],
      note: "Supprimez le train à vapeur ou le château de Skokloster pour rester strictement sous les 500 €."
    }
  ],

  /* ================================================================
     DONNÉES CARTOGRAPHIQUES
     ================================================================ */
  mapData: {
    1: { center: [59.617, 17.724], zoom: 13, pts: [
      { p: [59.6177, 17.7230], label: '🏛 Sigtuna Gamla' },
      { p: [59.6170, 17.7255], label: '⛪ Ruines médiévales' },
      { p: [59.6180, 17.7200], label: '🏪 Stora Gatan' }
    ]},
    2: { center: [59.86, 17.64], zoom: 12, pts: [
      { p: [59.8585, 17.6310], label: '⛪ Uppsala Domkyrka' },
      { p: [59.8590, 17.6250], label: '🏰 Uppsala Slott' },
      { p: [59.8560, 17.6350], label: '🎓 Campus' },
      { p: [59.8975, 17.6365], label: '🪦 Gamla Uppsala' }
    ]},
    3: { center: [59.72, 17.58], zoom: 12, pts: [
      { p: [59.7190, 17.5740], label: '🏰 Skokloster' },
      { p: [59.7185, 17.5750], label: '🏖 Plage lac' }
    ]},
    4: { center: [59.617, 17.724], zoom: 13, pts: [
      { p: [59.6177, 17.7230], label: '⛵ Tour bateau' },
      { p: [59.6170, 17.7260], label: '🏖 Plage Mälaren' },
      { p: [59.6180, 17.7200], label: '☕ Tant de Sigtuna' }
    ]},
    5: { center: [59.26, 17.22], zoom: 11, pts: [
      { p: [59.2580, 17.2220], label: '🏯 Gripsholm' },
      { p: [59.2590, 17.2260], label: '🏘 Mariefred' },
      { p: [59.2600, 17.2150], label: '🚂 Train vapeur' }
    ]}
  },

  dayColors: { 1: '#F59E0B', 2: '#F97316', 3: '#7C3AED', 4: '#0D9488', 5: '#059669' }
};
