import { Transition } from "@headlessui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function App({ title, children }) {
  return (
    <>
      <div>
        <Head>
          <title>{title ? title + " - " : ""}NoteBook</title>
        </Head>
        <Navbar />
        <Navbar.Mobile />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
