import React from "react";
import Link from "next/link";
import { PL, GB } from "country-flag-icons/react/3x2";

/* eslint-disable react/no-unescaped-entities */

interface ContainerProps {
  pl: boolean; // Przykład, że pl jest typu string, zmień typ według potrzeby
}

const Navbar: React.FC<ContainerProps> = ({ pl }) => {
  return (
    <nav>
      <div className="flex justify-between items-center pt-0 pb-4">
        <Link href={"/"}>
          <h1 className="sm:hidden">D. ZBLEWSKI</h1>
          <h1 className="hidden sm:block">DOMINIK ZBLEWSKI</h1>
        </Link>
        <ul className="flex items-center gap-6 py-4">
          <Link className="text-md hover:text-blue-700 hovertrans" href={"/"}>
            {pl ? <li>Strona główna</li> : <li>Home</li>}
          </Link>
          {pl ? (
            <Link className="text-md hover:text-blue-700 hovertrans" href={"/"}>
              <GB title="English" className="h-4" />
            </Link>
          ) : (
            <Link
              className="text-md hover:text-blue-700 hovertrans"
              href={"/pl"}
            >
              <PL title="Polish" className="h-4" />
            </Link>
          )}
          {/* <Link
            className="text-md hover:text-blue-700 hovertrans"
            href={"/home"}
          >
            <li>Projects</li>
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
