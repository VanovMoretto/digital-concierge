import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const langToCountryCode = {
  pt: "br",
  en: "us",
  es: "es",
  zh: "cn",
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = i18n.language.split("-")[0];
  const supportedLanguages = i18n.options.supportedLngs.filter(
    (lng) => lng !== "cimode"
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const currentCountryCode = langToCountryCode[currentLang];

  return (
    <div className={styles.switcherWrapper} ref={dropdownRef}>
      <button
        className={styles.currentLangButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`fi fi-${currentCountryCode} ${styles.flagIcon}`} />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {supportedLanguages
            .filter((lng) => lng !== currentLang)
            .map((lng) => {
              const countryCode = langToCountryCode[lng];
              return (
                <button
                  key={lng}
                  className={styles.dropdownItem}
                  onClick={() => changeLanguage(lng)}
                  disabled={lng === currentLang}
                >
                  <span className={`fi fi-${countryCode} ${styles.flagIcon}`} />
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
