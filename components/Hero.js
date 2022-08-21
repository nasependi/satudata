import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";

const H1 = ({ children, className }) => {
  return (
    <h1 className={`${className ? className : ""} text-4xl`}>{children}</h1>
  );
};

const H2 = ({ children, className }) => {
  return (
    <h2 className={`${className ? className : ""} text-3xl`}>{children}</h2>
  );
};

const H3 = ({ children, className }) => {
  return (
    <h3 className={`${className ? className : ""} text-2xl`}>{children}</h3>
  );
};

const H4 = ({ children, className }) => {
  return (
    <h4 className={`${className ? className : ""} text-xl`}>{children}</h4>
  );
};

const H5 = ({ children, className }) => {
  return (
    <h5 className={`${className ? className : ""} text-lg`}>{children}</h5>
  );
};

const H6 = ({ children, className }) => {
  return (
    <h6 className={`${className ? className : ""} text-base`}>{children}</h6>
  );
};

const Hero = ({ children }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Transition
        show={showTopBtn}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button
          data-aos="fade-up"
          onClick={goToTop}
          className="fixed bottom-10 right-10 z-30 overflow-hidden rounded-xl bg-success-400/50 backdrop-blur-sm dark:bg-slate-900/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-10 w-10 rounded-full text-white transition-transform duration-500 dark:text-slate-200"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
            ></path>
          </svg>
        </button>
      </Transition>

      <section className="bg-success-100 pb-10 pt-24 dark:bg-slate-800 md:pb-10 lg:pb-16">
        {children}
      </section>
    </div>
  );
};

Hero.H1 = H1;
Hero.H2 = H2;
Hero.H3 = H3;
Hero.H4 = H4;
Hero.H5 = H5;
Hero.H6 = H6;

export default Hero;
