import { useTranslations } from "next-intl";
import TabsHandler from "../../../../components/ui/Tabs/TabsHandler";
import { tabsContent } from "./data";
import { TabProps } from "../../../../components/ui/Tabs/Tab";
import { translateItems } from "../../../../utils/translation";

export default function Tabs() {
  const i18n = useTranslations();

  const formattedItems = translateItems(tabsContent, i18n, {
    keys: ['label', 'title', 'description'],
    arrayKeys: ['bullets'],
    filterEmpty: true
  })

  return (
    <section className="relative w-full bg-white px-4 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-slate-700 lg:max-w-6xl lg:gap-12">
        <article className="flex w-full flex-col items-start gap-4 lg:items-center">
          <h2 className="mt-4 w-full font-mono text-text-dark text-[20px] lg:text-[32px] text-left font-bold text-title-md lg:text-center">
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
