import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className="absolute w-full h-full grid items-center justify-center">
        <main className=" top-0 bottom-0 p-6 justify-center flex flex-wrap gap-6 rounded-xl bg-slate-600">
          <section className="max-w-2xl m-0 overflow-clip flex flex-col gap-2 rounded-xl p-3 bg-red-400">
            <h1 className="font-extrabold text-center text-lg border-0 border-black border-b-2">
              Controls
            </h1>
            <div className="border p-3 rounded-lg gap-2 flex">
              <div className="w-8 h-8 my-auto bg-white rounded-full"></div>
              <h1 className="font-bold grow">Economy:</h1>
              <input
                className="float-right"
                type="range"
                id="climate"
                name="climate"
                min="0"
                max="10"
              />
            </div>
            <div className="border p-3 rounded-lg gap-2 flex">
              <div className="w-8 h-8 my-auto bg-white rounded-full"></div>
              <h1 className="font-bold grow">Climate:</h1>
              <input
                className="float-right"
                type="range"
                id="climate"
                name="climate"
                min="0"
                max="10"
              />
            </div>
            <div className="border p-3 rounded-lg gap-2 flex">
              <div className="w-8 h-8 my-auto bg-white rounded-full"></div>
              <h1 className="font-bold grow">Magic:</h1>
              <input
                className="float-right"
                type="range"
                id="climate"
                name="climate"
                min="0"
                max="10"
              />
            </div>
            <div className="border p-3 rounded-lg gap-2 flex">
              <div className="w-8 h-8 my-auto bg-white rounded-full"></div>
              <h1 className="font-bold grow">Trade:</h1>
              <input
                className="float-right"
                type="range"
                id="climate"
                name="climate"
                min="0"
                max="10"
              />
            </div>
            <div className=" w-[24rem]"></div>
          </section>
          <section className="max-w-2xl m-0 overflow-clip rounded-xl p-3 bg-blue-500">
            <h1 className="mx-auto mb-2 font-extrabold text-center text-lg border-0 border-black border-b-2">
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
      </body>
    </>
  );
}
