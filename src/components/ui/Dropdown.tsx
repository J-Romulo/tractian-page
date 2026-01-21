"use client";

import { useState, useEffect, useRef } from "react";
import { Chevron } from "../icons/Chevron";

interface DropdownProps {
  title?: string;
  trigger?: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "small";
  ariaLabel?: string;
}

export default function Dropdown({
  title,
  trigger,
  children,
  variant = "default",
  ariaLabel
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isSmall = variant === "small";

  return (
    <>
      <div ref={dropdownRef} className="relative h-full flex items-center z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`font-sans flex items-center h-full gap-2 ${isSmall ? "px-2 text-sm" : "pl-8 text-base"} select-none font-medium transition-colors ${
            isOpen ? "text-primary" : "text-text-primary hover:text-primary"
          }`}
          aria-label={ariaLabel}
        >
          {trigger || (
            <>
              {title}
              <Chevron
                className={`w-3 h-2 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </>
          )}
        </button>

        {isOpen && (
          <>
            {!isSmall && (
              <div
                className="fixed inset-0 top-[72px] bg-black/50 backdrop-blur-[1px]  z-40"
                onClick={() => setIsOpen(false)}
              />
            )}
            <div
              className={
                isSmall
                  ? "absolute top-full left-0 mt-2 bg-white border-3 border-gray-200 shadow-lg z-50 min-w-[200px]"
                  : "fixed left-0 right-0 top-[72px] bg-white border-t border-gray-100 z-50"
              }
            >
              <div
                className={
                  isSmall
                    ? "p-2"
                    : "max-w-7xl mx-auto flex justify-center px-8 py-6"
                }
              >
                {children}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
