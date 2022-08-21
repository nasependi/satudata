import React from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";

export default function elements() {
  return (
    <>
      <div className="container flex justify-center py-10">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl font-semibold">Elements</h1>
          <section>
            <Hero.H1>Heading 1</Hero.H1>
            <Hero.H2>Heading 2</Hero.H2>
            <Hero.H3>Heading 3</Hero.H3>
            <Hero.H4>Heading 4</Hero.H4>
            <Hero.H5>Heading 5</Hero.H5>
            <Hero.H6>Heading 6</Hero.H6>
            <section className="py-5">
              <Hero.H2 className={"py-5"}>Buttons</Hero.H2>
              <div className="flex items-end gap-3">
                <Button.Large>Button 2</Button.Large>
                <Button>Button</Button>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
