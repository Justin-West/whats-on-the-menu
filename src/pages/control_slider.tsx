import Image from "next/image";
import React, { useState } from "react";

export default function ControlSlider({
  title,
  icon,
  id,
}: {
  title: Array<string>;
  icon: string;
  id: string;
}) {
  const [slider, setSlide] = useState(1);
  const handleChange = (e) => {
    console.log("setting level", e.target.value);
    if (e.target.value < 4) setSlide(0);
    else if (e.target.value < 8) setSlide(1);
    else setSlide(2);
  };
  return (
    <div className="border p-3 rounded-lg gap-2 flex">
      <Image
        className="w-8 h-8 my-auto"
        src={icon} //"\sack-dollar-solid.svg"
        width={100}
        height={100}
        alt={id}
      />
      <h1 className="font-bold text-lg my-auto grow text-center">
        {title[slider]}
      </h1>
      <input
        className="float-right"
        type="range"
        id={id}
        name={id}
        min="0"
        max="10"
        defaultValue={5}
        onChange={(e) => console.log(e.target.value)} // don't set state on all change as react will re-render
        onPointerUp={handleChange} // only set state when handle is released
      />
    </div>
  );
}
