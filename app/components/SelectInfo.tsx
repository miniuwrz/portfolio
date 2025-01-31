"use client";
/* eslint-disable react/no-unescaped-entities */

import React from "react";

// Definicja typów dla propsów
interface SelectInfoProps {
  activeSection: "Work experience" | "Education" | null;

  setActiveSection: React.Dispatch<
    React.SetStateAction<"Work experience" | "Education" | null>
  >;

  pl: boolean;
}

const SelectInfo: React.FC<SelectInfoProps> = ({
  activeSection,
  setActiveSection,
  pl,
}) => {
  return (
    <div className="flex w-full my-6 border border-borderclr rounded-lg overflow-hidden">
      <button
        onClick={() => setActiveSection("Work experience")}
        className={`w-1/2 p-1 text-sm transition-all duration-300 ease-in-out ${
          activeSection === "Work experience"
            ? "bg-blue-500 text-white transform scale-105"
            : "hover:text-blue-500 text-white"
        }`}
      >
        <p>{pl ? "Doświadczenie zawodowe" : "Work experience"}</p>
      </button>
      <button
        onClick={() => setActiveSection("Education")}
        className={`w-1/2 p-1 text-sm transition-all duration-300 ease-in-out ${
          activeSection === "Education"
            ? "bg-blue-500 text-white transform scale-105"
            : "hover:text-blue-500 text-white"
        }`}
      >
        <p>{pl ? "Edukacja" : "Education"}</p>
      </button>
    </div>
  );
};

export default SelectInfo;
