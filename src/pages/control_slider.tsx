import Image from "next/image";
import React, { useState } from "react";

export default function ControlSlider({
  title,
  icon,
  id,
  call,
}: {
  title: Array<string>;
  icon: string;
  id: number;
  call: Function;
}) {
  const [slider, setSlide] = useState(1);
  const handleChange = (e) => {
    if (e.target.value < 4) setSlide(0);
    else if (e.target.value < 8) setSlide(1);
    else setSlide(2);

    call(id, e.target.value);
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
        onPointerUp={handleChange} // only set state when handle is released
      />
    </div>
  );
}
