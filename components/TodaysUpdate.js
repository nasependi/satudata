import React from "react";
import Hero from "./Hero";

const statistics = [
  {
    name: "New Post",
    total: "14",
  },
  {
    name: "Total Visitors",
    total: "480",
  },
  {
    name: "Total Visitors",
    total: "589",
  },
  {
    name: "Total Visitors",
    total: "224",
  },
];

const TodaysUpdate = () => {
  return (
    <>
      <div className="space-y-9">
        <Hero.H4
          className={
            "font-semibold tracking-tighter text-slate-700 dark:text-slate-200"
          }
        >
          <span className="bg-success-400 py-0.5 text-white dark:bg-slate-600 dark:text-slate-200">
            Today{"'"}s
          </span>{" "}
          Update
        </Hero.H4>
        <div className="grid grid-cols-2 gap-5 text-center">
          {statistics.map((s, key) => (
            <div
              key={key}
              className="rounded-xl bg-success-100 p-5 dark:bg-slate-800 dark:shadow-lg"
            >
              <Hero.H3
                className={"font-semibold text-success-400 dark:text-slate-200"}
              >
                {s.total}
              </Hero.H3>
              <span className="text-secondary-400 dark:text-slate-300">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodaysUpdate;
