import React from "react";

const Button = ({ className, children, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${
        className ? className : ""
      } inline-flex items-center justify-center gap-x-1 rounded-md border-0 !bg-success-400 px-4 py-2 text-sm font-medium text-white shadow transition duration-300 ease-in-out focus:ring focus:ring-success-400/30 md:h-8 md:gap-x-3 md:px-4 md:py-2 md:text-base lg:w-36 lg:px-5 lg:py-5`}
    >
      {children}
    </button>
  );
};

const ButtonSm = ({ className, children, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${
        className ? className : ""
      } inline-flex items-center justify-center gap-x-1 rounded-md border-0 bg-success-400 px-4 py-2 text-sm font-medium text-white shadow transition duration-300 ease-in-out focus:ring focus:ring-success-400/30 dark:bg-slate-800 dark:text-slate-300 md:h-8 md:gap-x-3 md:px-4 md:py-2 md:text-base lg:w-20 lg:px-4 lg:py-5`}
    >
      {children}
    </button>
  );
};

const Button2 = ({ className, children, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${
        className ? className : ""
      } inline-flex items-center justify-center gap-x-1 rounded-md !bg-success-400 px-4 py-2 text-sm font-medium text-white shadow transition duration-300 ease-in-out focus:ring focus:ring-success-400/30 dark:focus:ring-slate-400/30 md:h-11 md:gap-x-3 md:px-4 md:py-2 md:text-base lg:w-40 lg:px-6 lg:py-6`}
    >
      {children}
    </button>
  );
};

const ButtonOutline = ({ className, children, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${
        className ? className : ""
      } inline-flex items-center justify-center gap-x-1 rounded-md border-0 bg-success-100 px-4 py-2 text-sm font-medium text-success-400 shadow transition duration-300 ease-in-out focus:ring focus:ring-success-400/30 dark:bg-slate-200 dark:text-slate-700 md:h-8 md:gap-x-3 md:px-4 md:py-2 md:text-base lg:w-36 lg:px-5 lg:py-5`}
    >
      {children}
    </button>
  );
};

Button.Large = Button2;
Button.Outline = ButtonOutline;
Button.Small = ButtonSm;

export default Button;
