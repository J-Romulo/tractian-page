import Image from "next/image";
import { Testimonial, testimonials } from "./data";
import Quote from "../../../../components/icons/Quote";
import { useTranslations } from "next-intl";
import { translateItems } from "../../../../utils/translation";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-auto w-full cursor-grab flex-col gap-4 sm:cursor-default">
      <div className="flex w-full items-center gap-4">
        <Quote />
      </div>
      <p className="h-full text-[14px] italic leading-[1.6] text-slate-500 text-quote">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3 lg:justify-between">
        <figure className="flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
          <Image
            alt={testimonial.name}
            loading="lazy"
            width={120}
            height={120}
            className="h-full w-full rounded-full object-cover"
            src={testimonial.image}
          />
        </figure>
        <article className="flex w-full flex-1 flex-col text-text-dark text-[14px]">
          <p className="font-bold text-body-sm">{testimonial.name}</p>
          <p className="text-body-sm">{testimonial.role}</p>
          <p className="font-bold text-body-sm">{testimonial.company}</p>
        </article>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const i18n = useTranslations();
  const formattedItems = translateItems(testimonials, i18n, {
    keys: ["quote", "name", "role", "company", "image"],
    filterEmpty: true,
  });

  return (
    <section className="w-full bg-white py-12 sm:px-4 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 md:gap-12 lg:max-w-6xl">
        <h2 className="px-4 text-[20px] lg:text-[32px] font-mono text-text-dark text-left font-bold text-title-md sm:px-0 lg:text-center">
          {i18n("testimonials.title")}
        </h2>

        <div className="hidden h-auto w-full items-stretch gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:gap-12">
          {formattedItems.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex w-full sm:hidden">
          <div className="relative flex w-full">
            <div className="flex w-full gap-4 overflow-x-auto px-4 pb-8 snap-x snap-mandatory">
              {formattedItems.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-[85vw] snap-center"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
