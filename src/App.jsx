import React, { useState } from "react";
import { accordionData } from "./data/accordionData";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";
import { laundryPriceList} from './data/laundryData'
import { frigobarPriceList } from "./data/frigobarData";
import "./App.css";
import Footer from "./components/Footer";

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
  const [modalContent, setModalContent] = useState(null)

  const openLaundryModal = () => setModalContent({
    title: "Serviço de Lava e Seca",
    data: laundryPriceList
  });

  const openFrigobarModal = () => setModalContent({
    title: "Cardápio Frigobar",
    data: frigobarPriceList
  });

  const closeModal = () => setModalContent(null)

  return (
    <>
    <div className="app-container">
      <Logo />
      <section className="intro-text">
        <p>
          Bem-vindo ao Astrolábio, seu guia digital para uma estada perfeita.
          Explore nossos serviços, horários e facilidades de forma rápida e
          intuitiva. Estamos aqui para tornar sua experiência inesquecível.
        </p>
      </section>

      <main className="accordion-list">
        {/* 5. ATUALIZE O .map() */}
        {accordionData.map((item) => {
          // Pega o 'content' (que agora é um componente, ex: ContentInternet)
          const ContentComponent = item.content;

          return (
            <Accordion key={item.id} icon={item.icon} title={item.title}>
              {/* Renderiza o componente de conteúdo, passando a função
                  de abrir o modal APENAS se for o item de id 6 */}
              <ContentComponent
                onOpenLaundryModal={item.id === 6 ? openLaundryModal : null}
                onOpenFrigobarModal={item.id === 3 ? openFrigobarModal : null}
              />
            </Accordion>
          );
        })}
      </main>

      {/* 6. ADICIONE O MODAL AQUI (fora do 'main') */}
      {/* Ele fica "escutando" o estado 'isLaundryModalOpen' */}
      <Modal 
      isOpen={!!modalContent}
      onClose={closeModal}
      title={modalContent?.title}
      data={modalContent?.data}/>
    </div>
    <Footer />
    </>
  );
}

export default App;
