/* * Este arquivo exporta uma lista de categorias de lavanderia.
 * Cada categoria tem um título e uma lista de itens com nome e preço.
 * Isso facilita a renderização em um modal com subtítulos.
 */

const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

export const laundryPriceList = [
  {
    category: "Peças Superiores (Camisas, Blusas)",
    items: [
      { name: "Camiseta", price: formatPrice(32) },
      { name: "Blusa (Simples)", price: formatPrice(32) }, 
      { name: "Regata", price: formatPrice(36) },
      { name: "Camiseta Manga Longa", price: formatPrice(39) },
      { name: "Polo", price: formatPrice(41) },
      { name: "Camisa", price: formatPrice(46) },
      { name: "Camisa Social", price: formatPrice(46) },
      { name: "Polo Manga Longa", price: formatPrice(47) },
      { name: "Camisa de Sarja", price: formatPrice(57) },
      { name: "Camisa de Linho ou Seda", price: formatPrice(65) },
      { name: "Blusa", price: formatPrice(66) },
      { name: "Blusa Manga Longa", price: formatPrice(66) },
      { name: "Blusa Seda", price: formatPrice(77) },
    ]
  },
  {
    category: "Peças Inferiores (Calças, Saias)",
    items: [
      { name: "Bermuda", price: formatPrice(35) },
      { name: "Calça Leg", price: formatPrice(39) },
      { name: "Calça", price: formatPrice(43) },
      { name: "Calça Sarja", price: formatPrice(47) },
      { name: "Calça Moletom", price: formatPrice(53) },
      { name: "Bermuda de Linho", price: formatPrice(54) },
      { name: "Bermuda Social", price: formatPrice(54) },
      { name: "Calça Larga", price: formatPrice(65) },
      { name: "Calça Motoqueiro", price: formatPrice(67) },
      { name: "Calça Social", price: formatPrice(70) },
      { name: "Saia de Linho", price: formatPrice(88) },
      { name: "Bombacha", price: formatPrice(96) },
    ]
  },
  {
    category: "Roupas de Frio (Casacos, Moletons)",
    items: [
      { name: "Agasalho Esportivo", price: formatPrice(62) },
      { name: "Casacão / Sobretudo", price: formatPrice(72) },
      { name: "Casaco Moletom c/ Fecho", price: formatPrice(77) },
      { name: "Blusão", price: formatPrice(79) },
      { name: "Moletom", price: formatPrice(79) },
      { name: "Casaco", price: formatPrice(99) },
      { name: "Jaqueta Jeans", price: formatPrice(105) },
      { name: "Jaqueta", price: formatPrice(107) },
      { name: "Casaco Lã 3/4", price: formatPrice(119) },
      { name: "Japona Forrada", price: formatPrice(122) },
    ]
  },
  {
    category: "Peças Únicas e Ternos",
    items: [
      { name: "Blazer", price: formatPrice(83) },
      { name: "Blazer Lã / Linho", price: formatPrice(88) },
      { name: "Macacão", price: formatPrice(97) },
      { name: "Terno", price: formatPrice(146) },
      { name: "Traje Fem. / Masc.", price: formatPrice(148) },
      { name: "Pala", price: formatPrice(154) },
      { name: "Vestido Festa (à partir)", price: formatPrice(165) },
    ]
  },
  {
    category: "Roupas Íntimas, Pijamas e Praia",
    items: [
      { name: "Bikini (peça)", price: formatPrice(24) },
      { name: "Calcinha", price: formatPrice(24) },
      { name: "Cueca", price: formatPrice(24) },
      { name: "Meia (par)", price: formatPrice(24) },
      { name: "Cueca Samba Canção", price: formatPrice(29) },
      { name: "Sunga", price: formatPrice(32) },
      { name: "Sutiã", price: formatPrice(32) },
      { name: "Body", price: formatPrice(36) },
      { name: "Top Lycra", price: formatPrice(43) },
      { name: "Pijama (peça)", price: formatPrice(44) },
    ]
  },
  {
    category: "Acessórios e Sapatos",
    items: [
      { name: "Lenço (P)", price: formatPrice(29) },
      { name: "Gravata", price: formatPrice(36) },
      { name: "Bota", price: formatPrice(99) },
      { name: "Tênis", price: formatPrice(107) },
    ]
  },
  {
    category: "Itens Especiais (Bebê)",
    items: [
      { name: "Bebê Conforto", price: formatPrice(122) },
      { name: "Carrinho de Bebê", price: formatPrice(177) },
    ]
  }
];