// utils/copyToClipboard.js

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("E-mail skopiowany do schowka!");
  } catch (err) {
    console.error("Błąd podczas kopiowania: ", err);
  }
};
