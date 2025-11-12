import React from 'react';
import styles from './Modal.module.css';
import { X } from 'lucide-react';
// 1. Importamos nossa lista de preços que já criamos
import { laundryPriceList } from '../data/laundryData.js';

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null; // Se não estiver aberto, não renderiza nada
  }

  // A função 'onClose' será chamada se o usuário clicar no fundo escuro
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      
      {/* Usamos e.stopPropagation() para evitar que o clique no modal feche ele */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* Header do Modal */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Serviço Lava e Seca</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        {/* Corpo do Modal (onde a tabela é criada) */}
        <div className={styles.modalBody}>
          {/* 2. Mapeamos cada CATEGORIA da nossa lista */}
          {laundryPriceList.map((categoryData, index) => (
            <div key={index} className={styles.categoryWrapper}>
              
              {/* 3. Renderiza o título da categoria */}
              <h3 className={styles.categoryTitle}>{categoryData.category}</h3>
              
              {/* 4. Cria a tabela para os itens */}
              <table className={styles.priceTable}>
                <tbody>
                  {/* 5. Mapeia cada ITEM dentro da categoria */}
                  {categoryData.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Modal;