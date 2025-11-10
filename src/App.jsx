import React from 'react';
import { accordionData } from './data/accordionData';
import Accordion from './components/Accordion';
import './App.css';

function Logo() {
  return (
    <div className='logo'>
      <img src="https://lirp.cdn-website.com/02637c80/dms3rep/multi/opt/Astrol%C3%A1bio+logo-1920w.png" alt="" />
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Logo />

      {/* Bloco de introdução */}
      <section className="intro-text">
        <p>
          Bem-vindo ao Astrolábio, seu guia digital para uma estada perfeita.
          Explore nossos serviços, horários e facilidades de forma rápida e 
          intuitiva. Estamos aqui para tornar sua experiência inesquecível.
        </p>
      </section>

      {/* Lista centralizada dos Acordeões */}
      <main className="accordion-list">
  {accordionData.map((item) => (
    <Accordion 
      key={item.id}         // Chave (key) para o React não se perder
      icon={item.icon}      // O ícone que veio dos dados
      title={item.title}    // O título que veio dos dados
    >
      {item.content}        {/* O "filho" (children) que veio dos dados */}
    </Accordion>
  ))}
</main>
    </div>
  );
}

export default App;