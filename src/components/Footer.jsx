import React from 'react';
import styles from './Footer.module.css'; // Vamos criar este arquivo

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* 1. Imagem do Logo */}
      <div className={styles.footerLogo}>
        <img 
          src="https://lirp.cdn-website.com/02637c80/dms3rep/multi/opt/Ativo+1-10259147-1920w.png" 
          alt="Swan Hotéis" 
        />
      </div>

      {/* 2. Copyright */}
      <div className={styles.footerCopyright}>
        <small>© 2024 Todos os direitos reservados</small>
      </div>

      {/* 3. Créditos de Desenvolvedor */}
      <div className={styles.footerDev}>
        Desenvolvido por 
        <a 
          href="https://SEU_LINK_DO_LINKEDIN_AQUI" 
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