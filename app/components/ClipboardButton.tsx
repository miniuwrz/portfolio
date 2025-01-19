// ClipboardButton.tsx
import React from "react";
import { IoMdMail } from "react-icons/io";

const ClipboardButton = () => {
  const handleCopyEmail = () => {
    const email = "dominik.zblewski.gda@gmail.com";

    // Kopiowanie tekstu do schowka
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("E-mail skopiowany do schowka!");
      })
      .catch((err) => {
        console.error("Błąd podczas kopiowania: ", err);
      });
  };

  return (
    <button
      className="border-[1px] rounded-lg hovertrans hover:text-sky-600 border-borderclr p-2"
      onClick={handleCopyEmail}
    >
      <IoMdMail />
    </button>
  );
};

export default ClipboardButton;
