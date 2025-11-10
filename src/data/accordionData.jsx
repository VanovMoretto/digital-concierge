/* * Este arquivo separa nossos DADOS (o conteúdo) da APRESENTAÇÃO (o App.jsx).
 * * Se precisarmos mudar um horário ou um texto, mexemos SÓ AQUI.
 * O App.jsx fica limpo, apenas lendo e renderizando esta lista.
 * * Usamos .jsx para poder escrever o conteúdo (os "filhos") 
 * diretamente com HTML (JSX).
 */
import { Wifi, Clock, Coffee, Utensils, Dumbbell, Droplet, WashingMachine, Car, Dog, ShieldAlert } from 'lucide-react';

// --- Conteúdos (Os "Filhos") ---
// Nós criamos os "filhos" aqui, para deixar a lista principal mais limpa
const ContentInternet = (
  <>
    <p>
      <strong>Wi-Fi:</strong> Acesso gratuito em todo o hotel.
      <br />
      Rede: <strong>SWAN_GUEST</strong>
      <br />
      Senha: <strong>swan123</strong>
      {/* TODO: Botão COPIAR SENHA */}
    </p>
    <p>
      <strong>Telefones Úteis:</strong>
      <br />
      Recepção: <strong>Ramal 9</strong>
      {/* TODO: Botão LIGAR */}
    </p>
  </>
);

const ContentCafe = (
  <>
    <p>
      Nosso delicioso café da manhã é servido no restaurante, localizado no andar S.
    </p>
    <p>
      <strong>Segunda a Sexta:</strong>
      <br />
      05:00 às 10:00
    </p>
    <p>
      <strong>Finais de Semana e Feriados:</strong>
      <br />
      06:00 às 10:00
    </p>
  </>
);

const ContentRestaurante = (
  <>
    <p>
      O restaurante está aberto diariamente para almoço e jantar.
    </p>
    <p>
      O Room Service funciona 24h.
    </p>
    {/* TODO: Botões de MODAL para os cardápios */}
  </>
);

const ContentCheckInOut = (
  <>
    <p>
      <strong>Check-in:</strong> a partir das 14:00.
    </p>
    <p>
      <strong>Check-out:</strong> até as 12:00 (meio-dia).
    </p>
    <p>
      Para saídas antecipadas ou *late check-out*, por favor, consulte a recepção (Ramal 9).
    </p>
  </>
);

const ContentLazer = (
  <>
    <p>
      <strong>Academia:</strong>
      <br />
      Horário: 24 horas por dia.
    </p>
    <p>
      <strong>Piscina Aquecida:</strong>
      <br />
      Horário: 07:00 às 21:00.
    </p>
    <p>
      <strong>Sauna:</strong>
      <br />
      Horário: 16:00 às 21:00.
    </p>
  </>
);

const ContentServicos = (
  <>
    <p>
      <strong>Lavanderia:</strong>
      <br />
      Oferecemos serviço de lavanderia.
      {/* TODO: Botão MODAL Tabela de Preços */}
    </p>
    <p>
      <strong>Estacionamento:</strong>
      <br />
      Custo: R$ 32,00 por dia.
    </p>
  </>
);

const ContentPoliticas = (
  <>
    <p>
      <strong>Hotel Pet Friendly:</strong>
      <br />
      Somos pet friendly! Consulte as regras e taxas na recepção.
    </p>
    <p>
      <strong>Política de Fumantes:</strong>
      <br />
      É proibido fumar nas dependências internas do hotel.
    </p>
    <p>
      <strong>Voltagem:</strong>
      <br />
      Nossas tomadas são 220V.
    </p>
  </>
);


// --- A LISTA PRINCIPAL (Nosso "Banco de Dados") ---
export const accordionData = [
  {
    id: 1,
    icon: <Wifi size={24} />,
    title: "Internet e Telefones",
    content: ContentInternet // O "filho" vem daqui
  },
  {
    id: 2,
    icon: <Coffee size={24} />,
    title: "Café da Manhã",
    content: ContentCafe // O "filho" vem daqui
  },
  {
    id: 3,
    icon: <Utensils size={24} />,
    title: "Restaurante e Room Service",
    content: ContentRestaurante // O "filho" vem daqui
  },
  {
    id: 4,
    icon: <Clock size={24} />,
    title: "Check-in e Check-out",
    content: ContentCheckInOut // O "filho" vem daqui
  },
  {
    id: 5,
    icon: <Dumbbell size={24} />,
    title: "Lazer (Academia, Piscina, Sauna)",
    content: ContentLazer // O "filho" vem daqui
  },
  {
    id: 6,
    icon: <WashingMachine size={24} />,
    title: "Serviços (Lavanderia, Estacionamento)",
    content: ContentServicos // O "filho" vem daqui
  },
  {
    id: 7,
    icon: <ShieldAlert size={24} />,
    title: "Políticas do Hotel",
    content: ContentPoliticas // O "filho" vem daqui
  }
];