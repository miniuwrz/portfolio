import React from "react";
import Navbar from "./Navbar";
import DescriptionSection from "./DescriptionSection";
import TechSection from "./TechSection";
import CareerSection from "./CareerSection";
import ToolsSection from "./ToolsSection";

/* eslint-disable react/no-unescaped-entities */

interface ContainerProps {
  pl: boolean; // Przykład, że pl jest typu string, zmień typ według potrzeby
}

const Container: React.FC<ContainerProps> = ({ pl }) => {
  return (
    <div className="px-4 lg:w-[900px]">
      <Navbar pl={pl} />
      <DescriptionSection pl={pl} />
      <TechSection pl={pl} />
      <CareerSection pl={pl} />
      <ToolsSection />
    </div>
  );
};

export default Container;
