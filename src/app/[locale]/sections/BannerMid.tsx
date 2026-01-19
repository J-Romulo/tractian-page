import Image from "next/image";
import Button from "../../../components/ui/Button";
import { useTranslations } from "next-intl";

export default function BannerMid() {
  const i18n = useTranslations();

  return (
    <section className="relative w-full md:bg-cover md:bg-right md:bg-no-repeat md:bg-[url('https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/maintenance-engineer/en/more-than-machines.png')]">
      <div className="relative z-10 flex w-full max-w-full justify-center bg-blue-950 bg-opacity-95 px-4 py-12 md:max-w-[50%] md:justify-end md:bg-blue-950/80 lg:px-12 lg:py-16 xl:px-0 xl:py-20 xl:pl-16 2xl:items-center 2xl:pl-16 3xl:pl-12">
        <div className="flex w-full max-w-full flex-col items-center gap-8 md:max-w-[318px] md:items-start lg:max-w-full xl:max-w-[576px]">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <h2 className="font-mono text-center text-[40px] leading-[1.3] font-bold text-white text-title-lg md:text-left">
              {i18n("banner-mid.title")} <br />
              {i18n("banner-mid.title-2")}
            </h2>
          </article>

          <Button className="relative z-30 mx-auto md:mx-0">
            {i18n("banner-mid.demo-button")}
          </Button>
        </div>
      </div>

      <figure className="flex h-[240px] w-full sm:h-[280px] md:hidden">
        <Image
          alt={i18n("banner-mid.alt")}
          loading="lazy"
          width={2560}
          height={1980}
          className="h-full w-full object-cover object-right"
          src="https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/maintenance-engineer/en/more-than-machines.png"
        />
      </figure>
    </section>
  );
}
