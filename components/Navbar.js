import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import SearchButton from "./SearchButton";
import ToggleDarkMode from "./ToggleDarkMode";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={`${
          showNav
            ? " bg-success-300/50 backdrop-blur-sm dark:bg-slate-900/50"
            : " bg-success-300 dark:bg-slate-900"
        } 
        fixed z-30 block w-full transition duration-500 lg:hidden`}
      >
        <div className="container flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-6 w-6 transition duration-150 hover:text-gray-800  dark:hover:text-slate-200"
              viewBox="0 0 16 16"
            >
              <path
                className="fill-slate-500/50 stroke-slate-500/80 dark:stroke-slate-300"
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex flex-shrink-0 items-center justify-end gap-x-1">
            <div className="flex cursor-pointer justify-end">
              <SearchButton />
            </div>
            <div className="flex items-center justify-end">
              <ToggleDarkMode />
            </div>
          </div>
        </div>
      </nav>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-700"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="ease-in duration-500"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
          >
            <div className="fixed inset-0 bg-gray-900/50 bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 w-full overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 -translate-x-3/4"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 -translate-x-3/4"
            >
              <Dialog.Panel
                as="div"
                className="min-h-full w-[65%] bg-white shadow-2xl dark:bg-slate-900 md:w-[45%] lg:w-[25%]"
              >
                <div className="container">
                  <div className="flex h-16 items-center">
                    <Logo />
                  </div>
                  <div>
                    <ul>
                      <li className="border-b py-2 font-semibold text-gray-700 hover:text-gray-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-gray-200">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li className="border-b py-2 font-semibold text-gray-700 hover:text-gray-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-gray-200">
                        <Link href="/">
                          <a>About</a>
                        </Link>
                      </li>
                      <li className="border-b py-2 font-semibold text-gray-700 hover:text-gray-800 dark:border-slate-800 dark:text-slate-300 dark:hover:text-gray-200">
                        <Link href="/">
                          <a>Categories</a>
                        </Link>
                      </li>
                      <li className="py-2 font-semibold text-gray-700 hover:text-gray-800  dark:text-slate-300 dark:hover:text-gray-200">
                        <Link href="/">
                          <a>Pages</a>
                        </Link>
                      </li>
                      <li className="mt-5">
                        <Button.Small className={"text-sm tracking-tighter"}>
                          LOGIN
                        </Button.Small>
                      </li>
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={`${
          showNav
            ? "bg-success-300/50 backdrop-blur-sm dark:bg-slate-900/50"
            : "bg-success-300 dark:bg-slate-900"
        } fixed z-30 hidden w-full lg:block`}
      >
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center justify-end gap-x-10">
            <ul className="flex gap-x-9">
              <li className="font-semibold text-slate-600 transition duration-300 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300">
                Home
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="ml-2 inline w-3.5 text-slate-600 dark:text-slate-300"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
              <li className="font-semibold text-slate-600 transition duration-300 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300">
                About
              </li>
              <li className="font-semibold text-slate-600 transition duration-300 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300">
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="ml-2 inline w-3.5 text-slate-600 dark:text-slate-300"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
              <li className="font-semibold text-slate-600 transition duration-300 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-300">
                Pages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="ml-2 inline w-3.5 text-slate-600 dark:text-slate-300"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </li>
            </ul>

            <ul className="flex items-center justify-center gap-x-3">
              <li className="flex items-center">
                <SearchButton />
              </li>
              <li className="flex items-center">
                <ToggleDarkMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.Mobile = MobileNav;

export default Navbar;
