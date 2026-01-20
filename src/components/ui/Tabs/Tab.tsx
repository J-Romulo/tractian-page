import Image from "next/image";

export interface TabProps {
  id: string;
  label?: string;
  title?: string;
  description?: string;
  bullets: string[];
  image: string;
}

export interface TabLabelProps extends Pick<TabProps, "id" | "label"> {
  isActive: boolean;
  setActiveTab: (id: string) => void;
}

export function TabLabel({ id, label, isActive, setActiveTab }: TabLabelProps) {
  return (
    <div
      className={`ease relative flex w-full items-center justify-center border-b px-1 pb-[3px] pt-1 transition-all duration-300 sm:flex-1 sm:px-0 sm:py-0 rounded-md border-transparent bg-[#F4F4F9] sm:rounded-none sm:bg-transparent`}
    >
      <button
        data-tab-id={id}
        onClick={() => setActiveTab(id)}
        aria-label="Select Tab"
        className={`relative flex-1 text-[14px] lg:text-[16px] rounded-sm px-6 py-1.5 transition-all duration-100 text-body-md sm:w-auto sm:items-start sm:p-4 sm:duration-300 sm:text-tag md:text-body-sm lg:rounded-none lg:px-2 lg:text-body-md xl:px-4 2xl:px-6 ${
          isActive
            ? "bg-white font-semibold text-slate-700 shadow-sm sm:bg-transparent sm:font-bold sm:shadow-none"
            : "text-slate-500 hover:text-slate-600"
        }`}
      >
        {label}
      </button>
    </div>
  );
}

export function TabPanel({ title, description, bullets, image }: TabProps) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 transition duration-500 ease-in-out lg:min-h-[437px] lg:flex-row lg:gap-16">
      <div className="flex w-full flex-col gap-8 lg:max-w-[382px] lg:gap-12">
        <article className="flex flex-col items-center gap-4 lg:max-w-[382px] lg:items-start">
          <h2 className="font-mono font-bold text-[20px]">{title}</h2>
          {description && (
            <p className="text-slate-500 text-[14px] lg:text-[16px] text-body-md">
              {description}
            </p>
          )}
          <ul className="ml-4 flex w-full list-disc flex-col gap-1">
            {bullets.map((bullet, index) => (
              <li
                key={index}
                className="text-slate-500 text-[14px] lg:text-[16px] text-body-md"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <figure className="w-full rounded-sm">
        <Image
          alt={title || "Tab Image"}
          loading="lazy"
          width={1920}
          height={1080}
          className="object-contain"
          src={image}
        />
      </figure>
    </div>
  );
}
