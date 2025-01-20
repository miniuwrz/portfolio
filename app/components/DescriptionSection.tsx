"use client"; // Oznacza, że kod poniżej jest uruchamiany po stronie klienta
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { AiFillLinkedin, AiFillFile, AiFillGithub } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";
import { MdWavingHand } from "react-icons/md";
import dynamic from "next/dynamic";

// Dynamiczne importowanie funkcji kopiowania tylko po stronie klienta
const ClipboardButton = dynamic(() => import("./ClipboardButton"), {
  ssr: false, // Wyłączenie serwerowego renderowania (tylko po stronie klienta)
});

interface ContainerProps {
  pl: boolean; // Przykład, że pl jest typu string, zmień typ według potrzeby
}

const DescriptionSection: React.FC<ContainerProps> = ({ pl }) => {
  return (
    <div>
      <div className="flex items-center gap-8">
        <p className="h-[100px] w-[100px] flex-shrink-0 rounded-full bg-white"></p>
        <div className="w-max-content">
          <h1 className="text-2xl flex items-center gap-2">
            {pl ? "Hej! Tu Dominik" : "Hey! I'm Dominik"}
            <MdWavingHand className="text-[#F1C27D]" />
          </h1>
          <p className="text-sm text-gray-300">Support Engineer</p>
          <p className="text-sm flex items-center gap-2 text-gray-300">
            <IoIosPin /> Gdańsk, Poland
          </p>
        </div>
      </div>
      <p className="w-full max-w-xl md:w-max py-6 text-sm">
        {pl
          ? "Jestem specjalistą IT z doświadczeniem w zakresie wsparcia technicznego, diagnostyki systemów, konfiguracji sprzętu oraz tworzenia rozwiązań przy użyciu JavaScript i Next.js"
          : "I'm an IT specialist with experience in technical support, system diagnostics, hardware configuration, and developing solutions using JavaScript and Next.js"}
      </p>
      <div className="flex gap-6 text-lg justify-between sm:justify-start">
        <a
          href="/Dominik_CV.pdf"
          download="Dominik_CV.pdf"
          className="border-[1px] hovertrans rounded-lg border-borderclr py-1 px-2"
        >
          <button className="flex items-center gap-2">
            <p className="font-medium text-[12px]">{pl ? "CV" : "Resume"}</p>
            <AiFillFile />
          </button>
        </a>
        <div className="flex gap-4">
          <a
            className="border-[1px] rounded-lg hovertrans hover:text-sky-600 border-borderclr p-2"
            href="https://github.com/miniuwrz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="border-[1px] rounded-lg hovertrans hover:text-sky-600 border-borderclr p-2"
            href="https://www.linkedin.com/in/dominik-zblewski-497b87284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          {/* Przycisk do kopiowania e-maila, który używa ClipboardButton */}
          <ClipboardButton />
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
