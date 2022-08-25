import React from "react";

export default function SideKontak() {
  return (
    <>
      <div className="fixed right-0 z-10 flex h-full items-center justify-end">
        <div className="grid hidden space-y-2.5 md:block lg:block">
          <div className="flex justify-end">
            <a
              href="https://wa.me/6289639854369"
              rel="noopener noreferrer"
              target="_blank"
              className="group flex items-center gap-x-2 rounded-tl-lg rounded-bl-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
            >
              <span className="hidden text-white group-hover:inline">
                Kontak Whatsapp
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex items-center justify-end">
            <a
              href="tel:0821-1574-4646"
              rel="noopener noreferrer"
              target="_blank"
              className="group flex items-center gap-x-2 rounded-tl-lg rounded-bl-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
            >
              <span className="hidden text-white group-hover:inline">
                Call Center
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone-call  text-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex justify-end">
            <a
              href="https://dinkes.garutkab.go.id"
              rel="noopener noreferrer"
              target="_blank"
              className="group flex items-center gap-x-2 rounded-tl-lg rounded-bl-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
            >
              <span className="hidden text-white group-hover:inline">
                Kontak Kami
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail text-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex justify-end">
            <a
              href="tel:119"
              rel="noopener noreferrer"
              target="_blank"
              className="group flex items-center gap-x-2 rounded-tl-lg rounded-bl-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
            >
              <span className="hidden text-white group-hover:inline">
                Emergency
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-ambulance text-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx={7} cy={17} r={2} />
                  <circle cx={17} cy={17} r={2} />
                  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                  <path d="M6 10h4m-2 -2v4" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
