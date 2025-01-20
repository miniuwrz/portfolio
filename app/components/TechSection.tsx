import React from "react";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";
/* eslint-disable react/no-unescaped-entities */

interface ContainerProps {
  pl: boolean; // Przykład, że pl jest typu string, zmień typ według potrzeby
}

const TechSection: React.FC<ContainerProps> = ({ pl }) => {
  return (
    <div className="py-6">
      <h1 className="font-bold">
        {pl ? "Mój stack technologiczny" : "My tech stack:"}
      </h1>
      <ul className="flex flex-wrap max-608:justify-evenly sm:justify-start md:justify-between gap-4 mt-6 text-6xl">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans"
              title="Next.js"
            >
              <RiNextjsFill />
            </li>
            <p className="text-sm mt-3">Next.js</p>
          </div>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-[#61dbfb]"
              title="React"
            >
              <FaReact />
            </li>
            <p className="text-sm mt-3">React</p>
          </div>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-[#f0db4f]"
              title="JavaScript"
            >
              <SiJavascript />
            </li>
            <p className="text-sm mt-3">JavaScript</p>
          </div>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.typescriptlang.org/"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-[#3178c6]"
              title="TypeScript"
            >
              <SiTypescript />
            </li>
            <p className="text-sm mt-3">TypeScript</p>
          </div>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://tailwindcss.com/"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-cyan-400"
              title="Tailwind CSS"
            >
              <SiTailwindcss />
            </li>
            <p className="text-sm mt-3">TailwindCSS</p>
          </div>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-[#E44D26]"
              title="HTML5"
            >
              <SiHtml5 />
            </li>
            <p className="text-sm mt-3">HTML</p>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default TechSection;
