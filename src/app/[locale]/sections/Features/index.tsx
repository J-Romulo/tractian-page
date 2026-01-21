import { useTranslations } from "next-intl";
import { features } from "./data";
import { translateItems } from "../../../../utils/translation";

export default function Features() {
  const i18n = useTranslations();
  const formattedItems = translateItems(features, i18n, {
    keys: ["title", "description"],
    filterEmpty: true,
  });

  return (
    <section className="w-full bg-background-secondary px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-6xl lg:gap-12">
        <h2 className="font-mono text-[20px] lg:text-[32px] leading-[1.25] font-bold text-title-md lg:text-center text-text-dark">
          {i18n("features.title")} <br className="hidden xl:block" />{" "}
          {i18n("features.title-2")}
        </h2>

        <div className="flex h-auto w-full flex-col items-stretch gap-8 lg:flex-row lg:justify-between lg:gap-16">
          {formattedItems.map((feature) => (
            <div
              key={feature.title}
              className="flex w-full flex-row items-start gap-4 lg:flex-col lg:items-center"
            >
              <figure className="flex items-center justify-center rounded-sm bg-white p-[14px] lg:h-24 lg:w-24 lg:p-0">
                {feature.icon}
              </figure>
              <article className="flex w-full flex-col sm:gap-1 lg:items-center lg:gap-4">
                <h3 className="font-mono text-[16px] lg:text-[20px] text-left font-bold text-body-lg lg:text-center lg:text-title-xs text-text-dark">
                  {feature.title}
                </h3>
                <p className="text-left text-[14px] lg:text-[16px] text-slate-500 text-body-md lg:text-center">
                  {feature.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
