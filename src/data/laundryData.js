import { useTranslation } from "react-i18next";

const formatPrice = (price) => `R$ ${price.toFixed(2).replace(".", ",")}`;

export const useLaundryData = () => {
  const { t } = useTranslation();

  const laundryPriceList = [
    {
      category: t("laundry.categories.tops"),
      items: [
        { name: t("laundry.items.tshirt"), price: formatPrice(32) },
        { name: t("laundry.items.blouseSimple"), price: formatPrice(32) },
        { name: t("laundry.items.tankTop"), price: formatPrice(36) },
        { name: t("laundry.items.longSleeveTshirt"), price: formatPrice(39) },
        { name: t("laundry.items.polo"), price: formatPrice(41) },
        { name: t("laundry.items.shirt"), price: formatPrice(46) },
        { name: t("laundry.items.dressShirt"), price: formatPrice(46) },
        { name: t("laundry.items.longSleevePolo"), price: formatPrice(47) },
        { name: t("laundry.items.twillShirt"), price: formatPrice(57) },
        { name: t("laundry.items.linenShirt"), price: formatPrice(65) },
        { name: t("laundry.items.blouse"), price: formatPrice(66) },
        { name: t("laundry.items.longSleeveBlouse"), price: formatPrice(66) },
        { name: t("laundry.items.silkBlouse"), price: formatPrice(77) },
      ],
    },
    {
      category: t("laundry.categories.bottoms"),
      items: [
        { name: t("laundry.items.shorts"), price: formatPrice(35) },
        { name: t("laundry.items.leggings"), price: formatPrice(39) },
        { name: t("laundry.items.pants"), price: formatPrice(43) },
        { name: t("laundry.items.twillPants"), price: formatPrice(47) },
        { name: t("laundry.items.sweatpants"), price: formatPrice(53) },
        { name: t("laundry.items.linenShorts"), price: formatPrice(54) },
        { name: t("laundry.items.dressShorts"), price: formatPrice(54) },
        { name: t("laundry.items.widePants"), price: formatPrice(65) },
        { name: t("laundry.items.motoPants"), price: formatPrice(67) },
        { name: t("laundry.items.dressPants"), price: formatPrice(70) },
        { name: t("laundry.items.linenSkirt"), price: formatPrice(88) },
        { name: t("laundry.items.bombacha"), price: formatPrice(96) },
      ],
    },
    {
      category: t("laundry.categories.cold"),
      items: [
        { name: t("laundry.items.tracksuit"), price: formatPrice(62) },
        { name: t("laundry.items.overcoat"), price: formatPrice(72) },
        { name: t("laundry.items.zipHoodie"), price: formatPrice(77) },
        { name: t("laundry.items.sweater"), price: formatPrice(79) },
        { name: t("laundry.items.hoodie"), price: formatPrice(79) },
        { name: t("laundry.items.coat"), price: formatPrice(99) },
        { name: t("laundry.items.denimJacket"), price: formatPrice(105) },
        { name: t("laundry.items.jacket"), price: formatPrice(107) },
        { name: t("laundry.items.woolCoat"), price: formatPrice(119) },
        { name: t("laundry.items.linedJacket"), price: formatPrice(122) },
      ],
    },
    {
      category: t("laundry.categories.suits"),
      items: [
        { name: t("laundry.items.blazer"), price: formatPrice(83) },
        { name: t("laundry.items.woolBlazer"), price: formatPrice(88) },
        { name: t("laundry.items.jumpsuit"), price: formatPrice(97) },
        { name: t("laundry.items.suit"), price: formatPrice(146) },
        { name: t("laundry.items.formalWear"), price: formatPrice(148) },
        { name: t("laundry.items.pala"), price: formatPrice(154) },
        { name: t("laundry.items.partyDress"), price: formatPrice(165) },
      ],
    },
    {
      category: t("laundry.categories.underwear"),
      items: [
        { name: t("laundry.items.bikini"), price: formatPrice(24) },
        { name: t("laundry.items.panties"), price: formatPrice(24) },
        { name: t("laundry.items.underpants"), price: formatPrice(24) },
        { name: t("laundry.items.socks"), price: formatPrice(24) },
        { name: t("laundry.items.boxer"), price: formatPrice(29) },
        { name: t("laundry.items.trunks"), price: formatPrice(32) },
        { name: t("laundry.items.bra"), price: formatPrice(32) },
        { name: t("laundry.items.body"), price: formatPrice(36) },
        { name: t("laundry.items.sportsBra"), price: formatPrice(43) },
        { name: t("laundry.items.pajama"), price: formatPrice(44) },
      ],
    },
    {
      category: t("laundry.categories.accessories"),
      items: [
        { name: t("laundry.items.scarf"), price: formatPrice(29) },
        { name: t("laundry.items.tie"), price: formatPrice(36) },
        { name: t("laundry.items.boots"), price: formatPrice(99) },
        { name: t("laundry.items.sneakers"), price: formatPrice(107) },
      ],
    },
    {
      category: t("laundry.categories.baby"),
      items: [
        { name: t("laundry.items.babySeat"), price: formatPrice(122) },
        { name: t("laundry.items.stroller"), price: formatPrice(177) },
      ],
    },
  ];

  return laundryPriceList;
};
