import items from "../food.json";
type MenuItem = {
  name: string;
  price: number;
};

let createdMenu: Array<MenuItem> = [];

function GenMenu(f: number[]) {
  createdMenu = [];

  Object.keys(items.food).map((i) => {
    let s = 0;
    for (let j = 0; j < 5; j++) {
      let dis = Math.abs(f[j] - items.food[i].factors[j]);
      s += dis;
    }
    s *= 1 / 5;

    if (s <= 2.5)
      createdMenu.push({
        name: items.food[i].name,
        price: items.food[i].price,
      });
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
