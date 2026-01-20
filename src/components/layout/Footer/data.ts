import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  type LucideIcon,
} from "lucide-react";

export type FooterLink = {
  href: string;
  labelKey: string;
  external?: boolean;
  localeCondition?: (locale: string) => boolean;
};

export type FooterSection = {
  titleKey: string;
  links: FooterLink[];
  className?: string;
};

export type SocialMedia = {
  icon: LucideIcon;
  label: string;
  url: string;
};

export const footerCertifications = [
  "front-runners.png",
  "forbes-ai.png",
  "aicpa-soc.png",
  "sap-partner.png",
  "BadgeISO27001.png",
  "oracle-cloud.png",
  "iso-9001.png",
  "asset-management-best-meets-requirements.png",
] as const;

export const footerSocialMedias: SocialMedia[] = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/tractian/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    url: "https://www.facebook.com/tractian",
  },
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/tractian/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    url: "https://www.youtube.com/c/TRACTIAN",
  },
];

export const footerSections: FooterSection[] = [
  {
    titleKey: "sections.onlineMonitoring",
    links: [
      {
        href: "/solucoes/monitoramento-condicao/smart-trac",
        labelKey: "overview",
      },
      {
        href: "/solucoes/monitoramento-condicao/insights-e-diagnostico",
        labelKey: "insightsDiagnostics",
      },
      {
        href: "/solucoes/monitoramento-condicao/ativos-monitorados",
        labelKey: "monitoredAssets",
      },
      {
        href: "/sensor-de-vibracao-industrial/analise-de-vibracao",
        labelKey: "vibrationAnalysis",
      },
      {
        href: "/sensor-de-vibracao-industrial/supervisorio",
        labelKey: "supervisory",
      },
    ],
  },
  {
    titleKey: "sections.energyManagement",
    links: [
      { href: "/solucoes/oee/leitor-de-plc", labelKey: "overview" },
      {
        href: "/asset-performance-management",
        labelKey: "assetPerformanceManagement",
      },
      {
        href: "/solucoes/oee/relatorios-de-energia",
        labelKey: "energyReports",
      },
      { href: "/solucoes/oee/leitor-de-plc", labelKey: "processMonitoring" },
      { href: "/solucoes/oee/energy-trac", labelKey: "energyEfficiency" },
      {
        href: "/solucoes/oee/monitoramento-de-corrente",
        labelKey: "currentMonitoring",
      },
      { href: "/energy-trac/supervisorio", labelKey: "supervisory" },
    ],
  },
  {
    titleKey: "sections.assetManagement",
    links: [
      { href: "/cmms/cmms-tractian", labelKey: "overview" },
      {
        href: "/solucoes/cmms/planejamento-e-programacao",
        labelKey: "planningScheduling",
      },
      {
        href: "/solucoes/cmms/dashboard-indicadores-manutencao",
        labelKey: "maintenanceDashboard",
      },
      { href: "/solucoes/cmms/geolocalizacao", labelKey: "geolocation" },
      {
        href: "/solucoes/cmms/gerenciamento-de-ordens-de-servico",
        labelKey: "workOrderManagement",
      },
      {
        href: "/solucoes/cmms/controle-de-estoque",
        labelKey: "inventoryControl",
      },
      {
        href: "/cmms/procedimentos-automaticos",
        labelKey: "automaticProcedures",
      },
      { href: "/solucoes/cmms/aplicativo-movel", labelKey: "mobileApp" },
    ],
  },
  {
    titleKey: "sections.support",
    className: "lg:max-w-[172px]",
    links: [
      {
        href: "/contato",
        labelKey: "contactUs",
        localeCondition: (locale) => locale !== "es",
      },
      {
        href: "https://faq.tractian.com/pt-BR/",
        labelKey: "helpCenter",
        external: true,
      },
      { href: "/politica/privacidade", labelKey: "policies" },
      { href: "/termos-de-uso", labelKey: "termsOfUse" },
      {
        href: "https://trust.tractian.com/",
        labelKey: "trustCenter",
        external: true,
      },
    ],
  },
];

export const aboutSection: FooterSection = {
  titleKey: "sections.about",
  links: [
    { href: "/sobre", labelKey: "aboutUs" },
    {
      href: "https://careers.tractian.com/",
      labelKey: "careers",
      external: true,
    },
    { href: "/casos-de-estudo", labelKey: "caseStudies" },
    { href: "/imprensa", labelKey: "press" },
    { href: "/comunidade", labelKey: "community" },
  ],
};

export const downloadSection: FooterSection = {
  titleKey: "sections.downloadApp",
  links: [
    {
      href: "https://apps.apple.com/app/tractian/id1590498655",
      labelKey: "appleStore",
      external: true,
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.tractian.app&pli=1",
      labelKey: "googlePlayStore",
      external: true,
    },
    {
      href: "https://store.sap.com/dcp/en/product/display-2001016127_live_v1/tractian-ai-machine-intelligence-software",
      labelKey: "sapStore",
      external: true,
    },
  ],
};
