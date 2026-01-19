import Image from "next/image";
import Button from "../../../components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function BannerHeader() {
  const i18n = useTranslations("banner-header");
  const locale = useLocale();

  const backgroundImageUrl =
    locale === "en"
      ? "https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image.png"
      : "https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png";

  return (
    <section
      className="relative w-full md:bg-cover md:bg-right md:bg-no-repeat 2xl:bg-right-top md:bg-[url('https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png')]"
      style={{
        backgroundImage: `url('${
          locale === "en"
            ? "https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image.png"
            : "https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png"
        }')`,
      }}
    >
      <div className="relative z-10 flex w-full max-w-full justify-end bg-blue-950 px-4 pb-12 pt-14 md:max-w-[50%] md:items-center md:bg-blue-950/80 lg:px-12 lg:py-16 xl:py-20 xl:pl-16 xl:pr-24">
        <div className="flex w-full flex-col items-center gap-8 md:w-fit md:items-start">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <p className="text-center font-light text-white text-body-md md:text-center">
              {i18n("header")}
            </p>
            <h1 className="text-center font-mono text-[40px] leading-[1.3] font-bold text-white md:text-left">
              {i18n("title")} <br className="hidden xl:block" />
              {i18n("title-2")} <br className="hidden xl:block" />
              {i18n("title-3")}
            </h1>
            <p className="text-center font-light text-white text-body-md md:text-left">
              {i18n("subtitle")} <br className="hidden xl:block" />
              {i18n("subtitle-2")} <br className="hidden xl:block" />
              {i18n("subtitle-3")}
            </p>
          </article>

          <Button className="relative z-30 mx-auto gap-2 md:mx-0">
            {i18n("button")}
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 mx-auto hidden w-full items-center justify-end lg:flex 2xl:right-8 2xl:mr-0">
        <div className="flex w-full max-w-[240px] flex-col gap-4 rounded-l-[3px] bg-white px-4 py-4 lg:py-6 2xl:max-w-[280px] 2xl:rounded-sm 2xl:px-5 3xl:max-w-[320px] 3xl:px-6 3xl:py-7 4xl:max-w-[335px]">
          <p className="text-slate-500 text-[14px] leading-[1.57] text-body-sm 2xl:text-body-md 4xl:text-body-lg">
            {i18n("testimonial")}
          </p>
          <article className="flex w-full flex-col text-text-dark">
            <p className="text-[13px] font-bold 2xl:text-body-sm 4xl:text-body-md">
              {i18n("testimonial-author")}
            </p>
            <p className="text-[13px] 2xl:text-body-sm 4xl:text-body-md">
              {i18n("testimonial-role")}
            </p>
            <p className="text-[13px] font-bold 2xl:text-body-sm 4xl:text-body-md">
              {i18n("testimonial-company")}
            </p>
          </article>
        </div>
      </div>

      <figure className="flex h-[340px] w-full sm:h-[290px] md:hidden md:h-[310px]">
        <Image
          key={`banner-${locale}`}
          alt="Header Image"
          loading="lazy"
          width={2560}
          height={1980}
          className="hidden h-full w-full object-cover object-right sm:flex"
          src={backgroundImageUrl}
        />
        <Image
          key={`banner-mobile-${locale}`}
          alt="Header Image"
          loading="lazy"
          width={2560}
          height={1980}
          className="flex h-full w-full object-cover object-center sm:hidden"
          src={backgroundImageUrl}
        />
      </figure>
    </section>
  );
}
