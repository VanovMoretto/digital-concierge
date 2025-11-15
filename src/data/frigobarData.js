import { useTranslation } from 'react-i18next';

const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

export const useFrigobarData = () => {
  const { t } = useTranslation();

  const frigobarPriceList = [
    {
      category: t('frigobar.categories.drinks'),
      items: [
        { qty: 4, name: t('frigobar.items.waterCup'), price: formatPrice(5) },
        { qty: 5, name: t('frigobar.items.waterBottle'), price: formatPrice(8) },
        { qty: 4, name: t('frigobar.items.softDrink'), price: formatPrice(10) },
        { qty: 1, name: t('frigobar.items.grapeJuice'), price: formatPrice(16) },
        { qty: 2, name: t('frigobar.items.fruitJuice'), price: formatPrice(9) },
        { qty: 1, name: t('frigobar.items.chocolateMilk'), price: formatPrice(9) },
        { qty: 1, name: t('frigobar.items.redBull'), price: formatPrice(22) },
        { qty: 2, name: t('frigobar.items.heineken'), price: formatPrice(18) },
        { qty: 2, name: t('frigobar.items.stella'), price: formatPrice(16) },
      ]
    },
    {
      category: t('frigobar.categories.snacks'),
      items: [
        { qty: 2, name: t('frigobar.items.gum'), price: formatPrice(5) },
        { qty: 2, name: t('frigobar.items.cerealBar'), price: formatPrice(7) },
        { qty: 1, name: t('frigobar.items.cookies'), price: formatPrice(8) },
        { qty: 1, name: t('frigobar.items.crackers'), price: formatPrice(8) },
        { qty: 2, name: t('frigobar.items.cashew'), price: formatPrice(10) },
        { qty: 2, name: t('frigobar.items.chocolate'), price: formatPrice(12) },
        { qty: 1, name: t('frigobar.items.kitkat'), price: formatPrice(12) },
        { qty: 1, name: t('frigobar.items.chips'), price: formatPrice(22) },
      ]
    },
  ];

  return frigobarPriceList;
};