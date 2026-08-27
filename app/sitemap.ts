import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://casa-in.vercel.app";
  const now = new Date();
  const routes = [
    "/",
    "/cucine",
    "/camere",
    "/camerette",
    "/living",
    "/promozioni",
    "/progettazione",
    "/showroom",
    "/contatti",
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
