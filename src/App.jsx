import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAccordionData } from "./data/accordionData";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";
import { useLaundryData } from "./data/laundryData";
import { useFrigobarData } from "./data/frigobarData";
import "./App.css";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

function Logo() {
  return (
    <div className="logo">
      <img
        src="/digital-concierge-logo.png"
        alt="Digital Concierge Logo"
      />
    </div>
  );
}

function App() {
  const { t } = useTranslation();
  const accordionData = useAccordionData();

  const laundryPriceList = useLaundryData();
  const frigobarPriceList = useFrigobarData();

  const [modalContent, setModalContent] = useState(null);

  const openLaundryModal = () =>
    setModalContent({
      title: t("modal.laundryTitle"),
      data: laundryPriceList,
    });

  const openFrigobarModal = () =>
    setModalContent({
      title: t("modal.frigobarTitle"),
      data: frigobarPriceList,
    });

  const closeModal = () => setModalContent(null);

  return (
    <>
      <div className="app-container">
        <LanguageSwitcher />

        <Logo />
        <section className="intro-text">
          <p>{t("introText")}</p>
        </section>

        <main className="accordion-list">
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
          title={modalContent?.title}
          data={modalContent?.data}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
