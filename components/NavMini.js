import React from "react";

export default function NavMini() {
  return (
    <>
      <nav className="hidden h-10 w-full items-center bg-gradient-to-r from-cyan-500 to-blue-500 lg:flex">
        <div className="container flex w-full items-center justify-between">
          <div className="font-semibold text-white">.: satu DATA KESEHATAN</div>
          <div className="flex gap-x-2 text-sm">
            <div className="flex items-center gap-x-2 tracking-tighter text-white">
              |
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <span className="cursor-pointer hover:text-blue-200">
                0821-1574-4646
              </span>
            </div>
            <div className="flex items-center gap-x-2 tracking-tighter text-white">
              |
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              <span className="cursor-pointer hover:text-blue-200">
                dinkesgarut1@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-x-2 text-white">
              <div className="flex items-center gap-x-1.5">
                |
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer hover:text-blue-200"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </div>
              <div className="flex items-center gap-x-1.5">
                |
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer hover:text-blue-200"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </div>
              <div className="flex items-center gap-x-1.5">
                |
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer hover:text-blue-200"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x={4} y={4} width={16} height={16} rx={4} />
                  <circle cx={12} cy={12} r={3} />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </div>
              <div className="flex items-center gap-x-1.5">
                |
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer hover:text-blue-200"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x={3} y={5} width={18} height={14} rx={4} />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
