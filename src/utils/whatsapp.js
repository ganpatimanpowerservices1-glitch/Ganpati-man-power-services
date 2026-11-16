import { siteConfig } from "../data/siteConfig";

export const waLink = (topic = "your services") =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello ${siteConfig.name}, I am interested in ${topic}.`
  )}`;