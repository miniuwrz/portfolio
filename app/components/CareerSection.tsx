"use client"; // Dodajemy dyrektywę na początku pliku, aby umożliwić użycie hooków
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamiczny import komponentu SelectInfo z wyłączeniem SSR
const SelectInfo = dynamic(() => import("./SelectInfo"), {
  ssr: false, // Wyłączamy SSR dla tego komponentu
});

const CareerSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    "Work experience" | "Education" | null
  >(null);
  const [hasPageLoaded, setHasPageLoaded] = useState<boolean>(false); // Stan do kontrolowania załadowania strony

  // Referencje do sekcji
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  // Funkcja do przewijania do wybranej sekcji
  const scrollToSection = (section: "Work experience" | "Education") => {
    if (section === "Work experience" && workExperienceRef.current) {
      workExperienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Education" && educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Efekt, który uruchamia przewijanie po załadowaniu strony
  useEffect(() => {
    setHasPageLoaded(true); // Ustawiamy, że strona się załadowała
  }, []); // Ten efekt uruchomi się tylko raz po załadowaniu strony

  useEffect(() => {
    // Przewijanie do sekcji tylko jeśli strona jest załadowana i po zmianie aktywnej sekcji
    if (hasPageLoaded && activeSection) {
      scrollToSection(activeSection);
    }
  }, [activeSection, hasPageLoaded]); // Zależność: zmiana sekcji oraz załadowanie strony

  return (
    <div>
      {/* Przekazywanie odpowiednich propsów do SelectInfo */}
      <SelectInfo
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Renderowanie sekcji na podstawie stanu */}
      {activeSection === "Work experience" && (
        <div
          ref={workExperienceRef}
          className="flex gap-4 border-[1px] border-borderclr p-4 rounded-lg"
        >
          <Image
            width={64}
            height={64}
            src="/hcl-logo.jpg"
            alt="HCL Poland"
            className="h-16 w-16 mr-4 rounded-full bg-white flex-shrink-0"
          ></Image>
          <div>
            <p className="text-sm text-gray-300">Dec, 2023 - Present</p>
            <p className="font-semibold">HCL Poland</p>
            <p className="text-sm text-gray-300 pb-2">Support Engineer</p>
            <ul className="list-disc list-inside lg:w-[750px]">
              <li className="pb-2">Supporting around 1200 office ussers.</li>
              <li className="pb-2">
                Troubleshooting issues with Citrix VDI's, Windows, Mac, mobile
                devices, conference rooms & printers.
              </li>
              <li className="pb-2">
                Opening, managing, and closing service requests and incidents in
                ServiceNow.
              </li>
              <li>
                Installing software on Windows, Mac and iPhone devices remotely
                & on-site
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeSection === "Education" && (
        <div
          ref={educationRef}
          className="flex gap-4 border-[1px] border-borderclr p-4 mb-4 rounded-lg"
        >
          <Image
            width={64}
            height={64}
            alt="Zespół Szkół Energetycznych w Gdańsku nr. 13"
            src="/zse-logo.png"
            className="w-16 h-16 mr-4 rounded-full bg-white flex-shrink-0"
          ></Image>
          <div>
            <p className="text-sm text-gray-300">Sep, 2018 - Apr, 2022</p>
            <p className="font-semibold">
              Zespół Szkół Energetycznych w Gdańsku nr. 13
            </p>
            <p className="text-sm text-gray-300 pb-2">IT Technician</p>
            <ul className="list-disc list-inside lg:w-[750px]">
              <li className="pb-2">Programming: (JS, Python, MySQL,)</li>
              <li className="pb-2">
                Windows Server: (Active Directory, RDP, DHCP, DNS & NAT, Group
                Policy)
              </li>
              <li className="pb-2">Networking: (LAN/WAN, DNS, DHCP, VPN...)</li>
              <li>
                Database administration: (MySQL, MS Access, XAMPP, phpMyAdmin)
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerSection;
