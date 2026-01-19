"use client";

import { ArrowUp } from "lucide-react";

type Props = {
  label: string;
};

export default function BackToTopButton({ label }: Props) {
  return (
    <button
      onClick={() => {
        console.log("Back to top clicked");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="hidden items-center gap-x-2 text-slate-50 transition hover:text-blue-300 lg:flex"
    >
      <p className="text-sm">{label}</p>
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
