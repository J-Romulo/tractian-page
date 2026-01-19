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
    <button
      data-tab-id={id}
      onClick={() => setActiveTab(id)}
      className={`relative flex-1 px-6 py-4 text-body-md transition-colors duration-200 ${
        isActive
          ? "bg-white font-semibold text-slate-700 shadow-sm sm:bg-transparent sm:font-bold sm:shadow-none"
          : "text-slate-500 hover:text-slate-600"
      }`}
    >
      {label}
    </button>
  );
}

export function TabPanel({ title, description, bullets, image }: TabProps) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 transition duration-500 ease-in-out lg:min-h-[437px] lg:flex-row lg:gap-16">
      <div className="flex w-full flex-col gap-8 lg:max-w-[382px] lg:gap-12">
        <article className="flex flex-col items-center gap-4 lg:max-w-[382px] lg:items-start">
          <h2 className="font-mono font-bold text-[20px]">{title}</h2>
          {description && (
            <p className="text-slate-500 text-body-md">{description}</p>
          )}
          <ul className="ml-4 flex w-full list-disc flex-col gap-1">
            {bullets.map((bullet, index) => (
              <li key={index} className="text-slate-500 text-body-md">
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
