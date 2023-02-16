import Head from "next/head";
import Image from "next/image";
import { Montserrat, Josefin_Slab } from "@next/font/google";
import { useState, Suspense } from "react";
import ControlSlider from "./control_slider";
import Menu from "./menu";
import { url } from "inspector";

import iconMoney from "../assets/sack-dollar-solid.svg";
import iconCity from "../assets/chess-rook-solid.svg";
import iconClimate from "../assets/earth-asia-solid.svg";
import iconTemp from "../assets/fire-solid.svg";
import iconWater from "../assets/water-solid.svg";

const montserrat = Montserrat({ subsets: ["latin"] });
const josefin_slab = Josefin_Slab({ subsets: ["latin"] });

const range = 0;
const rand = 0;

export default function Home() {
  const [factors, setFactors] = useState([5, 5, 5, 5, 5]);
  const [theme, setTheme] = useState("Europe");
  function handleUpdate(i: number, v: number) {
    factors[i] = v;
    let a = [factors[0], factors[1], factors[2], factors[3], factors[4]];
    setFactors(a);
  }

  function UpdateTheme() {
    const e = document.getElementById("theme");
    if (e) {
      const value = e.value;
      setTheme(value);
      console.log(value);
    }
  }
  return (
    <>
      <Head>
        <title>Whats On The Menu.</title>
        <meta name="description" content="Generator for DND Taverns" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.75"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          josefin_slab.className +
          " p-6 flex flex-col items-center justify-center"
        }
      >
        <h1 className=" text-white font-extrabold text-4xl">
          Whats On The Menu!
        </h1>

        <main className="top-0 bottom-0 p-6 justify-center flex flex-wrap gap-6 rounded-xl bg-white shadow-xl">
          <section className="noprint max-w-2xl m-0 overflow-clip flex flex-col gap-2 rounded-xl p-3 border">
            <h1
              className={
                josefin_slab.className +
                " font-extrabold text-2xl text-center border-0 border-black border-b-2"
              }
            >
              Controls
            </h1>
            {/* <div className="flex px-4 pt-2">
              <div className=" flex-1">
                <label className="">Seed</label>
                <input
                  className="rounded-md px-2 w-24"
                  id="seed"
                  type="text"
                  defaultValue={1865404532}
                />
              </div>
              <label className="mx-4">Randomness</label>
              <input className="w-24" id="seed" type="range" />
            </div> */}
            <select name="theme" id="theme" onChange={UpdateTheme}>
              <option value="Europe">Europe</option>
              <option value="India">India</option>
              <option value="China">China</option>
            </select>
            <ControlSlider
              title={new Array("Poor", "Modest", "Rich")}
              icon={iconMoney}
              id={0}
              call={handleUpdate}
            />
            <ControlSlider
              title={new Array("Outpost", "Township", "City")}
              icon={iconCity}
              id={1}
              call={handleUpdate}
            />
            <ControlSlider
              title={new Array("Dry", "Temperate", "Tropical")}
              icon={iconClimate}
              id={2}
              call={handleUpdate}
            />
            <ControlSlider
              title={new Array("Cold", "Mild", "Hot")}
              icon={iconTemp}
              id={3}
              call={handleUpdate}
            />
            <ControlSlider
              title={new Array("Oceanic", "Coastal", "Inland")}
              icon={iconWater}
              id={4}
              call={handleUpdate}
            />
            <div className=" w-[24rem]"></div>
          </section>
          <Menu f={factors} theme={theme} />
        </main>
      </div>
    </>
  );
}
