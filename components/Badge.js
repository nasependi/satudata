import React from "react";

const Badge = ({ children, className }) => {
  return (
    <span
      className={`${className} inline-block rounded bg-success-200 py-0.5 px-1.5 text-xs tracking-tighter text-secondary-100 transition duration-300 group-hover:bg-success-400 group-hover:text-success-100 dark:bg-slate-200 dark:text-slate-700 dark:group-hover:bg-slate-900 dark:group-hover:text-slate-200`}
    >
      {children}
    </span>
  );
};

export default Badge;
