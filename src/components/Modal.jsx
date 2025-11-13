import React from 'react';
import styles from './Modal.module.css';
import { X } from 'lucide-react';
// 1. REMOVA a importação da lavanderia daqui:
// import { laundryPriceList } from '../data/laundryData.js';

// 2. ADICIONE 'title' e 'data' nas props
function Modal({ isOpen, onClose, title, data }) {
  // 3. ATUALIZE a condição de saída
  if (!isOpen || !data) {
    return null; 
  }

  // 4. LÓGICA INTELIGENTE: Verificamos se os dados têm 3 colunas (qty)
  const hasQuantity = data[0]?.items[0]?.qty !== undefined;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        <div className={styles.modalHeader}>
          {/* 5. Usamos o 'title' dinâmico */}
          <h2 className={styles.modalTitle}>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className={styles.modalBody}>
          {/* 6. Mapeamos os 'data' dinâmicos */}
          {data.map((categoryData, index) => (
            <div key={index} className={styles.categoryWrapper}>
              
              <h3 className={styles.categoryTitle}>{categoryData.category}</h3>
              
              <table className={styles.priceTable}>
                {/* 7. ADICIONA o Header (<thead>) SÓ SE for 3 colunas */}
                {hasQuantity && (
                  <thead>
                    <tr>
                      <th className={styles.qtyCol}>Qtd.</th>
                      <th className={styles.productCol}>Produto</th>
                      <th className={styles.priceCol}>Valor Unit.</th>
                    </tr>
                  </thead>
                )}

                <tbody>
                  {categoryData.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      {/* 8. ADICIONA a coluna (<td>) SÓ SE for 3 colunas */}
                      {hasQuantity && <td className={styles.qtyCol}>{item.qty}</td>}
                      
                      {/* 9. Adiciona classe de alinhamento no nome */}
                      <td className={!hasQuantity ? styles.productColOnly : ''}>
                        {item.name}
                      </td>
                      <td className={styles.priceCol}>{item.price}</td>
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