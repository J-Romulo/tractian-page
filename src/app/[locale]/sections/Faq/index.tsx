import { useTranslations } from "next-intl";
import AccordionButton from "../../../../components/ui/Accordions/Accordion";
import { faqs } from "./data";
import { translateItems } from "../../../../utils/translation";

export default function Faq() {
  const i18n = useTranslations();
  const formattedItems = translateItems(faqs.filter((item) => i18n.has(item.title)), i18n, {
        keys: ['title', 'response'],
        filterEmpty: true
    })

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 lg:max-w-6xl lg:gap-16 py-12">
      <article className="flex w-full flex-col items-center gap-2 lg:gap-4">
        <p className="text-center text-body-md uppercase text-blue-600">
          {i18n("faq.header")}
        </p>
        <h2 className="font-mono text-center text-[20px] lg:text-[40px] font-semibold text-text-dark lg:text-title-lg lg:font-bold">
          {i18n("faq.title")}
        </h2>
      </article>

      <div className="flex flex-col gap-y-6">
        {formattedItems.map((faq, index) => (
          <AccordionButton key={index} title={faq.title}>
            {faq.response}
          </AccordionButton>
        ))}
      </div>
    </section>
  );
}
