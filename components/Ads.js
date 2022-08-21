import React from "react";
import Button from "./Button";
import Hero from "./Hero";

const Ads = () => {
  return (
    <>
      <div className="space-y-9">
        <div className="relative w-full overflow-hidden bg-success-400 py-10 px-10 text-success-100 dark:bg-slate-800 dark:text-slate-200">
          <div className="absolute right-2 top-2 text-xs font-light">Ad</div>
          <div>
            <Hero.H5 className={"font-medium capitalize"}>
              Lorem ipsum dolor sit amet consectetur.
            </Hero.H5>
            <dt className="text-sm">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into
            </dt>
            <Button.Outline className={"mt-5 shadow-xl hover:!shadow-none"}>
              Visit Us
            </Button.Outline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
