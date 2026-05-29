import { isBtsEditorialOnline, isFilmAccessible, isFilmsEditorialOnline } from "@data/site-control";

export type NavItem = {
  label: string;
  href?: string;
  slug?: string;
  visibility?: "bts" | "films";
};

const allFilmNavigation: NavItem[] = [
  { label: "IO NON MI FERMO", href: "/projects/inmf", slug: "inmf" },
  { label: "PROSERPINA", href: "/projects/proserpina", slug: "proserpina" },
  { label: "ISACCO", href: "/projects/isacco", slug: "isacco" },
  { label: "L’AMORE CI DIVIDERÀ", href: "/projects/lacd", slug: "lacd" },
];

export const filmNavigation: NavItem[] = isFilmsEditorialOnline()
  ? allFilmNavigation.filter((item) => item.slug && isFilmAccessible(item.slug))
  : [];

const allMainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Films", href: "/projects/inmf", visibility: "films" },
  { label: "In Development", href: "/new-projects/" },
  { label: "Behind the Process", href: "/gallery/", visibility: "bts" },
  { label: "Who We Are", href: "/about/" },
  { label: "Contact Us", href: "/contact/" },
];

export const mainNavigation: NavItem[] = allMainNavigation.filter((item) => {
  if (item.visibility === "bts") {
    return isBtsEditorialOnline();
  }

  if (item.visibility === "films") {
    return isFilmsEditorialOnline();
  }

  return true;
});
