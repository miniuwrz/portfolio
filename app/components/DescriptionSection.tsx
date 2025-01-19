"use client"; // Oznacza, że kod poniżej jest uruchamiany po stronie klienta
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { AiFillLinkedin, AiFillFile } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";
import { MdWavingHand } from "react-icons/md";
import dynamic from "next/dynamic";

// Dynamiczne importowanie funkcji kopiowania tylko po stronie klienta
const ClipboardButton = dynamic(() => import("./ClipboardButton"), {
  ssr: false, // Wyłączenie serwerowego renderowania (tylko po stronie klienta)
});

const DescriptionSection = () => {
  return (
    <div>
      <div className="flex items-center gap-8">
        <p className="h-[100px] w-[100px] flex-shrink-0 rounded-full bg-white"></p>
        <div className="w-max-content">
          <h1 className="text-2xl flex items-center gap-2">
            Hey! I'm Dominik
            <MdWavingHand className="text-[#F1C27D]" />
          </h1>
          <p className="text-gray-300">Support Engineer</p>
          <p className="flex items-center gap-2 text-gray-300">
            <IoIosPin /> Gdańsk, Poland
          </p>
        </div>
      </div>
      <p className="w-full max-w-xl md:w-max py-6 text-sm">
        I’m an IT specialist combining experience in technical support with a
        passion for programming. I specialize in system diagnostics, hardware
        configuration, and developing solutions, particularly with JavaScript
        and React.
      </p>
      <div className="flex gap-6 text-lg justify-between sm:justify-start">
        <a
          href="/Dominik_CV.pdf"
          download="Dominik_CV.pdf"
          className="border-[1px] hovertrans rounded-lg border-borderclr py-1 px-2"
        >
          <button className="flex items-center gap-2">
            <p className="font-medium text-[16px]">Resume</p>
            <AiFillFile />
          </button>
        </a>
        <div className="flex gap-4">
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
