import React from "react";
import Hero from "./Hero";

const tags = [
  {
    name: "Travel",
  },
  {
    name: "Lifestyle",
  },
  {
    name: "Fashion",
  },
  {
    name: "Business",
  },
  {
    name: "Design",
  },
  {
    name: "Health",
  },
  {
    name: "Food",
  },
  {
    name: "Art",
  },
];
const TagList = () => {
  return (
    <>
      <div className="space-y-9">
        <Hero.H4
          className={
            "font-semibold tracking-tighter text-slate-700 dark:text-slate-200"
          }
        >
          <span className="bg-success-400 py-0.5 text-white dark:bg-slate-600 dark:text-slate-200">
            Search
          </span>{" "}
          With Tags
        </Hero.H4>
        <div className="flex flex-wrap gap-2 text-center">
          {tags.map((tag, key) => (
            <div
              key={key}
              className="cursor-pointer rounded-md border py-1 px-4 text-secondary-100 transition duration-150 hover:border-success-400 hover:bg-success-400 hover:text-success-100 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TagList;
