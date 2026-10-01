export const beers = [
  {
    id: "travesia",
    title: "Travesía",
    subTitle: "Pilsner Artesanal",
    style: "Pilsner Clásica",
    category: "pilsner",
    price: 14.00,
    volume: "330 ml",
    abv: "6.2%",
    ibu: 24,
    hops: "Saaz / Hallertau",
    malt: "Pilsner Premium & Carapils",
    temp: "4 - 6 °C",
    tag: "Refrescante & Cristalina",
    isPopular: false,
    image: "/images/travesia.jpg",
    description: "Refrescante, balanceada y directa. Notas de malta clara tostada al sol de Ica y un final limpio con amargor herbal persistente.",
    tastingNotes: [
      "Aroma floral suave proveniente de lúpulo Saaz noble.",
      "Entrada fresca en boca con cuerpo ligero a medio.",
      "Final seco y crispante que invita al siguiente sorbo."
    ],
    pairings: ["Ceviche peruano", "Mariscos a la parrilla", "Tiraditos de ají amarillo", "Queso fresco artesanal"],
    brewingDetails: {
      fermentation: "Lager en frío durante 21 días",
      waterSource: "Agua de pozo profundo de Ica con perfil mineral balanceado"
    }
  },
  {
    id: "chancluda",
    title: "Chancluda",
    subTitle: "Red Ale",
    style: "Irish Red Ale",
    category: "red-ale",
    price: 15.00,
    volume: "330 ml",
    abv: "5.0%",
    ibu: 32,
    hops: "Cascade / Fuggle",
    malt: "Caramelo Inglés, Munich & Cebada Tostada",
    temp: "7 - 9 °C",
    tag: "Más Vendido de Autor",
    isPopular: true,
    image: "/images/chancluda.jpg",
    description: "Aromática, profunda con destellos cobrizos. Marcadas notas a caramelo inglés, corteza de pan horneado y un cuerpo sedoso que envuelve el paladar.",
    tastingNotes: [
      "Matices a toffee, frutos secos y masa madre tostada.",
      "Color rojizo caoba brillante con espuma cremosa duradera.",
      "Amargor noble en equilibrio perfecto con el dulzor maltoso."
    ],
    pairings: ["Anticuchos a la parrilla", "Seco de res o cabrito", "Hamburguesas gourmet", "Quesos madurados"],
    brewingDetails: {
      fermentation: "Ale alta temperatura con maduración de 28 días",
      waterSource: "Agua tratada con perfil rico en sulfatos para resaltar malta"
    }
  },
  {
    id: "porter-201063",
    title: "20 | 10 | 63",
    subTitle: "Porter Artesanal",
    style: "Robust Porter",
    category: "porter",
    price: 16.00,
    volume: "330 ml",
    abv: "6.5%",
    ibu: 30,
    hops: "East Kent Goldings / Willamette",
    malt: "Chocolate Malt, Black Patent & Avena",
    temp: "8 - 10 °C",
    tag: "Edición de Guarda",
    isPopular: false,
    image: "/images/porter.jpg",
    description: "Negro profundo con matices oscuros y tostados. Perfil complejo con sutiles notas a cacao peruano, café espresso recién pasado y final sedoso por infusión de avena.",
    tastingNotes: [
      "Aroma intenso a café tostado, cacao amargo y madera suave.",
      "Cuerpo denso, untuoso y envolvente.",
      "Retrogusto prolongado a chocolate negro y malta tostada."
    ],
    pairings: ["Postres con chocolate o lúcuma", "Pecanas acarameladas de Ica", "Carnes ahumadas", "Queso azul"],
    brewingDetails: {
      fermentation: "Ale reposada en frío durante 35 días",
      waterSource: "Agua de pozo filtrada con adición de sales de carbonato"
    }
  }
];
