import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.css';

/*
 * Componente Acordeão (Menu Sanfona) Reutilizável
 *
 * Props:
 * - icon: O ícone a ser exibido (passado como um componente, ex: <Wifi />)
 * - title: O título do acordeão (string)
 * - children: O conteúdo que será exibido quando aberto (JSX)
 */
function Accordion({ icon, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Lógica para aplicar classes dinamicamente
  const headerClasses = `${styles.accordionHeader} ${isOpen ? styles.open : ''}`;
  const contentClasses = `${styles.accordionContent} ${isOpen ? styles.open : ''}`;
  const chevronClasses = `${styles.chevron} ${isOpen ? styles.open : ''}`;

  return (
    <div className={styles.accordion}>
      {/* O cabeçalho é um botão para acessibilidade */}
      <button className={headerClasses} onClick={toggleAccordion} aria-expanded={isOpen}>
        <div className={styles.icon}>{icon}</div>
        <span className={styles.title}>{title}</span>
        <ChevronDown className={chevronClasses} size={20} />
      </button>

      {/* O conteúdo que expande */}
      <div className={contentClasses} aria-hidden={!isOpen}>
        {/* Adicionamos um 'padding' interno para o conteúdo não colar nas bordas */}
        <div className={styles.contentPadding}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;