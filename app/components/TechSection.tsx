import React from "react";
import Link from "next/link";
import { FaWindows, FaLinux, FaPython } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiVmware } from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai";

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
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-[#0078D4]"
              title="Next.js"
            >
              <FaWindows />
            </li>
            <p className="text-sm mt-3">Windows</p>
          </div>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://react.dev/"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-[#0078D4]"
              title="React"
            >
              <FaLinux />
            </li>
            <p className="text-sm mt-3">Linux</p>
          </div>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-[#0078D4]"
              title="JavaScript"
            >
              <VscAzure />
            </li>
            <p className="text-sm mt-3">Azure</p>
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
              <SiVmware />
            </li>
            <p className="text-sm mt-3">VMware</p>
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
              <AiOutlineKubernetes />
            </li>
            <p className="text-sm mt-3">Kubernetes</p>
          </div>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        >
          <div className="flex flex-col items-center gap-">
            <li
              className="flex items-center justify-center border-[1px] w-32 h-32 border-borderclr p-4 rounded-lg hovertrans hover:text-[#3776AB]"
              title="HTML5"
            >
              <FaPython />
            </li>
            <p className="text-sm mt-3">Python</p>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default TechSection;
