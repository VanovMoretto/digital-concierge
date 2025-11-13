import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAccordionData } from "./data/accordionData";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";
import { laundryPriceList } from './data/laundryData'
import { frigobarPriceList } from "./data/frigobarData";
import "./App.css";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

function Logo() {
  return (
    <div className="logo">
      <img
        src="https://lirp.cdn-website.com/02637c80/dms3rep/multi/opt/Astrol%C3%A1bio+logo-1920w.png"
        alt=""
      />
    </div>
  );
}

function App() {
  // 4. Inicialize os hooks
  const { t } = useTranslation();
  const accordionData = useAccordionData(); // Pega os dados já traduzidos
  
  const [modalContent, setModalContent] = useState(null)

  // 5. Traduza os títulos do modal
  const openLaundryModal = () => setModalContent({
    title: t('modal.laundryTitle'),
    data: laundryPriceList
  });

  const openFrigobarModal = () => setModalContent({
    title: t('modal.frigobarTitle'),
    data: frigobarPriceList
  });

  const closeModal = () => setModalContent(null)

  return (
    <>
    <div className="app-container">
      {/* 6. Adicione o Switcher aqui */}
      <LanguageSwitcher />

      <Logo />
      <section className="intro-text">
        {/* 7. Traduza o texto de introdução */}
        <p>
          {t('introText')}
        </p>
      </section>

      <main className="accordion-list">
        {/* 8. O map agora usa os dados do hook (já traduzidos) */}
        {accordionData.map((item) => {
          const ContentComponent = item.content;

          return (
            <Accordion key={item.id} icon={item.icon} title={item.title}>
              <ContentComponent
                onOpenLaundryModal={item.id === 6 ? openLaundryModal : null}
                onOpenFrigobarModal={item.id === 3 ? openFrigobarModal : null}
              />
            </Accordion>
          );
        })}
      </main>

      <Modal 
        isOpen={!!modalContent}
        onClose={closeModal}
        title={modalContent?.title} // O título já vem traduzido
        data={modalContent?.data}
      />
    </div>
    <Footer />
    </>
  );
}

export default App;