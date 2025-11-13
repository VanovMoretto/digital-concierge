import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

// Mapeia o código de IDIOMA para o código de PAÍS (para as bandeiras)
const langToCountryCode = {
  pt: 'br', // pt -> bandeira do Brasil (br)
  en: 'us', // en -> bandeira dos EUA (us)
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = i18n.language.split('-')[0]; // Pega 'pt' de 'pt-BR'
  const supportedLanguages = i18n.options.supportedLngs.filter(lng => lng !== 'cimode');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // Pega o código do país atual (ex: 'br')
  const currentCountryCode = langToCountryCode[currentLang];

  return (
    <div className={styles.switcherWrapper} ref={dropdownRef}>
      {/* O botão agora usa as classes CSS da biblioteca */}
      <button className={styles.currentLangButton} onClick={() => setIsOpen(!isOpen)}>
        <span
          className={`fi fi-${currentCountryCode} ${styles.flagIcon}`}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {supportedLanguages.map((lng) => {
            // Pega o código do país para o item do loop (ex: 'us')
            const countryCode = langToCountryCode[lng];
            return (
              <button
                key={lng}
                className={styles.dropdownItem}
                onClick={() => changeLanguage(lng)}
                disabled={lng === currentLang}
              >
                {/* O item do drop também usa as classes CSS */}
                <span
                  className={`fi fi-${countryCode} ${styles.flagIcon}`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;