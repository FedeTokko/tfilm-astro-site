import { assetPath } from "@utils/assets";

export type ProjectStatus = "released" | "in-production" | "archive";

export type ProjectAsset = {
  src: string;
  alt: string;
  kind: "poster" | "banner" | "still" | "backstage" | "institutional" | "press" | "social";
};

export type ProjectVideo = {
  label: "WATCH TRAILER" | "WATCH TEASER";
  vimeoId: string;
  title: string;
};

export type Project = {
  slug: string;
  assetKey: "inmf" | "proserpina" | "isacco" | "lacd";
  title: string;
  shortTitle: string;
  year: string;
  productionOrder: number;
  status: ProjectStatus;
  byline: string;
  summary: string;
  synopsis: string | string[];
  financialSupport?: string;
  technicalInfo: string[];
  poster: ProjectAsset;
  banner: ProjectAsset;
  assets: ProjectAsset[];
  videos: ProjectVideo[];
  isPromoted?: boolean;
};

export const projects: Project[] = [
  {
    slug: "inmf",
    assetKey: "inmf",
    title: "IO NON MI FERMO",
    shortTitle: "INMF",
    year: "2026",
    productionOrder: 2026,
    status: "released",
    byline: "a film by FEDERICO TOCCHELLA & ALICE LIA",
    summary: "A Roman tragicomedy about loneliness in the age of avatars.",
    synopsis:
      "Rome, near future. Whether out of duty or habit, people meet through an app that allows them to appear in the city as holograms. Developed by the Italian government, the technology is homemade, and the avatars are clumsy and glitchy. Fabio, twenty, rejects this world where no one looks each other in the eye. But when a mysterious woman dares him to jump off a bridge, he discovers that even a hologram can suffer from vertigo.",
    financialSupport: "Financial Support: MIC (Italian Ministry of Culture), ITALIAN TAX CREDIT",
    technicalInfo: [
      "SHORTFILM - Italy / 2K - 2.35 / 30' - UNRELEASED",
      "Genre: COMEDY / SCI-FI / DRAMA",
      "Language: ITALIAN",
      "Techniques: Live Action / Animation / Digital Compositing / Digital Painting",
      "Production: TFILM",
      "Story, script and direction: FEDERICO TOCCHELLA, ALICE LIA",
      "Main Cast: EMILIO FRANCIS SCARPA, FRANCESCA ALATI",
      "Financial Support: MIC (Italian Ministry of Culture), ITALIAN TAX CREDIT",
    ],
    poster: {
      kind: "poster",
      src: assetPath("inmf", "POSTERS/poster-inmf-indie-portrait.jpg"),
      alt: "Poster for IO NON MI FERMO.",
    },
    banner: {
      kind: "banner",
      src: assetPath("inmf", "BANNERS/banner-home-inmf-sprofonda.jpg"),
      alt: "Cinematic banner for IO NON MI FERMO.",
    },
    assets: [
      {
        kind: "backstage",
        src: assetPath("inmf", "BACKSTAGE/backstage-inmf-set.jpg"),
        alt: "Backstage image for IO NON MI FERMO.",
      },
    ],
    videos: [{ label: "WATCH TRAILER", vimeoId: "1180221584", title: "IO NON MI FERMO trailer" }],
    isPromoted: true,
  },
  {
    slug: "proserpina",
    assetKey: "proserpina",
    title: "PROSERPINA",
    shortTitle: "Proserpina",
    year: "2023",
    productionOrder: 2025,
    status: "archive",
    byline: "a film by FEDERICO TOCCHELLA",
    summary: "A young woman chases a mysterious stranger through the enchanted streets of ancient Rome.",
    synopsis:
      "A young woman chases a mysterious stranger after he appears to her out of the blue, like a shadow in the night. Torn between her fear of the unknown and a burning desire to find out who he is, she goes on a fantastic journey through the enchanted streets of the ancient city of Rome. White marble sculptures come to life, arousing her deepest fears and forcing her to make a choice: trust the stranger or kill him.",
    financialSupport: "Financial Support: MIC (Italian Ministry of Culture), ITALIAN TAX CREDIT and LAZIO REGIONAL FUND",
    technicalInfo: [
      "SHORTFILM - Italy / 2K - 2.35 / 19' - UNRELEASED",
      "Genre: DRAMA / DREAMLIKE",
      "Language: ITALIAN",
      "Techniques: LIVE-ACTION / ANIMATION / COMPOSITING",
      "Production: TFILM",
      "Story, script and direction: FEDERICO TOCCHELLA",
      "Main Cast: JACQUELINE BULNES, STEFANO VONA BIANCHINI",
      "Financial Support: MIC (Italian Ministry of Culture), ITALIAN TAX CREDIT and LAZIO REGIONAL FUND",
    ],
    poster: {
      kind: "poster",
      src: assetPath("proserpina", "POSTERS/poster-proserpina-bed-A4-portrait.jpg"),
      alt: "Portrait poster for Proserpina.",
    },
    banner: {
      kind: "banner",
      src: assetPath("proserpina", "BANNERS/banner-home-proserpina-piede-plutone.jpg"),
      alt: "Cinematic banner for Proserpina.",
    },
    assets: [
      {
        kind: "still",
        src: assetPath("proserpina", "GALLERY/still-proserpina-kiss.jpg"),
        alt: "A still from Proserpina.",
      },
      {
        kind: "backstage",
        src: assetPath("proserpina", "BACKSTAGE/backstage-proserpina-clay.jpg"),
        alt: "Backstage clay image from Proserpina.",
      },
      {
        kind: "institutional",
        src: assetPath("global", "INSTITUTIONAL/institutional-logos-proserpina.png"),
        alt: "Institutional logos connected to Proserpina.",
      },
    ],
    videos: [
      { label: "WATCH TRAILER", vimeoId: "311009217", title: "Proserpina trailer" },
      { label: "WATCH TEASER", vimeoId: "536832148", title: "Proserpina teaser" },
    ],
  },
  {
    slug: "isacco",
    assetKey: "isacco",
    title: "ISACCO",
    shortTitle: "Isacco",
    year: "2013",
    productionOrder: 2013,
    status: "archive",
    byline: "a film by FEDERICO TOCCHELLA",
    summary: "A child stages Isaac's Sacrifice in a park with plasticine characters.",
    synopsis:
      "A child plays in a park with his plasticine characters moulded by himself. His favorite character is Isaac. Isaac is a little boy just like him, who dreams, hopes and confides in the world. Isaac is happy because this is the day he will accompany his father to the mountains to help him out. Isaac's father is called Abraham. The story the child is staging is \"Isaac's Sacrifice\".",
    financialSupport: "Financial Support: MIC (Italian Ministry of Culture), ITALIAN TAX CREDIT and LAZIO REGIONAL FUND",
    technicalInfo: [
      "SHORT FILM - Italy / 2013 / 2K - 2.35 / 15'",
      "Genre: DRAMA / FANTASTIC",
      "Language: ITALIAN",
      "Techniques: LIVE-ACTION / ANIMATION / COMPOSITING",
      "Production: TFILM",
      "Story, script and direction: FEDERICO TOCCHELLA",
      "Financial Support: MIC (Italian Ministry of Culture), ITALIAN TAX CREDIT and LAZIO REGIONAL FUND",
    ],
    poster: {
      kind: "poster",
      src: assetPath("isacco", "POSTERS/poster-isacco-folla-portrait.jpg"),
      alt: "Poster for Isacco.",
    },
    banner: {
      kind: "banner",
      src: assetPath("isacco", "BANNERS/banner-home-isacco-bambini.jpg"),
      alt: "Cinematic banner for Isacco.",
    },
    assets: [
      {
        kind: "still",
        src: assetPath("isacco", "GALLERY/still-isacco-folla.jpg"),
        alt: "A crowd still from Isacco.",
      },
    ],
    videos: [{ label: "WATCH TRAILER", vimeoId: "59657350", title: "Isacco trailer" }],
  },
  {
    slug: "lacd",
    assetKey: "lacd",
    title: "L'AMORE CI DIVIDERÀ",
    shortTitle: "LACD",
    year: "2009",
    productionOrder: 2009,
    status: "archive",
    byline: "a film by FEDERICO TOCCHELLA",
    summary: "A young couple lives the difficult time of incommunicability inside a frigid and oppressive house.",
    synopsis:
      "Inside a frigid and oppressive house, a young couple lives the difficult time of incommunicability. Neither of them suspects that deep inside the other lies an heavy burden, the same painful secret that is hunting each of them. An hamster. Or should I say, two hamsters.",
    financialSupport: "Financial Support: MIC (Italian Ministry of Culture), ITALIAN TAX CREDIT",
    technicalInfo: [
      "SHORT FILM - Italia / 2009 / 2K - 2.35 / 22'",
      "Genre: DRAMA / FANTASTIC",
      "Language: ITALIAN",
      "Techniques: LIVE-ACTION / ANIMATION / COMPOSITING",
      "Production: TFILM",
      "Script and direction: FEDERICO TOCCHELLA",
      "Story: FEDERICO TOCCHELLA & FULVIO NEBBIA",
      "Financial Support: MIC (Italian Ministry of Culture), ITALIAN TAX CREDIT",
    ],
    poster: {
      kind: "poster",
      src: assetPath("lacd", "POSTERS/poster-lacd-braccia-cuore-portrait.jpg"),
      alt: "Poster for L'AMORE CI DIVIDERÀ.",
    },
    banner: {
      kind: "banner",
      src: assetPath("lacd", "BANNERS/banner-home-lacd-criceto.jpg"),
      alt: "Cinematic banner for L'AMORE CI DIVIDERÀ.",
    },
    assets: [
      {
        kind: "still",
        src: assetPath("lacd", "GALLERY/still-lacd-28291.jpg"),
        alt: "A still from L'AMORE CI DIVIDERÀ.",
      },
    ],
    videos: [{ label: "WATCH TRAILER", vimeoId: "64264417", title: "L'AMORE CI DIVIDERÀ trailer" }],
  },
];

export const archiveProjects = [...projects].sort((a, b) => b.productionOrder - a.productionOrder);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
