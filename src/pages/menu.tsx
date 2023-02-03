import { useEffect } from "react";
import food from "../food.json";

type MenuItem = {
  name: string;
  price: number;
};

let createdMenu: Array<MenuItem>;

const range = 6;
const rand = 0;
const economy = 0;

function GenMenu() {
  createdMenu = [];

  let scores: Array<number> = [];
  Object.keys(food).map((i) => {
    if (Math.abs(economy - food[i].economy) < range)
      createdMenu.push({ name: food[i].name, price: food[i].price });
    // if (food[i].climate == 100)
    //   createdMenu.push({ name: food[i].name, price: food[i].price });
  });
  return createdMenu;
}

function GetScore() {
  return Math.abs(economy - food[i].economy);
}

export default function Menu() {
  const foodItems = GenMenu();
  return (
    <section className="max-w-2xl m-0 overflow-clip text-lg rounded-xl p-3 shadow-inner bg-gradient-to-br from-parchment-300 to-parchment-400">
      <h1 className="mx-auto mb-2 font-extrabold text-2xl text-center border-0 border-black border-b-2">
        Menu
      </h1>
      {Object.keys(foodItems).map((i) => (
        <div>
          <li className="flex">
            <p className="grow-0">{createdMenu[i].name}</p>
            <div className="dot"></div>
            <p className="text-right grow-0">{"$" + createdMenu[i].price}</p>
          </li>
        </div>
      ))}
      <div className=" w-[24rem]"></div>
    </section>
  );
}
