export const siteConfig = {
  name: "Karmanaut",
  description:
    "Karmanaut hjælper virksomheder og organisationer med at gøre gode ting med gode mennesker.",
  heroDescription:
    "Karmanaut hjælper virksomheder og organisationer med at gøre gode ting med gode mennesker. Gennem rådgivning, workshops, foredrag, projekt udvikling og kreative koncepter skaber vi karma fra det karmanautiske kontor i Aalborg.",
  karmanauterneDescription:
    "Du tager 20 års erfaring som selvstændig i reklamebranchen og tilføjer erfaringer med at konceptudvikle, opbygge og drifte Danmarks Lykkeligste Håndboldliga. Karmanauterne Mikael & Charlotte Espensen er nogle af hovedkræfterne bag LykkeLiga og har på egen krop mærket, hvordan karma kommer tilbage.",
  company: "Karmanaut ApS",
  cvr: "46588711",
  address: {
    street: "Herskindsgade 15",
    city: "9000 Aalborg",
  },
  email: "karma@karmanaut.dk",
  phone: "28 86 45 88",
  phoneHref: "+4528864588",
  footerTagline: "Lad os snakke sammen... Det bliver karmanautisk!",
  logoHorizontal: "/Karmanaut_ID_horisontal.svg",
  logoNegative: "/karmanaut_logo_negativ.svg",
  logoNaut: "/Kun_naut.svg",
  /** Forside hero astronaut — flip `useAnimatedNaut` to disable animation on desktop; mobile always uses the static SVG */
  forsideHeroNaut: {
    useAnimatedNaut: true,
    static: "/Kun_naut.svg",
    animated: "/animate/karmanaut_animer_done.webm",
  },
  heart: "/hjerte.svg",
  icons: {
    raadgivning: "/ikoner/raadgivning.png",
    workshops: "/ikoner/workshops.png",
    projektudvikling: "/ikoner/projektudvikling.png",
    kreativeKoncepter: "/ikoner/Kreatekoncepter.png",
    faellesskab: "/ikoner/faellesskab.png",
  },
  photos: {
    mikaelCharlotte: "/foto/mik_cha_square.jpg",
    karmanautMoon: "/foto/karmanaut_moon.png",
    karmanautKontakt: "/karmanaut_kontakt2.png",
    karmaVerden: "/karma_verden.png",
    kayaFamily: "/foto/mogcmedkaya.jpg",
    christiansborg: "/foto/christiansborg.jpeg",
  },
} as const;
