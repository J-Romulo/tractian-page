import { useTranslations } from "next-intl";
import AccordionPanes from "../../../../components/ui/Accordions/AccordionPanes";
import { accordionItems } from "./data";

export default function Accordion() {
  const i18n = useTranslations("accordion");
  const formattedItems = accordionItems.map((item) => ({
    ...item,
    title: i18n(item.title),
    description: i18n(item.description),
  }));

  return (
    <section className="w-full bg-background-secondary px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col gap-4">
          <p className="uppercase text-[14px] lg:text-[16px] text-blue-600 text-body-md">
            {i18n("subtitle")}
          </p>
          <h2 className="font-mono text-[24px] lg:text-[40px] text-text-dark font-bold leading-tight">
            {i18n("title")}
          </h2>
        </article>

        <AccordionPanes items={formattedItems} defaultActiveId="roi" />
      </div>
    </section>
  );
}
