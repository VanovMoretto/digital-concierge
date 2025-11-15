import React from "react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://VanovMoretto.github.io/digital-concierge/digital-concierge-icon.png"
            alt="Logo Genérica Hotel"
          />
        </a>
      </div>

      <div className={styles.footerCopyright}>
        <small>{t("footer.copyright")}</small>
      </div>
      <div className={styles.footerDev}>
        {t("footer.devCredit")}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vanov Moretto
        </a>
      </div>
    </footer>
  );
}

export default Footer;
