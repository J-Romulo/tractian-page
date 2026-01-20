import { Phone } from "lucide-react";
import Logo from "../../icons/Logo";
import { useLocale, useTranslations } from "next-intl";
import BackToTopButton from "../../ui/BackToTopButton";
import Link from "next/link";
import {
  aboutSection,
  downloadSection,
  footerCertifications,
  FooterSection,
  footerSections,
  footerSocialMedias,
} from "./data";
import { Chevron } from "../../icons/Chevron";

function FooterLinkItem({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <p className="font-light text-slate-50 text-sm text-body-sm hover:text-blue-300 hover:brightness-125">
          {label}
        </p>
      </Link>
    </li>
  );
}

function FooterSectionComponent({
  section,
  locale,
  i18n,
}: {
  section: FooterSection;
  locale: string;
  i18n: (key: string) => string;
}) {
  const title = i18n(`${section.titleKey}.title`);
  const filteredLinks = section.links.filter(
    (link) => !link.localeCondition || link.localeCondition(locale),
  );

  return (
    <article className={`sm:w-full sm:col-span-1 ${section.className ?? ""}`}>
      <p className="mb-2 hidden font-semibold uppercase text-slate-50 text-body-md sm:block">
        {title}
      </p>
      <button
        className="mb-2 flex w-full items-center justify-between border-b border-blue-900 pb-4 sm:hidden"
        type="button"
      >
        <h6 className="text-ellipsis whitespace-nowrap font-bold uppercase text-slate-50 text-body-sm">
          {title}
        </h6>
        <Chevron className={"h-3 w-3 text-blue-50 transition-all"} />
      </button>
      <ul className="hidden gap-2 sm:grid sm:grid-cols-1">
        {filteredLinks.map((link) => (
          <FooterLinkItem
            key={link.href + link.labelKey}
            href={link.href}
            label={i18n(`${section.titleKey}.links.${link.labelKey}`)}
            external={link.external}
          />
        ))}
      </ul>
    </article>
  );
}

export default function Footer() {
  const i18n = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-blue-950 px-4 py-12 lg:py-20 h-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <section className="mb-8 flex flex-col gap-y-8 lg:mb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center justify-evenly gap-4 lg:justify-start lg:gap-x-6">
            {footerCertifications.map((img) => (
              <img
                key={img}
                src={`https://imgix.tractian.com/website/components/footer/v2/${img}`}
                alt=""
                className="w-15"
              />
            ))}
          </div>
          <BackToTopButton label={i18n("backToTop")} />
        </section>

        <section className="mb-12 text-[14px] lg:text-[16px] grid grid-cols-1 justify-between gap-y-3 sm:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:flex lg:grid-cols-5 lg:justify-between lg:gap-x-8 lg:gap-y-12">
          {footerSections.map((section) => (
            <FooterSectionComponent
              key={section.titleKey}
              section={section}
              locale={locale}
              i18n={i18n}
            />
          ))}

          <article className="flex grid-cols-1 flex-col gap-4 sm:col-span-2 sm:grid sm:w-full sm:grid-cols-2 lg:col-span-1 lg:flex lg:flex-col lg:gap-6">
            <FooterSectionComponent
              section={aboutSection}
              locale={locale}
              i18n={i18n}
            />
            <FooterSectionComponent
              section={downloadSection}
              locale={locale}
              i18n={i18n}
            />
          </article>
        </section>

        <div className="flex flex-col-reverse justify-between gap-y-10 lg:flex-row">
          <div className="flex flex-col items-center gap-y-4 lg:items-start">
            <Logo className="w-28 lg:w-40" fill="#FFFFFF" />
            <p className="text-sm text-[12px] lg:text-[14px] uppercase text-slate-50">
              {i18n("copyright")}
              <br />
              {locale === "pt" && i18n("cnpj")}
            </p>
            <Link
              href="tel:08001102020"
              className="flex items-center text-[14px] gap-x-2 text-sm text-slate-50 hover:underline"
            >
              <Phone className="h-5 w-5" /> {i18n("phone")}
            </Link>
          </div>

          <div className="flex flex-col items-center gap-y-4 lg:items-end">
            <div className="flex gap-x-6 text-slate-50">
              {footerSocialMedias.map(({ icon: Icon, label, url }) => (
                <Link
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-blue-200 transition-colors"
                >
                  <Icon size={30} />
                </Link>
              ))}
            </div>
            <Link
              href="https://maps.app.goo.gl/PkvAXB4cdf7a4spdA"
              className="text-center text-sm text-slate-50 hover:brightness-125"
            >
              {i18n("address")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
