import React from "react";
import Vector from "../public/assets/img/logo-dinkes.png";
import Vector1 from "../public/assets/img/garut.png";
import Vector3 from "../public/assets/img/logo satudata.png";
import Vector4 from "../public/assets/img/20220823_112006.png";

export default function ContentMenus({ menus }) {
  return (
    <>
      <div className="container py-5">
        <section className="flex w-full items-center justify-center gap-x-3">
          <div className="w-20">
            <img
              src={Vector.src}
              // className="w-20"
              alt=""
            />
          </div>
          <div className="w-10">
            <img
              src={Vector1.src}
              // className="h-16"
              alt=""
            />
          </div>
          <div className="w-20">
            <img
              src="https://dinkes.kotabogor.go.id/assets-publik/img/logo-germas1.png"
              // className="w-20"
              alt=""
            />
          </div>
          <div className="w-20">
            <img
              src="https://dinkes.kotabogor.go.id/assets-publik/img/logo-asn1.png"
              // className="w-20"
              alt=""
            />
          </div>
        </section>
        <section className="flex justify-center py-10">
          <div className="w-52">
            <img src={Vector3.src} alt="" />
            <img src={Vector4.src} alt="" />
          </div>
        </section>
        <section className="mt-14 flex justify-center">
          <div className="grid w-full gap-6 drop-shadow-md md:w-[50%] md:grid-cols-2 lg:w-[55%] lg:grid-cols-3">
            {menus.map((m, key) => (
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                key={key}
                className="w-full space-y-3 rounded-2xl bg-white py-5 shadow-md"
              >
                <div className="flex justify-center">
                  <img
                    src={m.img}
                    className="mt-3 h-14 w-14 transition duration-700 hover:-translate-y-2"
                    alt=""
                  />
                </div>
                <div className="mx-auto block text-center text-sm font-bold text-slate-600">
                  {m.title}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
