const TRIP = {
  meta: {
    id: "stockholm-2026-expensive",
    title: "Stockholm 2026",
    flag: "🇸🇪",
    heroEmoji: "🎵",
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [
      { text: "29 Jul – 3 Août", highlight: true },
      { text: "👨‍👩‍👧‍👦 2A + 2E (7 ans)" },
      { text: "🏠 Södermalm" },
      { text: "~1 100 €" }
    ],
    people: ["Greg", "Sofie"],
    personTag: "♥",
    mapCenter: [59.32, 18.07],
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
      banner: { accent: "amber", badge: "Avant le départ", title: "Logistique & Préparation", sub: "Documents, apps, transport, stationnement" },
      sections: [
        { type: "label", text: "📄 Documents & Formalités" },
        { type: "infobox", color: "red", title: "Checklist obligatoire", items: [
          "<b>Passeports</b> — Valides après le 3 août (vérifier toutes les dates d'expiration).",
          "<b>Carte d'identité</b> — Acceptée (Suède = espace Schengen), mais passeport recommandé.",
          "<b>CEAM</b> — Carte Européenne d'Assurance Maladie valide pour toute la famille.",
          "<b>Carte bancaire</b> — La Suède est quasi-<b>sans espèces</b> : Visa/Mastercard acceptée partout (marchés, musées, taxis). Très peu de liquide nécessaire.",
          "<b>Change</b> — 1 € ≈ 11 SEK. Pas besoin d'échanger à l'avance, les Bankomats (DAB) sont partout."
        ]},

        { type: "label", text: "🚨 À faire maintenant" },
        { type: "infobox", color: "amber", title: "Checklist avant le départ", items: [
          "Télécharger <b>EasyPark</b> (stationnement) sur les deux téléphones.",
          "Télécharger <b>SL-Appen</b> (transports Stockholm) ou <b>Google Maps</b> (très fiable à Stockholm).",
          "Réserver <b>Junibacken</b> en ligne (files très longues sans réservation en haute saison).",
          "Réserver <b>Gröna Lund</b> si prévu (accès illimité manèges en ligne moins cher).",
          "Réserver au moins un dîner chez <b>Pelikan</b> (restaurant iconique, toujours complet).",
          "Prévoir vêtements chauds pour le soir (13°C la nuit même en août).",
          "Prévoir imperméables légers (13 jours de pluie en moyenne sur le mois)."
        ]},

        { type: "label", text: "🌤 Météo Juillet/Août" },
        { type: "infoboxGroup", items: [
          { color: "teal", title: "Températures & Conditions", items: [
            "<b>Jour :</b> 20–23°C · <b>Nuit :</b> 13°C — une veste légère est indispensable pour le soir.",
            "<b>Pluie :</b> ~13 jours de pluie sur le mois — imperméable compact obligatoire.",
            "<b>Coucher de soleil :</b> ~21h15 début août."
          ]},
          { color: "amber", title: "⚠ Lumière nocturne", items: [
            "Ciel encore clair à 22h et crépuscule à minuit. Magnifique mais peut perturber le sommeil des enfants.",
            "<b>Prévoir des rideaux occultants ou masques de nuit.</b>"
          ]}
        ]},

        { type: "divider" },

        { type: "label", text: "📱 Apps à installer" },
        { type: "apps", items: [
          { icon: "🗺", name: "Google Maps / Citymapper", desc: "Navigation Stockholm — très efficace.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🅿️", name: "EasyPark", desc: "Paiement parking rue + garages. Indispensable en Suède.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🚇", name: "SL-Appen", desc: "Transports publics Stockholm : acheter et valider les tickets.", tag: "must", tagLabel: "Indispensable" },
          { icon: "💳", name: "Revolut / N26", desc: "Payer en SEK sans frais de change. Configurer avant le départ.", tag: "nice", tagLabel: "Recommandé" },
          { icon: "🚖", name: "Bolt / Uber", desc: "Taxi si besoin. Bolt souvent moins cher.", tag: "nice", tagLabel: "Recommandé" }
        ]},

        { type: "divider" },

        { type: "label", text: "🚇 Transports à Stockholm" },
        { type: "infoboxGroup", items: [
          { color: "green", title: "Tarifs SL (Transports Publics)", items: [
            "<b>Ticket simple 75 min :</b> 43 SEK / adulte · 26 SEK / enfant.",
            "<b>Pass 72h :</b> ~330 SEK / adulte (valable métro + bus + trams + ferries).",
            "<b>Pass 7 jours :</b> ~500 SEK / adulte.",
            "<b>Enfants 7–11 ans : GRATUITS</b> avec un adulte porteur d'un billet valide ✅",
            "<b>RECOMMANDÉ :</b> Achetez un pass 72h ou 7j pour les adultes — les trajets s'accumulent vite."
          ]},
          { color: "teal", title: "💡 Apple Pay / sans contact", items: [
            "Payez avec Apple Pay / carte sans contact directement sur les portiques — pas besoin d'acheter à l'avance."
          ]}
        ]},
        { type: "infobox", color: "violet", title: "Le Tunnelbana (Métro)", items: [
          "3 lignes (verte, rouge, bleue) — très simple d'utilisation.",
          "Les stations sont décorées comme des galeries d'art (tunnel rouge = spectaculaire).",
          "<b>Stations près de Södermalm :</b> Slussen, Medborgarplatsen, Mariatorget, Hornstull."
        ]},
        { type: "infobox", color: "teal", title: "🚢 Ferries SL", items: [
          "Les ferries SL (Djurgårdsfärjan) sont <b>inclus dans le pass SL</b>.",
          "Ligne directe <b>Slussen → Djurgården</b> — parfait pour rejoindre Junibacken, Skansen et Vasamuseet sans voiture."
        ]},

        { type: "divider" },

        { type: "label", text: "🅿️ Stationnement — Plan Stockholm" },
        { type: "infobox", color: "amber", title: "⚠ Trängselskatt — Taxe de Congestion", items: [
          "Stockholm prélève une taxe automatique (reconnaissance de plaque) sur les voitures entrant/sortant du centre.",
          "🎉 <b>JUILLET EST GRATUIT</b> — La taxe est suspendue pendant les vacances scolaires suédoises. Votre arrivée le 29 juillet : vous ne payez pratiquement rien.",
          "Paiement automatique par reconnaissance de plaque. Les véhicules étrangers reçoivent une facture postale."
        ]},
        { type: "cards", items: [
          { emoji: "🅿️", name: "P-Hus Medborgarplatsen", addr: "Medborgarplatsen, Södermalm", color: "amber", body: "Le plus pratique — cœur de Södermalm.", verdict: "Le P-Hus de référence pour votre séjour.", mapsQuery: "Parkering+Medborgarplatsen+Stockholm" },
          { emoji: "🅿️", name: "P-Hus Skanstull", addr: "Ringvägen, Södermalm", color: "neutral", body: "Bon pour le sud de Södermalm.", mapsQuery: "Parkering+Skanstull+Stockholm" },
          { emoji: "🅿️", name: "Q-Park Gamla Stan", addr: "À 5 min de Slussen", color: "neutral", body: "Pour les jours Gamla Stan.", mapsQuery: "Q-Park+Gamla+Stan+Stockholm" },
          { emoji: "🅿️", name: "Parkering Norrmälarstrand", addr: "Kungsholmen", color: "neutral", body: "Vue sur l'eau, accès rapide Södermalm.", mapsQuery: "Parkering+Norrmalarstrand+Stockholm" }
        ]},
        { type: "infoboxGroup", items: [
          { color: "green", title: "Zones de stationnement à Södermalm", items: [
            "<b>Zone A (centre) :</b> 40–50 SEK/h · Lun–Ven 7h–19h, Sam 9h–18h.",
            "<b>Zone B (semi-centre) :</b> 15–25 SEK/h · Lun–Ven 7h–19h, Sam 11h–17h.",
            "<b>Zone C (résidentiel) :</b> 5–15 SEK/h · Lun–Ven 7h–19h.",
            "<b>GRATUIT</b> — Après 19h tous les jours · Dimanche."
          ]},
          { color: "teal", title: "💡 Conseil pratique", items: [
            "Les petites rues résidentielles de Södermalm sont en Zone C. Après 19h et le dimanche, c'est <b>gratuit</b>.",
            "Garez la voiture à l'arrivée le 29 juillet dans votre P-Hus de référence, et <b>circulez quasi-exclusivement en SL + à pied</b> les jours suivants. Stockholm est parfaitement faite pour ça."
          ]}
        ]},
        { type: "infobox", color: "green", title: "🔌 Recharge Électrique", items: [
          "La plupart des P-Hus suédois ont des bornes de recharge. Si vous roulez en électrique, vérifiez via l'app <b>APCOA</b> ou <b>Charge Amps</b>."
        ]},

        { type: "divider" },

        { type: "label", text: "💡 Conseils Pratiques" },
        { type: "infoboxGroup", items: [
          { color: "green", title: "Vie pratique", items: [
            "<b>Cashless :</b> Partout en Suède. Préparez votre CB Visa/Mastercard — certains endroits refusent même les espèces.",
            "<b>Pourboires :</b> Non obligatoires. Arrondir au supérieur ou 10% si vous êtes ravis du service.",
            "<b>Heure de dîner :</b> Les Suédois dînent tôt (18h–19h). Arriver à 21h = restaurant fermé.",
            "<b>Poussettes :</b> Stockholm est très poussette-friendly : ascenseurs dans toutes les stations de métro.",
            "<b>Langue :</b> Tout le monde parle anglais parfaitement. Les Suédois sont extrêmement accueillants."
          ]},
          { color: "amber", title: "Habillement", items: [
            "Les Suédois s'habillent sobrement et fonctionnellement. Pas besoin de tenue habillée pour les restaurants classiques.",
            "En revanche, une <b>veste est indispensable même en été</b>."
          ]}
        ]}
      ]
    },

    /* ================================================================
       PAGE 1 — MERCREDI 29 JUILLET (Jour 1)
       ================================================================ */
    {
      id: "jour1",
      tab: "Mer. J1",
      type: "day",
      dayNumber: 1,
      banner: { accent: "amber", badge: "Jour 1 · Mercredi 29 Juillet", title: "Arrivée & Södermalm", sub: "Installation → Monteliusvägen → Fjällgatan → Dîner Lasse i Parken" },
      timeline: [
        {
          time: "14h00\n16h00",
          title: "🏠 Installation & Quartier",
          items: [
            { text: "Récupérez les clés de l'Airbnb / check-in hôtel à Södermalm." },
            { text: "Garez la voiture au <b>P-Hus Medborgarplatsen</b> — vous ne la reprendrez probablement que le dernier jour." },
            { text: "Faites le tour du quartier à pied : repérez l'épicerie, le boulanger (les <b>Konditori</b> suédois font d'excellentes brioches à la cardamome — <i>kardemummabullar</i>)." },
            { text: "Objectif du jour : arriver, poser les valises, ne rien prévoir de lourd. Laisser les enfants souffler.", type: "tip" }
          ]
        },
        {
          time: "16h00\n18h00",
          title: "🏔 Monteliusvägen",
          items: [
            { text: "Petite rue en belvédère sur les toits de Stockholm — l'une des plus belles vues de la ville." },
            { text: "Vue sur Kungsholmen, l'Hôtel de Ville (Stadshuset), le lac Mälaren." },
            { text: "Idéal pour la lumière de fin d'après-midi.", type: "tip" }
          ]
        },
        {
          time: "18h00\n19h30",
          title: "📸 Fjällgatan (bonus)",
          items: [
            { text: "À 10 min à pied, <b>Fjällgatan</b> offre un second panorama spectaculaire sur Stockholm et les toits de Södermalm." },
            { text: "C'est LA photo carte postale de Stockholm — à faire impérativement.", type: "tip" }
          ]
        },
        {
          time: "19h30",
          title: "🍽 Dîner — Lasse i Parken",
          items: [
            { text: "<b>Lasse i Parken</b> (Tantolunden Park) : café-restaurant en plein air dans le parc, atmosphère détendue, cuisine suédoise simple — parfait pour le soir d'arrivée avec les enfants." },
            { text: "<b>Alternative :</b> <b>En Halv Trappa Ner</b> (cœur de Södermalm) : petit restaurant maison, chaises hautes, ambiance chaleureuse.", type: "sub" },
            { text: "Le soleil se couche à ~21h15 début août. Profitez de la lumière incroyable du soir en mangeant dehors.", type: "tip" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 2 — JEUDI 30 JUILLET (Jour 2)
       ================================================================ */
    {
      id: "jour2",
      tab: "Jeu. J2",
      type: "day",
      dayNumber: 2,
      banner: { accent: "coral", badge: "Jour 2 · Jeudi 30 Juillet", title: "L'Île de Djurgården 🦁", sub: "Junibacken → Vasamuseet → Skansen → Pelikan" },
      timeline: [
        {
          time: "08h30\n09h00",
          title: "🚢 Ferry vers Djurgården",
          items: [
            { text: "Ferry SL depuis <b>Slussen → Djurgården</b> (inclus dans le pass SL, ~10 min). Les enfants adorent le ferry." },
            { text: "Alternative : bus 69.", type: "sub" },
            { text: "La journée reine pour les enfants. Tout est sur la même île, à 10 min du centre.", type: "tip" }
          ]
        },
        {
          time: "09h00\n12h00",
          title: "⭐ Junibacken",
          items: [
            { text: "<b>Galärvarvsvägen 8, Djurgården</b> — Le musée d'Astrid Lindgren." },
            { text: "Le \"Story Train\" vous emmène dans les univers de Fifi Brindacier, Emil, Karlsson sur le toit. La maison de Fifi (<i>Villa Villekulla</i>) est entièrement reconstituée et grimpable." },
            { text: "~180–200 SEK / adulte · ~120–150 SEK / enfant (réserver en ligne)." },
            { text: "Arriver à l'ouverture pour éviter les files. Durée : 2h30–3h.", type: "tip" },
            { text: "Plus grand libraire de livres jeunesse de Suède sur place — prévoir budget souvenirs.", type: "sub" }
          ]
        },
        {
          time: "12h30\n13h30",
          title: "🥪 Déjeuner — Djurgårdsbrunn ou Pique-nique",
          items: [
            { text: "<b>Djurgårdsbrunn Restaurang</b> à 5 min à pied : cuisine suédoise classique, jardin, vue sur le canal — parfait pour une pause en famille." },
            { text: "Alternative picnic : l'île est pleine de pelouses parfaites pour s'asseoir avec une <i>smörgås</i> (sandwich suédois) achetée le matin.", type: "sub" }
          ]
        },
        {
          time: "13h30\n15h30",
          title: "🚢 Vasamuseet (Musée du Vasa)",
          items: [
            { text: "<b>Galärvarvsvägen 14, Djurgården</b> (à 3 min à pied de Junibacken)." },
            { text: "Le navire de guerre du 17ème siècle qui a coulé 20 minutes après son lancement — l'une des expositions les plus impressionnantes d'Europe." },
            { text: "<b>Enfants : GRATUIT</b> · Adultes : ~240 SEK (haute saison)." },
            { text: "Durée : 1h30 — ne ratez pas le film introductif et les maquettes à l'échelle.", type: "tip" },
            { text: "À voir : les visages sculptés sur la proue, les poupées de marins en costume d'époque.", type: "sub" }
          ]
        },
        {
          time: "15h30\n18h00",
          title: "🦌 Skansen",
          items: [
            { text: "<b>Djurgårdsslätten 49–51</b> (à pied depuis Vasamuseet, 10 min)." },
            { text: "Le plus ancien musée en plein air du monde : ferme, animaux nordiques (élans, bisons, loups), maisons historiques." },
            { text: "<b>Enfants : GRATUIT</b> · Adultes : 220–245 SEK (haute saison)." },
            { text: "Si les enfants sont épuisés après Junibacken + Vasa, remplacez Skansen par une balade libre sur l'île et gardez-le pour un autre jour.", type: "warn" }
          ]
        },
        {
          time: "18h30",
          title: "🚢 Retour ferry Djurgården → Slussen",
          items: [
            { text: "Coucher de soleil spectaculaire sur l'eau si le temps le permet." }
          ]
        },
        {
          time: "19h30",
          title: "🍽 Dîner — Pelikan",
          items: [
            { text: "<b>Blekingegatan 40, Södermalm</b> — Institution de Södermalm depuis 1733." },
            { text: "Immense salle brasserie suédoise à l'ancienne (boiseries, miroirs, lumières tamisées)." },
            { text: "<b>Le plat :</b> Boulettes de viande maison (<i>köttbullar</i>) avec purée, sauce brune et confiture de lingonberry — les enfants vont adorer." },
            { text: "Réservation fortement recommandée — complet quasi tous les soirs en été.", type: "warn" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 3 — VENDREDI 31 JUILLET (Jour 3)
       ================================================================ */
    {
      id: "jour3",
      tab: "Ven. J3",
      type: "day",
      dayNumber: 3,
      banner: { accent: "violet", badge: "Jour 3 · Vendredi 31 Juillet", title: "Gamla Stan & Centre 🏰", sub: "Fika → Gamla Stan → Tunnelbana Art → Fotografiska → Kvarnen" },
      timeline: [
        {
          time: "09h00",
          title: "☕ Petit-déjeuner Fika suédois",
          items: [
            { text: "La <i>fika</i> est un rituel suédois sacré : café + viennoiserie (<i>kanelbulle</i> = brioche cannelle ou <i>kardemummabullar</i> = cardamome)." },
            { text: "Trouvez un konditori de quartier à Södermalm — <b>Vete-Katten</b> ou <b>Fabrique</b> si vous êtes côté Mariatorget.", type: "tip" }
          ]
        },
        {
          time: "09h30\n12h30",
          title: "🏰 Gamla Stan (Vieille Ville)",
          items: [
            { text: "Traversée à pied depuis Södermalm via le pont <b>Gamla Stans bro</b> depuis Slussen (5 min)." },
            { text: "<b>L'itinéraire idéal :</b>" },
            { text: "1. Entrer par <b>Stortorget</b> (grande place, maisons colorées des 15e–17e siècles).", type: "sub" },
            { text: "2. Descendre la <b>Mårten Trotzigs Gränd</b> : la ruelle la plus étroite de Stockholm (90 cm !).", type: "sub" },
            { text: "3. Remonter <b>Österlånggatan</b> (boutiques artisanales, galeries).", type: "sub" },
            { text: "4. <b>Palais Royal</b> extérieur + relève de la garde (11h15 en semaine, 12h15 le week-end en été).", type: "sub" },
            { text: "5. <b>Stockholm Toy Museum</b> (Museigatan) : collection de jouets depuis le 17e siècle — les jumeaux vont adorer.", type: "sub" },
            { text: "🎯 Mission enfants : \"Trouver la ruelle la plus étroite de Stockholm\" (Mårten Trotzigs Gränd)." }
          ]
        },
        {
          time: "12h30\n14h00",
          title: "☕ Déjeuner — Kaffekoppen à Stortorget",
          items: [
            { text: "La terrasse sur la Grande Place de Gamla Stan est une des plus belles de Stockholm." },
            { text: "Sandwichs suédois ouverts (<i>smörgås</i>), soupes, pâtisseries." },
            { text: "Le menu <i>dagens lunch</i> (12h–14h) avec soupe + pain + café ≈ 130–160 SEK.", type: "tip" }
          ]
        },
        {
          time: "14h00\n15h00",
          title: "🎨 Station de Métro T-Centralen (ligne bleue)",
          items: [
            { text: "Le réseau de métro de Stockholm est connu comme \"la plus longue galerie d'art du monde\"." },
            { text: "<b>Station T-Centralen ligne bleue :</b> fresque bleue spectaculaire gravée dans le roc — comme une grotte subaquatique. 2 minutes, gratuit avec le pass SL." },
            { text: "Prenez la ligne bleue jusqu'à <b>Kungsträdgården</b> ou <b>Rådhuset</b> — chaque station est décorée différemment.", type: "tip" }
          ]
        },
        {
          time: "15h00\n16h30",
          title: "🌳 Kungsträdgården (Jardin du Roi)",
          items: [
            { text: "Grand parc en plein centre, fontaines, tilleuls, terrasses." },
            { text: "En été : concerts, food trucks, jeux pour enfants." },
            { text: "Adjacent : <b>NK</b> (grand magasin iconique) si vous voulez faire quelques emplettes.", type: "sub" }
          ]
        },
        {
          time: "16h30\n19h00",
          title: "📸 Fotografiska",
          items: [
            { text: "<b>Stadsgårdshamnen 22, Södermalm</b> (bord de l'eau, à pied de Slussen)." },
            { text: "Musée de photographie contemporaine dans un ancien entrepôt industriel avec vue sur le port." },
            { text: "<b>Enfants moins de 16 ans : GRATUIT</b> · Adultes : 200–230 SEK." },
            { text: "Exposition toujours de très haute qualité. Café panoramique au dernier étage avec vue imprenable.", type: "tip" }
          ]
        },
        {
          time: "19h30",
          title: "🍽 Dîner — Kvarnen",
          items: [
            { text: "<b>Tjärhovsgatan 4, Södermalm</b> — Brasserie suédoise depuis 1908, décor Art Nouveau intact." },
            { text: "Carte de bières artisanales. Cuisine suédoise maison : <i>Wallenbergare</i> (galette de veau), boulettes, poisson fumé." },
            { text: "Ambiance animée et familiale le vendredi soir." }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 4 — SAMEDI 1ER AOÛT (Jour 4)
       ================================================================ */
    {
      id: "jour4",
      tab: "Sam. J4",
      type: "day",
      dayNumber: 4,
      banner: { accent: "teal", badge: "Jour 4 · Samedi 1er Août", title: "Archipel ou Gröna Lund 🚢🎡", sub: "Aventure au choix → Hornstull & SoFo le soir" },
      timeline: [
        {
          time: "09h00\n17h00",
          title: "🌊 Option A — Excursion Archipel (si beau temps)",
          items: [
            { text: "Stockholm est entourée de 30 000 îles. Une journée en bateau dans l'archipel est l'une des meilleures expériences possibles." },
            { text: "<b>Ferry Waxholmsbolaget</b> depuis <b>Strömkajen</b> (devant le Palais Royal)." },
            { text: "<b>Vaxholm :</b> 1h de ferry · Village de pêcheurs pittoresque, forteresse, boutiques, glaces artisanales · Parfait pour une demi-journée.", type: "sub" },
            { text: "<b>Grinda :</b> 1h30 de ferry · Réserve naturelle · Plages de sable · Baignade (eau à ~18°C en août) · Très populaire en famille.", type: "sub" },
            { text: "Tarifs : inclus dans le pass SL 72h/7j pour les ferries Waxholmsbolaget (vérifier selon le type de pass).", type: "tip" },
            { text: "En été, les vieux bateaux à vapeur (<i>ångbåtar</i>) font la traversée — expérience unique.", type: "tip" }
          ]
        },
        {
          time: "09h00\n17h00",
          title: "🎡 Option B — Gröna Lund (si les enfants veulent des manèges)",
          items: [
            { text: "<b>Lilla Allmänna gränden 9, Djurgården</b> (ferry SL depuis Slussen)." },
            { text: "Le plus vieux parc d'attractions de Suède (depuis 1883), au bord de l'eau à Djurgården." },
            { text: "27 manèges : grande roue, auto-tamponneuses, carrousels + manèges pour petits. Les jumeaux de 7 ans vont y trouver plein de choses à leur taille." },
            { text: "Réserver en ligne sur gronalund.com — billet d'accès + accès illimité manèges.", type: "tip" },
            { text: "Restaurants et stands de nourriture sur place." }
          ]
        },
        {
          time: "17h00",
          title: "💡 Stockholm Pride",
          items: [
            { text: "Le 1er août c'est aussi le début de <b>Stockholm Pride</b> (27 juillet–3 août). La ville est en fête, colorée, festive.", type: "tip" },
            { text: "Les familles sont les bienvenues dans tous les événements diurnes." }
          ]
        },
        {
          time: "19h00\n21h00",
          title: "🛍 Hornstull & SoFo",
          items: [
            { text: "Balade dans le quartier le plus branché de Södermalm." },
            { text: "<b>Hornstulls Marknad</b> (marché vintage/friperie, sam/dim jusqu'en sept) : vinyles, artisanat, food trucks." },
            { text: "Dîner libre dans le quartier — <b>Teatern</b> (food hall), <b>Gondolen</b> (vue panoramique), ou une pizza dans le SoFo.", type: "sub" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 5 — DIMANCHE 2 AOÛT (Jour 5)
       ================================================================ */
    {
      id: "jour5",
      tab: "Dim. J5",
      type: "day",
      dayNumber: 5,
      banner: { accent: "emerald", badge: "Jour 5 · Dimanche 2 Août", title: "ABBA + Détente 🎵", sub: "ABBA Museum → Rosendals → SoFo → Tantolunden → Gondolen" },
      timeline: [
        {
          time: "10h00\n12h00",
          title: "🎤 ABBA The Museum",
          items: [
            { text: "<b>Djurgårdsvägen 68, Djurgården</b> (ferry SL ou bus 69)." },
            { text: "Expérience interactive totale : hologrammes d'ABBA sur scène, cabines d'enregistrement, costumes originaux, studios interactifs." },
            { text: "Les enfants adorent même sans connaître ABBA — la salle de danse et les instruments à toucher sont parfaits pour 7 ans." },
            { text: "Adultes ~290 SEK · Enfants 7–15 ans ~120 SEK. Durée : 1h30–2h.", type: "sub" },
            { text: "Réserver en ligne (moins cher + pas de file).", type: "tip" }
          ]
        },
        {
          time: "12h30\n14h00",
          title: "🌸 Déjeuner — Rosendals Trädgård",
          items: [
            { text: "<b>Rosendalsterrassen 12, Djurgården</b> (10 min à pied depuis ABBA Museum)." },
            { text: "Le café-restaurant le plus beau de Stockholm : au milieu d'un verger de pommiers, jardin potager biologique, serre victorienne." },
            { text: "Carte basée sur les produits du jardin : sandwichs, tartes, soupes, pâtisseries maison." },
            { text: "Pour les enfants : goûter les pâtisseries suédoises fraîches — les <i>bullens</i> au citron et aux graines de pavot sont incroyables.", type: "tip" }
          ]
        },
        {
          time: "14h30\n16h00",
          title: "🛍 Temps libre / Shopping Södermalm",
          items: [
            { text: "<b>SoFo</b> (South of Folkungagatan) : le quartier des boutiques indépendantes. Mode scandinave, déco, librairies, jouets de qualité." },
            { text: "<b>Acmé</b> (Götgatan) : papeterie et design suédois.", type: "sub" },
            { text: "<b>Happy Socks</b> (Götgatan) : chaussettes iconiques à motifs — les enfants adorent.", type: "sub" },
            { text: "<b>Systembolaget :</b> si vous voulez rapporter un aquavit ou un vin suédois.", type: "sub" }
          ]
        },
        {
          time: "16h00\n18h00",
          title: "🌿 Tantolunden Park",
          items: [
            { text: "Grand parc de Södermalm avec jardins ouvriers (<i>koloniträdgårdar</i>) — petites maisonnettes de bois colorées avec jardins soignés, comme dans un conte." },
            { text: "Jeux pour enfants, pelouse, plage sur le Mälaren en été." },
            { text: "Vue sur le lac et les îles." }
          ]
        },
        {
          time: "19h30",
          title: "🌃 Dîner de fête — Gondolen",
          items: [
            { text: "<b>Stadsgårdsleden 6, Slussen</b> (au sommet de l'ascenseur Katarinahissen)." },
            { text: "Restaurant panoramique au sommet de Södermalm, vue à 360° sur Stockholm illuminée." },
            { text: "Cuisine suédoise moderne et fruits de mer frais." },
            { text: "Pour marquer le dernier grand soir du voyage.", type: "tip" },
            { text: "Réservation impérative — l'une des meilleures vues de la ville.", type: "warn" }
          ]
        }
      ]
    },

    /* ================================================================
       PAGE 6 — LUNDI 3 AOÛT (Jour 6)
       ================================================================ */
    {
      id: "jour6",
      tab: "Lun. J6",
      type: "day",
      dayNumber: 6,
      banner: { accent: "amber", badge: "Jour 6 · Lundi 3 Août", title: "Départ ☀️", sub: "Flâne finale → Souvenirs → Route" },
      timeline: [
        {
          time: "09h00\n11h00",
          title: "☕ Flâne finale à Södermalm",
          items: [
            { text: "Petit-déjeuner dans votre konditori préféré du séjour — la <i>fika</i> d'adieu." },
            { text: "Derniers achats : <b>canneberges séchées, confiture de lingonberry, aquavit miniature, publications design suédois</b>." },
            { text: "Un dernier tour sur <b>Monteliusvägen</b> si la météo est belle.", type: "tip" }
          ]
        },
        {
          time: "11h00",
          title: "🚗 Récupération de la voiture & Départ",
          items: [
            { text: "Récupérer le véhicule au P-Hus." },
            { text: "Route ou aéroport selon votre itinéraire de retour." }
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
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "Restos, Cafés & Attractions", sub: "Les meilleures adresses de Stockholm pour la famille" },
      zones: [
        {
          label: "🍽 Restaurants",
          sections: [
            {
              label: "🍽 Restaurants Incontournables",
              cards: [
                { emoji: "🍖", name: "Pelikan", addr: "Blekingegatan 40, Södermalm", price: "££", color: "coral", body: "Institution de Södermalm depuis 1733. Immense salle brasserie suédoise à l'ancienne (boiseries, miroirs, lumières tamisées). <b>Le plat :</b> boulettes de viande maison (<i>köttbullar</i>) avec purée, sauce brune et confiture de lingonberry.", verdict: "Réservation obligatoire — complet quasi tous les soirs en été.", mapsQuery: "Pelikan+Blekingegatan+40+Stockholm" },
                { emoji: "🍺", name: "Kvarnen", addr: "Tjärhovsgatan 4, Södermalm", price: "££", color: "violet", body: "Brasserie suédoise depuis 1908, décor Art Nouveau intact. Carte de bières artisanales. Cuisine maison : <i>Wallenbergare</i> (galette de veau), boulettes, poisson fumé.", verdict: "Ambiance animée et familiale le vendredi soir.", mapsQuery: "Kvarnen+Tjärhovsgatan+4+Stockholm" },
                { emoji: "🌿", name: "Lasse i Parken", addr: "Tantolunden Park, Södermalm", price: "£", color: "amber", body: "Café-restaurant en plein air dans le parc Tantolunden. Atmosphère détendue, cuisine suédoise simple — parfait pour un soir d'arrivée avec les enfants.", verdict: "Terrasse en plein air, idéal pour profiter des longues soirées suédoises.", mapsQuery: "Lasse+i+Parken+Tantolunden+Stockholm" },
                { emoji: "🌃", name: "Gondolen", addr: "Stadsgårdsleden 6, Slussen", price: "£££", color: "emerald", body: "Restaurant panoramique au sommet de Södermalm (ascenseur Katarinahissen). Vue à 360° sur Stockholm. Cuisine suédoise moderne et fruits de mer frais.", verdict: "Réservation impérative — l'une des meilleures vues de la ville. Parfait pour le dernier soir.", mapsQuery: "Gondolen+Stadsgårdsleden+6+Stockholm" },
                { emoji: "🌸", name: "Rosendals Trädgård", addr: "Rosendalsterrassen 12, Djurgården", price: "££", color: "teal", body: "Le café-restaurant le plus beau de Stockholm : au milieu d'un verger de pommiers, jardin potager biologique, serre victorienne. Carte basée sur les produits du jardin.", verdict: "Les pâtisseries maison sont incroyables — bullens au citron et aux graines de pavot.", mapsQuery: "Rosendals+Trädgård+Djurgården+Stockholm" },
                { emoji: "☕", name: "Kaffekoppen", addr: "Stortorget, Gamla Stan", price: "£", color: "amber", body: "Terrasse sur la Grande Place de Gamla Stan — une des plus belles de Stockholm. Sandwichs suédois ouverts (<i>smörgås</i>), soupes, pâtisseries.", verdict: "Le menu <i>dagens lunch</i> (12h–14h) avec soupe + pain + café ≈ 130–160 SEK.", mapsQuery: "Kaffekoppen+Stortorget+Gamla+Stan+Stockholm" },
                { emoji: "🏛", name: "Den Gyldene Freden", addr: "Österlånggatan 51, Gamla Stan", price: "£££", color: "violet", body: "Le plus ancien restaurant de Suède (depuis 1722). Cuisine suédoise traditionnelle dans un cadre historique exceptionnel. Inscrit au Guinness des records.", verdict: "Expérience unique — à réserver pour une occasion spéciale.", mapsQuery: "Den+Gyldene+Freden+Österlånggatan+51+Stockholm" },
                { emoji: "🎭", name: "Teatern", addr: "Skanstull, Södermalm", price: "££", color: "teal", body: "Food hall dans un ancien théâtre. Plusieurs stands de cuisine variée — chacun choisit son plat. Idéal avec des enfants qui ne veulent pas la même chose.", verdict: "Anti-dispute familiale : chacun choisit, même table.", mapsQuery: "Teatern+Skanstull+Stockholm" }
              ]
            }
          ]
        },
        {
          label: "☕ Fika",
          sections: [
            {
              label: "☕ Cafés & Pâtisseries",
              cards: [
                { emoji: "🥐", name: "Vete-Katten", addr: "Södermalm / Norrmalm", price: "£", color: "amber", body: "Konditori traditionnel suédois. Brioches à la cannelle (<i>kanelbulle</i>) et à la cardamome (<i>kardemummabullar</i>) faites maison.", verdict: "L'expérience fika authentique.", mapsQuery: "Vete-Katten+Stockholm" },
                { emoji: "🍞", name: "Fabrique", addr: "Södermalm (Mariatorget)", price: "£", color: "coral", body: "Boulangerie artisanale. Kanelbulle géant et pain au levain — une institution du quartier.", verdict: "Le kanelbulle est énorme et parfait.", mapsQuery: "Fabrique+Mariatorget+Stockholm" },
                { emoji: "🌿", name: "Rosendals", addr: "Rosendalsterrassen 12, Djurgården", price: "££", color: "teal", body: "Tout bio, dans un verger et une serre victorienne. Pâtisseries maison, tartes aux fruits du jardin.", verdict: "Le plus beau cadre pour une fika à Stockholm.", mapsQuery: "Rosendals+Trädgård+Djurgården+Stockholm" },
                { emoji: "☕", name: "Kaffekoppen", addr: "Stortorget, Gamla Stan", price: "£", color: "amber", body: "Terrasse sur la plus belle place de Stockholm. Vue sur les maisons colorées du 17e siècle.", verdict: "Fika avec la plus belle vue de Gamla Stan.", mapsQuery: "Kaffekoppen+Stortorget+Gamla+Stan+Stockholm" }
              ]
            }
          ]
        },
        {
          label: "🎟 Attractions",
          sections: [
            {
              label: "🎟 Attractions Essentielles",
              cards: [
                { emoji: "⭐", name: "Junibacken", addr: "Galärvarvsvägen 8, Djurgården", price: "££", color: "amber", body: "Le musée d'Astrid Lindgren. Story Train, maison de Fifi Brindacier grimpable, plus grande librairie jeunesse de Suède. Durée : 2h30–3h.", verdict: "Réserver en ligne — files très longues en haute saison. ~190 SEK/adulte · ~150 SEK/enfant.", mapsQuery: "Junibacken+Galärvarvsvägen+8+Stockholm" },
                { emoji: "🚢", name: "Vasamuseet", addr: "Galärvarvsvägen 14, Djurgården", price: "££", color: "coral", body: "Navire de guerre du 17e siècle qui a coulé 20 min après son lancement. L'une des expositions les plus impressionnantes d'Europe. Film introductif, maquettes à l'échelle.", verdict: "Enfants GRATUIT · Adultes ~240 SEK. Durée : 1h30.", mapsQuery: "Vasamuseet+Galärvarvsvägen+14+Stockholm" },
                { emoji: "🦌", name: "Skansen", addr: "Djurgårdsslätten 49–51, Djurgården", price: "££", color: "violet", body: "Le plus ancien musée en plein air du monde. Ferme, animaux nordiques (élans, bisons, loups), maisons historiques suédoises.", verdict: "Enfants GRATUIT · Adultes 220–245 SEK (haute saison).", mapsQuery: "Skansen+Djurgårdsslätten+Stockholm" },
                { emoji: "🎡", name: "Gröna Lund", addr: "Lilla Allmänna gränden 9, Djurgården", price: "££", color: "teal", body: "Le plus vieux parc d'attractions de Suède (1883). 27 manèges au bord de l'eau. Grande roue, auto-tamponneuses, carrousels + manèges adaptés pour 7 ans.", verdict: "Réserver en ligne sur gronalund.com pour l'accès illimité manèges.", mapsQuery: "Gröna+Lund+Djurgården+Stockholm" },
                { emoji: "🎤", name: "ABBA The Museum", addr: "Djurgårdsvägen 68, Djurgården", price: "££", color: "emerald", body: "Expérience interactive : hologrammes d'ABBA sur scène, cabines d'enregistrement, costumes originaux, studios interactifs. Les enfants adorent même sans connaître ABBA.", verdict: "Adultes ~290 SEK · Enfants 7–15 ans ~120 SEK. Réserver en ligne.", mapsQuery: "ABBA+Museum+Djurgårdsvägen+68+Stockholm" },
                { emoji: "📸", name: "Fotografiska", addr: "Stadsgårdshamnen 22, Södermalm", price: "££", color: "violet", body: "Musée de photographie contemporaine dans un ancien entrepôt industriel. Expositions de très haute qualité. Café panoramique au dernier étage.", verdict: "Enfants <16 ans GRATUIT · Adultes 200–230 SEK.", mapsQuery: "Fotografiska+Stadsgårdshamnen+22+Stockholm" }
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
      banner: { accent: "emerald", badge: "Budget", title: "Estimation 2026", sub: "Pour la famille (2 adultes + 2 enfants) · Hors hébergement et transport aller-retour" },
      tables: [
        {
          label: "🚇 Transports",
          headers: ["Poste", "Estimation (4 pers.)"],
          rows: [
            ["Transports SL (pass 7j × 2 adultes)", "~1 000 SEK"],
            ["Parking P-Hus × 5 jours", "~700–1 000 SEK"]
          ]
        },
        {
          label: "🎟 Entrées & Activités",
          headers: ["Poste", "Estimation (4 pers.)"],
          rows: [
            ["Junibacken (2A + 2E)", "~700 SEK"],
            ["Vasamuseet (2A, enfants gratuits)", "~480 SEK"],
            ["ABBA Museum (2A + 2E)", "~820 SEK"],
            ["Fotografiska (2A, enfants gratuits)", "~440 SEK"],
            ["Gröna Lund ou Archipel", "~800–1 000 SEK"],
            ["Skansen (2A, enfants gratuits)", "~480 SEK"]
          ]
        },
        {
          label: "🍽 Repas & Sorties",
          headers: ["Poste", "Estimation (4 pers.)"],
          rows: [
            ["Restaurants (dîners × 5 soirs)", "~3 500–5 000 SEK"],
            ["Fika quotidien", "~800 SEK"],
            ["Souvenirs / shopping", "Budget libre"]
          ]
        },
        {
          label: "📊 Total Estimé",
          headers: ["", "Montant"],
          rows: [
            ["Total en SEK", "~10 000–12 000 SEK"],
            ["Total en euros (≈ 11 SEK/€)", "~900–1 100 €"]
          ],
          footer: ["TOTAL (hors hébergement + transport A/R)", "~1 100 €"]
        }
      ],
      note: "Hors hébergement et transport aller-retour. Le Stockholm Pass (~600 SEK/adulte/jour) peut valoir le coup si vous faites 3–4 musées payants dans la journée."
    }
  ],

  mapData: {
    1: { center:[59.318, 18.062], zoom:14, pts:[
      { p:[59.3183, 18.0510], label:'🏔 Monteliusvägen' },
      { p:[59.3145, 18.0640], label:'📸 Fjällgatan' },
      { p:[59.3120, 18.0583], label:'🍽 Lasse i Parken' }
    ]},
    2: { center:[59.326, 18.090], zoom:13, pts:[
      { p:[59.3267, 18.0917], label:'⭐ Junibacken' },
      { p:[59.3280, 18.0913], label:'🚢 Vasamuseet' },
      { p:[59.3270, 18.1040], label:'🦌 Skansen' },
      { p:[59.3145, 18.0745], label:'🍽 Pelikan' }
    ]},
    3: { center:[59.322, 18.072], zoom:13, pts:[
      { p:[59.3258, 18.0706], label:'🏰 Gamla Stan' },
      { p:[59.3310, 18.0590], label:'☕ Kaffekoppen' },
      { p:[59.3282, 18.0543], label:'🎨 T-Centralen' },
      { p:[59.3177, 18.0856], label:'📸 Fotografiska' },
      { p:[59.3140, 18.0760], label:'🍽 Kvarnen' }
    ]},
    4: { center:[59.322, 18.090], zoom:13, pts:[
      { p:[59.3268, 18.0970], label:'🎡 Gröna Lund' },
      { p:[59.3093, 18.0423], label:'🛍 Hornstull' },
      { p:[59.3150, 18.0660], label:'🍽 Teatern' }
    ]},
    5: { center:[59.322, 18.085], zoom:13, pts:[
      { p:[59.3265, 18.0915], label:'🎤 ABBA Museum' },
      { p:[59.3280, 18.1010], label:'🌸 Rosendals' },
      { p:[59.3120, 18.0495], label:'🌿 Tantolunden' },
      { p:[59.3190, 18.0700], label:'🌃 Gondolen' }
    ]}
  },

  dayColors: { 1:'#F59E0B', 2:'#F97316', 3:'#7C3AED', 4:'#0D9488', 5:'#059669' }
};
