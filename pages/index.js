import React from "react";
import Back from "../public/assets/img/20220818_160612.jpg";
import SideKontak from "../components/SideKontak";
import NavMini from "../components/NavMini";
import ContentMenus from "../components/ContentMenus";
import FooterMini from "../components/FooterMini";
import Head from "next/head";

const menus = [
  {
    img: "https://dinkes.kotabogor.go.id/assets-publik/img/icon1.svg",
    title: "Website Dinas Kesehatan",
    href: "/",
  },
  {
    img: "https://dinkes.kotabogor.go.id/assets-publik/img/icon1.svg",
    title: "Website Dinas Kesehatan",
    href: "/",
  },
  {
    img: "https://dinkes.kotabogor.go.id/assets-publik/img/icon1.svg",
    title: "Website Dinas Kesehatan",
    href: "/",
  },
];
export default function index() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        margin: "0",
        backgroundImage: "url(" + Back.src + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        backgroundAttachment: "fixed",
      }}
    >
      <Head>
        <title>Satu Data Kesehatan</title>
      </Head>
      <SideKontak />
      <NavMini />
      <ContentMenus menus={menus} />
      <FooterMini />
    </div>
  );
}
