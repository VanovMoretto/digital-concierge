import React from 'react';
import styles from './FrigobarModal.module.css'; // Vamos criar este CSS
import { X } from 'lucide-react';

/*
 * Modal específico para exibir o cardápio do frigobar como imagem.
 */
function FrigobarModal({ isOpen, onClose, imageName }) {
  if (!isOpen) {
    return null;
  }

  // Define o caminho da imagem. Como está na pasta /public/,
  // podemos acessá-la diretamente pela raiz '/'.
  const imagePath = `/${imageName}`;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      
      {/* Impede que o clique no conteúdo feche o modal */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* Header do Modal */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Cardápio Frigobar</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        {/* Corpo do Modal (com a imagem) */}
        <div className={styles.modalBody}>
          <img 
            src={imagePath} 
            alt="Cardápio Frigobar" 
            className={styles.modalImage}
          />
        </div>

      </div>
    </div>
  );
}

export default FrigobarModal;