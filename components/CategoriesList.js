import React from "react";
import Hero from "./Hero";

const categories = [
  {
    name: "Lifestyle",
    total: "09",
  },
  {
    name: "Travel",
    total: "05",
  },
  {
    name: "Food",
    total: "09",
  },
  {
    name: "Healthcare",
    total: "10",
  },
  {
    name: "Technology",
    total: "03",
  },
];

const CategoriesList = () => {
  return (
    <>
      <div className="space-y-9">
        <Hero.H4
          className={
            "font-semibold tracking-tighter text-slate-700 dark:text-slate-200"
          }
        >
          <span className="bg-success-400 py-0.5 text-white dark:bg-slate-600 dark:text-slate-200">
            Categories
          </span>{" "}
        </Hero.H4>
        <div>
          {categories.map((category, key) => (
            <div
              className="flex justify-between border-b border-dashed py-2 last:border-0 dark:border-slate-600"
              key={key}
            >
              <Hero.H6
                className={"font-medium text-slate-700 dark:text-slate-200"}
              >
                {category.name}
              </Hero.H6>
              <div className="text-slate-700 dark:text-slate-200">
                {category.total}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesList;
