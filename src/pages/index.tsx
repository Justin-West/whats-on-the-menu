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
      <main className="absolute top-0 right-0 bottom-0 left-0 m-12 p-6 justify-center flex flex-wrap gap-6 rounded-xl bg-slate-600">
        <section className="max-w-2xl m-0 overflow-clip flex flex-col gap-2 rounded-xl p-3 bg-red-400">
          <h1 className="font-extrabold text-center text-lg border-0 border-black border-b-2">
            Controls
          </h1>
          <div className="border p-3 justify-end rounded-lg gap-2 flex">
            <h1 className="font-bold ">Economy:</h1>
            <label>Poor</label>
            <input type="range" id="climate" name="climate" min="0" max="10" />

            <label className="w-10">Rich</label>
          </div>
          <div className="border p-3 justify-end rounded-lg gap-2 flex">
            <h1 className="font-bold">Climate:</h1>
            <label>Cold</label>
            <input type="range" id="climate" name="climate" min="0" max="10" />

            <label className="w-10">Hot</label>
          </div>
          <div className="border p-3 justify-end rounded-lg gap-2 flex">
            <h1 className="font-bold">Climate:</h1>
            <label>Cold</label>
            <input type="range" id="climate" name="climate" min="0" max="10" />

            <label className="w-10">Hot</label>
          </div>
        </section>
        <section className="max-w-2xl m-0 overflow-clip rounded-xl p-3 bg-blue-500">
          <h1 className="font-extrabold text-center text-lg border-0 border-black border-b-2">
            Menu
          </h1>
          <li>
            Lorem, ipsum dolor.asdasdadfsgdsf dsfdsfdsfdsfssd fdsfsdfdsfs
            dfsdfdsfdsf dsfa sdasdasdsdas dasdasd
          </li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </section>
      </main>
    </>
  );
}
