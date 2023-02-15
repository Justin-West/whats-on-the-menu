"use client";
import { useEffect, useState, Component } from "react";
import Food from "../food.json";

class MenuItem {
  name: string;
  price: any;
  constructor(name: string, price: any) {
    this.name = name;
    this.price = price;
  }
}

type MenuItemData = {
  name: string;
  price: number;
  econ: number;
  climate: number;
  temp: number;
  water: number;
};

export default function Menu({ f }: { f: number[] }) {
  const [createdMenuMain, setMenuMain] = useState([
    new MenuItem("Loading...", 0),
  ]);
  const [createdMenuSide, setMenuSide] = useState([
    new MenuItem("Loading...", 0),
  ]);
  const [createdMenuDrink, setMenuDrink] = useState([
    new MenuItem("Loading...", 0),
  ]);
  const entreCount = 7;
  const sideCount = 10;
  const drinkCount = 5;

  useEffect(() => {
    setMenuMain(GenMenu(Food.Europe.Mains, entreCount));
    setMenuSide(GenMenu(Food.Europe.Sides, sideCount));
    setMenuDrink(GenMenu(Food.Europe.Drinks, drinkCount));
  }, [f]);

  function GenMenu(items: MenuItemData[], limit: number) {
    let m = new Array<MenuItem>();

    items.map((i) => {
      let score = 0;

      //-----econ-----
      // (+) LOWPASS, (-) HIGHPASS & PRICE
      const power = 0.8;
      let priceMult = 0.75;
      if (f[0] >= 5) priceMult = 1 + ((f[0] - 5) * (f[0] - 5) * power) / 20;
      else priceMult = 0.75 + f[0] / 20;

      if (i.econ >= 0) {
        if (f[0] >= i.econ) score += 1; //LOWPASS
      } else {
        if (f[0] <= 10 + i.econ) score += 1; //HIGHPASS
      }

      //-----scale-----
      // LOWPASS & randomly remove options
      if (Math.random() < f[1] / 40 + 0.75) score += 1;

      //-----climate-----
      if (i.climate >= 0) {
        if (f[2] >= i.climate) score += 1; //LOWPASS
      } else {
        if (f[2] <= 10 + i.climate) score += 1; //HIGHPASS
      }

      //-----temp-----
      if (i.temp >= 0) {
        if (f[3] >= i.temp) score += 1; //LOWPASS
      } else {
        if (f[3] <= 10 + i.temp) score += 1; //HIGHPASS
      }

      //-----water-----
      if (i.water >= 0) {
        if (f[4] >= i.water) score += 1; //LOWPASS
      } else {
        if (f[4] <= 10 + i.water) score += 1; //HIGHPASS
      }

      if (score >= 5) {
        m.push(new MenuItem(i.name, (priceMult * i.price).toFixed(2)));
      }
    });
    m = RandomReduce(m, entreCount);
    return m;
  }

  function RandomReduce(items: MenuItem[], max: number) {
    let m: MenuItem[] = new Array();
    if (items[0]) {
      while (m.length < max) {
        let rand = Math.floor(Math.random() * items.length);
        if (!items[0]) break;
        if (items[rand]) {
          m.push(items[rand]);
          items.splice(rand, 1);
        }
      }
    }
    return m;
  }

  return (
    <section className="max-w-2xl m-0 overflow-clip text-lg rounded-xl p-3 shadow-inner bg-gradient-to-br from-parchment-300 to-parchment-400">
      <h1 className="mx-auto mb-2 font-extrabold text-2xl text-center border-0 border-black border-b-2">
        Menu
      </h1>
      <p className=" text-center underline">Main Dishes</p>
      {createdMenuMain.map((i) => (
        <li key={i.name} className="flex">
          <p className="grow-0">{i.name}</p>
          <div className="dot"></div>
          <p className="text-right grow-0">{i.price + "gp"}</p>
        </li>
      ))}
      <p className=" text-center underline">Sides</p>
      {createdMenuSide.map((i) => (
        <li key={i.name} className="flex">
          <p className="grow-0">{i.name}</p>
          <div className="dot"></div>
          <p className="text-right grow-0">{i.price + "gp"}</p>
        </li>
      ))}
      <p className=" text-center underline">Drinks</p>
      {createdMenuDrink.map((i) => (
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
