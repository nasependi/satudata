const Pagination = () => {
  return (
    <>
      <div className="flex w-full justify-center py-8">
        <div className="flex items-center justify-center gap-x-3">
          <div className="flex cursor-pointer items-center justify-center gap-x-1 rounded-md border bg-white py-2 px-4 text-slate-600 transition duration-150 hover:border-success-400 hover:bg-success-400 hover:text-success-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span className="hidden md:block">Prev.</span>
          </div>
          <div className="hidden  cursor-pointer items-center justify-center gap-x-1 rounded-md border bg-white py-2 px-4 text-slate-600 transition duration-150 hover:border-success-400 hover:bg-success-400 hover:text-success-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200 md:flex">
            1
          </div>
          <div className="hidden  cursor-pointer items-center justify-center gap-x-1 rounded-md border bg-white py-2 px-4 text-slate-600 transition duration-150 hover:border-success-400 hover:bg-success-400 hover:text-success-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200 md:flex">
            2
          </div>
          <div className="hidden cursor-pointer items-center justify-center gap-x-1 rounded-md border bg-success-400 py-2 px-4 text-slate-200 transition duration-150 hover:border-success-400 hover:bg-success-400 hover:text-success-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-800 md:flex">
            3
          </div>
          <div className="hidden  cursor-pointer items-center justify-center gap-x-1 rounded-md border bg-white py-2 px-4 text-slate-600 transition duration-150 hover:border-success-400 hover:bg-success-400 hover:text-success-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200 md:flex">
            4
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-x-1 rounded-md border bg-white py-2 px-4 text-slate-600 transition duration-150 hover:border-success-400 hover:bg-success-400 hover:text-success-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-200">
            <span className="hidden md:block">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
