import items from "../food.json";
type MenuItem = {
  name: string;
  price: string;
};

let createdMenu: Array<MenuItem> = [];

function GenMenu(f: number[]) {
  createdMenu = [];

  Object.keys(items.food).map((i) => {
    let score = 0;

    //-----econ-----
    // (+) LOWPASS, (-) HIGHPASS & PRICE
    let priceMult = 1;
    priceMult += f[0] / 10;

    if (items.food[i].factors[0] >= 0) {
      if (f[0] >= items.food[i].factors[0]) {
        score += 1;
      } //LOWPASS
    } else {
      if (f[0] <= Math.abs(items.food[i].factors[0])) score += 1; //HIGHPASS
    }

    //-----scale-----
    // LOWPASS & randomly remove options
    if (Math.random() < f[1] / 40 + 0.75) {
      if (f[1] >= items.food[i].factors[1]) {
        score += 1;
      } //LOWPASS
    }

    //-----climate-----
    //DISTANCE
    let dist = Math.abs(f[2] - items.food[i].factors[2]);
    if (dist < 4) score += 1;

    //-----temp-----
    //DISTANCE
    dist = Math.abs(f[3] - items.food[i].factors[3]);
    if (dist < 4) score += 1;

    //-----water-----
    //DISTANCE
    dist = Math.abs(f[4] - items.food[i].factors[4]);
    if (dist < 4) score += 1;

    if (score >= 3) {
      createdMenu.push({
        name: items.food[i].name,
        price: (priceMult * items.food[i].price).toFixed(2),
      });
    }
  });
  return createdMenu;
}

export default function Menu({ s }: { s: number[] }) {
  const foodItems = GenMenu(s);
  return (
    <section className="max-w-2xl m-0 overflow-clip text-lg rounded-xl p-3 shadow-inner bg-gradient-to-br from-parchment-300 to-parchment-400">
      <h1 className="mx-auto mb-2 font-extrabold text-2xl text-center border-0 border-black border-b-2">
        Menu
      </h1>
      {Object.keys(foodItems).map((i) => (
        <div>
          <li className="flex">
            <p className="grow-0">{foodItems[i].name}</p>
            <div className="dot"></div>
            <p className="text-right grow-0">{"$" + foodItems[i].price}</p>
          </li>
        </div>
      ))}
      <div className=" w-[24rem]"></div>
    </section>
  );
}
