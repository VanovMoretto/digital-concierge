import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Usa o http-backend para carregar traduções
  .use(initReactI18next) // Passa a instância i18n para o react-i18next
  .init({
    // Define os idiomas suportados
    supportedLngs: ['pt', 'en'],
    
    // Idioma padrão
    fallbackLng: 'pt',
    
    // Idioma inicial
    lng: 'pt',

    // Configuração do backend
    backend: {
    
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },

    debug: false,

    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;