import React from "react";
import Container from "@/app/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to my porfolio!",
  description: "Generated by create next app",
};

const page = () => {
  const pl = false;

  return (
    <div
      className="
     flex
     justify-center
     h-screen 
     m-2"
    >
      <Container pl={pl} />
    </div>
  );
};

export default page;
