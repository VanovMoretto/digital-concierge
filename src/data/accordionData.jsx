/* * Este arquivo separa nossos DADOS (o conteúdo) da APRESENTAÇÃO (o App.jsx).
 * * Se precisarmos mudar um horário ou um texto, mexemos SÓ AQUI.
 * O App.jsx fica limpo, apenas lendo e renderizando esta lista.
 * * Usamos .jsx para poder escrever o conteúdo (os "filhos")
 * diretamente com HTML (JSX).
 */
import {
  Wifi,
  Clock,
  Coffee,
  Utensils,
  Dumbbell,
  Droplet,
  ConciergeBell,
  Car,
  Dog,
  ShieldAlert,
  Map,
} from "lucide-react";

// --- Conteúdos (Os "Filhos") ---
// Nós criamos os "filhos" aqui, para deixar a lista principal mais limpa
const ContentInternet = (
  <>
    <p>
      <strong>Wi-Fi:</strong> Acesso gratuito em todo o hotel.
      <br />
      Rede: <strong>SWAN_HOTEIS</strong>
      <br />
      <small>
        <strong>Realize o login na rede, e então utilize: </strong>
        número do quarto como login e seu último sobrenome como senha
      </small>
      {/* TODO: Botão COPIAR SENHA */}
    </p>
    <p>
      <strong>Telefones Úteis:</strong>
      <br />
      Recepção: <strong>Ramal 9</strong>
      <br />
      Restaurante: <strong>Ramal 1110</strong>
      {/* TODO: Botão LIGAR */}
    </p>
  </>
);

const ContentCafe = (
  <>
    <p>
      Nosso delicioso café da manhã é servido no restaurante, localizado no
      andar S.
    </p>
    <p>
      <strong>Segunda a Sexta:</strong>
      <br />
      06:30 às 10:00
    </p>
    <p>
      <strong>Finais de Semana e Feriados:</strong>
      <br />
      07:00 às 10:30
    </p>
  </>
);

const ContentRestaurante = (
  <>
    <p>
      <strong>Irius Gastronomia (Restaurante):</strong>
      <br />
      Segunda a Sexta: 11:30 às 14:00 e 19:00 às 23:00.
      <br />
      <small>(Fechado em finais de semana e feriados)</small>
    </p>
    <p>
      <strong>Room Service (Serviço de Quarto):</strong>
      <br />
      Todos os dias: 11:30 às 23:00.
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
      Para entradas antecipadas ou *late check-out*, por favor, consulte a disponibilidade com a
      recepção (Ramal 9).
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
      <strong>Piscina:</strong>
      <br />
      Horário: 07:00 às 21:00.
    </p>
    <p>
      <strong>Sauna seca e úmida:</strong>
      <br />
      Horário: 07:00 às 21:00.
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
      Custo: R$ 20,00 por dia.
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
      <br />É proibido fumar nas dependências internas do hotel.
    </p>
    <p>
      <strong>Voltagem:</strong>
      <br />
      Nossas tomadas são 220V.
    </p>
  </>
);

const ContentLocais = (
  <>
    <p>
      <strong>Andar SC</strong>
      <br />
      Café da manhã
      <br />
      Academia
      <br />
      Psicina
      <br />
      Sauna seca e sauna úmida
      <br />
      Massagista - Edília*
    </p>
    <p>
      <strong>Andar P</strong>
      <br />
      Recepção
      <br />
      Restaurante Irius
      <br />
      Bar Irius
      <br />
      Centro de Eventos
      <br />
      Lobby
    </p>
    <p>
      <strong>Andar -1</strong>
      <br />
      Estacionamento
    </p>
    <p style={{ fontSize: "10px" }}>
      *Serviço cobrado, consulte a recepção para maiores informações
    </p>
  </>
);

// --- A LISTA PRINCIPAL (Nosso "Banco de Dados") ---
export const accordionData = [
  {
    id: 1,
    icon: <Wifi size={24} />,
    title: "Internet e Telefones",
    content: ContentInternet, // O "filho" vem daqui
  },
  {
    id: 2,
    icon: <Coffee size={24} />,
    title: "Café da Manhã",
    content: ContentCafe, // O "filho" vem daqui
  },
  {
    id: 3,
    icon: <Utensils size={24} />,
    title: "Restaurante e Room Service",
    content: ContentRestaurante, // O "filho" vem daqui
  },
  {
    id: 4,
    icon: <Map size={24} />,
    title: "Locais",
    content: ContentLocais, // O "filho" vem daqui
  },
  {
    id: 5,
    icon: <Dumbbell size={24} />,
    title: "Lazer (Academia, Piscina, Sauna)",
    content: ContentLazer, // O "filho" vem daqui
  },
  {
    id: 6,
    icon: <ConciergeBell size={24} />,
    title: "Serviços (Lavanderia, Estacionamento)",
    content: ContentServicos, // O "filho" vem daqui
  },
  {
    id: 7,
    icon: <Clock size={24} />,
    title: "Check-in e Check-out",
    content: ContentCheckInOut, // O "filho" vem daqui
  },
  {
    id: 8,
    icon: <ShieldAlert size={24} />,
    title: "Políticas do Hotel",
    content: ContentPoliticas, // O "filho" vem daqui
  },
];
