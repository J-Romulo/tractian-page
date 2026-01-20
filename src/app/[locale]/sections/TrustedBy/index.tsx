import Image from "next/image";
import LogoPlaceholder from "../../../../components/icons/Placeholder";
import { imageLogos } from "./data";
import { useTranslations } from "next-intl";

export default function TrustedBy() {
  const i18n = useTranslations();

  return (
    <section className="w-full px-0 pt-4 lg:px-4 lg:pb-16 bg-white">
      <div className="mx-auto flex w-full max-w-full flex-col items-center gap-8 lg:gap-12">
        <h2 className="mx-auto text-[14px] lg:text-[16px] max-w-2xl px-4 text-center text-slate-500 text-body-md lg:px-0">
          {i18n("trusted-by.title")}
        </h2>

        <div className="mx-auto hidden w-full flex-wrap justify-center gap-12 lg:grid lg:max-w-6xl lg:grid-cols-7 lg:items-center lg:justify-center">
          {imageLogos.map((logo) => {
            if (!logo.src) {
              return (
                <LogoPlaceholder
                  key={logo.name}
                  name={logo.name}
                  width={logo.width}
                  height={logo.height}
                />
              );
            }
            return (
              <Image
                key={logo.name}
                alt={`${logo.name} Logo`}
                loading="lazy"
                width={logo.width}
                height={logo.height}
                className="mx-auto"
                style={{ width: logo.width, height: logo.height }}
                src={logo.src}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
