import siteControl from "./site-control.json";

type SiteControl = typeof siteControl;
type LanguageCode = keyof SiteControl["languages"];
export type FilmSlug = keyof SiteControl["films"];

export const getBtsEditorialStatus = () => siteControl.pages.bts.editorial_status;

export const isBtsEditorialOnline = () => getBtsEditorialStatus() === "ONLINE";

export const getFilmsEditorialStatus = () => siteControl.pages.films.editorial_status;

export const isFilmsEditorialOnline = () => getFilmsEditorialStatus() === "ONLINE";

export const getFilmEditorialStatus = (slug: string) =>
  siteControl.films[slug as FilmSlug]?.editorial_status ?? "OFFLINE";

export const isFilmEditorialOnline = (slug: string) => getFilmEditorialStatus(slug) === "ONLINE";

export const isFilmAccessible = (slug: string) => isFilmsEditorialOnline() && isFilmEditorialOnline(slug);

export const getHomeNewsEditorialStatus = () => siteControl.pages.home.blocks.news.editorial_status;

export const isHomeNewsEditorialOnline = () => getHomeNewsEditorialStatus() === "ONLINE";

export const activeLanguages = () =>
  (Object.entries(siteControl.languages) as [LanguageCode, { active: boolean }][])
    .filter(([, config]) => config.active)
    .map(([language]) => language);
