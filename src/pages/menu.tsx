"use client";
import { useEffect, useState, Component } from "react";
import { food } from "../food.json";

type MenuItem = {
  name: string;
  price: string;
};

export default function Menu({ f }: { f: number[] }) {
  const [createdMenu, setMenu] = useState([{ name: "Loading...", price: "-" }]);

  useEffect(() => {
    GenMenu();
  }, [f]);

  function GenMenu() {
    let m: MenuItem[] = new Array();

    food.map((i) => {
      let score = 0;

      //-----econ-----
      // (+) LOWPASS, (-) HIGHPASS & PRICE
      const power = 0.8;
      let priceMult = 0.75;
      if (f[0] >= 5) priceMult = 1 + ((f[0] - 5) * (f[0] - 5) * power) / 20;
      else priceMult = 0.75 + f[0] / 20;

      if (i.factors[0] >= 0) {
        if (f[0] >= i.factors[0]) score += 1; //LOWPASS
      } else {
        if (f[0] <= Math.abs(i.factors[0])) score += 1; //HIGHPASS
      }

      //-----scale-----
      // LOWPASS & randomly remove options
      if (Math.random() < f[1] / 40 + 0.75) {
        if (i.factors[1] >= 0) {
          if (f[1] >= i.factors[1]) score += 1; //LOWPASS
        } else {
          if (f[1] <= Math.abs(i.factors[1])) score += 1; //HIGHPASS
        }
      }

      //-----climate-----
      if (i.factors[2] >= 0) {
        if (f[2] >= i.factors[2]) score += 1; //LOWPASS
      } else {
        if (f[2] <= Math.abs(i.factors[2])) score += 1; //HIGHPASS
      }

      //-----temp-----
      //DISTANCE
      if (i.factors[3] >= 0) {
        if (f[3] >= i.factors[3]) score += 1; //LOWPASS
      } else {
        if (f[3] <= Math.abs(i.factors[3])) score += 1; //HIGHPASS
      }

      //-----water-----
      //DISTANCE
      if (i.factors[4] >= 0) {
        if (f[4] >= i.factors[4]) score += 1; //LOWPASS
      } else {
        if (f[4] <= Math.abs(i.factors[4])) score += 1; //HIGHPASS
      }

      if (score >= 5) {
        m.push({
          name: i.name,
          price: (priceMult * i.price).toFixed(2),
        });
      }
    });

    setMenu(m);
  }
  return (
    <section className="max-w-2xl m-0 overflow-clip text-lg rounded-xl p-3 shadow-inner bg-gradient-to-br from-parchment-300 to-parchment-400">
      <h1 className="mx-auto mb-2 font-extrabold text-2xl text-center border-0 border-black border-b-2">
        Menu
      </h1>
      {createdMenu.map((i) => (
        <li key={i.name} className="flex">
          <p className="grow-0">{i.name}</p>
          <div className="dot"></div>
          <p className="text-right grow-0">{i.price + "gp"}</p>
        </li>
      ))}
      <div className=" w-[24rem]"></div>
    </section>
  );
}
