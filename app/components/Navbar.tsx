import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center pt-0 pb-4">
        <h1>DOMINIK ZBLEWSKI</h1>
        <ul className="flex gap-6 py-4">
          <Link className="hover:text-blue-700 hovertrans" href={"./home"}>
            <li>Home</li>
          </Link>
          <Link className="hover:text-blue-700 hovertrans" href={"/home"}>
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
