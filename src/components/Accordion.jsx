import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Accordion.module.css";

function Accordion({ icon, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const headerClasses = `${styles.accordionHeader} ${
    isOpen ? styles.open : ""
  }`;
  const contentClasses = `${styles.accordionContent} ${
    isOpen ? styles.open : ""
  }`;
  const chevronClasses = `${styles.chevron} ${isOpen ? styles.open : ""}`;

  return (
    <div className={styles.accordion}>
      <button
        className={headerClasses}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <div className={styles.icon}>{icon}</div>
        <span className={styles.title}>{title}</span>
        <ChevronDown className={chevronClasses} size={20} />
      </button>
      <div className={contentClasses} aria-hidden={!isOpen}>
        <div className={styles.contentPadding}>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
