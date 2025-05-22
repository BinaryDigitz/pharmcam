import React from "react";
import { Logo, Language, Theme, Hambuger, User } from "./exportComp";
import Link from "next/link";

function Navbar() {
  return (
    <header className="px-4 py-8">
      <nav className="flex justify-between md:justify-around items-center">
        <Link href="/">
          <Logo textSize="heading4" logoSize={"size-8"} />
        </Link>
        <div className="flex items-center gap-4">
          <Language />
          <Theme />
          <Hambuger />
          <User />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
