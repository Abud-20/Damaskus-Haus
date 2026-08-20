"use client";

import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"de" | "ar">(() => {
    if (typeof window === "undefined") return "de";
    try {
      const savedLanguage = window.localStorage.getItem("damaskus-language");
      if (savedLanguage === "ar" || savedLanguage === "de") return savedLanguage;
    } catch {
    }

    return navigator.language.toLowerCase().startsWith("ar") ? "ar" : "de";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.classList.toggle("language-ar", language === "ar");
    document.documentElement.classList.toggle("language-de", language === "de");
    try {
      window.localStorage.setItem("damaskus-language", language);
    } catch {}
  }, [language]);

  function chooseLanguage(nextLanguage: "de" | "ar") {
    setLanguage(nextLanguage);
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  function handleKeyboard(event: React.KeyboardEvent<HTMLButtonElement>, action: () => void) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  }

  return (
    <div className={`language-menu ${isOpen ? "is-open" : ""}`}>
      <button className="language-toggle" type="button" onClick={toggleMenu} onKeyDown={(event) => handleKeyboard(event, toggleMenu)} aria-label="Sprache auswählen · اختيار اللغة" aria-expanded={isOpen} aria-haspopup="menu">
        <span className="menu-lines" aria-hidden="true"><i /><i /><i /></span>
        <span className="language-current">{language === "de" ? "🇩🇪" : "🇸🇦"}</span>
      </button>
      {isOpen && (
        <div className="language-dropdown" role="menu">
          <p>Sprache · اللغة</p>
          <button className={language === "de" ? "language-choice active" : "language-choice"} type="button" onClick={() => chooseLanguage("de")} onKeyDown={(event) => handleKeyboard(event, () => chooseLanguage("de"))} role="menuitem">🇩🇪 <span>Deutsch</span></button>
          <button className={language === "ar" ? "language-choice active" : "language-choice"} type="button" onClick={() => chooseLanguage("ar")} onKeyDown={(event) => handleKeyboard(event, () => chooseLanguage("ar"))} role="menuitem">🇸🇦 <span>العربية</span></button>
        </div>
      )}
    </div>
  );
}
