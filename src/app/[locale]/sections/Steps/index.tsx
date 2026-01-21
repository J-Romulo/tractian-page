import { useLocale, useTranslations } from "next-intl";
import { steps } from "./data";
import { translateItems } from "../../../../utils/translation";

export default function Steps() {
  const i18n = useTranslations();
  const locale = useLocale();
  const formattedItems = translateItems(steps, i18n, {
        keys: ['title', 'description'],
        filterEmpty: true
    })

  return (
    <section className="bg-background-secondary px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-8 lg:max-w-6xl lg:items-center lg:gap-12">
        {locale === "pt" && (
          <p className="text-left uppercase text-blue-600 text-body-md lg:text-center">
            {i18n("steps.header")}
          </p>
        )}
        <h2 className="text-left text-[20px] lg:text-[32px] font-mono font-bold text-text-dark text-title-md lg:mb-4 lg:text-center">
          {i18n("steps.title")}
        </h2>

        <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 xl:gap-16">
          {formattedItems.map((step) => (
            <div
              key={step.number}
              className="flex h-full w-full flex-col gap-4"
            >
              <span className="flex h-7 w-7 text-[20px] items-center justify-center rounded-[2px] bg-blue-600 text-white text-body-xl lg:h-8 lg:w-8">
                {step.number}
              </span>
              <article className="flex w-full flex-col gap-1 lg:gap-4">
                <h3 className="font-bold text-[20px] font-mono text-text-dark text-title-xs leading-[1.38]">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[14px] lg:text-[16px] text-body-md">
                  {step.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
