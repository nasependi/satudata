import React, { useEffect } from "react";

export default function Dark() {
  const selectTheme = (value) => {
    localStorage.setItem("theme", value);
    const html = document.querySelector("html");
    html.classList.add(localStorage.getItem("theme"));
    if (value === "dark") {
      html.classList.remove("light");
    } else if (value === "light") {
      html.classList.remove("dark");
    } else {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.removeItem("theme");
    }
  };

  useEffect(() => {
    const value = localStorage.theme;
    const html = document.querySelector("html");
    html.classList.add(localStorage.getItem("theme"));
    if (value === "dark") {
      html.classList.remove("light");
    } else if (value === "light") {
      html.classList.remove("dark");
    } else {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.removeItem("theme");
    }
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 dark:bg-slate-900">
      <div className="w-5/12 space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-white px-5 py-3 shadow-sm">
          <div>Switcer</div>
          <div className="flex gap-x-1">
            <button
              onClick={() => selectTheme("dark")}
              className="h-4 w-4 rounded-full bg-slate-900"
            ></button>
            <button
              onClick={() => selectTheme("light")}
              className="h-4 w-4 rounded-full bg-slate-200"
            ></button>
            <button
              onClick={() => selectTheme("theme")}
              className="h-4 w-4 rounded-full bg-red-200"
            ></button>
          </div>
        </div>
        <div className="rounded-lg bg-white px-5 py-3 shadow-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          voluptatum. Recusandae, aperiam eum optio quaerat deserunt eius odit
          consectetur itaque sint aliquam, voluptatum explicabo impedit beatae
          laborum modi? Dolorem, quod.
        </div>
      </div>
    </div>
  );
}
