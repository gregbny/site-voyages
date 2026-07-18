const TRIP = {
  meta: {
    id: "taby-2026",
    title: "Täby & les Environs",
    flag: "🇸🇪",
    heroEmoji: "🌲",
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [
      { text: "Lun 3 – Sam 8 Août", highlight: true },
      { text: "👨‍👩‍👧‍👦 2A + 2E (7 ans)" },
      { text: "🏡 Täby — Klövjevägen 33" },
      { text: "~450 €" }
    ],
    people: ["Greg", "Sofie"],
    personTag: "♥",
    mapCenter: [59.60, 17.95],
    mapZoom: 9
  },

  pages: [
    /* ================================================================
       PAGE 0 — AVANT / LA BASE
       ================================================================ */
    {
      id: "avant",
      tab: "🏡 La Base",
      type: "custom",
      banner: { accent: "amber", badge: "La Base", title: "La Maison & les Environs", sub: "Logement, distances, courses, conseils" },
      sections: [
        { type: "label", text: "🏡 Le Logement — Airbnb Täby" },
        { type: "infobox", color: "violet", title: "Mysigt hus i barnvänliga Täby — hôte Jessica", items: [
          "<b>Adresse :</b> Klövjevägen 33, Täby (187 31) — quartier résidentiel d'<b>Ella gård</b>, en lisière de la forêt de Stolpaskogen.",
          "<b>Arrivée :</b> lundi 3 août à partir de <b>15h00</b> · <b>Départ :</b> samedi 8 août avant <b>11h00</b>.",
          "<b>⚠️ Procédure d'arrivée : contacter l'hôte.</b> Envoyer un message à Jessica avant le 3/08 pour convenir de la remise des clés et de l'heure d'arrivée.",
          "<b>Code de réservation :</b> HMYZTW5W4E.",
          "Règles : 8 voyageurs max · pas d'animaux · <b>calme entre 23h et 07h</b>."
        ]},
        { type: "label", text: "📍 Pourquoi cette base est idéale" },
        { type: "infobox", color: "green", title: "Tout est à moins d'une heure", items: [
          "<b>⚓ Vaxholm :</b> 25 min — la capitale de l'archipel, la forteresse, les maisons de bois.",
          "<b>🏘 Sigtuna :</b> 35 min — la plus vieille ville de Suède, sur le lac Mälaren.",
          "<b>🎓 Uppsala :</b> 50 min — cathédrale, université, tumulus vikings.",
          "<b>🌲 La nature :</b> la forêt de Stolpaskogen commence au bout du quartier, le lac Rönningesjön est à 10 min.",
          "<b>Stockholm :</b> 25 min en voiture, ou <b>Roslagsbanan</b> (petit train local) vers Stockholm Östra — mais on a déjà tout fait la semaine d'avant.",
          "<b>Arlanda :</b> 25 min."
        ]},
        { type: "label", text: "🛒 Courses" },
        { type: "infobox", color: "amber", title: "Où faire le plein", items: [
          "<b>ICA Maxi Arninge</b> (Kundvägen 1E, 10 min) — l'hypermarché pour les grosses courses, à faire le jour 1 en arrivant de Stockholm.",
          "<b>Willys Täby Centrum</b> (5 min) — le moins cher pour les compléments.",
          "<b>Täby Centrum</b> — grand centre commercial : pharmacie, Systembolaget (alcool), tout ce qui manque.",
          "L'eau du robinet est excellente — inutile d'acheter de l'eau en bouteille."
        ]},
        { type: "divider" },
        { type: "label", text: "🗓 Logique de la semaine" },
        { type: "infobox", color: "teal", title: "Un rythme alterné", items: [
          "<b>1 jour excursion, 1 jour doux :</b> Vaxholm (mar) → Uppsala (mer) → nature Täby (jeu) → Sigtuna (ven).",
          "Les journées sont <b>interchangeables selon la météo</b> — garder le plus beau jour pour la baignade, un jour gris pour Uppsala (cathédrale + musées).",
          "Après 5 jours de ville à Stockholm, cette semaine respire : pique-niques, lacs, forêt, petites villes."
        ]},
        { type: "divider" },
        { type: "label", text: "💡 Conseils pratiques" },
        { type: "infobox", color: "red", title: "À ne pas oublier", items: [
          "<b>Moustiques :</b> début août près des lacs, il y en a — répulsif dans le sac.",
          "<b>Baignade :</b> lacs ~20°C, Baltique 17–19°C — rafraîchissant mais très baignable. Sandales aquatiques pour les fonds herbeux.",
          "<b>Allemansrätten :</b> cueillette de myrtilles libre en forêt — c'est la pleine saison ! Prévoir un petit pot.",
          "<b>Crème solaire</b> même par temps couvert.",
          "<b>Pluie :</b> Täby Centrum (centre commercial) + <b>Leo's Lekland</b> à Arninge (trampolines, piscines à balles, ~150 SEK/enfant — vérifier les horaires en ligne)."
        ]}
      ]
    },

    /* ================================================================
       PAGE 1 — LUNDI 3 AOÛT (Jour 1)
       ================================================================ */
    {
      id: "jour1",
      tab: "Lun. J1",
      type: "day",
      dayNumber: 1,
      banner: { accent: "amber", badge: "Jour 1 · Lundi 3 Août", title: "Transition & Installation", sub: "Stockholm → Tessinparken → Courses Arninge → Check-in 15h → Stolpaskogen" },
      timeline: [
        {
          time: "10h00",
          title: "🚗 Check-out Stockholm",
          items: [
            { text: "Départ d'Åsögatan avant 10h — voir le J6 du guide Stockholm pour l'étape tampon Tessinparken + pique-nique." },
            { text: "Trängselskatt du jour (tarif basse saison) facturée automatiquement via Epass24.", type: "sub" }
          ]
        },
        {
          time: "13h30\n14h45",
          title: "🛒 ICA Maxi Arninge",
          items: [
            { text: "Les courses de toute la semaine : petit-déj, pique-niques, dîners, saucisses à griller, <i>knäckebröd</i>, saumon, lingonberry." },
            { text: "Liste type : muesli, pain, fromage <i>Västerbotten</i>, gravlax, harengs, <i>köttbullar</i>, pâtes, légumes, fruits, farine+œufs+lait pour les <i>pannkakor</i> de jeudi.", type: "tip" }
          ]
        },
        {
          time: "15h00\n17h00",
          title: "🏡 Check-in — Klövjevägen 33",
          items: [
            { text: "Remise des clés selon l'accord passé avec Jessica (message envoyé avant le séjour)." },
            { text: "Installation, tour du jardin, les enfants prennent possession de la maison." }
          ]
        },
        {
          time: "17h00\n18h30",
          title: "🌲 Premier tour — Stolpaskogen",
          items: [
            { text: "La grande forêt de Täby commence au bout du quartier : sentiers plats, aire de jeu forestière, aires de grillades." },
            { text: "Mission enfants : repérer les myrtilliers pour la cueillette de jeudi.", type: "tip" }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner maison",
          items: [
            { text: "Plateau scandinave d'installation : <i>knäckebröd</i>, fromages, gravlax, harengs marinés, cornichons." },
            { text: "Dîner dans le jardin si le temps le permet — le soleil se couche vers 21h.", type: "tip" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 2 — MARDI 4 AOÛT (Jour 2)
       ================================================================ */
    {
      id: "jour2",
      tab: "Mar. J2",
      type: "day",
      dayNumber: 2,
      banner: { accent: "coral", badge: "Jour 2 · Mardi 4 Août", title: "Vaxholm — L'Archipel", sub: "Strandgatan → Kastellet → Pique-nique → Glace au port → Plage Eriksö" },
      timeline: [
        {
          time: "09h30",
          title: "🚗 Départ pour Vaxholm (25 min)",
          items: [
            { text: "Route 274 direction est — parking payant près du port (EasyPark)." },
            { text: "Préparer le pique-nique avant de partir.", type: "tip" }
          ]
        },
        {
          time: "10h00\n10h45",
          title: "🏘 Strandgatan & le port",
          items: [
            { text: "La rue principale au bord de l'eau : maisons de bois rouge et jaune, boutiques d'artisanat, ferries à vapeur." },
            { text: "Mission enfants : compter les maisons rouges sur Strandgatan.", type: "tip" }
          ]
        },
        {
          time: "11h00\n13h30",
          title: "🏰 Vaxholms Kastell",
          items: [
            { text: "La forteresse du 16e siècle sur son île, en face du port — accès en <b>petite navette bateau</b> depuis le quai (traversée ~5 min)." },
            { text: "Musée de la forteresse : <b>120 SEK/adulte · enfants 0–12 ans GRATUITS</b> → 240 SEK pour la famille.", type: "sub" },
            { text: "Tours, remparts, canons, souterrains — parfait pour des 7 ans aventureux." },
            { text: "Pique-nique sur les remparts face à l'archipel.", type: "tip" }
          ]
        },
        {
          time: "14h00\n15h00",
          title: "🍦 Retour bourg — glace & flâne",
          items: [
            { text: "Glace au port (~35 SEK/boule), boutiques de Strandgatan (figurines en bois, bonbons suédois)." },
            { text: "<b>Hembygdsgårdens Café</b> (quartier Norrhamnen) : gaufres célèbres dans un jardin face à l'eau — si un fika s'impose.", type: "sub" }
          ]
        },
        {
          time: "15h00\n17h00",
          title: "🏖 Plage d'Eriksö (option)",
          items: [
            { text: "Plage familiale à 5 min en voiture, à l'ouest de l'île : sable, rochers plats, eau claire de la Baltique (~18°C)." },
            { text: "Gratuit — toilettes et aires de grillades sur place." }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner maison — grillade suédoise",
          items: [
            { text: "<i>Grillkorv</i> (saucisses) au barbecue, salade de pommes de terre à l'aneth, lingonberry." }
          ]
        }
      ],
      rainPlans: [
        { if: "Si pluie toute la journée", then: "<b>Inverser avec un autre jour</b> — ou Täby Centrum + Leo's Lekland (Arninge) le matin, et Vaxholm en fin d'après-midi si ça se lève : le kastell est en grande partie couvert." }
      ]
    },

    /* ================================================================
       PAGE 3 — MERCREDI 5 AOÛT (Jour 3)
       ================================================================ */
    {
      id: "jour3",
      tab: "Mer. J3",
      type: "day",
      dayNumber: 3,
      banner: { accent: "violet", badge: "Jour 3 · Mercredi 5 Août", title: "Uppsala — Cathédrale & Vikings", sub: "Domkyrka → Château → Fyrisån → Déjeuner → Gamla Uppsala" },
      timeline: [
        {
          time: "09h15",
          title: "🚗 Départ pour Uppsala (50 min)",
          items: [
            { text: "E4 vers le nord — parking en centre-ville (P-hus Centralgaraget ou EasyPark)." },
            { text: "Uppsala est la 4e ville de Suède, siège de la plus ancienne université de Scandinavie (1477).", type: "sub" }
          ]
        },
        {
          time: "10h15\n11h15",
          title: "⛪ Uppsala Domkyrka",
          items: [
            { text: "La plus grande cathédrale de Scandinavie — 118 m de haut, gothique de brique rouge." },
            { text: "<b>Entrée GRATUITE.</b> Tombeaux royaux, chapelle de Saint Erik, orgue monumental." },
            { text: "Les enfants lèvent la tête bouche bée — 45 min suffisent.", type: "tip" }
          ]
        },
        {
          time: "11h15\n12h30",
          title: "🏰 Château & vieille ville",
          items: [
            { text: "Montée vers <b>Uppsala Slott</b> (extérieur libre) — vue sur toute la ville depuis l'esplanade." },
            { text: "Redescendre par le quartier universitaire : Gustavianum, cour de l'université, puis la rivière <b>Fyrisån</b> et ses cafés." },
            { text: "Mission enfants : Uppsala est la ville de <b>Pelle Svanslös</b>, le chat sans queue des livres suédois — repérer sa statue près de la rivière !", type: "tip" }
          ]
        },
        {
          time: "12h30\n14h00",
          title: "🍽 Déjeuner — le resto assis de la semaine",
          items: [
            { text: "<i>Dagens lunch</i> dans un café au bord de la Fyrisån (~140 SEK/adulte, menu enfant ~80)." },
            { text: "Ou le grand classique : <b>Ofvandahls Hovkonditori</b> (fondé en 1878, le plus vieux konditori d'Uppsala) pour le déjeuner léger + pâtisseries.", type: "sub" },
            { text: "~500–600 SEK pour 4.", type: "sub" }
          ]
        },
        {
          time: "14h30\n16h30",
          title: "🪦 Gamla Uppsala",
          items: [
            { text: "À 10 min en voiture : trois immenses <b>tumulus royaux du 5e–6e siècle</b>, les plus grands de Suède." },
            { text: "Site en plein air <b>GRATUIT</b> — on grimpe dessus, les enfants dévalent les pentes." },
            { text: "<b>Gamla Uppsala Museum</b> à côté (option) : histoire viking, objets des fouilles — ~100 SEK/adulte, enfants gratuits.", type: "sub" }
          ]
        },
        {
          time: "17h30",
          title: "🚗 Retour Täby",
          items: [
            { text: "50 min de route." }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner maison",
          items: [
            { text: "<i>Laxsoppa</i> (soupe de saumon) : bouillon + pommes de terre + poireaux + saumon + crème + aneth — chaude et rapide après une grande journée." }
          ]
        }
      ],
      rainPlans: [
        { if: "Si pluie", then: "<b>Journée parfaite sous la pluie</b> — cathédrale, Gustavianum et musée de Gamla Uppsala sont couverts. Garder les tumulus pour une éclaircie." }
      ]
    },

    /* ================================================================
       PAGE 4 — JEUDI 6 AOÛT (Jour 4)
       ================================================================ */
    {
      id: "jour4",
      tab: "Jeu. J4",
      type: "day",
      dayNumber: 4,
      banner: { accent: "teal", badge: "Jour 4 · Jeudi 6 Août", title: "Journée Nature — Täby", sub: "Grasse matinée → Rönninge by → Baignade Skavlöten → Pannkakor" },
      timeline: [
        {
          time: "Matin",
          title: "😴 Grasse matinée & jeux au jardin",
          items: [
            { text: "Pas de voiture ce matin — petit-déj lent, les enfants jouent, vous lisez." }
          ]
        },
        {
          time: "10h30\n12h30",
          title: "🐄 Rönninge by (gratuit)",
          items: [
            { text: "À 10 min : un <b>village-ferme historique</b> dans une réserve naturelle — maisons anciennes, vaches, moutons, poules, sentiers entre les prés." },
            { text: "Le site est habité et exploité comme autrefois, au milieu de vestiges de l'âge du fer." },
            { text: "Accès libre toute l'année — les animaux sont dehors en été.", type: "tip" }
          ]
        },
        {
          time: "12h30",
          title: "🥪 Pique-nique au bord du Rönningesjön",
          items: [
            { text: "Tables et pelouses entre Rönninge by et le lac." }
          ]
        },
        {
          time: "13h30\n16h00",
          title: "🏊 Baignade — Skavlöten",
          items: [
            { text: "Plage du lac Rönningesjön côté Skavlöten : ponton, pelouse, eau calme ~20°C, fond en pente douce pour les enfants." },
            { text: "Aires de grillades et sentiers autour du lac (boucle possible).", type: "sub" },
            { text: "Répulsif moustiques dans le sac.", type: "warn" }
          ]
        },
        {
          time: "16h30\n18h00",
          title: "🫐 Myrtilles à Stolpaskogen",
          items: [
            { text: "Retour par la forêt : cueillette de myrtilles (pleine saison, c'est gratuit et légal — <i>allemansrätten</i>)." },
            { text: "Elles finiront sur les crêpes du soir.", type: "tip" }
          ]
        },
        {
          time: "19h00",
          title: "🥞 Dîner maison — Pannkakor",
          items: [
            { text: "Crêpes suédoises épaisses + confiture de lingonberry + crème fouettée + myrtilles du jour." },
            { text: "En Suède, le jeudi c'est <i>pannkakor</i> — une vraie institution nationale.", type: "sub" }
          ]
        }
      ],
      rainPlans: [
        { if: "Si pluie", then: "<b>Leo's Lekland</b> (Arninge, ~150 SEK/enfant) le matin + Täby Centrum, et Rönninge by sous les parapluies — les animaux s'en fichent." }
      ]
    },

    /* ================================================================
       PAGE 5 — VENDREDI 7 AOÛT (Jour 5)
       ================================================================ */
    {
      id: "jour5",
      tab: "Ven. J5",
      type: "day",
      dayNumber: 5,
      banner: { accent: "emerald", badge: "Jour 5 · Vendredi 7 Août", title: "Sigtuna — La Plus Vieille Ville de Suède", sub: "Stora Gatan → Ruines → Pierres runiques → Tant Brun → Lac Mälaren" },
      timeline: [
        {
          time: "10h00",
          title: "🚗 Départ pour Sigtuna (35 min)",
          items: [
            { text: "Fondée vers 980, sur les rives du lac Mälaren — ruelles médiévales, maisons de bois, ambiance douce." }
          ]
        },
        {
          time: "10h45\n12h30",
          title: "🏘 Stora Gatan & les ruines",
          items: [
            { text: "<b>Stora Gatan</b>, la plus vieille rue de Suède — boutiques, maisons colorées, le minuscule <b>rådhus</b> (plus petit hôtel de ville du pays)." },
            { text: "<b>Ruines romanes</b> de St Olof, St Per et St Lars — libres d'accès, magnifiques." },
            { text: "Mission enfants : Sigtuna a plus de <b>pierres runiques</b> que toute autre ville au monde — en trouver 5 !", type: "tip" },
            { text: "<b>Sigtuna Museum</b> (option) : histoire viking de la ville, ~80 SEK/adulte, enfants gratuits.", type: "sub" }
          ]
        },
        {
          time: "12h30\n14h00",
          title: "☕ Fika — Tant Bruns Kaffestuga",
          items: [
            { text: "Kaffestuga du 17e siècle au toit d'herbe, dans une ruelle près de la place — LE fika du séjour." },
            { text: "<i>Kanelbullar</i> géantes, jardin ombragé — ou déjeuner léger (sandwichs, soupe).", type: "tip" },
            { text: "~350–450 SEK pour 4.", type: "sub" }
          ]
        },
        {
          time: "14h00\n16h00",
          title: "🌊 Le lac Mälaren",
          items: [
            { text: "Promenade du bord du lac (Strandpromenaden), pontons, canards, bateaux — pas de marée, eaux calmes." },
            { text: "Trempette possible pour les enfants près de la plage du parc.", type: "sub" }
          ]
        },
        {
          time: "16h30",
          title: "🚗 Retour Täby",
          items: [
            { text: "Derniers achats souvenirs faits à Sigtuna — céramique, confitures artisanales, c'est local et pas touristique.", type: "tip" }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner maison — grillade finale",
          items: [
            { text: "Vider le frigo, dernière grillade au jardin, valises le soir." }
          ]
        }
      ],
      rainPlans: [
        { if: "Si pluie", then: "Sigtuna reste charmante sous la pluie : musée + Tant Brun au coin du feu. Ou inverser avec un autre jour." }
      ]
    },

    /* ================================================================
       PAGE 6 — SAMEDI 8 AOÛT (Jour 6)
       ================================================================ */
    {
      id: "jour6",
      tab: "Sam. J6",
      type: "day",
      dayNumber: 6,
      banner: { accent: "amber", badge: "Jour 6 · Samedi 8 Août", title: "Départ", sub: "Check-out 11h → Route retour" },
      timeline: [
        {
          time: "09h00\n11h00",
          title: "🧹 Rangement & check-out",
          items: [
            { text: "Maison rangée, check-out avant <b>11h00</b> — remise des clés selon l'accord avec Jessica." }
          ]
        },
        {
          time: "11h00",
          title: "🚗 Départ",
          items: [
            { text: "Cap au sud — bonne route !" },
            { text: "Si le ferry part le soir : une pause déjeuner + aire de jeu en route coupe bien la journée.", type: "tip" }
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
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "Cafés, Courses & Sorties", sub: "Täby · Vaxholm · Uppsala · Sigtuna" },
      zones: [
        {
          label: "📍 Täby — autour de la maison",
          sections: [
            {
              label: "🛒 Courses & pratique",
              cards: [
                { emoji: "🛒", name: "ICA Maxi Arninge", addr: "Kundvägen 1E, Arninge", color: "emerald", body: "L'hypermarché des grosses courses, à 10 min. Parking gratuit.", verdict: "Le plein de la semaine le jour 1.", mapsQuery: "ICA+Maxi+Arninge+Täby" },
                { emoji: "🛒", name: "Willys Täby Centrum", addr: "Täby Centrum", color: "neutral", body: "Le moins cher pour les compléments en semaine.", mapsQuery: "Willys+Täby+Centrum" },
                { emoji: "🏬", name: "Täby Centrum", addr: "Stora Marknadsvägen", color: "neutral", body: "Grand centre commercial : pharmacie, Systembolaget, boutiques — le plan B des jours de pluie.", mapsQuery: "Täby+Centrum" },
                { emoji: "🎪", name: "Leo's Lekland Arninge", addr: "Arninge", color: "amber", body: "Parc de jeux couvert : trampolines, toboggans, piscines à balles. ~150 SEK/enfant, adultes gratuits.", warn: "Vérifier les horaires d'été en ligne avant d'y aller.", mapsQuery: "Leos+Lekland+Täby+Arninge" }
              ]
            },
            {
              label: "🌲 Nature",
              cards: [
                { emoji: "🐄", name: "Rönninge by", addr: "Rönninge by, Täby", color: "teal", body: "Village-ferme historique dans une réserve naturelle : animaux, prés, vestiges de l'âge du fer. Accès libre.", verdict: "Gratuit — les enfants adorent les animaux.", mapsQuery: "Rönninge+by+Täby" },
                { emoji: "🏊", name: "Skavlöten (Rönningesjön)", addr: "Skavlöten, Täby", color: "teal", body: "Plage du lac, ponton, aires de grillades, sentiers. Eau ~20°C en août.", verdict: "La baignade du séjour, à 10 min.", mapsQuery: "Skavlöten+Täby" },
                { emoji: "🌲", name: "Stolpaskogen", addr: "Täby", color: "teal", body: "La grande forêt au bout du quartier : sentiers plats, myrtilles, aire de jeu forestière.", verdict: "Accessible à pied depuis la maison.", mapsQuery: "Stolpaskogen+Täby" }
              ]
            }
          ]
        },
        {
          label: "⚓ Vaxholm",
          sections: [
            {
              label: "🍦 Sur place",
              cards: [
                { emoji: "🏰", name: "Vaxholms Kastell", addr: "Kastellet, Vaxholm", price: "120 SEK/adulte", color: "coral", body: "Forteresse du 16e siècle sur son île — navette bateau depuis le quai. Tours, canons, souterrains.", verdict: "Enfants 0–12 ans gratuits → 240 SEK pour la famille.", mapsQuery: "Vaxholms+Kastell" },
                { emoji: "🧇", name: "Hembygdsgårdens Café", addr: "Norrhamnen, Vaxholm", price: "~80 SEK/pers", color: "amber", body: "Le café du jardin d'hembygdsgård, face à l'eau — célèbre pour ses gaufres à la crème et confiture.", verdict: "Le fika de Vaxholm.", mapsQuery: "Hembygdsgårdens+Café+Vaxholm" },
                { emoji: "🏖", name: "Eriksö badplats", addr: "Eriksö, Vaxholm", color: "teal", body: "Plage familiale à l'ouest de l'île : sable, rochers plats, aires de grillades. Gratuit.", mapsQuery: "Eriksö+badplats+Vaxholm" }
              ]
            }
          ]
        },
        {
          label: "🎓 Uppsala",
          sections: [
            {
              label: "🍽 Manger",
              cards: [
                { emoji: "☕", name: "Ofvandahls Hovkonditori", addr: "Sysslomansgatan 5, Uppsala", price: "~100 SEK/pers", color: "amber", body: "Fondé en 1878, le plus vieux konditori d'Uppsala — décor d'époque, pâtisseries maison.", verdict: "Un moment historique plus qu'un simple café.", mapsQuery: "Ofvandahls+Uppsala" },
                { emoji: "🍲", name: "Dagens lunch bord de Fyrisån", addr: "Le long de la rivière, Uppsala", price: "~140 SEK/adulte", color: "neutral", body: "Les cafés-restaurants le long de la rivière servent le menu du jour 11h–14h — soupe/plat + pain + café.", verdict: "Le resto assis de la semaine, sans se ruiner." }
              ]
            }
          ]
        },
        {
          label: "🏘 Sigtuna",
          sections: [
            {
              label: "☕ Fika & flâne",
              cards: [
                { emoji: "☕", name: "Tant Bruns Kaffestuga", addr: "Laurentii gränd 3, Sigtuna", price: "~90 SEK/pers", color: "amber", body: "Kaffestuga du 17e siècle au toit d'herbe, jardin ombragé dans une ruelle. Kanelbullar géantes.", verdict: "LE fika du séjour — incontournable.", mapsQuery: "Tant+Bruns+Kaffestuga+Sigtuna" },
                { emoji: "🏛", name: "Sigtuna Museum", addr: "Stora Gatan 55, Sigtuna", price: "~80 SEK/adulte", color: "violet", body: "Histoire viking et médiévale de la plus vieille ville de Suède. Enfants gratuits.", mapsQuery: "Sigtuna+Museum" }
              ]
            }
          ],
          infoboxes: [
            { color: "green", title: "Souvenirs", items: [
              "Les boutiques de <b>Stora Gatan</b> ont de belles choses locales sans être touristiques : céramique, linge de table, confitures artisanales."
            ]}
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
      banner: { accent: "emerald", badge: "Budget", title: "~450 € pour la semaine", sub: "Hors hébergement — nourriture, activités, essence" },
      tables: [
        {
          label: "🍽 Nourriture",
          headers: ["Poste", "Détail", "Coût (SEK)", "Coût (€)"],
          rows: [
            ["Courses semaine", "ICA Maxi Arninge + compléments Willys", "~1 800 SEK", "~164 €"],
            ["1 resto assis", "Déjeuner Uppsala (dagens lunch)", "~550 SEK", "~50 €"],
            ["Fika ×3", "Tant Brun, Hembygdsgården, Ofvandahls", "~600 SEK", "~55 €"],
            ["Glaces & snacks", "", "~300 SEK", "~27 €"]
          ]
        },
        {
          label: "🎟 Activités",
          headers: ["Poste", "Détail", "Coût (SEK)", "Coût (€)"],
          rows: [
            ["Vaxholms Kastell", "2A (enfants 0–12 gratuits)", "240 SEK", "~22 €"],
            ["Navette kastellet", "Bateau A/R famille", "~120 SEK", "~11 €"],
            ["Gamla Uppsala Museum", "2A (enfants gratuits) — optionnel", "~200 SEK", "~18 €"],
            ["Rönninge by, Skavlöten, ruines Sigtuna, domkyrka", "Tout le reste est GRATUIT", "0 SEK", "0 €"]
          ]
        },
        {
          label: "🚗 Voiture",
          headers: ["Poste", "Détail", "Coût (SEK)", "Coût (€)"],
          rows: [
            ["Carburant", "~350 km d'excursions", "~650 SEK", "~59 €"],
            ["Parkings", "Vaxholm, Uppsala (EasyPark)", "~200 SEK", "~18 €"],
            ["Trängselskatt", "Transit du 3/08 (Epass24)", "~40 SEK", "~4 €"]
          ]
        },
        {
          label: "📊 Total",
          headers: ["", "Total"],
          rows: [],
          footer: ["TOTAL", "~4 900 SEK (~445 €)"]
        }
      ],
      note: "La semaine est volontairement peu chère : la plupart des activités (forêt, lacs, Rönninge by, ruines, cathédrale, tumulus) sont gratuites. Le seul billet payant est le kastell de Vaxholm."
    }
  ],

  mapData: {
    1: { center:[59.452, 18.09], zoom:12, pts:[
      { p:[59.4451, 18.0514], label:'🏡 Maison — Klövjevägen 33' },
      { p:[59.4621, 18.1297], label:'🛒 ICA Maxi Arninge' },
      { p:[59.4594, 18.0683], label:'🌲 Stolpaskogen' },
      { p:[59.4448, 18.0721], label:'🏬 Täby Centrum' }
    ]},
    2: { center:[59.404, 18.33], zoom:14, pts:[
      { p:[59.4041, 18.3313], label:'🏘 Strandgatan & port' },
      { p:[59.4032, 18.3584], label:'🏰 Vaxholms Kastell' },
      { p:[59.4055, 18.3345], label:'🧇 Hembygdsgårdens Café' },
      { p:[59.4061, 18.3072], label:'🏖 Eriksö badplats' }
    ]},
    3: { center:[59.872, 17.635], zoom:12, pts:[
      { p:[59.8582, 17.6336], label:'⛪ Uppsala Domkyrka' },
      { p:[59.8537, 17.6354], label:'🏰 Uppsala Slott' },
      { p:[59.8595, 17.6318], label:'☕ Ofvandahls' },
      { p:[59.8969, 17.6361], label:'🪦 Gamla Uppsala' }
    ]},
    4: { center:[59.455, 18.09], zoom:13, pts:[
      { p:[59.4451, 18.0514], label:'🏡 Maison' },
      { p:[59.4560, 18.1137], label:'🐄 Rönninge by' },
      { p:[59.4724, 18.1064], label:'🏊 Skavlöten (baignade)' },
      { p:[59.4594, 18.0683], label:'🫐 Stolpaskogen' }
    ]},
    5: { center:[59.6165, 17.724], zoom:15, pts:[
      { p:[59.6169, 17.7236], label:'🏘 Stora Gatan' },
      { p:[59.6162, 17.7214], label:'☕ Tant Bruns Kaffestuga' },
      { p:[59.6155, 17.7290], label:'⛪ Ruines St Olof' },
      { p:[59.6148, 17.7200], label:'🌊 Bord du Mälaren' }
    ]},
    6: { center:[59.4451, 18.0514], zoom:12, pts:[
      { p:[59.4451, 18.0514], label:'🏡 Maison — départ 11h' }
    ]}
  },

  dayColors: { 1:'#F59E0B', 2:'#F97316', 3:'#7C3AED', 4:'#0D9488', 5:'#059669', 6:'#64748B' }
};
