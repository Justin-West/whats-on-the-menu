import Head from "next/head";
import Image from "next/image";
import { Montserrat, Josefin_Slab } from "@next/font/google";
import ControlSlider from "./control_slider";

const montserrat = Montserrat({ subsets: ["latin"] });
const josefin_slab = Josefin_Slab({ subsets: ["latin"] });

export default function Home() {
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
          " absolute p-6 w-full h-full grid items-center justify-center"
        }
      >
        <main className="top-0 bottom-0 p-6 justify-center flex flex-wrap gap-6 rounded-xl bg-white shadow-xl">
          <section className="max-w-2xl m-0 overflow-clip flex flex-col gap-2 rounded-xl p-3 border">
            <h1
              className={
                josefin_slab.className +
                " font-extrabold text-2xl text-center border-0 border-black border-b-2"
              }
            >
              Controls
            </h1>
            <div className="flex px-4 pt-2">
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
            </div>
            <ControlSlider
              title={new Array("Poor", "Modest", "Rich")}
              icon="\sack-dollar-solid.svg"
              id="economy"
            />
            <ControlSlider
              title={new Array("Outpost", "Township", "City")}
              icon="\chess-rook-solid.svg"
              id="population"
            />
            <ControlSlider
              title={new Array("Dry", "Temperate", "Tropical")}
              icon="\earth-asia-solid.svg"
              id="climate"
            />
            <ControlSlider
              title={new Array("Cold", "Mild", "Hot")}
              icon="\fire-solid.svg"
              id="temperature"
            />
            <div className=" w-[24rem]"></div>
          </section>
          <section className="max-w-2xl m-0 overflow-clip text-lg rounded-xl p-3 shadow-inner bg-gradient-to-br from-parchment-300 to-parchment-400">
            <h1 className="mx-auto mb-2 font-extrabold text-2xl text-center border-0 border-black border-b-2">
              Menu
            </h1>
            <li className="flex">
              <p className="grow-0">Turkey</p>
              <div className="dot"></div>
              <p className="text-right grow-0">$20.00</p>
            </li>
            <li className="flex">
              <p className="grow-0">Beef</p>
              <div className="dot"></div>
              <p className="text-right grow-0">$24.00</p>
            </li>
            <li className="flex">
              <p className="grow-0">Chicken</p>
              <div className="dot"></div>
              <p className="text-right grow-0">$18.00</p>
            </li>
            <div className=" w-[24rem]"></div>
          </section>
        </main>
      </div>
    </>
  );
}
