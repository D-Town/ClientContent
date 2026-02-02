import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kcdigitalexperts.de";

const routes = [
  "",
  "/shop",
  "/aboutUs",
  "/contact",
  "/imprint",
  "/privacy",
  "/terms",
  "/withdrawl",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );
}
