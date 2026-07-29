const TRIP = {
  meta: {
    id: "stockholm-2026-budget",
    title: "Stockholm 2026",
    flag: "🇸🇪",
    heroEmoji: "🏙",
    subtitle: "Guide de voyage — Famille Bonato",
    chips: [
      { text: "Mer 29 Juil – Lun 3 Août", highlight: true },
      { text: "👨‍👩‍👧‍👦 2A + 2E (7 ans)" },
      { text: "🏠 SoFo — Åsögatan 190" },
      { text: "~700 €" }
    ],
    people: ["Greg", "Sofie"],
    personTag: "♥",
    mapCenter: [59.318, 18.078],
    mapZoom: 13,
    searchCity: "Stockholm"
  },

  pages: [
    /* ================================================================
       PAGE 0 — AVANT LE DÉPART
       ================================================================ */
    {
      id: "avant",
      tab: "✈️ Avant",
      type: "custom",
      banner: { accent: "amber", badge: "Avant le départ", title: "Logistique & Préparation", sub: "Logement, parking, transport, l'esprit du séjour" },
      sections: [
        { type: "label", text: "🧭 L'esprit du séjour" },
        { type: "infobox", color: "green", title: "Des vacances chill, pas un marathon", items: [
          "<b>Quatre jours pleins, ça passe vite.</b> On ne fait pas des journées de 10h à 18h — une chose le matin, une chose l'après-midi, et du temps mort assumé.",
          "<b>Midi = petit café, boulangerie ou <i>dagens lunch</i>.</b> Le soir = à la maison. Un McDo un midi n'est pas un drame.",
          "<b>Le moment \"sortie\" se fait à l'apéro ou au goûter</b>, pas au dîner : un verre en terrasse, une glace, une pause quelque part avec une jolie vue. Comme le pub à Londres.",
          "<b>Les aires de jeu ne sont pas programmées.</b> Elles sont dans le carnet d'adresses et sur la carte — on en dégaine une quand on a besoin d'une pause.",
          "<b>Le shopping n'est pas une liste à cocher.</b> Il y a 15 adresses sur la carte pour savoir ce qu'il y a autour de nous, pas pour toutes les faire.",
          "<b>La météo commande.</b> Les journées sont interchangeables — on garde le plus beau jour pour Skansen."
        ]},
        { type: "divider" },
        { type: "label", text: "🏠 Le Logement — Airbnb SoFo" },
        { type: "infobox", color: "violet", title: "Charming 1BR in Trendy SoFo — hôte Fredrik", items: [
          "<b>Adresse :</b> Åsögatan 190, Södermalm (116 32) — en plein SoFo, à 350 m de Nytorget.",
          "<b>Arrivée :</b> mercredi 29 juillet à partir de <b>16h00</b> · <b>Départ :</b> lundi 3 août avant <b>10h00</b>.",
          "<b>Arrivée autonome — serrure connectée.</b> La procédure exacte arrive via la messagerie Airbnb ; le code wifi apparaît dans l'appli 48h avant l'arrivée.",
          "<b>Code de réservation :</b> HM9H92MCPS.",
          "<b>Métro :</b> Medborgarplatsen (ligne verte 17/18/19), à ~10 min à pied.",
          "Règles : 4 voyageurs max, pas d'animaux. Au départ : sacs poubelle fermés, posés à l'intérieur près de la porte."
        ]},
        { type: "label", text: "📋 Documents & Formalités" },
        { type: "infobox", color: "green", title: "Rien de compliqué — on est européens", items: [
          "<b>Pas besoin de passeport :</b> la <b>carte nationale d'identité</b> suffit pour toute la famille (Suède = UE + Schengen). Le passeport marche aussi si c'est ce qu'on a sous la main.",
          "<b>CEAM</b> (carte européenne d'assurance maladie) pour tout le monde — la seule vraie formalité.",
          "<b>Carte bancaire :</b> la Suède est quasi sans espèces — Visa/Mastercard partout, y compris pour un café à 30 SEK. Très peu de liquide nécessaire.",
          "<b>Change :</b> 1 € ≈ 11 SEK. Pour convertir vite : <b>on divise par 11</b> (610 SEK ≈ 55 €)."
        ]},
        { type: "divider" },
        { type: "label", text: "✅ À faire avant de partir" },
        { type: "infobox", color: "red", title: "Checklist", items: [
          "<b>Message à Fredrik</b> : quel est le jour de <i>servicedag</i> (nettoyage) d'Åsögatan, et y a-t-il un garage dans l'immeuble ?",
          "Télécharger <b>EasyPark</b> sur les deux téléphones, <b>enregistrer la carte bancaire et la plaque</b> avant le départ.",
          "Poser deux rappels : <b>jeudi 30 à 14h</b> et <b>vendredi 31 à 13h</b> — déplacer la voiture (règle des 24 h).",
          "Télécharger <b>SL-Appen</b> (transports) ou utiliser Google Maps.",
          "<b>Réserver le Vasamuseet en ligne</b> — en pleine saison, les créneaux partent et on ne rentre pas au pied levé.",
          "<b>Demander à Isabelle</b> pour l'<i>Allsång på Skansen</i> : elle aurait assisté à une répétition gratuitement — vérifier si c'est reproductible.",
          "Pas besoin de réserver les restaurants — on improvise.",
          "Prévoir vêtements chauds pour le soir (13°C la nuit) et imperméables légers.",
          "<b>Masques de nuit ou rideaux occultants</b> — le ciel est encore clair à 22h, ça perturbe les enfants."
        ]},
        { type: "label", text: "📱 Apps à installer" },
        { type: "apps", items: [
          { icon: "🅿️", name: "EasyPark", desc: "Payer et prolonger le parking en rue sans redescendre.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🚇", name: "SL-Appen", desc: "Transports Stockholm : métro, bus, trams, ferries.", tag: "must", tagLabel: "Indispensable" },
          { icon: "🗺", name: "Google Maps", desc: "Navigation et itinéraires à pied.", tag: "must", tagLabel: "Indispensable" },
          { icon: "💳", name: "Revolut", desc: "Payer en couronnes sans frais de change.", tag: "nice", tagLabel: "Recommandé" }
        ]},
        { type: "divider" },
        { type: "label", text: "🚇 Transport — quel pass prendre ?" },
        { type: "infobox", color: "green", title: "Les deux options, à trancher à l'arrivée", items: [
          "<b>Les enfants de 7 ans voyagent GRATUITEMENT</b> avec un adulte — on ne paie que 2 titres, quelle que soit l'option.",
          "<b>Option 1 — Pass 7 jours : ~500 SEK/adulte (~1 000 SEK, 91 €).</b> Zéro calcul, on valide et on oublie. Rentable dès ~3 trajets par jour. Les <b>ferries SL sont inclus</b> (Slussen → Djurgården, et le tour de bateau-bus si l'envie vient).",
          "<b>Option 2 — Pass 3 jours : ~290 SEK/adulte (~580 SEK, 53 €)</b> pour les trois journées chargées (Djurgården, Skansen, Gamla Stan), et tickets à l'unité (~42 SEK) le reste du temps.",
          "<b>Le vrai critère :</b> depuis SoFo, Gamla Stan et le bord de l'eau se font <b>à pied</b>. Si on marche beaucoup, l'option 2 gagne d'une trentaine d'euros. Si on prend le métro matin et soir tous les jours, l'option 1 gagne.",
          "<b>Notre pari :</b> option 1 pour la tranquillité — mais la décision se prend très bien à la borne en arrivant.",
          "Paiement par Apple Pay / carte sans contact directement sur les portiques."
        ]},
        { type: "divider" },
        { type: "label", text: "🅿️ Stationnement & Taxe de congestion" },
        { type: "infobox", color: "green", title: "Stratégie parking — la rue, avec 2 rotations", items: [
          "Autour d'Åsögatan/Sofia, la rue est en <b>taxa 3</b> : 20 SEK/h en semaine 07h–19h, 15 SEK/h le samedi 11h–17h, <b>gratuit les soirs, les nuits et le dimanche</b>. Coût total du séjour : <b>~690 SEK (~63 €)</b> via <b>EasyPark</b>.",
          "<b>⚠️ Règle des 24 h (<i>24-timmarsregeln</i>) :</b> en Suède, on ne peut pas rester plus de <b>24 h consécutives</b> au même endroit en rue les jours ouvrables. L'exception 7 jours est réservée aux résidents (<i>boendeparkering</i>). <b>Il faut donc déplacer la voiture jeudi 30 et vendredi 31.</b>",
          "<b>Bonne nouvelle :</b> le compteur se met en pause le samedi et le dimanche — le stationnement posé le vendredi tient jusqu'au lundi matin. Deux déplacements suffisent pour tout le séjour.",
          "<b>⚠️ Servicedag :</b> chaque rue a un créneau hebdomadaire de nettoyage (souvent 00h–06h) où le stationnement est interdit et la voiture <b>mise en fourrière</b>. C'est écrit uniquement sur le panneau — le photographier en arrivant.",
          "<b>Plan B si aucune place :</b> P-hus Ringen (Aimo Park, Götgatan) — ~520 SEK/24h, à réserver aux nuits restantes en cas de pépin. Attention à la barre de hauteur si coffre de toit.",
          "Voir la note de décision dédiée <b>« Parking Södermalm »</b> pour le détail des options."
        ]},
        { type: "infobox", color: "amber", title: "Trängselskatt (péage urbain)", items: [
          "<b>Arrivée mer 29/07 : 0 SEK</b> — en juillet la taxe est suspendue (sauf les 5 premiers jours ouvrés du mois).",
          "<b>Départ lun 3/08 :</b> taxe active mais en <b>tarif basse saison</b> (~11–35 SEK par passage).",
          "Plaque française : rien à faire sur place, les passages sont facturés automatiquement via <b>Epass24</b> (courrier, parfois plusieurs semaines après)."
        ]},
        { type: "divider" },
        { type: "label", text: "🌤 Météo & arbitrages" },
        { type: "infobox", color: "amber", title: "Ce qui dépend du ciel", items: [
          "<b>Jour :</b> 20–23°C · <b>Nuit :</b> 13°C — veste légère indispensable le soir. <b>Soleil jusqu'à ~21h15.</b>",
          "<b>Skansen exige du beau temps</b> — c'est une journée entièrement en plein air. On la cale sur le plus beau jour, quitte à inverser samedi et dimanche.",
          "<b>Gamla Stan se fait sous la pluie</b>, c'est juste moins agréable. Idem pour le shopping à Södermalm.",
          "<b>Le tour en bateau saute</b> s'il pleut — ce n'est pas une priorité de toute façon.",
          "<b>S'il pleut des trombes :</b> Fotografiska (musée de la photo) ou Junibacken deviennent la bonne réponse. C'est pour ça qu'ils ne sont pas programmés.",
          "<b>Plans B couverts :</b> Andy's Lekland (Sickla) ou Leos Lekland — trampolines et piscines à balles, ~100–150 SEK/enfant, adultes gratuits."
        ]},
        { type: "divider" },
        { type: "label", text: "👥 Nils & Johanna" },
        { type: "infobox", color: "violet", title: "À caler sur place", items: [
          "<b>Ils habitent en banlieue</b> — le lieu exact reste à confirmer, prévoir du temps de trajet.",
          "<b>Johanna :</b> plutôt un <b>goûter / fika</b> en journée. Le créneau naturel est le dimanche après-midi, ou en semaine entre deux visites.",
          "<b>Nils :</b> il travaille en semaine — plutôt une <b>fin de journée</b>, ou le samedi si c'est possible.",
          "<b>Deux créneaux sont réservés dans le programme</b> (samedi soir et dimanche après-midi) et se déplacent facilement.",
          "<b>À faire :</b> les recontacter dès l'arrivée pour caler, ça conditionne le reste de la semaine."
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
      banner: { accent: "amber", badge: "Jour 1 · Mercredi 29 Juillet", title: "Arrivée & Rien d'Autre", sub: "Route depuis Södra Kärr → Check-in 16h → Courses → Tour du quartier" },
      timeline: [
        {
          time: "~11h00",
          title: "🚗 Départ de Södra Kärr",
          items: [
            { text: "~410 km, comptez <b>4h30 avec une vraie pause</b> (E22 vers le nord)." },
            { text: "Pause déjeuner pique-nique ou aire de repos vers Västervik / Norrköping.", type: "tip" },
            { text: "Trängselskatt à l'entrée de Stockholm : <b>0 SEK en juillet</b> — rien à payer.", type: "sub" }
          ]
        },
        {
          time: "16h00",
          title: "🏠 Check-in — Åsögatan 190",
          items: [
            { text: "Arrivée autonome, <b>serrure connectée</b> — procédure dans la messagerie Airbnb, wifi dans l'appli." },
            { text: "Se garer en rue au plus près : payant seulement jusqu'à 19h ce soir (~60 SEK via EasyPark), puis gratuit toute la nuit.", type: "tip" },
            { text: "<b>Photographier le panneau</b> : code zone EasyPark + jour de <i>servicedag</i> (nettoyage = fourrière).", type: "warn" },
            { text: "Rappels à poser : déplacer la voiture <b>jeudi avant 16h</b> et <b>vendredi avant 15h</b> (règle des 24 h).", type: "warn" }
          ]
        },
        {
          time: "17h00",
          title: "🛒 Courses & premier tour du quartier",
          items: [
            { text: "Supermarché du coin (Coop/Hemköp autour de Skånegatan–Ringen) : le petit-déj et le dîner de ce soir, rien de plus — le vrai plein se fera demain." },
            { text: "Premier tour de <b>Nytorget</b>, la plus jolie place de Södermalm, à 350 m de l'appart.", type: "tip" },
            { text: "<b>C'est tout.</b> Après 4h30 de route on arrive, on se pose, on déballe. Si les enfants ont de l'énergie, Vitabergsparken est à 5 min à pied.", type: "sub" }
          ]
        },
        {
          time: "19h30",
          title: "🏠 Dîner à l'appart",
          items: [
            { text: "Repas simple suédois : <i>knäckebröd</i> (crispbread), fromages, charcuterie, harengs marinés, cornichons." },
            { text: "Il fait clair jusqu'à ~21h15 — la première soirée dehors est toujours la meilleure.", type: "tip" },
            { text: "Contacter <b>Nils et Johanna</b> ce soir pour caler les créneaux de la semaine.", type: "warn" }
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
      banner: { accent: "coral", badge: "Jour 2 · Jeudi 30 Juillet", title: "Djurgården — Vasa & Balade", sub: "Vasamuseet le matin → Pique-nique → Après-midi libre sur l'île" },
      timeline: [
        {
          time: "09h00",
          title: "🚗 Déplacer la voiture",
          items: [
            { text: "<b>Règle des 24 h</b> — la bouger de deux rues avant de partir suffit. Nouveau ticket EasyPark.", type: "warn" },
            { text: "Grosses courses de la semaine possibles ce matin tant qu'on a la voiture (Willys ou Lidl).", type: "sub" }
          ]
        },
        {
          time: "10h00\n12h00",
          title: "🚢 Vasamuseet — le seul vrai must",
          items: [
            { text: "Le navire de guerre du 17e siècle qui a coulé 20 minutes après son lancement, remonté intact. Il n'y a rien d'équivalent au monde." },
            { text: "<b>🎬 Expo James Cameron / Avatar en ce moment</b> — le réalisateur et son rapport aux épaves et aux profondeurs. Bien vu pour les enfants, et ça change du musée maritime classique.", type: "tip" },
            { text: "<b>Enfants GRATUITS</b> · Adultes ~240 SEK → <b>480 SEK pour la famille</b>." },
            { text: "<b>Réserver en ligne avant de partir</b> — en pleine saison, on ne rentre pas au pied levé.", type: "warn" },
            { text: "Durée 1h30–2h. Ne pas rater le film d'introduction (version française disponible).", type: "sub" },
            { text: "🚢 Y aller en <b>ferry SL depuis Slussen</b> — inclus dans le pass, et c'est déjà un petit tour en bateau.", type: "tip" }
          ]
        },
        {
          time: "12h00\n13h30",
          title: "🥪 Déjeuner sur l'île",
          items: [
            { text: "Pique-nique préparé le matin sur les pelouses de Djurgården — c'est le plus simple et le plus agréable." },
            { text: "<b>Blå Porten</b> (Djurgårdsvägen 64) : cour intérieure avec jardin, salades et plats du jour — l'option assise sans se ruiner.", type: "sub" },
            { text: "<b>Flickorna Helin</b> (Rosendal) : maison de bois, jardin, gâteaux — plus loin sur l'île, très joli pour un fika tardif.", type: "sub" }
          ]
        },
        {
          time: "13h30\n17h00",
          title: "🌳 Après-midi libre — Djurgården à pied",
          items: [
            { text: "<b>Pas de deuxième musée.</b> On a fait le Vasa, c'est assez pour des enfants de 7 ans." },
            { text: "L'île est une grande forêt urbaine : sentiers, canaux, canards, bateaux amarrés, glaces. On marche, on s'arrête, on repart." },
            { text: "<b>Rosendals Trädgård</b> : jardin-verger avec serre et café, à 20 min à pied — pain au levain, gâteaux, cadre superbe.", type: "sub" },
            { text: "Si les enfants réclament une aire de jeu : <b>Anders Franzéns park</b> est sur l'île, côté sud.", type: "sub" },
            { text: "Retour à pied par <b>Strandvägen</b> si on a l'énergie — le quai le plus élégant de Stockholm, bordé de vieux bateaux en bois. C'est juste beau à marcher.", type: "tip" }
          ]
        },
        {
          time: "18h00",
          title: "🍺 Le moment apéro",
          items: [
            { text: "Une terrasse quelque part sur le retour, une bière, un jus pour les enfants. C'est ça, le \"resto\" du séjour." },
            { text: "<b>Kvarnen</b> (Tulegatan 4, Södermalm) : brasserie historique, bruyante et vivante, tables en bois — l'ambiance pub qu'on aime.", type: "sub" }
          ]
        },
        {
          time: "19h30",
          title: "🏠 Dîner à l'appart",
          items: [
            { text: "<b>Pasta au saumon fumé</b> (<i>lax</i>) : les supermarchés suédois ont du saumon remarquable pour trois fois rien." }
          ]
        }
      ],
      rainPlans: [
        { if: "Si le temps est vraiment mauvais", then: "<b>Junibacken</b> (à 5 min du Vasa) devient la bonne réponse : univers Astrid Lindgren, Story Train, Villa Villekulla, tout est couvert. <b>~870 SEK pour 4</b> — c'est cher, mais un jour de pluie change le calcul. Réservation en ligne conseillée." },
        { if: "Si pluie fine seulement", then: "Le Vasa est couvert, l'après-midi devient <b>Fotografiska</b> (musée de la photo, Stadsgårdshamnen 22) — adultes ~220 SEK, <b>enfants gratuits</b>, et le café panoramique du dernier étage vaut le déplacement." }
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
      banner: { accent: "violet", badge: "Jour 3 · Vendredi 31 Juillet", title: "Gamla Stan", sub: "Vieille ville → Palais → Chokladkoppen → Retour tranquille" },
      timeline: [
        {
          time: "09h00",
          title: "☕ Fika à l'appart & voiture",
          items: [
            { text: "🚗 <b>Déplacer la voiture avant 15h</b> — dernière rotation : ce stationnement tiendra jusqu'au départ lundi (le compteur des 24 h est en pause le week-end).", type: "warn" },
            { text: "Café + <i>kardemummabullar</i> achetées la veille. <b>Johan &amp; Nyström</b> (Swedenborgsgatan) est la brûlerie de référence de Södermalm si on veut du très bon café.", type: "sub" }
          ]
        },
        {
          time: "10h00\n13h00",
          title: "🏰 Gamla Stan (gratuit)",
          items: [
            { text: "Traverser à pied depuis Södermalm via Slussen — 10 min, et la vue en chemin est déjà belle." },
            { text: "<b>Stortorget</b> — la place aux maisons colorées, celle de toutes les photos." },
            { text: "<b>Mårten Trotzigs Gränd</b> — 90 cm de large, la ruelle la plus étroite de la ville. Mission enfants garantie." },
            { text: "<b>Palais Royal</b> — on passe devant, on regarde la relève de la garde (~11h15 en semaine), on ne rentre pas. C'est gratuit et c'est suffisant.", type: "tip" },
            { text: "<b>Österlånggatan</b> et <b>Västerlånggatan</b> — la première pour les jolies boutiques, la seconde pour les souvenirs (et la foule).", type: "sub" }
          ]
        },
        {
          time: "13h00\n14h30",
          title: "🍲 Déjeuner — dagens lunch ou chocolat chaud",
          items: [
            { text: "Le <i>dagens lunch</i> (menu du jour, 11h–14h en semaine) : plat + pain + café inclus, <b>~130–160 SEK/personne</b>. Le meilleur rapport qualité-prix de Suède." },
            { text: "<b>Café Chokladkoppen</b> (Stortorget 18) : la terrasse sur la grande place, chocolats chauds et gâteaux. Touristique mais franchement joli.", type: "sub" },
            { text: "<b>Kaffekoppen</b> juste à côté, même maison, mêmes voûtes médiévales.", type: "sub" },
            { text: "<b>Kladdkakan</b> (Stora Nygatan) pour le gâteau au chocolat fondant national.", type: "sub" }
          ]
        },
        {
          time: "15h00\n16h00",
          title: "🎨 Tunnelbana Art (inclus dans le pass)",
          items: [
            { text: "Station <b>T-Centralen ligne bleue</b> : une grotte de roche peinte en bleu, à 10 m sous terre. Deux minutes de trajet, zéro euro de plus, et les enfants ne s'y attendent pas." },
            { text: "<b>Kungsträdgården</b> (même ligne) : décor gréco-romain souterrain, puis les jardins du Roi en surface — fontaines, food trucks, concerts gratuits l'été.", type: "sub" }
          ]
        },
        {
          time: "16h30",
          title: "🌿 Retour tranquille vers SoFo",
          items: [
            { text: "Rentrer à pied par le bord de l'eau. Si les enfants saturent : <b>Bryggartäppan</b>, l'aire de jeu thématique de Södermalm, est sur le chemin." },
            { text: "Fin d'après-midi libre. C'est vendredi soir — <b>Vitabergsparken</b> programme parfois des concerts gratuits en plein air.", type: "tip" }
          ]
        },
        {
          time: "19h30",
          title: "🏠 Dîner à l'appart",
          items: [
            { text: "<i>Pannkakor</i> (crêpes suédoises épaisses) + confiture de lingonberry — rapide, et les enfants adorent." }
          ]
        }
      ],
      rainPlans: [
        { if: "Si pluie", then: "Gamla Stan sous la pluie reste faisable — les ruelles sont abritées et les cafés à voûtes sont faits pour ça. C'est même plus atmosphérique." }
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
      banner: { accent: "teal", badge: "Jour 4 · Samedi 1er Août", title: "Skansen — La Grande Journée", sub: "Musée en plein air, animaux nordiques, maisons anciennes — toute la journée" },
      timeline: [
        {
          time: "☀️",
          title: "⚠️ La journée qui dépend du ciel",
          items: [
            { text: "<b>Skansen se fait par beau temps ou pas du tout</b> — tout est dehors, sur une colline. Si samedi est gris et dimanche radieux, <b>on inverse J4 et J5</b> sans état d'âme.", type: "warn" },
            { text: "La voiture ne bouge pas de la journée — le stationnement posé hier tient jusqu'à lundi.", type: "sub" }
          ]
        },
        {
          time: "10h00\n17h00",
          title: "🦌 Skansen (journée entière)",
          items: [
            { text: "Le plus vieux musée en plein air du monde (1891), sur les hauteurs de Djurgården. <b>Un mélange entre Bygdøy à Oslo et un parc animalier</b> : c'est exactement ça." },
            { text: "<b>Les animaux nordiques :</b> élans, ours bruns, loups, lynx, rennes, phoques. Plus une petite ferme avec des animaux à approcher pour les enfants." },
            { text: "<b>Le village historique :</b> 150 maisons de bois démontées dans toute la Suède et remontées ici, avec des artisans en costume qui travaillent vraiment — souffleur de verre, boulanger, imprimeur." },
            { text: "<b>Tarif : ~610 SEK pour la famille</b> (relevé sur le site officiel). C'est le gros billet du séjour, et c'est le seul qui les vaut.", type: "sub" },
            { text: "<b>Prévoir la journée entière.</b> C'est grand, ça monte, il y a un funiculaire pour l'accès principal.", type: "tip" },
            { text: "Déjeuner sur place : plusieurs cafés et aires de pique-nique. Apporter les sandwichs évite la note salée du parc.", type: "tip" },
            { text: "<b>Ni l'un ni l'autre n'y êtes jamais allés</b> — c'est la découverte commune du séjour.", type: "sub" }
          ]
        },
        {
          time: "🎤 Le mardi",
          title: "🎶 Allsång på Skansen — à vérifier",
          items: [
            { text: "Le grand concert-karaoké national se tient <b>les mardis soir</b> jusqu'au 11 août — donc <b>pas pendant le séjour Stockholm</b>, mais le <b>mardi 4 août depuis Täby</b>, c'est jouable (45 min de route)." },
            { text: "Billets : ~50 € adulte / 10–15 € enfant. Ça se remplit, il faut réserver.", type: "sub" },
            { text: "<b>Demander à Isabelle</b> : elle aurait assisté à une répétition gratuitement — à confirmer avant de payer.", type: "warn" }
          ]
        },
        {
          time: "18h00",
          title: "👥 Créneau Nils (à caler)",
          items: [
            { text: "Le samedi est le meilleur jour pour Nils — il travaille en semaine." },
            { text: "Ils habitent en banlieue : prévoir du trajet, ou proposer qu'on se retrouve en ville.", type: "sub" },
            { text: "Si ça ne se fait pas aujourd'hui : fin de journée en semaine, après son travail.", type: "sub" }
          ]
        },
        {
          time: "19h30",
          title: "🏠 Dîner à l'appart",
          items: [
            { text: "<i>Köttbullar</i> du supermarché + purée + lingonberry : ~200 SEK pour quatre, et c'est le vrai goût du pays." },
            { text: "Ou grillades si l'appart a un extérieur — le <i>grillning</i> est une institution nationale l'été.", type: "sub" }
          ]
        }
      ],
      rainPlans: [
        { if: "Si pluie annoncée samedi", then: "<b>Inverser avec dimanche.</b> On fait Södermalm et les boutiques aujourd'hui (elles sont ouvertes le samedi, c'est même mieux) et Skansen demain." },
        { if: "Si pluie toute la semaine", then: "Skansen sous la pluie reste faisable — les maisons du village sont visitables et les animaux s'en fichent — mais c'est deux fois moins bien. Arbitrer honnêtement : <b>Fotografiska</b> ou <b>Junibacken</b> font une meilleure journée pluvieuse." }
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
      banner: { accent: "emerald", badge: "Jour 5 · Dimanche 2 Août", title: "Södermalm — Notre Journée", sub: "Nytorget → SoFo & seconde main → Mosebacke → Monteliusvägen" },
      timeline: [
        {
          time: "09h30",
          title: "☕ Brunch à Nytorget",
          items: [
            { text: "<b>Urban Deli</b> (Nytorget 4) : mi-café, mi-épicerie fine, longues tables en bois. C'est là que Södermalm vient le dimanche matin." },
            { text: "~150–180 SEK/personne — c'est l'exception petit-déjeuner du voyage, et elle vaut le coup.", type: "sub" },
            { text: "Moins cher juste à côté : <b>Café Pom et Flora</b> (Bondegatan) ou <b>Greasy Spoon</b> (Tjärhovsgatan) pour un brunch plus décontracté.", type: "sub" }
          ]
        },
        {
          time: "11h00\n13h30",
          title: "🛍 SoFo & la seconde main",
          items: [
            { text: "<b>L'état d'esprit :</b> il y a une quinzaine d'adresses sur la carte pour savoir ce qu'il y a autour de nous. <b>On n'en fait pas quinze.</b> On entre dans ce qui attire.", type: "tip" },
            { text: "<b>Ce qu'on appelle \"loppis\" en ville, ce sont en fait des chaînes caritatives</b> — l'équivalent d'Emmaüs et de la Croix-Rouge : <b>Myrorna</b>, <b>Stockholms Stadsmission</b>, <b>Artikel2</b> (ex-Emmaus, à Slussen), la <b>Croix-Rouge</b>. Bien achalandées, pas chères, sans le charme des loppis de campagne.", type: "sub" },
            { text: "<b>Les vraies friperies :</b> <b>Lisa Larsson Second Hand</b> (Bondegatan) et <b>Brocante</b> (Hornstull) — sélection pointue, prix plus hauts.", type: "sub" },
            { text: "<b>Design & déco :</b> <b>Designtorget</b> (Götgatan) — le magasin de design suédois accessible, celui qu'on connaît. <b>Granit</b> juste à côté (rangement, papeterie), <b>Design House Stockholm</b> vers Slussen.", type: "tip" },
            { text: "<b>Fringues :</b> <b>Grandpa</b> (Södermannagatan 21), l'enseigne culte du quartier. <b>Dedicated</b>, <b>Weekday</b>, <b>ARKET</b> sur Götgatan.", type: "sub" },
            { text: "<b>Tambur</b> (Skånegatan) : petite boutique déco-maison très bien vue.", type: "sub" },
            { text: "Vérifier les horaires du dimanche — beaucoup ouvrent à 11h ou 12h et ferment à 16h.", type: "warn" }
          ]
        },
        {
          time: "13h30\n15h00",
          title: "🍕 Déjeuner — Omnipollos Hatt",
          items: [
            { text: "<b>Omnipollos Hatt</b> (Hökens gata 1A) : bar à bières artisanales et les meilleures pizzas de Stockholm. Terrasse en été, cadre industriel, enfants bienvenus." },
            { text: "Alternative rapide : <b>800 Grader</b> (Götgatan) pour la pizza à la part, ou <b>Linje 10</b> pour les ramens.", type: "sub" },
            { text: "~150–200 SEK/adulte.", type: "sub" }
          ]
        },
        {
          time: "15h00\n16h30",
          title: "👥 Créneau Johanna (à caler)",
          items: [
            { text: "Le goûter du dimanche après-midi est le créneau naturel pour Johanna." },
            { text: "<b>Café Saturnus</b> (Eriksbergsgatan) si on va vers le centre : les <i>kanelbullar</i> les plus grosses de Stockholm, c'est un classique.", type: "sub" },
            { text: "Ou <b>Café Drop</b> / <b>Café En Halv Trappa Ner</b> à Södermalm si on reste dans le quartier.", type: "sub" }
          ]
        },
        {
          time: "16h30\n17h30",
          title: "🌅 Mosebacke",
          items: [
            { text: "La place secrète de Södermalm, en hauteur, avec une terrasse de bar qui donne sur tout Stockholm." },
            { text: "Un verre en terrasse pendant que les enfants courent sur la place. Concerts gratuits certains dimanches.", type: "tip" }
          ]
        },
        {
          time: "18h00\n20h00",
          title: "🌇 Monteliusvägen — le final",
          items: [
            { text: "<b>La plus belle vue du séjour</b>, au meilleur moment de la journée : un chemin piéton de 500 m au-dessus du Mälaren, face à l'hôtel de ville et à Gamla Stan." },
            { text: "C'est ici qu'on fait les photos. Apporter une bière ou un verre de blanc de l'appart et une couverture si le soir est frais.", type: "tip" },
            { text: "Pas de restaurant, pas de réservation, rien à payer. C'est notre Stockholm à nous." }
          ]
        },
        {
          time: "20h30",
          title: "🏠 Dîner maison",
          items: [
            { text: "Vider le frigo — plateau scandinave de fin de séjour. Les valises se font ce soir, on part tôt demain." }
          ]
        }
      ],
      rainPlans: [
        { if: "Si pluie", then: "Journée idéale sous la pluie en réalité : les boutiques et les cafés sont couverts. On remplace Monteliusvägen par <b>Fotografiska</b> et son café panoramique du dernier étage (adultes ~220 SEK, <b>enfants gratuits</b>)." },
        { if: "Si grand soleil et envie de bateau", then: "<b>Fjäderholmarna</b> — la petite île de l'archipel à 25 min de bateau depuis Slussen ou Nybroplan. Quelques maisons, un café, des rochers. <b>~600 SEK pour quatre</b>, une demi-journée. <b>Ce n'est pas une priorité</b> — c'est le plan pour un après-midi ensoleillé sans idée. Alternative gratuite : un <b>ferry-bus SL</b> (inclus dans le pass) fait déjà traverser la baie." }
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
      banner: { accent: "amber", badge: "Jour 6 · Lundi 3 Août", title: "Départ vers Täby", sub: "Check-out 10h → Tessinparken → Courses Arninge → Check-in 15h" },
      timeline: [
        {
          time: "08h30\n10h00",
          title: "☕ Petit-déjeuner & check-out",
          items: [
            { text: "Vider le frigo, sacs poubelle fermés près de la porte, check-out avant <b>10h00</b>." },
            { text: "Reprendre la voiture — payer la rue via EasyPark de 07h à l'heure du départ (~60 SEK).", type: "sub" },
            { text: "Trängselskatt active aujourd'hui (tarif basse saison) — facturée automatiquement via Epass24, rien à faire.", type: "sub" }
          ]
        },
        {
          time: "10h30\n13h00",
          title: "🏗 Tessinparken — l'étape tampon",
          items: [
            { text: "Le check-in à Täby n'est qu'à 15h, et Tessinparken (Östermalm) est pile sur la route du nord." },
            { text: "Aire de jeu en mini-ville années 1930 : maisons, grue, tram vintage. Unique en son genre, et on ne l'a pas encore faite.", type: "tip" },
            { text: "Pique-nique sur place avec les restes du frigo." }
          ]
        },
        {
          time: "13h30\n14h45",
          title: "🛒 ICA Maxi Arninge (Täby)",
          items: [
            { text: "Grand hypermarché à 10 min de la maison — les courses de toute la semaine Täby." },
            { text: "Kundvägen 1E, Arninge — parking gratuit.", type: "sub" }
          ]
        },
        {
          time: "15h00",
          title: "🏡 Check-in — Klövjevägen 33, Täby",
          items: [
            { text: "<b>Direction la maison de Täby</b> — voir le guide séparé « Täby &amp; les environs · 3–8 Août »." }
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
      banner: { accent: "emerald", badge: "Carnet d'Adresses", title: "Le Pool, pas le Programme", sub: "Repéré par Sofie — on pioche selon l'endroit et l'humeur" },
      zones: [
        {
          label: "☕ Cafés & Fika — Södermalm",
          sections: [
            {
              label: "☕ Le quotidien",
              cards: [
                { emoji: "🥐", name: "Urban Deli Nytorget", addr: "Nytorget 4", price: "~150–180 SEK/pers", color: "coral", body: "Mi-café, mi-épicerie fine, mi-restaurant. L'épicentre de Nytorget, longues tables en bois. Le brunch du dimanche matin.", verdict: "L'exception brunch du voyage.", person: "Sofie", mapsQuery: "Urban+Deli+Nytorget+4+Stockholm" },
                { emoji: "☕", name: "Johan & Nyström", addr: "Swedenborgsgatan 7", price: "~60–80 SEK/pers", color: "amber", body: "La brûlerie de référence de Stockholm. Café torréfié sur place, pâtisseries, cadre chaleureux sur deux niveaux.", verdict: "Le meilleur café du quartier, sans discussion.", person: "Sofie", mapsQuery: "Johan+och+Nyström+Swedenborgsgatan+Stockholm" },
                { emoji: "🍳", name: "Greasy Spoon", addr: "Tjärhovsgatan 19", price: "~140 SEK/pers", color: "emerald", body: "Brunch anglo-scandinave : œufs bénédicte, pancakes, bacon. Petite salle, toujours pleine.", verdict: "Le brunch décontracté de SoFo.", person: "Sofie", mapsQuery: "Greasy+Spoon+Tjärhovsgatan+Stockholm" },
                { emoji: "🌸", name: "Café Pom et Flora", addr: "Bondegatan 64", price: "~120 SEK/pers", color: "violet", body: "Petit café lumineux, brunch soigné, porridge et tartines. Très SoFo.", person: "Sofie", mapsQuery: "Pom+och+Flora+Bondegatan+Stockholm" },
                { emoji: "☕", name: "Café Drop", addr: "Hornsgatan 60", price: "~70 SEK/pers", color: "neutral", body: "Café de quartier sans chichi, côté Mariatorget. Pratique avant ou après Monteliusvägen.", person: "Sofie", mapsQuery: "Café+Drop+Hornsgatan+Stockholm" },
                { emoji: "🪜", name: "Café En Halv Trappa Ner", addr: "Hornsgatan 62", price: "~70 SEK/pers", color: "neutral", body: "Littéralement « un demi-étage plus bas » — petit café en sous-sol, calme, parfait pour une pause au chaud.", person: "Sofie", mapsQuery: "En+Halv+Trappa+Ner+Stockholm" },
                { emoji: "🚲", name: "Cykelcafé Le Mond", addr: "Folkungagatan 89", price: "~80 SEK/pers", color: "teal", body: "Café-atelier de vélo, ambiance cyclisme et bons sandwichs. Original et sympathique.", person: "Sofie", mapsQuery: "Cykelcafe+Le+Mond+Stockholm" },
                { emoji: "☕", name: "Caffeine and Cravings", addr: "Skånegatan 71", price: "~80 SEK/pers", color: "neutral", body: "Café de spécialité à deux pas de l'appart. Le plus proche pour le café du matin.", verdict: "À 250 m d'Åsögatan 190.", person: "Sofie", mapsQuery: "Caffeine+and+Cravings+Skånegatan+Stockholm" }
              ]
            }
          ]
        },
        {
          label: "🍽 Manger — le midi et l'apéro",
          sections: [
            {
              label: "🍽 Södermalm",
              cards: [
                { emoji: "🍕", name: "Omnipollos Hatt", addr: "Hökens gata 1A", price: "~150–200 SEK/pers", color: "coral", body: "Bar à bières artisanales et les meilleures pizzas de Stockholm. Terrasse en été, cadre industriel et vivant, enfants bienvenus.", verdict: "Le meilleur compromis apéro + repas + famille.", mapsQuery: "Omnipollos+Hatt+Hökens+gata+Stockholm" },
                { emoji: "🍺", name: "Kvarnen", addr: "Tulegatan 4", price: "~180 SEK/pers", color: "amber", body: "Brasserie historique de 1908, tables en bois, plafonds hauts, bruyante et vivante. Cuisine suédoise traditionnelle.", verdict: "L'esprit pub — celui qu'on cherchait.", person: "Sofie", mapsQuery: "Kvarnen+Tulegatan+Stockholm" },
                { emoji: "🍕", name: "800 Grader", addr: "Götgatan 79", price: "~60–90 SEK/part", color: "emerald", body: "Pizza à la part, four à 800 degrés, on mange debout ou sur le pouce. Le déjeuner express qui plaît aux enfants.", verdict: "Le moins cher et le plus rapide.", person: "Sofie", mapsQuery: "800+Grader+Götgatan+Stockholm" },
                { emoji: "🍜", name: "Linje 10", addr: "Götgatan", price: "~150–200 SEK/pers", color: "neutral", body: "Ramens et bouillons asiatiques, très populaire dans le quartier, portions généreuses.", mapsQuery: "Linje+10+Götgatan+Stockholm" },
                { emoji: "🍲", name: "Dagens Lunch", addr: "Partout, 11h–14h en semaine", price: "~130–160 SEK/pers", color: "neutral", body: "Le menu du jour suédois : plat + pain + salade + café inclus. Dans presque tous les cafés et petits restaurants en semaine.", verdict: "Le meilleur rapport qualité-prix du pays. Menu enfant ~80 SEK." },
                { emoji: "🍔", name: "Le McDo assumé", color: "neutral", body: "Un midi sur cinq, ça arrive, et ce n'est pas un drame. Les enfants sont contents, on économise 400 SEK, on passe à autre chose.", verdict: "Zéro culpabilité." }
              ]
            },
            {
              label: "🏰 Gamla Stan",
              cards: [
                { emoji: "🍫", name: "Café Chokladkoppen", addr: "Stortorget 18", price: "~100 SEK/pers", color: "amber", body: "La terrasse sur la place aux maisons colorées. Chocolats chauds, gâteaux, voûtes médiévales à l'intérieur.", verdict: "Touristique, mais franchement joli.", person: "Sofie", mapsQuery: "Chokladkoppen+Stortorget+Stockholm" },
                { emoji: "☕", name: "Kaffekoppen", addr: "Stortorget 20", price: "~100 SEK/pers", color: "amber", body: "Le voisin et jumeau de Chokladkoppen, même place, mêmes voûtes.", person: "Sofie", mapsQuery: "Kaffekoppen+Stortorget+Stockholm" },
                { emoji: "🍰", name: "Kladdkakan", addr: "Stora Nygatan", price: "~90 SEK/pers", color: "coral", body: "Spécialiste du <i>kladdkaka</i>, le gâteau au chocolat fondant national. Une institution simple et efficace.", person: "Sofie", mapsQuery: "Kladdkakan+Stora+Nygatan+Stockholm" }
              ]
            },
            {
              label: "🌳 Djurgården & centre",
              cards: [
                { emoji: "🌿", name: "Blå Porten", addr: "Djurgårdsvägen 64", price: "~150 SEK/pers", color: "teal", body: "Cour intérieure avec jardin ombragé, salades, plats du jour, gâteaux. Juste à côté du Vasa et de Skansen.", verdict: "L'option déjeuner assis de Djurgården.", person: "Sofie", mapsQuery: "Blå+Porten+Djurgårdsvägen+Stockholm" },
                { emoji: "🏡", name: "Flickorna Helin", addr: "Rosendal, Djurgården", price: "~120 SEK/pers", color: "emerald", body: "Maison de bois blanche avec jardin, au calme sur l'île. Gâteaux maison et thé — le fika carte postale.", person: "Sofie", mapsQuery: "Flickorna+Helin+Djurgården+Stockholm" },
                { emoji: "🥐", name: "Café Saturnus", addr: "Eriksbergsgatan 6", price: "~110 SEK/pers", color: "amber", body: "Les <i>kanelbullar</i> les plus grosses de Stockholm — de la taille d'une assiette. Cadre parisien, toujours plein.", verdict: "Une institution. Idéal pour un goûter avec Johanna.", person: "Sofie", mapsQuery: "Café+Saturnus+Eriksbergsgatan+Stockholm" },
                { emoji: "🍽", name: "MOOD Foodhall", addr: "Regeringsgatan 48", price: "~130 SEK/pers", color: "neutral", body: "Galerie commerciale avec plusieurs comptoirs : chacun choisit son plat, même table. L'anti-dispute familiale.", person: "Sofie", mapsQuery: "MOOD+Stockholm" }
              ]
            }
          ]
        },
        {
          label: "🛍 Shopping — le pool complet",
          sections: [
            {
              label: "♻️ Seconde main",
              cards: [
                { emoji: "♻️", name: "Myrorna", addr: "Hornsgatan / Götgatan / Mäster Samuelsgatan", color: "emerald", body: "La plus grande chaîne caritative de Suède — l'équivalent d'Emmaüs. Trois adresses sur notre parcours. Vêtements, vaisselle, livres, à prix très bas.", verdict: "Le meilleur volume, les meilleurs prix.", person: "Sofie", mapsQuery: "Myrorna+Södermalm+Stockholm" },
                { emoji: "♻️", name: "Stockholms Stadsmission", addr: "Mariatorget & Skånegatan", color: "emerald", body: "L'autre grande chaîne caritative, souvent mieux triée que Myrorna. Celle de Skånegatan est à 5 min de l'appart.", person: "Sofie", mapsQuery: "Stockholms+Stadsmission+Second+Hand+Södermalm" },
                { emoji: "♻️", name: "Artikel2", addr: "Slussen (ex-Emmaus Stockholm)", color: "teal", body: "L'ancienne Emmaus de Stockholm, rebaptisée. Grand espace, bon tri, sur le chemin de Gamla Stan.", person: "Sofie", mapsQuery: "Artikel2+Second+Hand+Slussen+Stockholm" },
                { emoji: "➕", name: "Croix-Rouge (Röda Korset)", addr: "Skånegatan", color: "neutral", body: "Petite boutique caritative de quartier, à deux pas de l'appart.", person: "Sofie", mapsQuery: "Röda+Korset+Second+Hand+Södermalm+Stockholm" },
                { emoji: "👗", name: "Lisa Larsson Second Hand", addr: "Bondegatan 48", color: "violet", body: "Vraie friperie sélective : vintage scandinave bien choisi, pas du tout le même exercice que les chaînes caritatives.", verdict: "Plus cher, mais c'est trié pour vous.", person: "Sofie", mapsQuery: "Lisa+Larsson+Second+Hand+Stockholm" },
                { emoji: "🕰", name: "Brocante", addr: "Hornstull", color: "violet", body: "Brocante-friperie côté Hornstull, sélection pointue déco et mode.", person: "Sofie", mapsQuery: "Brocante+Second+Hand+Hornstull+Stockholm" }
              ]
            },
            {
              label: "🎨 Design & déco",
              cards: [
                { emoji: "🎨", name: "Designtorget", addr: "Götgatan 31 & Sergelgatan", color: "coral", body: "Le magasin de design suédois accessible : objets, papeterie, cadeaux, jeunes créateurs. Celui qu'on connaît et qu'on aime.", verdict: "Le meilleur endroit pour les souvenirs qui ne font pas souvenir.", person: "Sofie", mapsQuery: "Designtorget+Götgatan+Stockholm" },
                { emoji: "📦", name: "Granit", addr: "Götgatan 31", color: "neutral", body: "Rangement, papeterie, maison — épuré, gris, très suédois. Juste à côté de Designtorget.", person: "Sofie", mapsQuery: "Granit+Götgatan+Stockholm" },
                { emoji: "🏛", name: "Design House Stockholm", addr: "Vers Slussen", color: "violet", body: "Design suédois haut de gamme : luminaires, textiles, objets. À regarder même sans acheter.", person: "Sofie", mapsQuery: "Design+House+Stockholm" },
                { emoji: "🌺", name: "Svenskt Tenn", addr: "Strandvägen 5", color: "amber", body: "L'institution absolue du design suédois — les imprimés Josef Frank, la boutique de 1924. Hors budget, mais c'est un musée gratuit.", verdict: "Sur Strandvägen, donc sur le chemin du J2.", person: "Sofie", mapsQuery: "Svenskt+Tenn+Strandvägen+Stockholm" },
                { emoji: "🏠", name: "Tambur", addr: "Skånegatan 79", color: "teal", body: "Petite boutique déco-maison de SoFo, très bien vue, à 200 m de l'appart.", person: "Sofie", mapsQuery: "Tambur+Skånegatan+Stockholm" }
              ]
            },
            {
              label: "👕 Mode",
              cards: [
                { emoji: "👔", name: "Grandpa", addr: "Södermannagatan 21", color: "coral", body: "L'enseigne culte de SoFo : fringues, vintage, design, livres, disques. Le concept-store du quartier.", person: "Sofie", mapsQuery: "Grandpa+Södermannagatan+Stockholm" },
                { emoji: "🌱", name: "Dedicated", addr: "Götgatan", color: "emerald", body: "Marque suédoise éthique, coton bio, imprimés graphiques. Bien pour les t-shirts des enfants.", person: "Sofie", mapsQuery: "Dedicated+Götgatan+Stockholm" },
                { emoji: "👖", name: "Weekday / ARKET / APLACE", addr: "Götgatan", color: "neutral", body: "Les enseignes suédoises du groupe H&M, version bien faite. Sur Götgatan, toutes à moins de 100 m les unes des autres.", person: "Sofie", mapsQuery: "Weekday+Götgatan+Stockholm" },
                { emoji: "🏬", name: "Åhléns City", addr: "Klarabergsgatan 50", color: "neutral", body: "Le grand magasin populaire suédois, en centre-ville. Pratique s'il manque quelque chose.", person: "Sofie", mapsQuery: "Åhléns+City+Stockholm" }
              ]
            }
          ],
          infoboxes: [
            { color: "amber", title: "Le mode d'emploi", items: [
              "<b>Il y a une vingtaine d'adresses ici. On n'en fera pas cinq.</b> Elles sont là pour savoir ce qu'il y a autour de nous quand on passe devant, pas pour être cochées.",
              "Les boutiques du dimanche ouvrent tard (11h–12h) et ferment tôt (16h–17h).",
              "<b>Attention aux \"loppis\" en ville :</b> ce ne sont pas les brocantes de campagne de Södra Kärr, mais des chaînes caritatives type Emmaüs. Bien, mais un exercice différent."
            ]}
          ]
        },
        {
          label: "🌳 Aires de Jeu — la réserve",
          sections: [
            {
              label: "🌳 À dégainer quand il faut une pause",
              cards: [
                { emoji: "🌿", name: "Vitabergsparken", addr: "Södermalm — 5 min à pied", color: "teal", body: "La colline de SoFo : jeux, pelouses, vue, théâtre en plein air l'été (concerts gratuits le vendredi soir).", verdict: "Le parc du quotidien — le plus proche de l'appart.", mapsQuery: "Vitabergsparken+Stockholm" },
                { emoji: "🎨", name: "Bryggartäppan", addr: "Södermalm — 8 min", color: "coral", body: "Aire thématique reconstituant un quartier ancien en miniature : petites maisons, ruelles, jeux d'imagination. Calme et originale.", verdict: "La plus belle de Södermalm.", person: "Sofie", mapsQuery: "Bryggartäppan+lekplats+Stockholm" },
                { emoji: "🎢", name: "Stora Blecktornsparken", addr: "Södermalm — 8 min", color: "teal", body: "Tyrolienne, ping-pong, basket, petits animaux. La tyrolienne fait toute la différence.", person: "Sofie", mapsQuery: "Stora+Blecktornsparken+Stockholm" },
                { emoji: "🧗", name: "Ivar Los Park", addr: "Mariaberget — 20 min", color: "violet", body: "Aire inspirée d'Astrid Lindgren, sur les hauteurs. Escalade, toboggan, et une vue panoramique sur la ville.", verdict: "À combiner avec Monteliusvägen — c'est à 200 m.", person: "Sofie", mapsQuery: "Ivar+Los+park+Stockholm" },
                { emoji: "🐉", name: "Drakenbergsparken", addr: "Tanto — 25 min", color: "teal", body: "Dragon géant qui crache de l'eau quand on actionne un bouton. Dans le grand parc de Tanto, avec plage sur le Mälaren et minigolf.", verdict: "Le coup de cœur si on a une demi-journée.", mapsQuery: "Drakenbergsparken+Stockholm" },
                { emoji: "🐻", name: "BAMSE — Högbergsgatan 32", addr: "Södermalm", color: "amber", body: "Petite aire sur le thème de Bamse, l'ours des BD suédoises que les enfants vont croiser partout.", person: "Sofie", mapsQuery: "Högbergsgatan+32+lekplats+Stockholm" },
                { emoji: "🛝", name: "Ostparken", addr: "Södermalm", color: "neutral", body: "Aire de quartier tranquille, côté ouest de Södermalm.", person: "Sofie", mapsQuery: "Ostparken+lekplats+Stockholm" },
                { emoji: "⚓", name: "Anders Franzéns park", addr: "Djurgården sud", color: "teal", body: "Sur l'île, côté sud — pratique le jour du Vasa. Nommée d'après l'homme qui a retrouvé l'épave.", person: "Sofie", mapsQuery: "Anders+Franzéns+park+Stockholm" },
                { emoji: "🏗", name: "Tessinparken", addr: "Östermalm", color: "violet", body: "Mini-ville années 1930 : maisons, grue, tram vintage. Unique en son genre.", verdict: "Programmée le lundi du départ, sur la route de Täby.", mapsQuery: "Tessinparken+Stockholm" },
                { emoji: "🔧", name: "Mulle Mecks lekpark", addr: "Solna / Järva", color: "amber", body: "Le grand parc thématique du bricoleur Mulle Meck : avion, bateau, voiture à escalader. Plus loin, mais une vraie destination.", person: "Sofie", mapsQuery: "Mulle+Mecks+lekpark+Solna" }
              ]
            }
          ],
          infoboxes: [
            { color: "green", title: "La règle", items: [
              "<b>Aucune aire de jeu n'est programmée dans les journées.</b> Elles sont là pour être sorties du chapeau quand les enfants saturent ou qu'on a besoin de s'asseoir vingt minutes.",
              "Toutes sont gratuites. Carte interactive complète : <b>parker.stockholm</b>",
              "<b>Jours de pluie :</b> Andy's Lekland (Sickla, ~15 min en SL) ou Leos Lekland — ~100–150 SEK/enfant, adultes gratuits."
            ]}
          ]
        },
        {
          label: "🎟 Les payants — et ce qu'ils valent",
          sections: [
            {
              label: "🎟 Arbitrages",
              cards: [
                { emoji: "🚢", name: "Vasamuseet", addr: "Galärvarvsvägen 14, Djurgården", price: "480 SEK / 4 pers", color: "emerald", body: "Le navire de 1628 remonté intact. Enfants gratuits, adultes ~240 SEK. Expo <b>James Cameron</b> en ce moment.", verdict: "Le seul vrai must. Réserver en ligne.", mapsQuery: "Vasamuseet+Stockholm" },
                { emoji: "🦌", name: "Skansen", addr: "Djurgårdsslätten 49–51", price: "610 SEK / 4 pers", color: "teal", body: "Musée en plein air + parc animalier nordique + village de maisons anciennes. Une journée entière, par beau temps.", verdict: "Le gros billet du séjour, et il les vaut.", mapsQuery: "Skansen+Stockholm" },
                { emoji: "📸", name: "Fotografiska", addr: "Stadsgårdshamnen 22", price: "440 SEK / 2 adultes", color: "violet", body: "Musée de la photo au bord de l'eau. Enfants gratuits. Café panoramique au dernier étage avec la plus belle vue intérieure de la ville.", verdict: "Gardé en plan pluie — les expos sont toujours bonnes, mais l'intérêt pour des 7 ans est incertain.", person: "Sofie", mapsQuery: "Fotografiska+Stockholm" },
                { emoji: "⭐", name: "Junibacken", addr: "Galärvarvsvägen 8, Djurgården", price: "870 SEK / 4 pers", color: "amber", body: "L'univers d'Astrid Lindgren : Story Train suspendu, Villa Villekulla de Fifi Brindacier, scènes des livres. Entièrement couvert.", verdict: "En plan pluie uniquement. Argument pour : c'est l'auteure de Nils Holgersson, comme notre ferry.", warn: "870 SEK pour 4, c'est le billet le plus cher du séjour pour environ 2h30 de visite.", mapsQuery: "Junibacken+Stockholm" },
                { emoji: "⛵", name: "Bateau Fjäderholmarna", addr: "Départ Slussen ou Nybroplan", price: "~600 SEK / 4 pers", color: "neutral", body: "L'île la plus proche de l'archipel, 25 min de traversée. Quelques maisons, un café, des rochers, une petite plage.", verdict: "Plan backup pour une demi-journée ensoleillée sans idée. Pas une priorité.", warn: "Alternative gratuite : les ferries-bus SL sont inclus dans le pass et traversent déjà la baie.", mapsQuery: "Fjäderholmarna+Stockholm" },
                { emoji: "🎡", name: "Gröna Lund", addr: "Djurgården", price: "720–2 280 SEK", color: "red", body: "Le parc d'attractions de Djurgården. 720 SEK la simple entrée, 2 280 SEK avec les attractions.", warn: "Écarté — beaucoup trop cher pour ce que c'est.", mapsQuery: "Gröna+Lund+Stockholm" }
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
                { emoji: "🛒", name: "Willys", color: "emerald", body: "Le moins cher de Suède. <b>Priorité absolue</b> pour les courses de la semaine.", verdict: "Le meilleur rapport qualité-prix.", mapsQuery: "Willys+Södermalm+Stockholm" },
                { emoji: "🛒", name: "Lidl", color: "neutral", body: "Compétitif, bon pour les snacks et les basiques.", mapsQuery: "Lidl+Södermalm+Stockholm" },
                { emoji: "🛒", name: "Coop / Hemköp", addr: "Skånegatan–Ringen", color: "amber", body: "Les plus proches de l'appart — pour le dépannage et le premier soir.", mapsQuery: "Coop+Skånegatan+Stockholm" },
                { emoji: "🏪", name: "ICA Nära", color: "amber", body: "Pratique mais cher.", warn: "Ne pas faire les courses de la semaine ici.", mapsQuery: "ICA+Nära+Södermalm+Stockholm" }
              ]
            }
          ],
          infoboxes: [
            { color: "green", title: "Bonne nouvelle 2026", items: [
              "La TVA suédoise sur les aliments est passée de 12% à 6% en avril 2026 — les courses sont sensiblement moins chères que l'an dernier."
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
      banner: { accent: "emerald", badge: "Budget", title: "~700 € pour 5 nuits", sub: "Hors hébergement — tarifs relevés sur les sites officiels" },
      tables: [
        {
          label: "🚇 Transport & Parking",
          headers: ["Poste", "Détail", "SEK", "€"],
          rows: [
            ["Transport SL", "2 pass 7 jours (enfants gratuits)", "1 000 SEK", "~91 €"],
            ["Parking rue (taxa 3)", "2 rotations 24 h · gratuit soirs et dimanche", "690 SEK", "~63 €"],
            ["Trängselskatt", "Départ lun 3/08 (basse saison, Epass24)", "~40 SEK", "~4 €"]
          ],
          footer: ["Sous-total", "~1 730 SEK (~158 €)"]
        },
        {
          label: "🎟 Entrées — le programme",
          headers: ["Poste", "Détail", "SEK", "€"],
          rows: [
            ["Vasamuseet", "2A (enfants gratuits)", "480 SEK", "~44 €"],
            ["Skansen", "2A + 2E — la grande journée", "610 SEK", "~55 €"]
          ],
          footer: ["Sous-total", "1 090 SEK (~99 €)"]
        },
        {
          label: "🌧 Entrées — si le temps l'impose",
          headers: ["Poste", "Détail", "SEK", "€"],
          rows: [
            ["Junibacken", "2A + 2E — plan pluie", "870 SEK", "~79 €"],
            ["Fotografiska", "2A (enfants gratuits) — plan pluie", "440 SEK", "~40 €"],
            ["Bateau Fjäderholmarna", "Backup beau temps — non prioritaire", "600 SEK", "~55 €"]
          ],
          footer: ["Si tout est activé", "+1 910 SEK (~174 €)"]
        },
        {
          label: "🍽 Repas",
          headers: ["Poste", "Détail", "SEK", "€"],
          rows: [
            ["Courses semaine", "Petit-déj + pique-niques + 5 dîners maison", "~1 500 SEK", "~136 €"],
            ["Déjeuners dehors", "3 midis (dagens lunch, pizza, food hall)", "~1 400 SEK", "~127 €"],
            ["Brunch Urban Deli", "L'exception du dimanche", "~650 SEK", "~59 €"],
            ["Apéros & goûters", "Terrasses, glaces, fika", "~700 SEK", "~64 €"]
          ],
          footer: ["Sous-total", "~4 250 SEK (~386 €)"]
        },
        {
          label: "🛍 Divers",
          headers: ["Poste", "Détail", "SEK", "€"],
          rows: [
            ["Seconde main & souvenirs", "Budget flottant", "~400 SEK", "~36 €"],
            ["Imprévus", "", "~300 SEK", "~27 €"]
          ]
        },
        {
          label: "📊 Total",
          headers: ["", "Total"],
          rows: [],
          footer: ["PROGRAMME DE BASE", "~7 770 SEK (~706 €)"]
        }
      ],
      note: "Prix relevés sur les sites officiels (les estimations automatiques les sous-évaluent systématiquement). Écarts par rapport à la version précédente du guide : Pelikan supprimé (−82 €), parking corrigé de 200 € budgétés à 63 € réels (−137 €), Skansen ajouté (+55 €), Junibacken sorti du programme de base (−79 €). Si la semaine est pluvieuse et qu'on active Junibacken et Fotografiska, compter ~825 €."
    }
  ],

  // Catégories du carnet (carte plein écran) — issues du KML de Sophie
  catColors: {
    food: '#F97316',
    see:  '#8B5CF6',
    shop: '#EC4899',
    play: '#10B981',
    home: '#6B7280'
  },
  catLabels: {
    food: '☕ Cafés & Restos',
    see:  '🎯 Activités',
    shop: '🛍 Shopping',
    play: '🌳 Aires de jeu',
    home: '🏠 Logement'
  },

  // Carnet complet de Sophie — affiché uniquement sur la carte plein écran,
  // filtrable par catégorie. Les mini-cartes des journées utilisent mapData.
  carnet: [
    // ── ☕ Cafés & Restos ──
    { p:[59.3169083,18.0627779], label:'☕ Café Drop', cat:'food' },
    { p:[59.3163344,18.0640459], label:'☕ Johan & Nyström', cat:'food' },
    { p:[59.3125,18.0825],        label:'🥐 Urban Deli Nytorget', cat:'food' },
    { p:[59.314817,18.0742225],   label:'🍺 Kvarnen', cat:'food' },
    { p:[59.3343255,18.0692624],  label:'🍽 MOOD Foodhall', cat:'food' },
    { p:[59.3395366,18.0687889],  label:'🥐 Café Saturnus', cat:'food' },
    { p:[59.313641,18.0743231],   label:'🍕 800 Grader', cat:'food' },
    { p:[59.3159496,18.0817761],  label:'🍳 Greasy Spoon', cat:'food' },
    { p:[59.3144382,18.0797623],  label:'🚲 Cykelcafé Le Mond', cat:'food' },
    { p:[59.3152576,18.0858978],  label:'☕ Caffeine and Cravings', cat:'food' },
    { p:[59.316871,18.064742],    label:'🪜 En Halv Trappa Ner', cat:'food' },
    { p:[59.3137142,18.0865527],  label:'🌸 Pom et Flora', cat:'food' },
    { p:[59.3249363,18.0703216],  label:'🍫 Chokladkoppen', cat:'food' },
    { p:[59.3249056,18.0703528],  label:'☕ Kaffekoppen', cat:'food' },
    { p:[59.3238624,18.0696262],  label:'🍰 Kladdkakan', cat:'food' },
    { p:[59.3252804,18.0966757],  label:'🌿 Blå Porten', cat:'food' },
    { p:[59.3285265,18.1024739],  label:'🏡 Flickorna Helin', cat:'food' },
    { p:[59.3353569,18.0597871],  label:'🍴 Drottninghof', cat:'food' },
    // ── 🎯 Activités & vues ──
    { p:[59.3263227,18.1058583],  label:'🦌 Skansen', cat:'see' },
    { p:[59.3256984,18.0718788],  label:'🏰 Gamla Stan', cat:'see' },
    { p:[59.331805,18.0881769],   label:'⛵ Strandvägen', cat:'see' },
    { p:[59.3280233,18.0913964],  label:'🚢 Musée Vasa', cat:'see' },
    { p:[59.320697,18.0596868],   label:'🌇 Monteliusvägen', cat:'see' },
    { p:[59.3179619,18.0848268],  label:'📸 Fotografiska', cat:'see' },
    { p:[59.3322879,18.0771292],  label:'⛴ Bateau Fjäderholmarna (Stromma)', cat:'see' },
    { p:[59.3218969,18.0751578],  label:'⛴ Bateau (Fjäderholmslinjen)', cat:'see' },
    { p:[59.3268215,18.0717194],  label:'👑 Palais Royal', cat:'see' },
    { p:[59.3185,18.0777],        label:'🌅 Mosebacke', cat:'see' },
    // ── 🛍 Shopping ──
    { p:[59.3322699,18.0614198],  label:'🏬 Åhléns', cat:'shop' },
    { p:[59.3128649,18.0809299],  label:'👔 Grandpa', cat:'shop' },
    { p:[59.3133642,18.0837558],  label:'👗 Lisa Larsson', cat:'shop' },
    { p:[59.3166692,18.0721453],  label:'📦 Granit', cat:'shop' },
    { p:[59.3166773,18.0721849],  label:'🎨 Designtorget', cat:'shop' },
    { p:[59.3323876,18.0790962],  label:'🌺 Svenskt Tenn', cat:'shop' },
    { p:[59.3152702,18.0809549],  label:'🏠 Tambur', cat:'shop' },
    { p:[59.3177293,18.0523387],  label:'♻️ Myrorna (Hornsgatan)', cat:'shop' },
    { p:[59.3175451,18.0527494],  label:'🕰 Brocante', cat:'shop' },
    { p:[59.3188952,18.0615803],  label:'♻️ Stadsmission Mariatorget', cat:'shop' },
    { p:[59.3194148,18.070426],   label:'♻️ Artikel2 Slussen', cat:'shop' },
    { p:[59.3127264,18.0824033],  label:'♻️ Stadsmission Skånegatan', cat:'shop' },
    { p:[59.3106875,18.0786945],  label:'➕ Croix-Rouge', cat:'shop' },
    { p:[59.3107502,18.0753211],  label:'♻️ Myrorna (Söder)', cat:'shop' },
    { p:[59.324512,18.0739998],   label:'🛍 Österlånggatan', cat:'shop' },
    { p:[59.3344074,18.0633072],  label:'🎨 Designtorget (City)', cat:'shop' },
    { p:[59.3330052,18.0632813],  label:'♻️ Myrorna Mäster Samuelsg.', cat:'shop' },
    { p:[59.316986,18.071792],    label:'👖 ARKET', cat:'shop' },
    { p:[59.3195342,18.0705198],  label:'🏛 Design House Stockholm', cat:'shop' },
    { p:[59.3187998,18.0708578],  label:'👕 Winston & Elle', cat:'shop' },
    { p:[59.317745,18.071389],    label:'🌱 Dedicated', cat:'shop' },
    { p:[59.3170959,18.0716777],  label:'👟 APLACE', cat:'shop' },
    { p:[59.3176603,18.0717365],  label:'👖 Weekday', cat:'shop' },
    { p:[59.3243119,18.0702032],  label:'🛍 Västerlånggatan', cat:'shop' },
    // ── 🌳 Aires de jeu ──
    { p:[59.3103099,18.0799401],  label:'🎨 Bryggartäppan', cat:'play' },
    { p:[59.3071608,18.0869078],  label:'🎢 Stora Blecktornsparken', cat:'play' },
    { p:[59.3115018,18.104464],   label:'⚓ Anders Franzéns park', cat:'play' },
    { p:[59.3107667,18.0661442],  label:'🛝 Ostparken', cat:'play' },
    { p:[59.3168773,18.073779],   label:'🐻 BAMSE (Högbergsg. 32)', cat:'play' },
    { p:[59.3204407,18.0613399],  label:'🧗 Ivar Los Park', cat:'play' },
    { p:[59.3354261,18.0879775],  label:'🛝 Krubbans lekplats', cat:'play' },
    { p:[59.3818243,17.9902143],  label:'🔧 Mulle Mecks lekpark', cat:'play' },
    { p:[59.3484011,18.0356497],  label:'🛝 Norra Stationsparken', cat:'play' },
    { p:[59.3138,18.0788],        label:'🌿 Vitabergsparken', cat:'play' },
    { p:[59.3120,18.0495],        label:'🐉 Drakenbergsparken / Tanto', cat:'play' },
    { p:[59.3305,18.0540],        label:'💦 Rålambshovsparken', cat:'play' },
    // ── 🏠 Logement ──
    { p:[59.3144317,18.0908716],  label:'🏠 Åsögatan 190', cat:'home' }
  ],

  mapData: {
    1: { center:[59.3145, 18.085], zoom:15, pts:[
      { p:[59.3144, 18.0909], label:'🏠 Airbnb — Åsögatan 190' },
      { p:[59.3155, 18.0818], label:'☕ Nytorget' },
      { p:[59.3138, 18.0788], label:'🌿 Vitabergsparken' },
      { p:[59.3153, 18.0859], label:'☕ Caffeine and Cravings' },
      { p:[59.3153, 18.0810], label:'🏠 Tambur' }
    ]},
    2: { center:[59.326, 18.090], zoom:14, pts:[
      { p:[59.3280, 18.0914], label:'🚢 Vasamuseet' },
      { p:[59.3267, 18.0917], label:'⭐ Junibacken (plan pluie)' },
      { p:[59.3253, 18.0967], label:'🌿 Blå Porten' },
      { p:[59.3285, 18.1025], label:'🏡 Flickorna Helin' },
      { p:[59.3115, 18.1045], label:'⚓ Anders Franzéns park' },
      { p:[59.3318, 18.0882], label:'⛵ Strandvägen' },
      { p:[59.3324, 18.0791], label:'🌺 Svenskt Tenn' },
      { p:[59.3179, 18.0848], label:'📸 Fotografiska (plan pluie)' }
    ]},
    3: { center:[59.3245, 18.070], zoom:15, pts:[
      { p:[59.3257, 18.0719], label:'🏰 Gamla Stan — Stortorget' },
      { p:[59.3268, 18.0717], label:'👑 Palais Royal' },
      { p:[59.3249, 18.0703], label:'🍫 Café Chokladkoppen' },
      { p:[59.3239, 18.0696], label:'🍰 Kladdkakan' },
      { p:[59.3245, 18.0740], label:'🛍 Österlånggatan' },
      { p:[59.3282, 18.0543], label:'🎨 T-Centralen Bleu' },
      { p:[59.3194, 18.0704], label:'♻️ Artikel2 Slussen' },
      { p:[59.3103, 18.0799], label:'🎨 Bryggartäppan' }
    ]},
    4: { center:[59.3255, 18.100], zoom:14, pts:[
      { p:[59.3263, 18.1059], label:'🦌 Skansen' },
      { p:[59.3253, 18.0967], label:'🌿 Blå Porten' },
      { p:[59.3280, 18.0914], label:'🚢 Vasamuseet' }
    ]},
    5: { center:[59.3160, 18.070], zoom:14, pts:[
      { p:[59.3155, 18.0818], label:'☕ Urban Deli Nytorget' },
      { p:[59.3137, 18.0866], label:'🌸 Café Pom et Flora' },
      { p:[59.3129, 18.0809], label:'👔 Grandpa Södermannagatan' },
      { p:[59.3134, 18.0838], label:'👗 Lisa Larsson Second Hand' },
      { p:[59.3167, 18.0721], label:'🎨 Designtorget & Granit' },
      { p:[59.3127, 18.0824], label:'♻️ Stadsmission Skånegatan' },
      { p:[59.3185, 18.0777], label:'🌅 Mosebacke' },
      { p:[59.3125, 18.0830], label:'🎢 Stora Blecktornsparken' },
      { p:[59.3207, 18.0597], label:'🌇 Monteliusvägen' },
      { p:[59.3204, 18.0613], label:'🧗 Ivar Los Park' },
      { p:[59.3169, 18.0628], label:'☕ Café Drop' }
    ]},
    6: { center:[59.39, 18.09], zoom:11, pts:[
      { p:[59.3433, 18.0954], label:'🏗 Tessinparken' },
      { p:[59.4621, 18.1297], label:'🛒 ICA Maxi Arninge' },
      { p:[59.4451, 18.0514], label:'🏡 Maison Täby — Klövjevägen 33' }
    ]}
  },

  dayColors: { 1:'#F59E0B', 2:'#F97316', 3:'#7C3AED', 4:'#0D9488', 5:'#059669', 6:'#64748B' }
};
