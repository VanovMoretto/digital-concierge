/**
 * frigobarData.js
 *
 * Lista de itens do frigobar, separados por categoria.
 * Usamos 3 colunas: qty, name, price.
 */

const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

export const frigobarPriceList = [
  {
    category: "Bebidas",
    items: [
      { qty: 4, name: "Água Mineral Copo", price: formatPrice(5) },
      { qty: 5, name: "Água Mineral Garrafa", price: formatPrice(8) },
      { qty: 4, name: "Refrigerante", price: formatPrice(10) },
      { qty: 1, name: "Suco Integral de Uva", price: formatPrice(16) },
      { qty: 2, name: "Suco de Frutas", price: formatPrice(9) },
      { qty: 1, name: "Achocolatado", price: formatPrice(9) },
      { qty: 1, name: "Red Bull", price: formatPrice(22) },
      { qty: 2, name: "Cerveja Long Neck Heineken", price: formatPrice(18) },
      { qty: 2, name: "Cerveja Long Neck Stella", price: formatPrice(16) },
    ]
  },
  {
    category: "Snacks",
    items: [
      { qty: 2, name: "Chicletes", price: formatPrice(5) },
      { qty: 2, name: "Barra de Cereais", price: formatPrice(7) },
      { qty: 1, name: "Cookies", price: formatPrice(8) },
      { qty: 1, name: "Biscoito Salgado", price: formatPrice(8) },
      { qty: 2, name: "Castanha de Caju", price: formatPrice(10) },
      { qty: 2, name: "Chocolate", price: formatPrice(12) },
      { qty: 1, name: "Chocolate Kit Kat", price: formatPrice(12) },
      { qty: 1, name: "Batata", price: formatPrice(22) },
    ]
  },
];