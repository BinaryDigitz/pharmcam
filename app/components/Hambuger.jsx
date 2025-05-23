import React from "react";
import Image from "next/image";
import { menu } from "../assets/assets";

function Hambuger() {
  return (
    <div 
    title="Change theme"
    className="md:hidden hover:bg-white/20  text-green-950 hover:opacity-80 trans px-4 py-2 rounded cursor-pointer">
      <Image width={30} src={menu}/>
    </div>
  );
}

export default Hambuger;
