/* * Este arquivo separa nossos DADOS (o conteúdo) da APRESENTAÇÃO (o App.jsx).
 * * Se precisarmos mudar um horário ou um texto, mexemos SÓ AQUI.
 * O App.jsx fica limpo, apenas lendo e renderizando esta lista.
 * * Usamos .jsx para poder escrever o conteúdo (os "filhos")
 * diretamente com HTML (JSX).
 */
import React from "react";
// 1. Importe os hooks de tradução
import { useTranslation, Trans } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import SubAccordion from "../components/SubAccordion";
import {
  Wifi,
  Clock,
  Coffee,
  Utensils,
  Dumbbell,
  Lock,
  ConciergeBell,
  Users,
  Dog,
  ShieldAlert,
  Building,
  BedDouble,
  Sparkles,
  Baby,
} from "lucide-react";

// --- Conteúdos (Os "Filhos") ---
// Cada "filho" agora é um componente que usa o hook de tradução.

const ContentInternet = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t('accordion.internet.wifiTitle', 'Wi-Fi:')}</strong> {t('accordion.internet.wifiDesc', 'Acesso gratuito em todo o hotel.')}
        <small>
          <br />
          <Trans i18nKey="accordion.internet.wifiNet">Rede: <strong>SWAN_HOTEIS</strong></Trans>
          <br />
          {t('accordion.internet.wifiLogin', 'Realize o login na rede, e então utilize:')}
          <br />
          <Trans i18nKey="accordion.internet.wifiUser"><strong>Login: </strong>número do quarto</Trans>
          <br />
          <Trans i18nKey="accordion.internet.wifiPass"><strong>Senha: </strong>Último sobrenome em letras minúsculas</Trans>
        </small>
      </p>
      <p>
        <strong>{t('accordion.internet.phonesTitle', 'Telefones Úteis:')}</strong>
        <br />
        <Trans i18nKey="accordion.internet.phonesReception">Recepção: <strong>Ramal 9</strong></Trans>
        <br />
        <Trans i18nKey="accordion.internet.phonesRestaurant">Restaurante: <strong>Ramal 1110</strong></Trans>
      </p>
    </>
  );
};

const ContentCafe = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t('accordion.breakfast.description', 'Nosso delicioso café da manhã é servido no restaurante, localizado no andar SC.')}</p>
      <p>
        <strong>{t('accordion.breakfast.weekdaysTitle', 'Segunda a Sexta:')}</strong>
        <br />
        {t('accordion.breakfast.weekdaysTime', '06:30 às 10:00')}
      </p>
      <p>
        <strong>{t('accordion.breakfast.weekendsTitle', 'Finais de Semana e Feriados:')}</strong>
        <br />
        {t('accordion.breakfast.weekendsTime', '07:00 às 10:30')}
      </p>
    </>
  );
};

const ContentRestaurante = ({ onOpenFrigobarModal }) => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t('accordion.restaurant.title', 'Irius Gastronomia (Restaurante):')}</strong>
        <br />
        {t('accordion.restaurant.hours', 'Segunda a Sexta: 11:30 às 14:00 e 18:30 às 23:00.')}
        <br />
        <small>{t('accordion.restaurant.closedNote', '(Fechado em finais de semana e feriados)')}</small>
      </p>
      <p>
        <strong>{t('accordion.restaurant.roomServiceTitle', 'Room Service (Serviço de Quarto):')}</strong>
        <br />
        {t('accordion.restaurant.roomServiceHours', 'Todos os dias: 11:00 às 23:00.')}
      </p>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <button
          className="button-primary"
          onClick={() =>
            window.open("https://swan-hoteis-2.goomer.app/menu", "_blank")
          }
        >
          {t('accordion.restaurant.menuButton', 'Ver Cardápio')}
        </button>
      </div>
      <p>
        <strong>{t('accordion.restaurant.minibarTitle', 'Frigobar')}</strong>
        <br />
        {t('accordion.restaurant.minibarDesc', 'Consulte os itens e valores do nosso frigobar.')}
      </p>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <button
          className="button-primary" // Usamos o mesmo estilo
          onClick={onOpenFrigobarModal}
        >
          {t('accordion.restaurant.menuButton', 'Ver Cardápio')}
        </button>
      </div>
    </>
  );
};

const ContentCheckInOut = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t('accordion.checkin.checkinTitle', 'Check-in:')}</strong> {t('accordion.checkin.checkinTime', 'a partir das 14:00.')}
      </p>
      <p>
        <strong>{t('accordion.checkin.checkoutTitle', 'Check-out:')}</strong> {t('accordion.checkin.checkoutTime', 'até as 12:00 (meio-dia).')}
      </p>
      <div style={{ padding: "10px", fontSize: "10px" }}>
        <li>
          {t('accordion.checkin.note1', 'Check-in antecipado sujeito à disponibilidade e poderá incluir custos adicionais.')}
        </li>
        <li>
          {t('accordion.checkin.note2', 'Late check-out até as 16:00 será cobrado o valor de meia diária vigente. Após 16:00 será cobrado uma diária completa, podendo permanecer até o meio-dia do dia seguinte. Sujeito à disponibilidade.')}
        </li>
      </div>
    </>
  );
};

const ContentLazer = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t('accordion.leisure.gymTitle', 'Academia:')}</strong>
        <br />
        {t('accordion.leisure.gymHours', 'Aberto 24h')}
      </p>
      <p>
        {/* Usamos <Trans> para permitir o <small> dentro da tradução */}
        <Trans i18nKey="accordion.leisure.poolTitle">
          <strong>Piscina<small>*</small>:</strong>
        </Trans>
        <br />
        {t('accordion.leisure.poolHours', 'Aberto 24h')}
      </p>
      <p>
        <Trans i18nKey="accordion.leisure.saunaTitle">
          <strong>Sauna seca e a vapor<small>**</small>:</strong>
        </Trans>
        <br />
        {t('accordion.leisure.saunaHours', 'Aberto 24h')}
      </p>
      <p>
        <strong>{t('accordion.leisure.gameRoomTitle', 'Sala de jogos:')}</strong>
        <br />
        {t('accordion.leisure.gameRoomHours', 'Aberto 24h')}
      </p>
      <small style={{ fontSize: "10px" }}>
        {/* Usamos <Trans> para garantir que o * seja mantido */}
        <Trans i18nKey="accordion.leisure.note1">*A piscina está em temperatura ambiente.</Trans>
        <br />
        <Trans i18nKey="accordion.leisure.note2">**É necessário solicitar a recepção para ligar a sauna a vapor.</Trans>
      </small>
    </>
  );
};

const ContentServicos = ({ onOpenLaundryModal }) => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t('accordion.services.parkingTitle', 'Estacionamento:')}</strong>
        <br />
        {t('accordion.services.parkingDesc', 'Custo: R$ 20,00 a diária.')}
      </p>
      <p>
        <strong>{t('accordion.services.massageTitle', 'Massagista:')}</strong>
        <br />
        {t('accordion.services.massageDesc', 'Agendamentos e valores:')}{' '}
        {/* Usamos <Trans> para permitir o link com ícone */}
        <Trans i18nKey="accordion.services.massageLink">
          <a
            style={{ fontWeight: "bold", textDecoration: "none", color: "inherit" }}
            href="https://whatsa.me/5551999983202"
          >
            Edília <FaWhatsapp size={15} />
          </a>
        </Trans>
      </p>
      <p>
        <strong>{t('accordion.services.laundryTitle', 'Lavanderia:')}</strong>
        <br />
        {t('accordion.services.laundryDesc', 'Oferecemos serviço de lavanderia.')}
      </p>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <button className="button-primary" onClick={onOpenLaundryModal}>
          {t('accordion.services.laundryButton', 'Ver Preços')}
        </button>
      </div>
    </>
  );
};

const ContentLocais = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>
        <strong>{t('accordion.map.floorSCTitle', 'Andar SC')}</strong>
        <br />
        {/* Usamos <Trans> para permitir os <br/> */}
        <Trans i18nKey="accordion.map.floorSCItems">
          Café da manhã<br />
          Academia<br />
          Piscina<br />
          Sauna seca e sauna a vapor<br />
          Sala de jogos<br />
          Massagista - Edília
        </Trans>
      </p>
      <p>
        <strong>{t('accordion.map.floorPTitle', 'Andar P')}</strong>
        <br />
        <Trans i18nKey="accordion.map.floorPItems">
          Recepção<br />
          Restaurante Irius<br />
          Bar Irius<br />
          Centro de Eventos<br />
          Lobby
        </Trans>
      </p>
      <p>
        <strong>{t('accordion.map.floorM1Title', 'Andar -1')}</strong>
        <br />
        <Trans i18nKey="accordion.map.floorM1Items">
          Estacionamento
        </Trans>
      </p>
    </>
  );
};


const ContentPoliticas = () => {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ padding: "10px 0 0 0" }}>
        
        <SubAccordion icon={<Lock size={20} />} title={t('accordion.policies.safeTitle', 'Guarda de Valores e Cofre')}>
          <p>{t('accordion.policies.safeP1', 'Visando à segurança dos pertences, o Swan Novo Hamburgo disponibiliza sem custo adicional um cofre individual em cada unidade hoteleira (UH) para a guarda de dinheiro, joias, documentos e demais objetos de valor e relevância. Recomendamos que os hóspedes utilizem sempre o cofre de sua unidade.')}</p>
          <p>{t('accordion.policies.safeP2', 'O cofre está localizado dentro do guarda-roupa. Para retirar a chave, solicite ao setor de recepção (Ramal 9).')}</p>
          <p>{t('accordion.policies.safeP3', 'Caso algum item não seja compatível com o espaço do cofre, é possível solicitar a guarda junto à gerência, em cofre especial, mediante protocolo de recebimento e descrição do(s) item(ns) entregue(s) ao hotel.')}</p>
          <p>{t('accordion.policies.safeP4', 'Objetivamente, o hotel não se responsabiliza por perdas, extravios, danos ou eventuais ocorrências relativas a itens que não tenham sido devidamente guardados no cofre disponibilizado ou entregues à gerência.')}</p>
          <p>{t('accordion.policies.safeP5', 'Em caso de esquecimento da senha e/ou perda da chave do trancão, a abertura poderá ser realizada exclusivamente pela gerência em horário comercial, mediante registro e cobrança de eventuais custos.')}</p>
          <p>{t('accordion.policies.safeP6', 'Para cofres com trancão, a abertura dependerá do chamamento de chaveiro especializado, sujeita a cobrança de custos pelo serviço.')}</p>
        </SubAccordion>

        <SubAccordion icon={<Baby size={20} />} title={t('accordion.policies.minorsTitle', 'Hospedagem de Menores')}>
          <p>{t('accordion.policies.minorsP1', 'De acordo com o Estatuto da Criança e do Adolescente (Lei 8.069/90, Art. 82), é proibida a hospedagem de criança ou adolescente em hotel, salvo se autorizado ou acompanhado pelos pais (em conjunto) ou responsável legal, ou se portar termo do Juizado de Menores com a autorização do pai e/ou mãe ausente.')}</p>
          <p>{t('accordion.policies.minorsP2', 'No momento do check-in, é obrigatório apresentar o documento original de identificação na presença dos pais ou autorização por escrito quando acompanhado de responsável devidamente identificado.')}</p>
        </SubAccordion>

        <SubAccordion icon={<Dog size={20} />} title={t('accordion.policies.petTitle', 'Política Pet Friendly')}>
          <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.9rem" }}>
            <li>{t('accordion.policies.petLi1', 'Temos uma taxa pet de R$ 70,00/diária.')}</li>
            <li>{t('accordion.policies.petLi2', 'É permitida a hospedagem de um pet por apartamento.')}</li>
            <li>{t('accordion.policies.petLi3', 'É obrigatório apresentar a carteira de vacinação do pet em dia no check-in.')}</li>
            <li>{t('accordion.policies.petLi4', 'A limpeza do apartamento deve ser agendada e os itens de enxoval não podem ser utilizados pelo pet.')}</li>
            <li>{t('accordion.policies.petLi5', 'O Tutor é responsável pela limpeza dos resíduos, prezar pelo silêncio e por quaisquer danos causados pelo animal.')}</li>
            <li>{t('accordion.policies.petLi6', 'Não será permitido que o Pet fique no apartamento sem o tutor por longos períodos (mais do que 4 horas).')}</li>
            <li>{t('accordion.policies.petLi7', 'Ao circular nas áreas sociais, o pet deve estar na coleira/colo/caixa de transporte. A permanência é restrita ao apartamento (afastado de áreas de alimentos, piscina e academia).')}</li>
            <li>{t('accordion.policies.petLi8', 'A limpeza não será realizada se o pet estiver sozinho no apartamento.')}</li>
          </ul>
        </SubAccordion>

        <SubAccordion icon={<Users size={20} />} title={t('accordion.policies.guestsTitle', 'Política de Acompanhantes')}>
          <p>{t('accordion.policies.guestsP1', 'O registro de acompanhantes na recepção é obrigatório por questões de segurança. A cobrança da taxa de pernoite será feita no check-in do visitante. Nas áreas sociais, não é necessário fazer o registro.')}</p>
        </SubAccordion>

        <SubAccordion icon={<BedDouble size={20} />} title={t('accordion.policies.rulesTitle', 'Regras do Apartamento')}>
          <p>
            <Trans i18nKey="accordion.policies.rulesP1">
              <strong>Não Fumante:</strong><br />É estritamente proibido fumar cigarro ou qualquer derivado dentro dos quartos. Caso a norma não seja respeitada, será cobrada uma taxa de higienização no valor de R$ 250,00.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="accordion.policies.rulesP2">
              <strong>Uso do Enxoval:</strong><br />O uso inadequado do enxoval, móveis ou utensílios poderá gerar custos adicionais. Caso as peças apresentem sujeira excessiva ou danos, será cobrado um valor proporcional.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="accordion.policies.rulesP3">
              <strong>Perda da Chave:</strong><br />Em caso de perda ou extravio da chave, será cobrada uma taxa de R$ 120,00.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="accordion.policies.rulesP4">
              <strong>Voltagem:</strong><br />Nossas tomadas são 220V.
            </Trans>
          </p>
        </SubAccordion>
      </div>
    </>
  );
};


// --- A LISTA PRINCIPAL (Agora um Hook) ---
// 4. Transforme a exportação em um hook customizado
export const useAccordionData = () => {
  const { t } = useTranslation();

  // Os 'content' aqui (ContentInternet, ContentCafe) já são componentes
  // que *também* usam o useTranslation internamente.
  // Só precisamos traduzir os 'title' aqui.
  const accordionData = [
    {
      id: 1,
      icon: <Wifi size={24} />,
      title: t('accordion.internet.title', 'Internet e Telefones'),
      content: ContentInternet,
    },
    {
      id: 2,
      icon: <Coffee size={24} />,
      title: t('accordion.breakfast.title', 'Café da Manhã'),
      content: ContentCafe,
    },
    {
      id: 3,
      icon: <Utensils size={24} />,
      title: t('accordion.restaurant.title', 'Restaurante e Room Service'),
      content: ContentRestaurante,
    },
    {
      id: 4,
      icon: <Sparkles size={24} />,
      title: t('accordion.leisure.title', 'Lazer'),
      content: ContentLazer,
    },
    {
      id: 5,
      icon: <Building size={24} />,
      title: t('accordion.map.title', 'Mapa do Hotel'),
      content: ContentLocais,
    },
    {
      id: 6,
      icon: <ConciergeBell size={24} />,
      title: t('accordion.services.title', 'Serviços'),
      content: ContentServicos,
    },
    {
      id: 7,
      icon: <Clock size={24} />,
      title: t('accordion.checkin.title', 'Check-in e Check-out'),
      content: ContentCheckInOut,
    },
    {
      id: 8,
      icon: <ShieldAlert size={24} />,
      title: t('accordion.policies.title', 'Políticas do Hotel'),
      content: ContentPoliticas, // Este agora renderiza os sub-acordeões
    },
  ];

  // 5. Retorne os dados traduzidos
  return accordionData;
};