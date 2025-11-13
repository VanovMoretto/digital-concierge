/* * Este arquivo separa nossos DADOS (o conteúdo) da APRESENTAÇÃO (o App.jsx).
 * * Se precisarmos mudar um horário ou um texto, mexemos SÓ AQUI.
 * O App.jsx fica limpo, apenas lendo e renderizando esta lista.
 * * Usamos .jsx para poder escrever o conteúdo (os "filhos")
 * diretamente com HTML (JSX).
 */
import React from "react";
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
// Nós criamos os "filhos" aqui, para deixar a lista principal mais limpa
const ContentInternet = () => (
  <>
    <p>
      <strong>Wi-Fi:</strong> Acesso gratuito em todo o hotel.
      <small>
        <br />
        Rede: <strong>SWAN_HOTEIS</strong>
        <br />
        Realize o login na rede, e então utilize:
        <br />
        <strong>Login: </strong>número do quarto
        <br />
        <strong>Senha: </strong>Último sobrenome em letras minúsculas
      </small>
    </p>
    <p>
      <strong>Telefones Úteis:</strong>
      <br />
      Recepção: <strong>Ramal 9</strong>
      <br />
      Restaurante: <strong>Ramal 1110</strong>
    </p>
  </>
);

const ContentCafe = () => (
  <>
    <p>
      Nosso delicioso café da manhã é servido no restaurante, localizado no
      andar SC.
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

const ContentRestaurante = ({ onOpenFrigobarModal }) => (
  <>
    <p>
      <strong>Irius Gastronomia (Restaurante):</strong>
      <br />
      Segunda a Sexta: 11:30 às 14:00 e 18:30 às 23:00.
      <br />
      <small>(Fechado em finais de semana e feriados)</small>
    </p>
    <p>
      <strong>Room Service (Serviço de Quarto):</strong>
      <br />
      Todos os dias: 11:00 às 23:00.
    </p>
    <div style={{ textAlign: "center", margin: "10px 0" }}>
      <button
        className="button-primary"
        onClick={() =>
          window.open("https://swan-hoteis-2.goomer.app/menu", "_blank")
        }
      >
        Ver Cardápio
      </button>
    </div>
    <p>
      <strong>Frigobar</strong>
      <br />
      Consulte os itens e valores do nosso frigobar.
    </p>
    <div style={{ textAlign: "center", margin: "10px 0" }}>
      <button
        className="button-primary" // Usamos o mesmo estilo
        onClick={onOpenFrigobarModal}
      >
        Ver Cardápio
      </button>
    </div>
  </>
);

const ContentCheckInOut = () => (
  <>
    <p>
      <strong>Check-in:</strong> a partir das 14:00.
    </p>
    <p>
      <strong>Check-out:</strong> até as 12:00 (meio-dia).
    </p>
    <div style={{ padding: "10px", fontSize: "10px" }}>
      <li>
        Check-in antecipado sujeito à disponibilidade e poderá incluir custos
        adicionais.
      </li>
      <li>
        Late check-out até as 16:00 será cobrado o valor de meia diária vigente.
        <br />
        Após 16:00 será cobrado uma diária completa, podendo permanecer até o
        meio-dia do dia seguinte. Sujeito à disponibilidade.
      </li>
    </div>
  </>
);

const ContentLazer = () => (
  <>
    <p>
      <strong>Academia:</strong>
      <br />
      Aberto 24h
    </p>
    <p>
      <strong>
        Piscina<small>*</small>:
      </strong>
      <br />
      Aberto 24h
    </p>
    <p>
      <strong>
        Sauna seca e a vapor<small>**</small>:
      </strong>
      <br />
      Aberto 24h
    </p>
    <p>
      <strong>Sala de jogos:</strong>
      <br />
      Aberto 24h
    </p>
    <small style={{ fontSize: "10px" }}>
      *A piscina está em temperatura ambiente.
      <br />
      **É necessário solicitar a recepção para ligar a sauna a vapor.
    </small>
  </>
);

const ContentServicos = ({ onOpenLaundryModal }) => (
  <>
    <p>
      <strong>Estacionamento:</strong>
      <br />
      Custo: R$ 20,00 a diária.
    </p>
    <p>
      <strong>Massagista:</strong>
      <br />
      Agendamentos e valores:{" "}
      <a
        style={{ fontWeight: "bold", textDecoration: "none", color: "inherit" }}
        href="https://whatsa.me/5551999983202"
      >
        Edília <FaWhatsapp size={15} />
      </a>
    </p>
    <p>
      <strong>Lavanderia:</strong>
      <br />
      Oferecemos serviço de lavanderia.
    </p>
    <div style={{ textAlign: "center", margin: "10px 0" }}>
      <button className="button-primary" onClick={onOpenLaundryModal}>
        Ver Preços
      </button>
    </div>
  </>
);

const ContentLocais = () => (
  <>
    <p>
      <strong>Andar SC</strong>
      <br />
      Café da manhã
      <br />
      Academia
      <br />
      Piscina
      <br />
      Sauna seca e sauna a vapor
      <br />
      Sala de jogos
      <br />
      Massagista - Edília
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
  </>
);


const ContentPoliticas = () => (
  <>
    {/* Usamos um <div> simples para "embrulhar" os sub-acordeões.
      O padding de 10px em cima e 0 nos lados faz o alinhamento
      visual funcionar bem dentro do acordeão pai.
    */}
    <div style={{ padding: "10px 0 0 0" }}>
      {/* --- Sub-Acordeão 1 (Longo) --- */}
      <SubAccordion icon={<Lock size={20} />} title="Guarda de Valores e Cofre">
        <p>
          Visando à segurança dos pertences, o Swan Novo Hamburgo disponibiliza
          sem custo adicional um cofre individual em cada unidade hoteleira (UH)
          para a guarda de dinheiro, joias, documentos e demais objetos de valor
          e relevância. Recomendamos que os hóspedes utilizem sempre o cofre de
          sua unidade.
        </p>
        <p>
          O cofre está localizado dentro do guarda-roupa. Para retirar a chave,
          solicite ao setor de recepção (Ramal 9).
        </p>
        <p>
          Caso algum item não seja compatível com o espaço do cofre, é possível
          solicitar a guarda junto à gerência, em cofre especial, mediante
          protocolo de recebimento e descrição do(s) item(ns) entregue(s) ao
          hotel.
        </p>
        <p>
          Objetivamente, o hotel não se responsabiliza por perdas, extravios,
          danos ou eventuais ocorrências relativas a itens que não tenham sido
          devidamente guardados no cofre disponibilizado ou entregues à
          gerência.
        </p>
        <p>
          Em caso de esquecimento da senha e/ou perda da chave do trancão, a
          abertura poderá ser realizada exclusivamente pela gerência em horário
          comercial, mediante registro e cobrança de eventuais custos.
        </p>
        <p>
          Para cofres com trancão, a abertura dependerá do chamamento de
          chaveiro especializado, sujeita a cobrança de custos pelo serviço.
        </p>
      </SubAccordion>

      {/* --- Sub-Acordeão 2 (Longo) --- */}
      <SubAccordion icon={<Baby size={20} />} title="Hospedagem de Menores">
        <p>
          De acordo com o Estatuto da Criança e do Adolescente (Lei 8.069/90,
          Art. 82), é proibida a hospedagem de criança ou adolescente em hotel,
          salvo se autorizado ou acompanhado pelos pais (em conjunto) ou
          responsável legal, ou se portar termo do Juizado de Menores com a
          autorização do pai e/ou mãe ausente.
        </p>
        <p>
          No momento do check-in, é obrigatório apresentar o documento original
          de identificação na presença dos pais ou autorização por escrito
          quando acompanhado de responsável devidamente identificado.
        </p>
      </SubAccordion>

      {/* --- Sub-Acordeão 3 (Longo) --- */}
      <SubAccordion icon={<Dog size={20} />} title="Política Pet Friendly">
        <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.9rem" }}>
          <li>Temos uma taxa pet de R$ 70,00/diária.</li>
          <li>É permitida a hospedagem de um pet por apartamento.</li>
          <li>
            É obrigatório apresentar a carteira de vacinação do pet em dia no
            check-in.
          </li>
          <li>
            A limpeza do apartamento deve ser agendada e os itens de enxoval não
            podem ser utilizados pelo pet.
          </li>
          <li>
            O Tutor é responsável pela limpeza dos resíduos, prezar pelo
            silêncio e por quaisquer danos causados pelo animal.
          </li>
          <li>
            Não será permitido que o Pet fique no apartamento sem o tutor por
            longos períodos (mais do que 4 horas).
          </li>
          <li>
            Ao circular nas áreas sociais, o pet deve estar na
            coleira/colo/caixa de transporte. A permanência é restrita ao
            apartamento (afastado de áreas de alimentos, piscina e academia).
          </li>
          <li>
            A limpeza não será realizada se o pet estiver sozinho no
            apartamento.
          </li>
        </ul>
      </SubAccordion>

      {/* --- Sub-Acordeão 4 (Médio) --- */}
      <SubAccordion
        icon={<Users size={20} />}
        title="Política de Acompanhantes"
      >
        <p>
          O registro de acompanhantes na recepção é obrigatório por questões de
          segurança. A cobrança da taxa de pernoite será feita no check-in do
          visitante. Nas áreas sociais, não é necessário fazer o registro.
        </p>
      </SubAccordion>

      {/* --- Sub-Acordeão 5 (Curtos/Combinados) --- */}
      <SubAccordion
        icon={<BedDouble size={20} />}
        title="Regras do Apartamento"
      >
        <p>
          <strong>Não Fumante:</strong>
          <br />É estritamente proibido fumar cigarro ou qualquer derivado
          dentro dos quartos. Caso a norma não seja respeitada, será cobrada uma
          taxa de higienização no valor de R$ 250,00.
        </p>
        <p>
          <strong>Uso do Enxoval:</strong>
          <br />O uso inadequado do enxoval, móveis ou utensílios poderá gerar
          custos adicionais. Caso as peças apresentem sujeira excessiva ou
          danos, será cobrado um valor proporcional.
        </p>
        <p>
          <strong>Perda da Chave:</strong>
          <br />
          Em caso de perda ou extravio da chave, será cobrada uma taxa de R$
          120,00.
        </p>
        <p>
          <strong>Voltagem:</strong>
          <br />
          Nossas tomadas são 220V.
        </p>
      </SubAccordion>
    </div>
  </>
);

// --- A LISTA PRINCIPAL (Nosso "Banco de Dados") ---
export const accordionData = [
  {
    id: 1,
    icon: <Wifi size={24} />,
    title: "Internet e Telefones",
    content: ContentInternet,
  },
  {
    id: 2,
    icon: <Coffee size={24} />,
    title: "Café da Manhã",
    content: ContentCafe,
  },
  {
    id: 3,
    icon: <Utensils size={24} />,
    title: "Restaurante e Room Service",
    content: ContentRestaurante,
  },
  {
    id: 4,
    icon: <Sparkles size={24} />,
    title: "Lazer",
    content: ContentLazer,
  },
  {
    id: 5,
    icon: <Building size={24} />,
    title: "Mapa do Hotel",
    content: ContentLocais,
  },
  {
    id: 6,
    icon: <ConciergeBell size={24} />,
    title: "Serviços",
    content: ContentServicos,
  },
  {
    id: 7,
    icon: <Clock size={24} />,
    title: "Check-in e Check-out",
    content: ContentCheckInOut,
  },
  {
    id: 8,
    icon: <ShieldAlert size={24} />,
    title: "Políticas do Hotel",
    content: ContentPoliticas, // Este agora renderiza os sub-acordeões
  },
];
