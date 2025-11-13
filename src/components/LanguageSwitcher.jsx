import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';
import { ChevronDown } from 'lucide-react';

// Mapeia os códigos de idioma para as bandeiras
const flags = {
  pt: '🇧🇷',
  en: '🇺🇸',
};

// Mapeia os códigos para os nomes
const langNames = {
  pt: 'PT-BR',
  en: 'EN-US',
}

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = i18n.language;
  const supportedLanguages = i18n.options.supportedLngs.filter(lng => lng !== 'cimode'); // 'cimode' é de debug

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

  return (
    <div className={styles.switcherWrapper} ref={dropdownRef}>
      <button className={styles.currentLangButton} onClick={() => setIsOpen(!isOpen)}>
        <span>{flags[currentLang]}</span>
        <ChevronDown size={16} className={`${styles.chevron} ${isOpen ? styles.open : ''}`} />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {supportedLanguages.map((lng) => (
            <button
              key={lng}
              className={styles.dropdownItem}
              onClick={() => changeLanguage(lng)}
              disabled={lng === currentLang} // Desabilita o idioma atual
            >
              {flags[lng]} {langNames[lng]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;