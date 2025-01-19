import React from "react";
import Navbar from "./Navbar";
import DescriptionSection from "./DescriptionSection";
import TechSection from "./TechSection";
import CareerSection from "./CareerSection";
import ToolsSection from "./ToolsSection";
/* eslint-disable react/no-unescaped-entities */

const Container = () => {
  return (
    <div className="px-4">
      <Navbar />
      <DescriptionSection />
      <TechSection />
      <CareerSection />
      <ToolsSection />
    </div>
  );
};

export default Container;
