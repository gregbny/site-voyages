const TRIP = {
  meta: {
    id: "stockholm-2026-budget",
    title: "Stockholm — Version Maline",
    flag: "🇸🇪",
    heroEmoji: "💶",
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [
      { text: "29 Jul – 3 Août", highlight: true },
      { text: "👨‍👩‍👧‍👦 2A + 2E (7 ans)" },
      { text: "🏠 Södermalm" },
      { text: "~740 €" }
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
      banner: { accent: "amber", badge: "Avant le départ", title: "Logistique & Préparation", sub: "Documents, apps, transport, aires de jeu" },
      sections: [
        { type: "label", text: "📋 Documents & Formalités" },
        { type: "infobox", color: "red", title: "Checklist obligatoire", items: [
          "<b>Passeports</b> valides après le 3 août · <b>CEAM</b> pour toute la famille.",
          "<b>Carte bancaire :</b> La Suède est quasi sans espèces — Visa/Mastercard partout. Très peu de liquide nécessaire.",
          "<b>Change :</b> 1 € ≈ 11 SEK"
        ]},
        { type: "label", text: "✅ À faire maintenant" },
        { type: "infobox", color: "red", title: "Checklist avant le départ", items: [
          "Télécharger <b>EasyPark</b> (parking) sur les deux téléphones",
          "Télécharger <b>SL-Appen</b> (transports) ou utiliser Google Maps",
          "Réserver <b>Junibacken</b> en ligne (incontournable, files longues)",
          "Pas besoin de réserver les restaurants budget — on improvise",
          "Prévoir vêtements chauds pour le soir (13°C la nuit)",
          "Prévoir imperméables légers",
          "<b>Préparer masques de nuit ou rideaux occultants</b> — le ciel est encore clair à 22h, ça perturbe les enfants"
        ]},
        { type: "label", text: "📱 Apps à installer" },
        { type: "apps", items: [
          { icon: "🅿️", name: "EasyPark", desc: "Payer le parking en rue sans aller au parcmètre.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🚇", name: "SL-Appen", desc: "Transports en commun Stockholm : métro, bus, trams, ferries.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🗺", name: "Google Maps", desc: "Navigation et itinéraires à pied dans la ville.", tag: "must", tagLabel: "Indispensable" },
          { icon: "💳", name: "Revolut", desc: "Payer en couronnes suédoises sans frais de change.", tag: "nice", tagLabel: "Recommandé" }
        ]},
        { type: "divider" },
        { type: "label", text: "🚇 Transport" },
        { type: "infobox", color: "green", title: "Pass SL — la bonne stratégie", items: [
          "<b>Pass SL 7 jours adulte :</b> ~500 SEK (~46 €) — métro + bus + trams + <b>ferries SL</b> inclus.",
          "<b>Enfants 7–11 ans : GRATUITS</b> avec adulte — vous ne payez que 2 passes adultes.",
          "Payez avec Apple Pay / carte sans contact sur les portiques.",
          "<b>Ferry Slussen → Djurgården :</b> inclus dans le pass SL — profitez-en !"
        ]},
        { type: "divider" },
        { type: "label", text: "🌤 Météo" },
        { type: "infobox", color: "amber", title: "Météo fin juillet", items: [
          "<b>Jour :</b> 20–23°C · <b>Nuit :</b> 13°C — veste légère indispensable le soir.",
          "<b>Soleil jusqu'à ~21h15</b> — profitez des soirées dehors !",
          "<b>Pluie :</b> ~13 jours sur le mois — imperméable compact obligatoire."
        ]},
        { type: "divider" },
        { type: "label", text: "🅿️ Stationnement" },
        { type: "infobox", color: "green", title: "Stratégie parking", items: [
          "<b>Juillet = GRATUIT pour la taxe de congestion</b> (trängselskatt suspendue pendant les vacances scolaires suédoises).",
          "<b>Stratégie :</b> Garez la voiture au <b>P-Hus Medborgarplatsen</b> à l'arrivée, ne la reprenez que le dernier jour.",
          "Zones résidentielles de Södermalm : <b>gratuit après 19h et le dimanche</b>.",
          "App <b>EasyPark</b> pour payer en rue sans aller au parcmètre."
        ]},
        { type: "divider" },
        { type: "label", text: "🌳 Aires de Jeu Gratuites — Les Coups de Cœur" },
        { type: "infobox", color: "teal", title: "Les lekplatser de Stockholm", items: [
          "<b>Drakenbergsparken</b> (Tanto, Södermalm) — Dragon géant qui crache de l'eau, bouton à actionner — les enfants sont dingues.",
          "<b>Ivar Los Park</b> (Mariaberget, Södermalm) — Inspiré d'Astrid Lindgren, escalade, vue panoramique sur Stockholm.",
          "<b>Vitabergsparken</b> (Södermalm) — Colline avec jeux, théâtre en plein air l'été, vue superbe.",
          "<b>Tanto / Tantolunden</b> (Södermalm) — Grand parc avec jeux, toboggans, plage sur le Mälaren, minigolf.",
          "<b>Bryggartäppan</b> (Södermalm) — Aire thématique, imaginative, calme.",
          "<b>Stora Blecktornsparken</b> (Södermalm) — Tyrolienne, animaux, ping-pong, basketball.",
          "<b>Rålambshovsparken (Rålis)</b> (Kungsholmen) — Splash pad, structures de grimpe, théâtre été — top des top.",
          "<b>Tessinparken</b> (Östermalm) — Mini-ville en style 1930, grue, tram vintage — unique."
        ]},
        { type: "infobox", color: "amber", title: "Carte interactive & mauvais temps", items: [
          "Carte de toutes les aires de jeu : <b>parker.stockholm</b>",
          "<b>Mauvais temps :</b> Indoor play centers → <b>Andy's Lekland</b> (Sickla, ~15 min en SL) ou <b>Leos Lekland</b> : trampolines, toboggans géants, piscines à balles — ~100–150 SEK/enfant, adultes gratuits."
        ]},
        { type: "divider" },
        { type: "label", text: "💡 Les Règles d'Or — Version Budget" },
        { type: "infobox", color: "green", title: "Philosophie Version Maline", items: [
          "Pas d'interdit. Les attractions clés sont là. Mais on pique-nique le midi, on cuisine certains soirs, on évite les trucs chers et discutables.",
          "<b>Midi = pique-nique ou dagens lunch</b> (jamais de restaurant assis le midi sauf l'option dagens lunch en semaine).",
          "<b>3 dîners sur 5 à l'appart</b> — cuisiner suédois c'est simple et les produits sont excellents.",
          "<b>1 grand resto assis dans la semaine</b> — Pelikan, un vrai moment.",
          "<b>Les aires de jeu sont gratuites et excellentes</b> — elles remplacent avantageusement Gröna Lund.",
          "<b>Vasamuseet et Fotografiska</b> sont \"gratuits\" pour les enfants — les adultes paient mais ça reste raisonnable.",
          "<b>ABBA Museum sauté</b> — 82 € pour la famille, discutable pour des enfants de 7 ans.",
          "<b>Skansen optionnel</b> — les enfants peuvent voir les animaux nordiques dans l'archipel pour 0 €.",
          "<b>Gröna Lund remplacé par les lekplatser</b> — gratuites, tout aussi bien pour 7 ans."
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
      banner: { accent: "amber", badge: "Jour 1 · Mercredi 29 Juillet", title: "Arrivée & Södermalm", sub: "Installation → Monteliusvägen → Fjällgatan → Drakenbergsparken" },
      timeline: [
        {
          time: "14h00\n16h00",
          title: "🏠 Installation",
          items: [
            { text: "Garez la voiture au <b>P-Hus Medborgarplatsen</b> — c'est sa dernière sortie avant le départ." },
            { text: "Faites les courses à l'<b>ICA Maxi</b> ou <b>Willys</b> de Södermalm pour la semaine : petit-déj, pique-niques, dîner du soir.", type: "tip" }
          ]
        },
        {
          time: "16h00\n18h00",
          title: "🏔 Monteliusvägen & Fjällgatan (gratuit)",
          items: [
            { text: "<b>Monteliusvägen :</b> belvédère sur les toits de Stockholm, une des plus belles vues de la ville." },
            { text: "<b>Fjällgatan :</b> 10 min à pied, vue panoramique, photo carte postale de Stockholm." }
          ]
        },
        {
          time: "18h30",
          title: "🐉 Drakenbergsparken (gratuit)",
          items: [
            { text: "Le dragon géant qui crache de l'eau sur commande — arrivée idéale pour les enfants, ça brise la glace avec Stockholm." },
            { text: "Dans le parc Tanto, à Södermalm.", type: "sub" }
          ]
        },
        {
          time: "19h30",
          title: "🏠 Dîner à l'appart",
          items: [
            { text: "Courses faites à l'arrivée — repas simple suédois : <i>knäckebröd</i> (crispbread), fromages, charcuterie, harengs marinés, cornichons." },
            { text: "Appréciez la lumière du soir depuis le balcon ou une terrasse de parc jusqu'à 21h.", type: "tip" },
            { text: "Économie vs version expensive : ~120 SEK vs ~600 SEK.", type: "sub" }
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
      banner: { accent: "coral", badge: "Jour 2 · Jeudi 30 Juillet", title: "Djurgården — La Grande Journée", sub: "Junibacken → Vasamuseet → Rålambshovsparken → Pelikan" },
      timeline: [
        {
          time: "09h00\n12h00",
          title: "⭐ Junibacken (incontournable)",
          items: [
            { text: "🚢 Ferry SL Slussen → Djurgården (inclus dans le pass).", type: "tip" },
            { text: "Story Train, Villa Villekulla, univers d'Astrid Lindgren." },
            { text: "<b>Durée :</b> 2h30–3h · <b>Réservez en ligne</b> (moins cher + pas de file)." },
            { text: "Tarifs : ~190 SEK/adulte · ~150 SEK/enfant → <b>~680 SEK pour 4</b>.", type: "sub" },
            { text: "Résistez à la boutique — fixez un budget \"un souvenir à 50 SEK\" avant d'entrer.", type: "warn" }
          ]
        },
        {
          time: "12h00\n13h30",
          title: "🥪 Pique-nique à Djurgården",
          items: [
            { text: "Sandwichs préparés le matin à l'appart (pain, fromage, charcuterie suédoise)." },
            { text: "Les pelouses de l'île sont parfaites — aucune raison de payer un resto.", type: "tip" },
            { text: "Ou achetez une <i>smörgås</i> dans une boulangerie pour ~50 SEK/personne.", type: "sub" },
            { text: "Économie vs resto : ~400 SEK vs ~800–1 000 SEK.", type: "sub" }
          ]
        },
        {
          time: "13h30\n15h00",
          title: "🚢 Vasamuseet",
          items: [
            { text: "Le navire du 17e siècle qui a coulé 20 minutes après son lancement." },
            { text: "<b>Enfants : GRATUIT</b> · Adultes : ~240 SEK → <b>480 SEK pour 2 adultes</b>." },
            { text: "Durée : 1h30 · Ne ratez pas le film intro (en français disponible).", type: "tip" }
          ]
        },
        {
          time: "15h00\n17h00",
          title: "🌿 Jeux libres à Djurgården",
          items: [
            { text: "Les enfants gambadent sur l'île — air pur, canards, bateaux." },
            { text: "Pas de musée en plus : ils ont fait Junibacken + Vasa, c'est une journée chargée pour des 7 ans.", type: "tip" },
            { text: "<b>Skansen reporté ou annulé</b> — gratuit pour les enfants mais l'entrée adulte (~240 SEK × 2 = 480 SEK) n'est pas obligatoire.", type: "sub" }
          ]
        },
        {
          time: "17h30",
          title: "🎢 Rålambshovsparken (gratuit, Kungsholmen)",
          items: [
            { text: "Si vous avez encore de l'énergie — le splash pad et les structures de grimpe sont tops." },
            { text: "15 min en SL depuis Djurgården.", type: "sub" }
          ]
        },
        {
          time: "19h00",
          title: "🍽 Dîner — Pelikan <a class=\"place-ref\" href=\"#\" onclick=\"goToPlace('place-pelikan');return false\">↗ Adresses</a>",
          items: [
            { text: "<b>Adresse :</b> Blekingegatan 40, Södermalm." },
            { text: "La seule exception \"restaurant assis\" de la semaine — ça vaut le coup une fois." },
            { text: "<i>Köttbullar</i> maison + purée + sauce brune = le classique absolu pour les enfants.", type: "tip" },
            { text: "<b>~800–1 000 SEK pour 4</b> · <b>Réservation obligatoire.</b>", type: "warn" }
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
      banner: { accent: "violet", badge: "Jour 3 · Vendredi 31 Juillet", title: "Gamla Stan & Aires de Jeu", sub: "Vieille ville → T-Centralen Bleu → Ivar Los Park → Vitabergsparken" },
      timeline: [
        {
          time: "09h00",
          title: "☕ Fika à l'appart",
          items: [
            { text: "Café + <i>kardemummabullar</i> (brioches cardamome) achetées la veille en boulangerie." },
            { text: "Économie vs café en ville : ~80 SEK vs ~250 SEK.", type: "sub" }
          ]
        },
        {
          time: "09h30\n12h30",
          title: "🏰 Gamla Stan (gratuit)",
          items: [
            { text: "Traverser à pied depuis Södermalm via Slussen (5 min)." },
            { text: "<b>Stortorget</b> — grande place aux maisons colorées." },
            { text: "<b>Mårten Trotzigs Gränd</b> — 90 cm de large, la ruelle la plus étroite — mission enfants !" },
            { text: "<b>Österlånggatan</b> — lèche-vitrine sans obligation d'achat." },
            { text: "Extérieur du <b>Palais Royal</b> + relève de la garde (~11h15) — gratuit.", type: "tip" },
            { text: "<b>Museum of Postal History</b> (Luntmakargatan) — entrée libre, les enfants jouent aux facteurs." },
            { text: "<b>Stockholm Toy Museum :</b> Skip cette fois — 80 SEK/adulte, l'intérieur est décevant pour 7 ans.", type: "sub" }
          ]
        },
        {
          time: "12h30\n14h00",
          title: "🍲 Déjeuner — Dagens lunch",
          items: [
            { text: "Dans Gamla Stan, cherchez un café proposant le <i>\"dagens lunch\"</i> (menu du jour 11h–14h)." },
            { text: "Soupe + pain + café inclus → <b>~130–160 SEK/personne</b> · Menu enfant ~80 SEK.", type: "tip" },
            { text: "Le rapport qualité-prix est imbattable le midi en Suède." },
            { text: "<b>~500–600 SEK pour 4</b> vs ~900–1 200 en dîner.", type: "sub" }
          ]
        },
        {
          time: "14h00\n15h30",
          title: "🎨 Tunnelbana Art (gratuit avec pass SL)",
          items: [
            { text: "Station <b>T-Centralen ligne bleue</b> : grotte de roche bleue spectaculaire — 2 minutes, gratuit avec le pass." },
            { text: "Ou <b>Kungsträdgården</b> (jardins du Roi) : fontaines, concerts gratuits l'été, food trucks.", type: "sub" }
          ]
        },
        {
          time: "15h30\n17h00",
          title: "🧗 Ivar Los Park (gratuit)",
          items: [
            { text: "Aire de jeu inspirée d'Astrid Lindgren sur les hauteurs de Södermalm." },
            { text: "Escalade, toboggan, vue panoramique — les enfants vont grimper partout." }
          ]
        },
        {
          time: "17h00\n19h00",
          title: "🌿 Vitabergsparken (gratuit)",
          items: [
            { text: "À 5 min à pied : colline, jeux, théâtre en plein air (concerts gratuits le vendredi soir en été !)." },
            { text: "Apportez une couverture et profitez si un concert est programmé.", type: "tip" }
          ]
        },
        {
          time: "19h30",
          title: "🏠 Dîner à l'appart",
          items: [
            { text: "Journée longue — les enfants sont rincés, c'est le moment de cuisiner simple." },
            { text: "<b>Pasta au saumon fumé suédois</b> (<i>lax</i>) : une institution, les supermarchés suédois ont du saumon incroyable pour pas cher.", type: "tip" },
            { text: "Ou <i>pannkakor</i> (crêpes suédoises, plus épaisses, avec confiture de lingonberry) — les enfants adorent et c'est très rapide.", type: "sub" }
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
      banner: { accent: "teal", badge: "Jour 4 · Samedi 1er Août", title: "Södermalm Libre & Fotografiska", sub: "Hornstulls Marknad → Tantolunden → Fotografiska → Balade bord de l'eau" },
      timeline: [
        {
          time: "09h00\n11h00",
          title: "🛍 Hornstulls Marknad (gratuit d'accès)",
          items: [
            { text: "Marché vintage/friperie le samedi à Hornstull (jusqu'en septembre)." },
            { text: "Vinyles, vêtements d'occasion, artisanat, food trucks." },
            { text: "Budget flottant — les enfants trouvent toujours un truc rigolo pour 20–30 SEK.", type: "tip" }
          ]
        },
        {
          time: "11h00\n13h00",
          title: "🐉 Tantolunden & Drakenbergsparken (gratuit)",
          items: [
            { text: "Le grand parc de Södermalm avec les jardins ouvriers aux maisonnettes colorées." },
            { text: "Le dragon qui crache de l'eau si vous l'avez raté le J1." }
          ]
        },
        {
          time: "13h00",
          title: "🥪 Pique-nique à Tanto",
          items: [
            { text: "Sandwich, fruits, chips — préparés à l'appart le matin." }
          ]
        },
        {
          time: "14h30\n16h30",
          title: "📸 Fotografiska",
          items: [
            { text: "<b>Adresse :</b> Stadsgårdshamnen 22, Södermalm (bord de l'eau, à pied)." },
            { text: "<b>Enfants : GRATUIT</b> · Adultes : ~220 SEK → <b>440 SEK pour 2 adultes seulement</b>." },
            { text: "Expos toujours de haute qualité · Café panoramique au sommet.", type: "tip" },
            { text: "Prenez juste un café, vue gratuite si vous avez le billet.", type: "sub" }
          ]
        },
        {
          time: "16h30\n18h30",
          title: "🌊 Balade bord de l'eau",
          items: [
            { text: "Stadsgårdshamnen → Slussen → bord du Mälaren : bateaux, coucher de soleil." },
            { text: "Glaces : ~30 SEK/boule dans une boutique locale.", type: "sub" }
          ]
        },
        {
          time: "19h00",
          title: "🏠 Dîner à l'appart",
          items: [
            { text: "<b>Grillades + salade</b> : le barbecue fait partie de la culture suédoise de l'été (<i>grillning</i>)." },
            { text: "Si l'Airbnb a un balcon ou un espace extérieur, c'est le moment idéal.", type: "tip" },
            { text: "Sinon, dîner dans le parc Tanto avec un barbecue jetable (~50 SEK au supermarché).", type: "sub" },
            { text: "<b>Köttbullar IKEA-style maison</b> : boulettes du supermarché + purée + lingonberry = ~200 SEK pour 4.", type: "sub" }
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
      banner: { accent: "emerald", badge: "Jour 5 · Dimanche 2 Août", title: "La Journée Södermalm", sub: "Nytorget → SoFo → Vitabergsparken → Mosebacke → Monteliusvägen" },
      timeline: [
        {
          time: "09h30",
          title: "☕ Fika rituel — Nytorget Urban Deli",
          items: [
            { text: "<b>Nytorget 4, Södermalm</b> — la place la plus cool de Stockholm, l'Urban Deli en est l'épicentre." },
            { text: "Mi-café, mi-épicerie fine, mi-restaurant. Le lieu où tout Södermalm vient le dimanche matin." },
            { text: "Journaux, café allongé, brunch scandinave sur des longues tables en bois." },
            { text: "<i>Kanelbulle</i>, œufs brouillés, fromage <i>Västerbotten</i>, saumon — comptez ~150–180 SEK/pers mais c'est l'exception du voyage.", type: "sub" }
          ]
        },
        {
          time: "11h00\n12h30",
          title: "🛍 SoFo — Flâne sans liste",
          items: [
            { text: "South of Folkungagatan : le quartier le plus branché de Stockholm, entre Nytorget et Skanstull." },
            { text: "<b>L'état d'esprit :</b> pas de liste de boutiques à cocher, juste entrer dans ce qui attire.", type: "tip" },
            { text: "<b>Grandpa</b> (Södermannagatan 21) : l'enseigne culte — fringues vintage + design + livres.", type: "sub" },
            { text: "<b>Acmé</b> (Krukmakargatan) : papeterie et objets design, scandinavement parfait.", type: "sub" },
            { text: "<b>Judits</b> (Bondegatan) : mode féminine locale, pas de chaîne.", type: "sub" },
            { text: "<b>Happy Socks</b> (Götgatan) : les chaussettes iconiques — les enfants en veulent forcément.", type: "sub" },
            { text: "<b>Herr Judit</b> : le pendant masculin, même rue.", type: "sub" },
            { text: "Les enfants trottent entre les boutiques — les rues sont tranquilles le dimanche matin." }
          ]
        },
        {
          time: "12h30\n13h30",
          title: "🌿 Vitabergsparken — pause terrain de jeu (gratuit)",
          items: [
            { text: "À 5 min à pied du cœur de SoFo." },
            { text: "Les enfants grimpent et jouent sur la colline pendant que vous finissez votre café sur un banc." },
            { text: "Théâtre de plein air certains dimanches d'été — programme sur <b>stadsteatern.stockholm</b>.", type: "tip" }
          ]
        },
        {
          time: "13h30\n15h00",
          title: "🍕 Déjeuner — Omnipollos Hatt ou Linje 10",
          items: [
            { text: "<b>Omnipollos Hatt</b> (Hökens gata 1A, à 5 min) : bar à bières artisanales avec les meilleures pizzas de Stockholm." },
            { text: "Terrasse en été, menu enfant possible, cadre industriel et vivant. Bière suédoise artisanale en accompagnement.", type: "sub" },
            { text: "<b>Alternative : Linje 10</b> (Götgatan) : ramens + bouillons asiatiques — file du quartier, très populaire, portions généreuses, enfants bienvenus.", type: "sub" },
            { text: "Comptez ~150–200 SEK/adulte, ~80 SEK/enfant.", type: "sub" }
          ]
        },
        {
          time: "15h00\n16h30",
          title: "🌅 Mosebacke Torg & Terrassen",
          items: [
            { text: "La place secrète de Södermalm, légèrement en hauteur, avec une terrasse de bar qui donne sur tout Stockholm." },
            { text: "<b>Mosebacke Etablissement</b> (Mosebacke Torg 3) : bar en plein air, concerts gratuits parfois le dimanche, vue imprenable." },
            { text: "Prenez un verre (ou un jus) en terrasse — les enfants courent sur la place, vous regardez la ville.", type: "tip" },
            { text: "C'est exactement \"l'air du temps\" suédois — relax, ensoleillé, sans touristes." }
          ]
        },
        {
          time: "16h30\n17h30",
          title: "🎢 Stora Blecktornsparken (gratuit)",
          items: [
            { text: "10 min à pied — tyrolienne, ping-pong, animaux." },
            { text: "Les jumeaux finissent le séjour sur une bonne note pendant que vous faites les derniers achats." }
          ]
        },
        {
          time: "17h30\n19h00",
          title: "🌇 Monteliusvägen — Le coucher de soleil final",
          items: [
            { text: "La vue la plus belle du séjour, au moment le plus beau de la journée." },
            { text: "Apportez quelques bières ou un verre de blanc depuis l'appart, une couverture si le soir est frais.", type: "tip" },
            { text: "Pas besoin de restaurant — c'est votre Stockholm à vous." }
          ]
        },
        {
          time: "19h30",
          title: "🏠 Dîner maison",
          items: [
            { text: "Vider le frigo avant le départ du lendemain — plateau scandinave de fin de voyage." },
            { text: "Ou plats chauds Willys à emporter (~60–80 SEK/pers) si vous préférez ne rien cuisiner.", type: "sub" }
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
      banner: { accent: "amber", badge: "Jour 6 · Lundi 3 Août", title: "Départ vers l'Archipel", sub: "Petit-déj → Voiture → Direction Vaxholm" },
      timeline: [
        {
          time: "09h00",
          title: "☕ Petit-déjeuner & rangement",
          items: [
            { text: "Vider le frigo, nettoyer l'appart." },
            { text: "Récupérer la voiture au P-Hus Medborgarplatsen." }
          ]
        },
        {
          time: "10h00",
          title: "🚗 Départ !",
          items: [
            { text: "<b>Direction Vaxholm</b> (ou votre base archipel) — voir programme séparé Archipel 3–8 Août." }
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
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "Restos, Cafés & Courses", sub: "Version Budget — Södermalm & Stockholm" },
      zones: [
        {
          label: "🍽 Restaurants",
          sections: [
            {
              label: "🍽 Quand on sort",
              cards: [
                { emoji: "🍖", name: "Pelikan", addr: "Blekingegatan 40, Södermalm", price: "~250 SEK/pers", color: "amber", body: "L'unique grand dîner du séjour. <i>Köttbullar</i> maison, purée, sauce brune — le classique absolu. Cadre brasserie historique suédoise.", verdict: "Réservation obligatoire. ~800–1 000 SEK pour 4.", mapsQuery: "Pelikan+Blekingegatan+40+Stockholm" },
                { emoji: "🍕", name: "Teatern", addr: "Skanstull, Södermalm", price: "~130–180 SEK/pers", color: "coral", body: "Food hall à Skanstull — plusieurs stands, chacun choisit son plat. Lunch ou dîner casual, ambiance détendue.", verdict: "Anti-dispute familiale : chacun son choix, même table.", mapsQuery: "Teatern+Hornstulls+Strand+Stockholm" },
                { emoji: "🥙", name: "Falafel Götgatan", addr: "Götgatan, Södermalm", price: "~80 SEK/pers", color: "emerald", body: "Sandwich rapide et bon marché sur l'artère principale de Södermalm. Idéal pour un déjeuner express.", verdict: "Le plus économique quand on mange dehors.", mapsQuery: "Falafel+Götgatan+Stockholm" },
                { emoji: "🍲", name: "Dagens Lunch", addr: "Partout en ville", price: "~130–160 SEK/pers", color: "neutral", body: "Le <i>dagens lunch</i> (menu du jour, 11h–14h en semaine) : soupe + pain + café inclus. Le rapport qualité-prix est imbattable le midi en Suède.", verdict: "Menu enfant ~80 SEK. ~500–600 SEK pour 4." },
                { emoji: "🍕", name: "Omnipollos Hatt", addr: "Hökens gata 1A, Södermalm", price: "~150–200 SEK/pers", color: "coral", body: "Bar à bières artisanales avec les meilleures pizzas de Stockholm. Terrasse en été, cadre industriel et vivant.", verdict: "Menu enfant possible. Bière suédoise artisanale en accompagnement.", mapsQuery: "Omnipollos+Hatt+Hökens+gata+Stockholm" },
                { emoji: "🍜", name: "Linje 10", addr: "Götgatan, Södermalm", price: "~150–200 SEK/pers", color: "neutral", body: "Ramens + bouillons asiatiques — file du quartier, très populaire, portions généreuses, enfants bienvenus.", mapsQuery: "Linje+10+Götgatan+Stockholm" }
              ]
            }
          ]
        },
        {
          label: "☕ Fika",
          sections: [
            {
              label: "☕ Cafés & Boulangeries",
              cards: [
                { emoji: "☕", name: "Konditori Fabrique", addr: "Götgatan, Södermalm", price: "~60–80 SEK/pers", color: "amber", body: "La boulangerie-café de référence de Södermalm. <i>Kanelbullar</i>, <i>kardemummabullar</i>, pain au levain.", verdict: "Fika une fois — ça vaut le détour.", mapsQuery: "Konditori+Fabrique+Götgatan+Stockholm" },
                { emoji: "☕", name: "Nytorget Urban Deli", addr: "Nytorget 4, Södermalm", price: "~150–180 SEK/pers", color: "coral", body: "Mi-café, mi-épicerie fine, mi-restaurant. L'épicentre de Nytorget. Brunch scandinave le dimanche matin sur longues tables en bois.", verdict: "L'exception brunch du voyage — la place la plus cool de Stockholm.", mapsQuery: "Urban+Deli+Nytorget+4+Stockholm" }
              ]
            }
          ]
        },
        {
          label: "🛒 Courses",
          sections: [
            {
              label: "🛒 Supermarchés",
              cards: [
                { emoji: "🛒", name: "Willys", color: "emerald", body: "Le moins cher. <b>Priorité absolue</b> pour les courses de la semaine.", verdict: "Le meilleur rapport qualité-prix.", mapsQuery: "Willys+Södermalm+Stockholm" },
                { emoji: "🛒", name: "Lidl", color: "neutral", body: "Compétitif, bon pour les snacks et les basiques.", mapsQuery: "Lidl+Södermalm+Stockholm" },
                { emoji: "🛒", name: "ICA Maxi", color: "neutral", body: "Mid-range. Bon choix et bonne qualité de produits suédois.", mapsQuery: "ICA+Maxi+Södermalm+Stockholm" },
                { emoji: "🏪", name: "ICA Nära", color: "amber", body: "Pratique mais cher — dépannage seulement.", warn: "Ne pas faire les courses de la semaine ici.", mapsQuery: "ICA+Nära+Södermalm+Stockholm" }
              ]
            }
          ],
          infoboxes: [
            { color: "green", title: "Bonne nouvelle 2026", items: [
              "La TVA suédoise sur les aliments passe de 12% à 6% dès avril 2026 — les courses sont moins chères que l'an passé."
            ]}
          ]
        },
        {
          label: "🌳 Aires de Jeu",
          sections: [
            {
              label: "🌳 Lekplatser gratuites",
              cards: [
                { emoji: "🐉", name: "Drakenbergsparken", addr: "Tanto, Södermalm", color: "teal", body: "Dragon géant qui crache de l'eau, bouton à actionner — les enfants sont dingues. Dans le parc Tanto.", verdict: "5 min à pied — le coup de cœur absolu.", mapsQuery: "Drakenbergsparken+Stockholm" },
                { emoji: "🧗", name: "Ivar Los Park", addr: "Mariaberget, Södermalm", color: "teal", body: "Inspiré d'Astrid Lindgren. Escalade, toboggan, vue panoramique sur Stockholm.", verdict: "5 min à pied.", mapsQuery: "Ivar+Los+Park+Stockholm" },
                { emoji: "🌿", name: "Vitabergsparken", addr: "Södermalm", color: "teal", body: "Colline avec jeux, théâtre en plein air l'été, vue superbe. Concerts gratuits le vendredi soir.", verdict: "5 min à pied.", mapsQuery: "Vitabergsparken+Stockholm" },
                { emoji: "🏖", name: "Tanto / Tantolunden", addr: "Södermalm", color: "teal", body: "Grand parc avec jeux, toboggans, plage sur le Mälaren, minigolf. Jardins ouvriers aux maisonnettes colorées.", verdict: "8 min à pied.", mapsQuery: "Tantolunden+Stockholm" },
                { emoji: "🎨", name: "Bryggartäppan", addr: "Södermalm", color: "neutral", body: "Aire thématique, imaginative, calme. Idéale pour les plus petits aussi.", verdict: "8 min à pied.", mapsQuery: "Bryggartäppan+Stockholm" },
                { emoji: "🎢", name: "Stora Blecktornsparken", addr: "Södermalm", color: "teal", body: "Tyrolienne (cableway), animaux, ping-pong, basketball. Les enfants adorent la tyrolienne.", verdict: "8 min à pied.", mapsQuery: "Stora+Blecktornsparken+Stockholm" },
                { emoji: "💦", name: "Rålambshovsparken (Rålis)", addr: "Kungsholmen", color: "violet", body: "Splash pad, structures de grimpe, théâtre été — top des top. Le meilleur pour les journées chaudes.", verdict: "15 min en SL.", mapsQuery: "Rålambshovsparken+Stockholm" },
                { emoji: "🏗", name: "Tessinparken", addr: "Östermalm", color: "violet", body: "Mini-ville en style 1930, grue, tram vintage — unique en son genre.", verdict: "15 min en SL.", mapsQuery: "Tessinparken+Stockholm" }
              ]
            }
          ],
          infoboxes: [
            { color: "amber", title: "Mauvais temps — plans B", items: [
              "<b>Andy's Lekland</b> (Sickla, ~15 min en SL) ou <b>Leos Lekland</b> : trampolines, toboggans géants, piscines à balles — ~100–150 SEK/enfant, adultes gratuits.",
              "Carte interactive de toutes les aires de jeu : <b>parker.stockholm</b>"
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
      banner: { accent: "emerald", badge: "Budget", title: "Version Maline — ~740 €", sub: "Hors hébergement et transport aller-retour" },
      tables: [
        {
          label: "🚇 Transport & Parking",
          headers: ["Poste", "Détail", "Coût (SEK)", "Coût (€)"],
          rows: [
            ["Transport SL", "2 passes 7j adultes", "1 000 SEK", "~91 €"],
            ["Parking P-Hus", "5 jours × ~200 SEK/j", "1 000 SEK", "~91 €"]
          ]
        },
        {
          label: "🎟 Entrées",
          headers: ["Poste", "Détail", "Coût (SEK)", "Coût (€)"],
          rows: [
            ["Junibacken", "2A + 2E", "~680 SEK", "~62 €"],
            ["Vasamuseet", "2A (enfants gratuits)", "480 SEK", "~44 €"],
            ["Fotografiska", "2A (enfants gratuits)", "440 SEK", "~40 €"]
          ]
        },
        {
          label: "🍽 Repas",
          headers: ["Poste", "Détail", "Coût (SEK)", "Coût (€)"],
          rows: [
            ["1 dîner Pelikan", "4 pers", "900 SEK", "~82 €"],
            ["1 lunch dagens", "4 pers", "600 SEK", "~55 €"],
            ["1 food hall Teatern", "4 pers", "600 SEK", "~55 €"],
            ["Courses semaine", "Petit-déj + pique-niques + 3 dîners maison", "~1 500 SEK", "~136 €"],
            ["Fika / glaces / snacks", "Quelques stops", "~400 SEK", "~36 €"]
          ]
        },
        {
          label: "🛍 Divers",
          headers: ["Poste", "Détail", "Coût (SEK)", "Coût (€)"],
          rows: [
            ["Marché Hornstull", "Petits achats", "~200 SEK", "~18 €"],
            ["Divers", "Imprévus", "~300 SEK", "~27 €"]
          ]
        },
        {
          label: "📊 Total",
          headers: ["", "Total"],
          rows: [],
          footer: ["TOTAL", "~8 100 SEK (~737 €)"]
        }
      ],
      note: "Économie vs version expensive : ~1 100 € → ~740 € = environ 360 € économisés. Vous gardez le meilleur (Junibacken, Vasa, Fotografiska, Pelikan) et vous supprimez l'ABBA Museum (~82 €), Gröna Lund (~90 €) et les dîners restaurant tous les soirs."
    }
  ],

  mapData: {
    1: { center:[59.318, 18.062], zoom:14, pts:[
      { p:[59.3183, 18.0510], label:'🏔 Monteliusvägen' },
      { p:[59.3145, 18.0640], label:'📸 Fjällgatan' },
      { p:[59.3120, 18.0495], label:'🐉 Drakenbergsparken' }
    ]},
    2: { center:[59.326, 18.095], zoom:13, pts:[
      { p:[59.3267, 18.0917], label:'⭐ Junibacken' },
      { p:[59.3280, 18.0913], label:'🚢 Vasamuseet' },
      { p:[59.3256, 18.0960], label:'🌿 Djurgården' },
      { p:[59.3305, 18.0540], label:'🎢 Rålambshovsparken' },
      { p:[59.3145, 18.0745], label:'🍽 Pelikan' }
    ]},
    3: { center:[59.325, 18.070], zoom:13, pts:[
      { p:[59.3258, 18.0706], label:'🏰 Gamla Stan' },
      { p:[59.3282, 18.0543], label:'🎨 T-Centralen Bleu' },
      { p:[59.3170, 18.0735], label:'🧗 Ivar Los Park' },
      { p:[59.3138, 18.0788], label:'🌿 Vitabergsparken' }
    ]},
    4: { center:[59.318, 18.065], zoom:14, pts:[
      { p:[59.3120, 18.0495], label:'🐉 Tantolunden' },
      { p:[59.3177, 18.0856], label:'📸 Fotografiska' },
      { p:[59.3093, 18.0423], label:'🛍 Hornstulls Marknad' }
    ]},
    5: { center:[59.315, 18.077], zoom:14, pts:[
      { p:[59.3155, 18.0818], label:'☕ Nytorget' },
      { p:[59.3185, 18.0777], label:'🌅 Mosebacke' },
      { p:[59.3125, 18.0830], label:'🎢 Stora Blecktornsparken' },
      { p:[59.3183, 18.0510], label:'🌇 Monteliusvägen' }
    ]}
  },

  dayColors: { 1:'#F59E0B', 2:'#F97316', 3:'#7C3AED', 4:'#0D9488', 5:'#059669' }
};
