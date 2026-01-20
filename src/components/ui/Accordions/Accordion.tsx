"use client";

import { useState, useRef, useEffect } from "react";
import { Chevron } from "../../icons/Chevron";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionButton({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="group w-full rounded-[2px] border-1 border-slate-300 bg-transparent p-4 transition hover:border-blue-600 text-left"
    >
      <div className=" flex w-full items-center justify-between gap-3 transition-all mb-2">
        <h3
          className={`text-left text-[14px] lg:text-[16px] text-body-md font-medium transition-all group-hover:text-blue-600 ${isOpen ? "text-blue-600" : "text-text-dark"}`}
        >
          {title}
        </h3>
        <Chevron
          className={`w-3 h-2 transition-all duration-200 ease-in-out ${isOpen ? "rotate-180 text-blue-600" : "text-dark group-hover:text-blue-600"}`}
        />
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-200 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentHeight}px` : "0px" }}
      >
        <div className="text-left text-body-md text-slate-500">{children}</div>
      </div>
    </button>
  );
}
