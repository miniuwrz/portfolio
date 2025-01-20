"use client"; // Dodajemy dyrektywę na początku pliku, aby umożliwić użycie hooków
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamiczny import komponentu SelectInfo z wyłączeniem SSR
const SelectInfo = dynamic(() => import("./SelectInfo"), {
  ssr: false, // Wyłączamy SSR dla tego komponentu
});

interface ContainerProps {
  pl: boolean; // Przykład, że pl jest typu string, zmień typ według potrzeby
}

const CareerSection: React.FC<ContainerProps> = ({ pl }) => {
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
        pl={pl}
      />

      {/* Renderowanie sekcji na podstawie stanu */}
      {activeSection === "Work experience" && (
        <div
          ref={workExperienceRef}
          className="flex gap-4 border-[1px] border-borderclr p-4 lg:mb:0 rounded-lg"
        >
          <Image
            width={64}
            height={64}
            src="/hcl-logo.jpg"
            alt={pl ? "HCL Polska" : "HCL Poland"} // Dynamiczne tłumaczenie alt
            className="h-16 w-16 mr-4 rounded-full bg-white flex-shrink-0"
          ></Image>
          <div>
            <p className="text-sm text-gray-300">
              {pl ? "Grudzień, 2023 - Obecnie" : "December, 2023 - Present"}
            </p>
            <p className="font-semibold">HCL Poland</p>
            <p className="text-sm text-gray-300 pb-2">
              {pl ? "Inżynier wsparcia" : "Support Engineer"}
            </p>
            <ul className="list-disc text-sm list-inside lg:w-[745px]">
              <li className="pb-2">
                {pl
                  ? "Wsparcie dla około 1200 użytkowników biurowych."
                  : "Supporting around 1200 office users."}
              </li>
              <li className="pb-2">
                {pl
                  ? "Rozwiązywanie problemów z Citrix VDI, Windows, Mac, urządzeniami mobilnymi, salami konferencyjnymi i drukarkami."
                  : "Troubleshooting issues with Citrix VDI's, Windows, Mac, mobile devices, conference rooms & printers."}
              </li>
              <li className="pb-2">
                {pl
                  ? "Otwarte, zarządzanie i zamykanie zgłoszeń serwisowych i incydentów w ServiceNow."
                  : "Opening, managing, and closing service requests and incidents in ServiceNow."}
              </li>
              <li>
                {pl
                  ? "Instalowanie oprogramowania na urządzeniach Windows, Mac i iPhone zdalnie oraz na miejscu."
                  : "Installing software on Windows, Mac and iPhone devices remotely & on-site"}
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeSection === "Education" && (
        <div
          ref={educationRef}
          className="flex gap-4 border-[1px] border-borderclr p-4 rounded-lg"
        >
          <Image
            width={64}
            height={64}
            alt={
              pl
                ? "Zespół Szkół Energetycznych w Gdańsku nr. 13"
                : "Zespół Szkół Energetycznych w Gdańsku nr. 13"
            }
            src="/zse-logo.png"
            className="w-16 h-16 mr-4 rounded-full bg-white flex-shrink-0"
          ></Image>
          <div>
            <p className="text-sm text-gray-300">
              {pl ? "Wrz, 2018 - Kwi, 2022" : "Sep, 2018 - Apr, 2022"}
            </p>
            <p className="font-semibold">
              {pl
                ? "Zespół Szkół Energetycznych w Gdańsku nr. 13"
                : "Zespół Szkół Energetycznych w Gdańsku nr. 13"}
            </p>
            <p className="text-sm text-gray-300 pb-2">
              {pl ? "Technik Informatyk" : "IT Technician"}
            </p>
            <ul className="list-disc text-sm list-inside lg:w-[750px]">
              <li className="pb-2">
                {pl
                  ? "Programowanie: (JS, Python, MySQL,)"
                  : "Programming: (JS, Python, MySQL,)"}
              </li>
              <li className="pb-2">
                {pl
                  ? "Windows Server: (Active Directory, RDP, DHCP, DNS & NAT, Group Policy)"
                  : "Windows Server: (Active Directory, RDP, DHCP, DNS & NAT, Group Policy)"}
              </li>
              <li className="pb-2">
                {pl
                  ? "Sieci: (LAN/WAN, DNS, DHCP, VPN...)"
                  : "Networking: (LAN/WAN, DNS, DHCP, VPN...)"}
              </li>
              <li>
                {pl
                  ? "Administracja bazami danych: (MySQL, MS Access, XAMPP, phpMyAdmin)"
                  : "Database administration: (MySQL, MS Access, XAMPP, phpMyAdmin)"}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerSection;
