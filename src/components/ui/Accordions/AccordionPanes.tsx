"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckIcon } from "../../icons/Check";

export interface AccordionItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface AccordionPanesProps {
  items: AccordionItem[];
  defaultActiveId?: string;
}

// Make it pass items automatically
export default function AccordionPanes({
  items,
  defaultActiveId,
}: AccordionPanesProps) {
  const [activeItem, setActiveItem] = useState(defaultActiveId || items[0]?.id);

  const activeContent = items.find((item) => item.id === activeItem);

  return (
    <div className="flex w-full flex-col items-start gap-8 lg:min-h-[360px] lg:flex-row lg:justify-between">
      <div className="flex justify-evenly w-full flex-col border-l-2 border-slate-300 xs:h-auto gap-[15px] lg:gap-[22px]">
        {items.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`group w-full bg-transparent px-4 transition-all duration-300 -ml-[2px] border-l-2 ${
                isActive ? "border-blue-500" : "border-slate-300"
              }`}
                aria-labelledby={`accordion-title-${item.id}`}
                aria-describedby={`accordion-desc-${item.id}`}
            >
              <div
                className={`flex w-full items-center gap-3 transition-all duration-500 lg:justify-between ${
                  isActive ? "mb-2" : "mb-0"
                }`}
              >
                <CheckIcon active={isActive} />
                <h3
                  className={`w-full text-[16px] lg:text-[20px] font-mono flex-1 text-left font-medium transition-all duration-500 text-body-lg lg:font-semibold lg:text-title-xs ${
                    isActive
                      ? "text-slate-700 group-hover:brightness-110"
                      : "text-slate-400"
                  }`}
                  id={`accordion-title-${item.id}`}
                >
                  {item.title}
                </h3>
              </div>
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isActive ? "144px" : "0px" }}
                  id={`accordion-desc-${item.id}`}
              >
                <div className="flex flex-col gap-1 text-[14px] lg:text-[16px] text-left text-slate-500 text-body-md">
                  <p>{item.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <figure className="relative flex h-full w-full justify-center rounded-sm lg:h-[320px]">
        {activeContent && (
          <Image
            key={activeContent.id}
            alt={activeContent.title}
            loading="eager"
            width={1071}
            height={749}
            className="h-full w-full rounded-sm object-contain animate-fadeIn md:object-cover lg:object-contain"
            src={activeContent.image}
          />
        )}
      </figure>
    </div>
  );
}
