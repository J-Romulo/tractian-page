import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "pt"],
  defaultLocale: "pt",
  localePrefix: "as-needed",
  pathnames: {
    "/": {
      en: "/who-we-serve/plant-manager",
      es: "/who-we-serve/gerente-de-planta",
      pt: "/solucoes-para-gerentes-industriais",
    },
  },
});
