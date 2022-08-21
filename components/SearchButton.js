import React from "react";

export default function SearchButton() {
  return (
    <>
      <svg
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-none text-slate-600 dark:text-slate-300"
        aria-hidden="true"
      >
        <path d="m19 19-3.5-3.5" />
        <circle cx={11} cy={11} r={6} />
      </svg>
    </>
  );
}
