"use client";
import { useEffect, useRef, useState } from "react";
import { TabLabel, TabPanel, TabProps } from "./Tab";

interface TabsHandlerProps {
  tabs: TabProps[];
}

export default function TabsHandler({ tabs }: TabsHandlerProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(
      `[data-tab-id="${activeTab}"]`,
    ) as HTMLElement | null;

    if (activeEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const tabRect = activeEl.getBoundingClientRect();

      setIndicatorStyle({
        width: tabRect.width,
        left: tabRect.left - containerRect.left,
      });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-12">
      <div
        ref={containerRef}
        className="relative flex w-full border-b border-slate-300"
      >
        <span
          className="absolute hidden sm:block bottom-0 h-[2px] bg-blue-600 transition-all duration-600"
          style={{
            width: indicatorStyle.width,
            transform: `translateX(${indicatorStyle.left}px)`,
          }}
        />

        <div className="relative mx-auto mt-2 flex w-full flex-col bg-[#F4F4F9] py-1 sm:flex-row sm:bg-transparent sm:py-0 lg:mt-0">
          {tabs.map((tab) => (
            <TabLabel
              key={tab.id}
              id={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
      </div>

      <article className="flex w-full justify-between gap-8 lg:gap-12">
        {activeContent && (
          <TabPanel
            id={activeContent.id}
            label={activeContent.label}
            title={activeContent.title}
            description={activeContent.description}
            bullets={activeContent.bullets}
            image={activeContent.image}
          />
        )}
      </article>
    </div>
  );
}
