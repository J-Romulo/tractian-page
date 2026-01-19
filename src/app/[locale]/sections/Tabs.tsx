import { useTranslations } from "next-intl";
import TabsHandler from "../../../components/ui/Tabs/TabsHandler";
import { tabsContent } from "../data/tabsContent";
import { TabProps } from "../../../components/ui/Tabs/Tab";

//TODO: Refactor to use a utility function for translation mapping
export default function Tabs() {
  const i18n = useTranslations();
  const isNonEmptyString = (value?: string) =>
    typeof value === "string" && value.trim().length > 0;

  const formattedItems = tabsContent.map((item) => {
    const { label, title, description, bullets, ...rest } = item;

    const translatedLabel = i18n(label!);
    const translatedTitle = i18n(title!);
    const translatedDescription = i18n(description!);
    const translatedBullets = bullets
      ?.map((bullet) => i18n(bullet))
      .filter(isNonEmptyString);

    return {
      ...rest,

      ...(isNonEmptyString(translatedLabel) && {
        label: translatedLabel,
      }),

      ...(isNonEmptyString(translatedTitle) && {
        title: translatedTitle,
      }),

      ...(isNonEmptyString(translatedDescription) && {
        description: translatedDescription,
      }),

      ...(translatedBullets &&
        translatedBullets.length > 0 && {
          bullets: translatedBullets,
        }),
    };
  });

  return (
    <section className="relative w-full bg-white px-4 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-slate-700 lg:max-w-6xl lg:gap-12">
        <article className="flex w-full flex-col items-start gap-4 lg:items-center">
          <h2 className="mt-4 w-full font-mono text-text-dark text-[32px] text-left font-bold text-title-md lg:text-center">
            {i18n("tabs.title")}
          </h2>
        </article>

        <section className="w-full">
          <div className="mx-auto flex w-full flex-col gap-12">
            <TabsHandler tabs={formattedItems as TabProps[]} />
          </div>
        </section>
      </div>
    </section>
  );
}
