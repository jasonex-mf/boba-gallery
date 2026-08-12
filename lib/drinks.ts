export type DrinkCategory =
  | "Milk Tea"
  | "Latte"
  | "Fruit Tea"
  | "Pure Tea"
  | "Matcha"
  | "Specialty";

export interface BobaDrink {
  id: string;
  name: string;
  categories: DrinkCategory[];
  description: string;
  /** URL of a photo of the drink. */
  imageUrl: string;
  /** What's actually in the cup. */
  ingredients: string[];
  /** Short flavor tags shown as chips on the card. */
  tags: string[];
  /** Shop this drink is sourced from. */
  shop: string;
  /** Link to the shop's menu/site. */
  shopUrl: string;
}

export const DRINKS: BobaDrink[] = [
  {
    id: "molly-premium-jasmine-milk-tea",
    name: "Premium Jasmine Milk Tea",
    categories: ["Milk Tea"],
    description:
      "Freshly picked double-petal jasmine tea, blended with premium milk for a floral, fragrant cup.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/Premium-Jasmine-Milk-Tea.png",
    ingredients: ["Jasmine tea", "Sugar"],
    tags: ["floral", "fragrant"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-osmanthus-milk-tea",
    name: "Osmanthus Milk Tea",
    categories: ["Milk Tea"],
    description: "Longjing tea paired with golden osmanthus, finished with milk.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/Osmanthus-Milk-Tea-1.png",
    ingredients: ["Longjing green tea", "Osmanthus flower"],
    tags: ["floral", "honeyed"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-white-champaca-milk-tea",
    name: "White Champaca Milk Tea",
    categories: ["Milk Tea"],
    description: "Mengding high mountain tea with a delicate orchid aroma, and milk.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/White-Champaca-Milk-Tea.png",
    ingredients: ["Mengding mountain tea", "White champaca flower"],
    tags: ["floral", "mountain tea"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-gardenia-milk-tea",
    name: "Gardenia Milk Tea",
    categories: ["Milk Tea"],
    description:
      "High-altitude Sichuan green tea infused with mountain gardenia, and milk.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/Gardenia-Milk-Tea.png",
    ingredients: ["Sichuan green tea", "Gardenia flower"],
    tags: ["floral", "high-altitude"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-snowy-dancong",
    name: "Snowy DanCong",
    categories: ["Milk Tea"],
    description: "Dan Cong oolong tea topped with a layer of snowy whipped cream.",
    imageUrl: "https://usa.mollytea.com/wp-content/uploads/2025/07/Snowy-DanCong.png",
    ingredients: ["Dan Cong oolong tea", "Snowy whipped cream"],
    tags: ["oolong", "whipped cream"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-snowy-gardenia",
    name: "Snowy Gardenia",
    categories: ["Milk Tea"],
    description: "Gardenia-infused tea topped with a layer of snowy whipped cream.",
    imageUrl: "https://usa.mollytea.com/wp-content/uploads/2025/07/Snowy-Gardenia.png",
    ingredients: ["Gardenia-infused tea", "Snowy whipped cream"],
    tags: ["floral", "whipped cream"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-snowy-jasmine",
    name: "Snowy Jasmine",
    categories: ["Milk Tea"],
    description: "Jasmine tea topped with a layer of snowy whipped cream.",
    imageUrl: "https://usa.mollytea.com/wp-content/uploads/2025/07/Snowy-Jasmine.png",
    ingredients: ["Jasmine tea", "Snowy whipped cream"],
    tags: ["floral", "whipped cream"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-snowy-peach-oolong",
    name: "Snowy Peach Oolong",
    categories: ["Milk Tea"],
    description: "Peach oolong tea topped with a layer of snowy whipped cream.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/Snowy-Peach-Oolong-1.png",
    ingredients: ["Peach oolong tea", "Snowy whipped cream"],
    tags: ["peach", "whipped cream"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-white-champaca-matcha",
    name: "White Champaca Matcha",
    categories: ["Matcha", "Milk Tea"],
    description: "Matcha blended with white champaca tea, topped with snowy whipped cream.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/White-Champaca-Matcha.webp",
    ingredients: ["Matcha", "White champaca tea", "Snowy whipped cream"],
    tags: ["matcha", "whipped cream"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-premium-jasmine-matcha",
    name: "Premium Jasmine Matcha",
    categories: ["Matcha", "Milk Tea"],
    description: "Matcha blended with premium jasmine tea, topped with snowy whipped cream.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/Premium-Jasmine-Matcha.webp",
    ingredients: ["Matcha", "Jasmine tea", "Snowy whipped cream"],
    tags: ["matcha", "whipped cream"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-pistachio-jasmine-coconut",
    name: "Pistachio Jasmine Coconut",
    categories: ["Milk Tea"],
    description: "Jasmine tea with pistachio and coconut, topped with snowy whipped cream.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/Pistachio-Jasmine-Coconut.webp",
    ingredients: ["Jasmine tea", "Pistachio", "Coconut", "Snowy whipped cream"],
    tags: ["nutty", "coconut"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-pistachio-white-champaca-coconut",
    name: "Pistachio White Champaca Coconut",
    categories: ["Milk Tea"],
    description:
      "White champaca tea with pistachio and coconut, topped with snowy whipped cream.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/Pistachio-White-Champaca-Coconut.webp",
    ingredients: ["White champaca tea", "Pistachio", "Coconut", "Snowy whipped cream"],
    tags: ["nutty", "coconut"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-gardenia-iced-tea",
    name: "Gardenia Iced Tea",
    categories: ["Pure Tea"],
    description: "Gardenia-infused tea served over ice, no milk.",
    imageUrl: "https://usa.mollytea.com/wp-content/uploads/2025/07/Gardenia-Iced-Tea.webp",
    ingredients: ["Gardenia-infused tea", "Ice"],
    tags: ["floral", "no dairy"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-premium-jasmine-iced-tea",
    name: "Premium Jasmine Iced Tea",
    categories: ["Pure Tea"],
    description: "Premium jasmine tea served over ice, no milk.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/07/Premium-Jasmine-Iced-Tea.webp",
    ingredients: ["Jasmine tea", "Ice"],
    tags: ["floral", "no dairy"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "molly-jasmine-mango-smoothie",
    name: "Jasmine Mango Smoothie",
    categories: ["Fruit Tea"],
    description: "Jasmine tea blended with mango into a smoothie.",
    imageUrl:
      "https://usa.mollytea.com/wp-content/uploads/2025/08/Jasmine-Mango-Smoothie-3.webp",
    ingredients: ["Jasmine tea", "Mango", "Ice"],
    tags: ["fruity", "smoothie"],
    shop: "Molly Tea",
    shopUrl: "https://usa.mollytea.com/product-categories/",
  },
  {
    id: "heytea-king-jasmine-guava",
    name: "King Jasmine Guava",
    categories: ["Fruit Tea", "Milk Tea"],
    description:
      "Our first teamix. Nine-scented spring jasmine tea, crafted with over 5,000 fresh jasmine blossoms for every 500g of tea, with no artificial flavor. Blended with red guava and real milk, topped with our handcrafted in-house guava cloud.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/4d2ea5cf-e5e0-487f-a2c2-77bdb1fac8f5.png",
    ingredients: ["Jasmine tea", "Red guava", "Guava cloud"],
    tags: ["jasmine", "guava"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-golden-oolong-yuzu",
    name: "Golden Oolong Yuzu",
    categories: ["Fruit Tea"],
    description:
      "A refreshing teamix. Golden oolong tea brings delicate orchid notes, balanced by the bright sweetness of yuzu. A touch of dried lemon adds a fragrant finish.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/fce25e65-c92e-4d70-be35-80fe731cd3f1.png",
    ingredients: ["Golden oolong tea", "Yuzu", "Dried lemon"],
    tags: ["oolong", "citrus"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-longjing-cheese-milk-tea",
    name: "Longjing Cheese Milk Tea",
    categories: ["Milk Tea"],
    description:
      "Hand-picked fresh Longjing tea buds blended with roasted buckwheat, paired with salted cheese cream and a light cheese cloud. Nutty, savory, and refreshingly bright.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/07/853b8ed2-0aa8-4251-857e-3f7f6226bfa8.png",
    ingredients: ["Longjing tea", "Roasted buckwheat", "Salted cheese cream", "Cheese cloud"],
    tags: ["nutty", "savory"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-yingde-cheese-milk-tea",
    name: "Yingde Cheese Milk Tea",
    categories: ["Milk Tea"],
    description:
      "Crafted with whole-leaf Yingde black tea from Guangdong, one of the world's renowned black tea origins. Paired with our handcrafted in-house salted cheese cream and topped with our original cheese cloud.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/803c4774-9508-4c70-aac8-d881b2debbbd.png",
    ingredients: ["Yingde black tea", "Salted cheese cream", "Cheese cloud"],
    tags: ["black tea", "cheese cloud"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-mochi-yingde-black-milk-tea",
    name: "Mochi Yingde Black Milk Tea",
    categories: ["Milk Tea"],
    description:
      "From Yingde, Guangdong — the \"hometown of black tea.\" Brewed with large whole-leaf black tea for floral honeyed notes, layered with hand-made cheese mochi and glutinous rice.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/f00abbe6-a0d1-42b1-83e7-7bb72288cd3f.png",
    ingredients: ["Yingde black tea", "Cheese mochi", "Glutinous rice"],
    tags: ["mochi", "black tea"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-jasmine-milk-tea",
    name: "Jasmine Milk Tea",
    categories: ["Milk Tea"],
    description:
      "A customised jasmine tea base, scented with 3,000 jasmine flowers per 500g, blended with real milk, no artificial creamer. Naturally floral with a light, refreshing taste.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/08f654c1-2d26-4a08-a448-bbe8ea755cf8.png",
    ingredients: ["Jasmine tea"],
    tags: ["floral", "light"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-kale-boost-tea",
    name: "Kale Boost Tea",
    categories: ["Fruit Tea"],
    description:
      "The \"super food\" kale is 100% freshly pressed, with no added concentrate. Enhanced with chia seeds for a light, refreshing experience.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/9e06051b-d01b-4e32-83f6-e5d59b40d4d9.png",
    ingredients: ["Kale juice", "Chia seeds"],
    tags: ["healthy", "green"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-triple-supreme-matcha-latte",
    name: "Triple Supreme Matcha Latte",
    categories: ["Matcha"],
    description:
      "1000 mesh+ matcha is blended into our original cheese cloud to create the matcha cloud, layered over freshly hand-whipped matcha mochi and handcrafted matcha jelly.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/953e9288-dbe8-4a47-bc60-2bb266407540.png",
    ingredients: ["Matcha", "Cheese cloud", "Matcha mochi", "Matcha jelly"],
    tags: ["matcha", "mochi"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-coconut-mango-boom",
    name: "Coconut Mango Boom",
    categories: ["Fruit Tea"],
    description:
      "Freshly cut mango blended with coconut milk, complemented by freshly cooked handcrafted sago and coconut milk jelly.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/a65901c6-d676-42a9-aaef-14e781fa5755.png",
    ingredients: ["Mango", "Coconut milk", "Sago", "Coconut milk jelly"],
    tags: ["tropical", "mango"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-crisp-grape-boom",
    name: "Crisp Grape Boom",
    categories: ["Fruit Tea"],
    description:
      "Fresh grapes, gently crushed to release their juice, are paired with a jasmine tea base.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/c9b0935c-d84e-4a57-b6d4-7d331c88887e.png",
    ingredients: ["Fresh grapes", "Jasmine tea"],
    tags: ["grape", "jasmine"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "heytea-supreme-brown-sugar-bobo-milk-tea",
    name: "Supreme Brown Sugar Bobo Milk Tea",
    categories: ["Milk Tea"],
    description:
      "Made from tapioca naturally aged for 270 days, the brown sugar bobo is handcrafted and slow-cooked for 65 minutes daily, then paired with our classic black tea latte.",
    imageUrl:
      "https://www-test-cos-cdn.test.heytea.com/images/2026/06/a516729b-d0e0-43bc-a900-311f697ea5d4.png",
    ingredients: ["Aged tapioca", "Brown sugar", "Black tea latte"],
    tags: ["brown sugar", "bobo"],
    shop: "HeyTea",
    shopUrl: "https://www.heytea.com/products",
  },
  {
    id: "chagee-boya-tea-latte-jasmine-green",
    name: "BOYA Tea Latte (Jasmine Green)",
    categories: ["Latte"],
    description:
      "CHAGEE's iconic global bestseller, loved for its delicate floral aroma and smooth, silky finish. The fragrant jasmine tea perfectly blends with milk, creating a refreshing yet indulgent balance of light florals and rich, velvety texture.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251214/46854f77-5e6f-458b-a286-ca2863608e45.jpg",
    ingredients: ["Jasmine green tea", "Milk"],
    tags: ["jasmine", "bestseller"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Tea%20Lattes?autoscroll=lists",
  },
  {
    id: "chagee-peach-oolong-tea-latte",
    name: "Peach Oolong Tea Latte",
    categories: ["Latte"],
    description:
      "A smooth and aromatic fusion of floral oolong and juicy white peach, complemented by a rich, smooth finish. The fruity peach notes brighten the tea's roasted depth, creating a perfectly balanced, refreshing, and slightly indulgent latte.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/744ffb65-dba4-4a86-862e-a50607f818bd.jpg",
    ingredients: ["Oolong tea", "White peach", "Milk"],
    tags: ["peach", "oolong"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Tea%20Lattes?autoscroll=lists",
  },
  {
    id: "chagee-amber-oolong-tea-latte",
    name: "Amber Oolong Tea Latte",
    categories: ["Latte"],
    description:
      "Toasty and rich, this latte highlights the deep caramel and nutty flavors of roasted oolong, while adding a light creamy finish. The tea has a subtle earthiness, making it a cozy and satisfying choice for those who love bold, unique, yet smooth flavors.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20260317/bc5225b8-fd62-470c-972c-7a32e032e4fb.jpg",
    ingredients: ["Roasted oolong tea", "Milk"],
    tags: ["roasted", "caramel"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Tea%20Lattes?autoscroll=lists",
  },
  {
    id: "chagee-roasted-black-tea-latte",
    name: "Roasted Black Tea Latte",
    categories: ["Latte"],
    description:
      "Smoky and full-bodied, this latte brings out the deep roasted and chocolatey notes of our black tea. The rich and smoky aroma is softened by milk, creating a strong yet silky-smooth and satisfying experience.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20260317/5a61cb39-6354-4a35-97ed-c819b97dcaa9.jpg",
    ingredients: ["Roasted black tea", "Milk"],
    tags: ["smoky", "bold"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Tea%20Lattes?autoscroll=lists",
  },
  {
    id: "chagee-ceylon-black-tea-latte",
    name: "Ceylon Black Tea Latte",
    categories: ["Latte"],
    description:
      "Crafted with Ceylon black tea grown in Sri Lanka, this latte highlights the tea's subtle citrus notes, fruity undertones, and a touch of honeyed sweetness.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/a5e77741-6f45-48d3-a3d3-c4d195a94d06.jpg",
    ingredients: ["Ceylon black tea", "Milk"],
    tags: ["citrus", "honeyed"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Tea%20Lattes?autoscroll=lists",
  },
  {
    id: "chagee-jasmine-green-pure-tea",
    name: "Jasmine Green Pure Tea",
    categories: ["Pure Tea"],
    description:
      "Fragrant and refreshing, our green tea is delicately infused with jasmine blossoms for a light floral aroma, brewed to ensure a smooth, balanced finish.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/d9df46eb-716d-4411-a6a1-f4d7f6c581e9.jpg",
    ingredients: ["Jasmine green tea"],
    tags: ["jasmine", "no dairy"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Pure%20Teas?autoscroll=lists",
  },
  {
    id: "chagee-peach-oolong-pure-tea",
    name: "Peach Oolong Pure Tea",
    categories: ["Pure Tea"],
    description:
      "Light amber in color, this tea captures the fresh, natural taste of white peach in perfect harmony with the floral, roasted depth of oolong. The fruity aroma enhances the oolong tea's rich, caramel undertones.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/26b8c321-10bb-4cc9-9cbd-6aa93ee25ca7.jpg",
    ingredients: ["Oolong tea", "White peach"],
    tags: ["peach", "no dairy"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Pure%20Teas?autoscroll=lists",
  },
  {
    id: "chagee-amber-oolong-pure-tea",
    name: "Amber Oolong Pure Tea",
    categories: ["Pure Tea"],
    description:
      "Made with premium Da Hong Pao Oolong, our Roasted Oolong is grown on steep cliffs where the balance of mist and sunlight naturally develops its rich, earthy aroma, while the roasting process brings out toasty, caramel notes.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/5942e006-c537-42c0-9085-fc43798efcd1.jpg",
    ingredients: ["Da Hong Pao oolong tea"],
    tags: ["roasted", "no dairy"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Pure%20Teas?autoscroll=lists",
  },
  {
    id: "chagee-roasted-black-pure-tea",
    name: "Roasted Black Pure Tea",
    categories: ["Pure Tea"],
    description:
      "Known as the 'forefather of black tea,' our Roasted Black features tea leaves dried over pinewood fires, creating a bold, smoky aroma and smooth, chocolatey undertones for a rich and energizing experience.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/78eedb6e-254f-4d2f-996c-eaf843d6fc31.jpg",
    ingredients: ["Pinewood-smoked black tea"],
    tags: ["smoky", "no dairy"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Pure%20Teas?autoscroll=lists",
  },
  {
    id: "chagee-ceylon-black-pure-tea",
    name: "Ceylon Black Pure Tea",
    categories: ["Pure Tea"],
    description:
      "Crafted with Ceylon Black Tea grown in Sri Lanka's lush highlands, this black tea features subtle citrus notes, fruity undertones, and a touch of honey-like sweetness for a smooth yet refreshing experience.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/a1bef8f1-8206-4174-8272-80f0cc20dd4c.jpg",
    ingredients: ["Ceylon black tea"],
    tags: ["citrus", "no dairy"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Pure%20Teas?autoscroll=lists",
  },
  {
    id: "chagee-matcha-latte",
    name: "Matcha Latte",
    categories: ["Matcha"],
    description:
      "CHAGEE's signature matcha blend comes with your choice of whole or oat milk for a smooth, creamy and perfectly balanced drink experience.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20260722/95ae5acc-a028-4c34-a468-47d29c8a21ac.webp",
    ingredients: ["Matcha", "Whole or oat milk"],
    tags: ["matcha", "creamy"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Matcha?autoscroll=lists",
  },
  {
    id: "chagee-jasmine-green-matcha-latte",
    name: "Jasmine Green Matcha Latte",
    categories: ["Matcha"],
    description:
      "Vibrant matcha and fragrant jasmine green tea blend with milk for a smooth, delicately floral latte. Served with whole or oat milk.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20260722/2653b300-9d27-443b-a203-3d1fc8ff3c89.webp",
    ingredients: ["Matcha", "Jasmine green tea", "Whole or oat milk"],
    tags: ["matcha", "jasmine"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Matcha?autoscroll=lists",
  },
  {
    id: "chagee-peach-oolong-matcha-latte",
    name: "Peach Oolong Matcha Latte",
    categories: ["Matcha"],
    description:
      "Our matcha blend and Peach Oolong Tea comes with your choice of whole or oat milk for a smooth latte with bright peach notes and balanced tea depth.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20260722/71b2977c-92bc-4a7a-b58d-a7589adb5642.webp",
    ingredients: ["Matcha", "Peach oolong tea", "Whole or oat milk"],
    tags: ["matcha", "peach"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Matcha?autoscroll=lists",
  },
  {
    id: "chagee-jasmine-green-citrus-teafresher",
    name: "Jasmine Green Citrus Teafresher",
    categories: ["Fruit Tea"],
    description:
      "Fragrant jasmine green tea blends with fresh lemon and lime for a bright, floral, and refreshing citrus twist.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/445c3cca-3ab1-434d-84b1-4ab079e4f8ae.jpg",
    ingredients: ["Jasmine green tea", "Lemon", "Lime"],
    tags: ["citrus", "jasmine"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Citrus%20Teafresher?autoscroll=lists",
  },
  {
    id: "chagee-matcha-citrus-teafresher",
    name: "Matcha Citrus Teafresher",
    categories: ["Matcha", "Fruit Tea"],
    description:
      "CHAGEE'S Matcha Citrus Teafresher combines vibrant matcha with fresh lemon and lime for a smooth, bright, and refreshing sip.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20260722/bb5fbaa2-3de5-4669-8196-6f2bffae9fe8.webp",
    ingredients: ["Matcha", "Lemon", "Lime"],
    tags: ["citrus", "matcha"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Citrus%20Teafresher?autoscroll=lists",
  },
  {
    id: "chagee-peach-oolong-citrus-teafresher",
    name: "Peach Oolong Citrus Teafresher",
    categories: ["Fruit Tea"],
    description:
      "Fruity white peach and floral oolong tea flavors pair with fresh lemon and lime, blending fruity sweetness with a crisp citrus kick.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/eb53db75-42f9-40dd-9c74-f6f831bbfeeb.jpg",
    ingredients: ["Oolong tea", "White peach", "Lemon", "Lime"],
    tags: ["citrus", "peach"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Citrus%20Teafresher?autoscroll=lists",
  },
  {
    id: "chagee-roasted-black-citrus-teafresher",
    name: "Roasted Black Citrus Teafresher",
    categories: ["Fruit Tea"],
    description:
      "Bold Roasted Black Tea meets freshly squeezed lemon and lime, creating a strong yet refreshing balance of deep tea flavors and bright, refreshing citrus.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/232102c4-f821-4ffc-b39f-9b4a52e31c82.jpg",
    ingredients: ["Roasted black tea", "Lemon", "Lime"],
    tags: ["citrus", "bold"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Citrus%20Teafresher?autoscroll=lists",
  },
  {
    id: "chagee-daydream",
    name: "CHAGEE Daydream",
    categories: ["Specialty"],
    description:
      "A rich and creamy blend of our Roasted Oolong, caramel, and ice, perfectly balancing the tea's deep, toasty notes with smooth, buttery sweetness. Finished with our house-made whipped cream and a drizzle of caramel for a decadent treat.",
    imageUrl:
      "https://prod-us-web.s3.us-west-1.amazonaws.com/uploads/20251204/d012aa71-e9c0-4a1d-a256-32fd2188d491.jpg",
    ingredients: ["Roasted oolong tea", "Caramel", "Ice", "Whipped cream"],
    tags: ["caramel", "blended"],
    shop: "Chagee",
    shopUrl: "https://www.chagee.us/product/Blended%20Teas?autoscroll=lists",
  },
  {
    id: "chagee-cn-boya-juexian",
    name: "Boya Juexian (伯牙绝弦)",
    categories: ["Milk Tea"],
    description:
      "霸王茶姬经典款&畅销款，累计销量突破6亿杯。原叶茶胚经过三到五次的横县双瓣茉莉窨制的茉莉雪芽，芽叶细嫩，口感清新自然，搭配优质牛乳，层次丰富，回味悠长，不做作。 — CHAGEE's classic bestseller with over 600 million cups sold. The tea base is scented three to five times with double-petal jasmine from Hengxian, giving tender jasmine snow buds a fresh, natural taste, paired with premium milk for a rich, long-lingering finish.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/4b5d3e3a-c142-4279-96f3-79c21ddaee34.jpg",
    ingredients: ["Jasmine tea"],
    tags: ["jasmine", "bestseller"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-shanye-zhizi",
    name: "Wild Gardenia (山野栀子)",
    categories: ["Milk Tea"],
    description:
      "选用云南普洱大叶烘青拼配四川乐山小叶烘青，配合足量大花栀子和二栀子窨制，花香甜润，茶香馥郁。茶汤清甜醇厚，栀子花香清冷温柔，搭配优质牛乳，口感顺滑，丝丝回甘。 — Yunnan Pu'er large-leaf roasted green tea blended with Sichuan small-leaf roasted green tea, scented with generous gardenia blossoms. Sweet and mellow tea liquor with a cool, gentle gardenia fragrance, paired with premium milk for a smooth, lingering sweetness.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/ea6a8e27-b143-4de5-b12a-fa75cde927f7.jpg",
    ingredients: ["Green tea", "Gardenia flower"],
    tags: ["gardenia", "floral"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-xingshi-chunshan",
    name: "Spring Mountain Awakens (醒时春山)",
    categories: ["Milk Tea"],
    description:
      "甄选自浙江龙井产区的龙井春茶，传承传统炒制技艺，充分\"辉锅\"带有独特浓醇豆香，入口香气高扬清远，鲜醇甘爽。 — Spring Longjing tea from Zhejiang, roasted with traditional techniques for a deep, toasty aroma. Bright and clear on entry, with a fresh, mellow, sweet finish.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240911/1c0c60fc-d737-4674-89c0-405d1687c746.png",
    ingredients: ["Longjing green tea"],
    tags: ["roasted", "longjing"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-qingqing-nuoshan",
    name: "Green Glutinous Mountain (青青糯山)",
    categories: ["Milk Tea"],
    description:
      "云南特产草本植物糯米香叶窨制而成的绿茶茶底，产品带有浓郁的糯米香，谷物香气浓郁，回甘持久。 — A green tea base scented with Yunnan's fragrant glutinous-rice herb, carrying a rich grain aroma and a long, sweet aftertaste.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/60c2a285-9844-42a4-ab0c-8bca87b30222.jpg",
    ingredients: ["Green tea", "Glutinous rice leaf"],
    tags: ["glutinous rice", "grainy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-wanli-mulan",
    name: "Magnolia Across Ten Thousand Miles (万里木兰)",
    categories: ["Milk Tea"],
    description:
      "精选不同海拔的锡兰红茶进行拼配，茶香高长、果香丰富、甜香清凉，和优质牛乳结合，细腻丝滑，滋味饱满醇厚。 — Ceylon black teas from different altitudes are blended for a tall, fruity aroma and cool sweetness, combined with premium milk for a silky, full-bodied cup.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/921e75c4-5583-4b53-8323-f1aa14804283.jpg",
    ingredients: ["Ceylon black tea"],
    tags: ["ceylon", "fruity"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-guifu-lanxiang",
    name: "Osmanthus & Orchid (桂馥兰香)",
    categories: ["Milk Tea"],
    description:
      "优选闽南乌龙茶底，自然拼配广西桂花，茶底0添加香精、牛乳0奶精、整杯0反式脂肪酸。自然桂花香搭配中焙火乌龙，醇厚清甜，口感细腻。 — Southern Fujian oolong naturally blended with Guangxi osmanthus flowers — zero added flavoring, zero creamer, zero trans fat. Natural osmanthus fragrance with medium-roast oolong, mellow and sweet with a delicate finish.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/c76f5c87-b857-4e3b-a3be-28282408f7b4.jpg",
    ingredients: ["Oolong tea", "Osmanthus flower"],
    tags: ["osmanthus", "oolong"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-baiwu-hongchen",
    name: "White Mist, Red Dust (白雾红尘)",
    categories: ["Milk Tea"],
    description:
      "采用优质大红袍茶，干茶外形条索肥壮，茶叶嫩度好，茶香优而强烈，芬芳持久。 — Made with premium Da Hong Pao tea — plump, tender leaves with a strong, long-lasting fragrance.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/d4c04e7c-f182-494e-8fec-0951dc60828a.jpg",
    ingredients: ["Da Hong Pao oolong tea"],
    tags: ["da hong pao", "fragrant"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-qu-yunnan-meigui-puer",
    name: "Yunnan Rose Pu'er (去云南·玫瑰普洱)",
    categories: ["Milk Tea"],
    description:
      "云南特推。原叶茶胚严选六年陈香普洱，来自世界茶树原产地的中心地带勐海，拼配云南重瓣红玫瑰，清香馥郁，搭配优质牛乳，入口香滑甘醇，一花一叶，一口云南。 — A Yunnan specialty. Six-year aged Pu'er from Menghai, the birthplace of the tea tree, blended with Yunnan double-petal red roses for a rich floral aroma, paired with premium milk for a smooth, mellow sip — one flower, one leaf, one taste of Yunnan.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/b0bcbd3e-2d46-4d2b-b0a6-ec2bec4302c5.jpg",
    ingredients: ["Aged Pu'er tea", "Rose"],
    tags: ["rose", "pu'er"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-huatian-wulong",
    name: "Flower Field Oolong (花田乌龙)",
    categories: ["Milk Tea"],
    description:
      "茶底升级，选用闽南金观音，真实水蜜桃汁入茶，乌龙茶醇厚回甘，桃香自然纯粹。优质牛乳加入，口感顺滑，果香清甜。 — An upgraded tea base of Minnan Jin Guanyin with real white peach juice, giving mellow oolong sweetness and pure, natural peach fragrance, rounded out with premium milk.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/5c6ea780-5acc-424e-b63e-9d4a5f1931e3.jpg",
    ingredients: ["Jin Guanyin oolong tea", "White peach juice"],
    tags: ["peach", "oolong"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-wanshanhong-jinsi-xiaozhong",
    name: "Ten Thousand Mountains Red · Golden Xiaozhong (万山红·金丝小种)",
    categories: ["Milk Tea"],
    description:
      "云南金丝滇红拼配福建正山小种，调整2大名优红茶种之间的微妙比例，可以充分表达红茶风骨：正山的甜润和滇红的果香相互缠绕，不同产地中国红茶的微妙地域特色都得到保留。 — Yunnan golden Dianhong black tea blended with Fujian Zhengshan Xiaozhong (Lapsang Souchong), balancing the sweetness of Zhengshan with the fruitiness of Dianhong while preserving each region's character.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/b3d4342b-736a-4f74-a91e-aadb662ede65.jpg",
    ingredients: ["Dianhong black tea", "Lapsang Souchong"],
    tags: ["black tea", "smoky"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-qingmo-guanyin",
    name: "Green Foam Guanyin (青沫观音)",
    categories: ["Milk Tea"],
    description:
      "茶底采用优质铁观音，香气清新，回甘纯正，后感顺滑，有清淡的兰花香。 — A tea base of premium Tie Guanyin oolong — fresh aroma, pure sweet aftertaste, and a light orchid fragrance.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/87c7dfb7-b1ad-4d2a-b415-c39a4a21ded0.jpg",
    ingredients: ["Tie Guanyin oolong tea"],
    tags: ["tie guanyin", "orchid"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fresh-milk-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-guizi-piaopiao",
    name: "Osmanthus Drifting (桂子飘飘)",
    categories: ["Milk Tea"],
    description:
      "清新与厚重的碰撞，却意外的和谐。坚果和奶醇厚不仅没有破坏桂花乌龙的清雅，反而互为补充，增色不少。 — A collision of light and rich flavors that works in unexpected harmony — buttery nuts and cream complement the elegant osmanthus oolong rather than overpowering it.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/06adb157-7dec-4415-8db3-f21327c40586.jpg",
    ingredients: ["Osmanthus oolong tea", "Cream", "Pecan"],
    tags: ["osmanthus", "nutty"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/snowy-frappe-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-guanshan-mulan",
    name: "Mountain Pass Magnolia (关山木兰)",
    categories: ["Milk Tea"],
    description:
      "香气优雅的锡兰红茶搭配丝滑的奶油和香脆碧根果，层次丰富，滋味饱满。 — Elegant Ceylon black tea paired with silky cream and crunchy pecans for a layered, full-bodied cup.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/0980869c-5244-408b-ab02-cfd382b4a285.jpg",
    ingredients: ["Ceylon black tea", "Cream", "Pecan"],
    tags: ["ceylon", "pecan"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/snowy-frappe-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-chunri-taotao",
    name: "Spring Peach (春日桃桃)",
    categories: ["Milk Tea", "Fruit Tea"],
    description:
      "茶底升级，选用闽南金观音，真实水蜜桃汁入茶，乌龙茶醇厚回甘，牛乳加入，入口更丝滑。搭配蜜桃风味奶油雪顶和无花果碎，多重口感，丰富有层次。 — An upgraded Jin Guanyin oolong base with real white peach juice and milk for a silkier sip, topped with peach-flavored whipped cream and fig crumble for a rich, layered texture.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/824e1b5f-9927-4dae-819f-1b63c90c3ad2.jpg",
    ingredients: ["Jin Guanyin oolong tea", "White peach juice", "Whipped cream", "Fig"],
    tags: ["peach", "whipped cream"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/snowy-frappe-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-qianshanxue-jinsi-xiaozhong",
    name: "Thousand Mountains Snow · Golden Xiaozhong (千山雪·金丝小种)",
    categories: ["Milk Tea"],
    description:
      "云南金丝滇红拼配福建正山小种，正山的甜润和滇红的果香相互缠绕，搭配动物淡奶油及酥脆碧根果，丝滑浓醇。 — Yunnan golden Dianhong blended with Fujian Zhengshan Xiaozhong, their sweetness and fruitiness intertwined, topped with dairy cream and crisp pecans for a silky, rich finish.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240828/905abf65-115c-4e10-9500-1daa51e69a91.jpg",
    ingredients: ["Dianhong black tea", "Lapsang Souchong", "Cream", "Pecan"],
    tags: ["black tea", "creamy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/snowy-frappe-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-yangzhi-ganlu",
    name: "Mango Sago Cooler (杨枝甘露)",
    categories: ["Fruit Tea"],
    description:
      "明黄耀眼的芒果铺陈底色，融入清香的铁观音，绵密的沙冰汇入醇香的椰奶，一口爆珠，畅饮冰爽。 — Bright mango forms the base, blended with fragrant Tie Guanyin tea, a smooth sago slush, and rich coconut milk — a cool, refreshing sip with a burst of texture in every mouthful.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/59330447-5ab7-4822-b88c-991599490b26.jpg",
    ingredients: ["Mango", "Tie Guanyin tea", "Coconut milk", "Sago"],
    tags: ["mango", "coconut"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-yunhai-mangmang",
    name: "Boundless Sea of Clouds (云海茫茫)",
    categories: ["Fruit Tea", "Milk Tea"],
    description:
      "茉莉雪芽入底，一香入茶，邂逅香甜的芒果，绵密的沙冰叠加柔软绵密的奶盖，以纷繁云海，忘俗世烦忧。 — Jasmine snow bud tea meets sweet mango in a smooth slush, layered under a soft, dense milk foam — a drink to lose yourself in.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/2db2d862-26ff-4110-8dc5-b409762cb7e5.jpg",
    ingredients: ["Jasmine tea", "Mango", "Milk foam"],
    tags: ["jasmine", "mango"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-shenxian-yeshui",
    name: "Heavenly Coconut Water (神仙椰水)",
    categories: ["Fruit Tea"],
    description:
      "精选泰国香椰水，纯粹清爽甘甜的椰青水，搭配爽脆白玉珍珠。椰青含有天然电解质，清爽低负担，解渴补水新选择。 — Pure, sweet Thai young coconut water with crisp white pearls — naturally rich in electrolytes for a light, refreshing way to hydrate.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/723dc79b-64eb-4890-8bb1-d80d12b1424b.jpg",
    ingredients: ["Coconut water", "White pearls"],
    tags: ["coconut", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-guanyin-xianye",
    name: "Guanyin Coconut (观音仙椰)",
    categories: ["Fruit Tea"],
    description:
      "鲜椰水的鲜爽清甜和铁观音的悠悠兰韵相得益彰，醇和清爽，别致的花蜜香点缀，更有白玉珍珠脆爽增添口感趣味。 — Fresh coconut water's sweetness meets the lingering orchid notes of Tie Guanyin tea, finished with a hint of honeyed floral fragrance and crisp white pearls for texture.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/d85344e8-d78a-4137-8113-65d5d7a5191e.jpg",
    ingredients: ["Coconut water", "Tie Guanyin tea", "White pearls"],
    tags: ["coconut", "tie guanyin"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-moli-xianye",
    name: "Jasmine Coconut (茉莉仙椰)",
    categories: ["Fruit Tea"],
    description:
      "清甜甘爽的鲜椰水搭配茉莉雪芽，若隐若现透露出茉莉的芳香和高山绿茶的醇厚，搭配脆爽的白玉珍珠，轻盈淡雅，唇齿留香。 — Sweet coconut water paired with jasmine snow bud tea, its floral aroma and mountain green tea depth showing through subtly, finished with crisp white pearls for a light, fragrant sip.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/e04e662c-b27b-44e1-85ef-6e53577a4496.jpg",
    ingredients: ["Coconut water", "Jasmine tea", "White pearls"],
    tags: ["coconut", "jasmine"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-haiyan-dianjie-ningmengcha",
    name: "Sea Salt Electrolyte Lemon Tea (海盐电解·柠檬茶)",
    categories: ["Fruit Tea"],
    description:
      "电解活力，瞬间暴走！特别添加海盐成分，补充电解质，开启活力夏日。茉莉雪芽/珑珠绿茶香气清新，茶汤色泽透亮，搭配香水柠檬，入口酸甜，回味微咸，口感清爽，层次丰富。 — A jolt of electrolyte energy with added sea salt. Fresh jasmine snow bud or Longzhu green tea meets citron lemon for a sweet-and-sour sip with a faintly salty, refreshing finish.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/bbbcd07e-3356-4633-a6e4-59231617af3c.jpg",
    ingredients: ["Jasmine or green tea", "Lemon", "Sea salt"],
    tags: ["citrus", "electrolyte"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-qingliang-yinzi-ningmengcha",
    name: "Cooling Factor Lemon Tea (清凉因子·柠檬茶)",
    categories: ["Fruit Tea"],
    description:
      "凉爽唤醒，一秒上头！特别添加清凉因子，凉意沁心，持续冰感，开启活力夏日。茉莉雪芽/珑珠绿茶与香水柠檬的果香交织，清香扑鼻，酸甜可口。 — An instant, lasting chill from added cooling agents. Jasmine snow bud or Longzhu green tea intertwines with citron lemon for a fragrant, sweet-and-sour sip.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/f70ed290-0263-4a24-a406-7c35733f2f97.jpg",
    ingredients: ["Jasmine or green tea", "Lemon", "Cooling agent"],
    tags: ["citrus", "cooling"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-fusheng-mengti",
    name: "Floating Dream (浮生梦媞)",
    categories: ["Fruit Tea", "Milk Tea"],
    description:
      "酸甜多汁的当季大颗葡萄果肉，遇上清香入骨的茉莉雪芽，与咸香芝士奶盖~鲜爽可口，宛若浮生一梦。让花香与奶香在齿间交融。 — Sweet, juicy seasonal grapes meet jasmine snow bud tea and a salty-sweet cheese foam — a dreamlike blend of floral and creamy notes.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/41b28636-f598-4273-b1ab-2e0d15bcbc8e.jpg",
    ingredients: ["Grapes", "Jasmine tea", "Cheese foam"],
    tags: ["grape", "cheese foam"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-putao-suiyu",
    name: "Shattered Jade Grape (葡萄碎玉)",
    categories: ["Fruit Tea"],
    description:
      "铁观音遇上当季葡萄，王者相逢，清甜顺滑的茶香融入葡萄的鲜甜可口，果肉饱满多汁，层次丰富，引人回味。 — Tie Guanyin tea meets seasonal grapes — smooth, sweet tea fragrance folded into juicy, plump grape flesh for a rich, memorable layered sip.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/133b2020-3022-4833-b914-395fa4570e42.jpg",
    ingredients: ["Tie Guanyin tea", "Grapes"],
    tags: ["grape", "tie guanyin"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-qianfeng-cui",
    name: "Thousand Emerald Peaks (千峰翠)",
    categories: ["Fruit Tea"],
    description:
      "清香的茉莉雪芽/山花茶乌龙，茶汤清透翠亮，入口皆是清新淡雅。搭配香水柠檬，茉莉的花香与柠檬的酸甜交织融合，把夏天装进杯子里。 — Fresh jasmine snow bud or mountain oolong, bright and clear, paired with citron lemon — jasmine florals and tangy citrus fold summer into a cup.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/5d637857-4750-4d08-9d30-e285b8f53361.jpg",
    ingredients: ["Jasmine or oolong tea", "Lemon"],
    tags: ["jasmine", "citrus"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-hupo-guang",
    name: "Amber Light (琥珀光)",
    categories: ["Fruit Tea"],
    description:
      "香水柠檬和大红袍的绝佳组合。甄选优质大红袍，滋味醇厚，回甘润滑，岩韵明显，和香水柠檬的馥郁香气完美融合。 — A perfect pairing of citron lemon and Da Hong Pao — mellow, sweet-finishing tea with a distinct mineral character, fused with fragrant lemon.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/0f31caec-c084-46f9-aa24-ad17d1ae8c6c.jpg",
    ingredients: ["Da Hong Pao oolong tea", "Lemon"],
    tags: ["da hong pao", "citrus"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-chengxiang-siji",
    name: "Orange Blossom Four Seasons (橙香四季)",
    categories: ["Fruit Tea"],
    description:
      "清新自然的茉莉雪芽，将独特的茉莉花香，配合上浓郁诱人的橙片、以及清新的香水柠檬，满口橙香。 — Fresh jasmine snow bud tea's floral aroma meets rich, inviting orange slices and fragrant citron lemon for a cup full of orange sunshine.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/37e28c5b-8f79-461d-a46f-2e8faca32b31.jpg",
    ingredients: ["Jasmine tea", "Orange", "Lemon"],
    tags: ["orange", "jasmine"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-qili-xiang",
    name: "Seven Mile Fragrance (七里香)",
    categories: ["Fruit Tea"],
    description:
      "独特的糯米香绿茶，如果是第一次喝，一定会被那绵糯丝滑的口感吸引，纯正的糯米香，让人流连忘返。再搭配清新的柠檬片，解渴解腻。 — A uniquely glutinous-rice-scented green tea with a silky, sticky-sweet mouthfeel that lingers — paired with fresh lemon slices to cut the richness.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/eb9a5355-471c-4023-a534-f28ef42124d2.jpg",
    ingredients: ["Glutinous rice green tea", "Lemon"],
    tags: ["glutinous rice", "citrus"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/fruit-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-zhegui-ling",
    name: "Osmanthus Decree (折桂令)",
    categories: ["Pure Tea"],
    description:
      "选用闽南地区中度焙火乌龙茶，按一定比例拼入广西桂林的金桂花和丹桂花，桂花香甜馥郁，花香饱满香，茶香高长，茶韵持久。 — Medium-roast Minnan oolong blended with golden and crimson osmanthus from Guilin, giving a sweet, rich floral fragrance and a tall, lingering tea character.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/5e83bc62-3514-46ce-8069-794cdbbd9b05.jpg",
    ingredients: ["Oolong tea", "Osmanthus flower"],
    tags: ["osmanthus", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/brewed-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-zhuo-hongpao",
    name: "A Taste of Red Robe (酌红袍)",
    categories: ["Pure Tea"],
    description:
      "选用产自福建武夷山的优质大红袍，传统工序烘制而成。色泽橙红透亮有宝色，香气馥郁，咽后齿颊留香，冷香四溢更为悠远，绵醇甘爽，茶性温和，岩气十足。 — Premium Da Hong Pao from Wuyi Mountain, Fujian, traditionally roasted for a bright amber color, rich fragrance, and a smooth, long-lingering mineral sweetness.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/dbe864fd-566d-4bba-9dbf-d6620af2b34f.jpg",
    ingredients: ["Da Hong Pao oolong tea"],
    tags: ["da hong pao", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/brewed-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-yunzhong-lv",
    name: "Green Amid the Clouds (云中绿)",
    categories: ["Pure Tea"],
    description:
      "以云南尖叶种茶青为原材料烘制而成，汤色黄绿，味道醇浓，并具有独特的糯米清香口感，香味长久，回味无穷。 — Roasted from Yunnan sharp-leaf tea, with a golden-green liquor, mellow body, and a distinctive glutinous-rice sweetness that lingers long after the last sip.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/6247186e-519a-4dab-8320-bd44e15faaf3.jpg",
    ingredients: ["Yunnan green tea"],
    tags: ["glutinous rice", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/brewed-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-huatian-wu",
    name: "Flower Field Hollow (花田坞)",
    categories: ["Pure Tea"],
    description:
      "茶底升级，选用闽南金观音，真实水蜜桃汁入茶，乌龙茶醇厚回甘，桃香自然纯粹，巧妙融合，天然健康。 — An upgraded tea base of Minnan Jin Guanyin with real white peach juice, its mellow oolong sweetness and pure peach fragrance naturally, healthily combined.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/ea5d7716-b75d-4d73-89b1-a9e1a92f18c3.jpg",
    ingredients: ["Jin Guanyin oolong tea", "White peach juice"],
    tags: ["peach", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/brewed-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-ye-zhizi",
    name: "Wild Gardenia, Pure (野栀子)",
    categories: ["Pure Tea"],
    description:
      "选用云南普洱大叶烘青拼配四川乐山小叶烘青，配合足量大花栀子和二栀子窨制。茶汤清甜鲜灵，栀子香气清冷温柔。 — Yunnan Pu'er large-leaf tea blended with Sichuan small-leaf green tea, scented generously with gardenia blossoms for a clean, sweet liquor and a cool, gentle floral aroma.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/b2826f9b-4796-4817-a4c8-89131d7a84c2.png",
    ingredients: ["Green tea", "Gardenia flower"],
    tags: ["gardenia", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/brewed-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-mulan-ci",
    name: "Ballad of Magnolia (木兰辞)",
    categories: ["Pure Tea"],
    description:
      "精选不同海拔的锡兰红茶进行拼配，带有独特的麝香风味，回甘有丝丝青苹果，蜂蜜和薄荷的香气，风味丰富独特，茶香高长。 — Ceylon black teas from different altitudes blended for a distinctive musky note, with a green-apple sweetness and hints of honey and mint in the finish.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/35086d85-c5d9-4726-9ffe-b85a0b331d7d.png",
    ingredients: ["Ceylon black tea"],
    tags: ["ceylon", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/brewed-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-guanyin-yun",
    name: "Guanyin's Echo (观音韵)",
    categories: ["Pure Tea"],
    description:
      "采用优质铁观音，产自福建安溪。茶汤口感清甜，香气纯真，回甘厚重，兰香馥郁，令人回味。 — Premium Tie Guanyin from Anxi, Fujian — a clean, sweet liquor with pure aroma, a heavy sweet finish, and rich orchid fragrance.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/217fa876-601f-4c28-9efe-5af01cfbb5b8.jpg",
    ingredients: ["Tie Guanyin oolong tea"],
    tags: ["tie guanyin", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/brewed-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-chengan-puer-natie",
    name: "Aged Citrus Pu'er Tea Latte (陈柑普洱茶拿铁)",
    categories: ["Latte"],
    description:
      "陈皮的陈香与普洱的浓厚结合，充满岁月的古韵风味，唇齿留香。 — The aged fragrance of dried citrus peel meets the deep richness of Pu'er, carrying an antique charm that lingers on the palate.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/27736931-ac9b-4d40-a492-2fd833902b21.jpg",
    ingredients: ["Pu'er tea", "Dried citrus peel", "Milk"],
    tags: ["pu'er", "citrus peel"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/teaspresso-latte?autoscroll=lists",
  },
  {
    id: "chagee-cn-dahongpao-natie",
    name: "Da Hong Pao Tea Latte (大红袍茶拿铁)",
    categories: ["Latte"],
    description:
      "大红袍产于福建崇安东南部的武夷山，生长在武夷山九龙窠高岩峭壁上，日照短，多反射光，昼夜温差大，岩顶终年有细泉浸润流滴。这种特殊的自然环境，造就了大红袍的特异品质。 — Da Hong Pao grown on the sheer cliffs of Wuyi Mountain's Jiulongke, where short sunlight, reflected light, and mineral spring seepage give this tea its singular character.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/b5ae9afb-6368-406c-aae7-4a8e22babbf5.jpg",
    ingredients: ["Da Hong Pao oolong tea", "Milk"],
    tags: ["da hong pao", "latte"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/teaspresso-latte?autoscroll=lists",
  },
  {
    id: "chagee-cn-zhengshan-xiaozhong-natie",
    name: "Lapsang Souchong Tea Latte (正山小种茶拿铁)",
    categories: ["Latte"],
    description:
      "汤色红浓，香气高长，带松烟香，清爽甜醇，有高山韵，有桂圆香气。 — A deep red, rich-bodied liquor with a tall pine-smoke aroma, sweet and mellow with mountain character and a hint of longan fruit.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/f15ea0d8-9cef-4e0e-91cf-b0cea7d8d38d.jpg",
    ingredients: ["Lapsang Souchong tea", "Milk"],
    tags: ["smoky", "latte"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/teaspresso-latte?autoscroll=lists",
  },
  {
    id: "chagee-cn-qixun-moli-xueya",
    name: "Seven-Scented Jasmine Snow Bud (七窨·茉莉雪芽)",
    categories: ["Pure Tea"],
    description:
      "选用福建福鼎的高山烘青绿茶和福州茉莉为原料，经过七次茉莉鲜花窨制工艺，前后20多天的沉淀与积累，花香入茶骨。茉莉香气清高芬芳、浓郁鲜灵，香而不浮，鲜而不浊，滋味甘醇。 — High-mountain roasted green tea from Fujian and Fuzhou jasmine, scented seven times over more than 20 days until the floral fragrance reaches the tea's very core — bright, vivid, and mellow.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/29dd1d0f-88dc-4002-a760-01203f3789f9.png",
    ingredients: ["Jasmine tea"],
    tags: ["jasmine", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/iced-oriental-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-manbei-jin-guanyin",
    name: "Slow-Roasted Jin Guanyin (慢焙·金观音)",
    categories: ["Pure Tea"],
    description:
      "福建茶区新培育的茶树品种：金观音（204），既有黄金桂的花香，又有铁观音的兰花香和观音韵，传统闽南乌龙加工工艺基础上，以文火慢焙的方式，使得桂花香、兰花香更显，茶感细腻甜润。入口繁复的花香与焙火香交织在一起，滋味层层递进，自带的观音韵在尾端缓缓流淌，醇厚与甘甜结合地恰当好处。 — A newly cultivated Fujian varietal carrying both the floral notes of Huangjin Gui and the orchid character of Tie Guanyin, slow-roasted over low heat for a delicate, sweet, deeply layered cup.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/7d7b1eb2-e125-4068-aa53-de95e0790729.png",
    ingredients: ["Jin Guanyin oolong tea"],
    tags: ["oolong", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/iced-oriental-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-qingjiao-jingui-wulong",
    name: "Light-Fermented Golden Osmanthus Oolong (轻酵·金桂乌龙)",
    categories: ["Pure Tea"],
    description:
      "选自福建闽南地区的黄金桂、白芽奇兰拼配而成的乌龙茶，添加12%的广西金桂花，茶香和桂花巧妙衔接，入口桂花香气扑鼻，茶香清亮甜润，略带奶香，回甘清冽。 — Huangjin Gui and Baiya Qilan oolongs from southern Fujian blended with 12% Guangxi golden osmanthus — fragrant osmanthus up front, bright sweet tea beneath, with a faint milky note and a crisp finish.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/b8e8a0ff-4767-40ee-a2c3-5e308f6088b1.png",
    ingredients: ["Oolong tea", "Osmanthus flower"],
    tags: ["osmanthus", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/iced-oriental-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-shengshai-chengan-puer",
    name: "Sun-Dried Aged Citrus Pu'er (生晒·陈柑普洱)",
    categories: ["Pure Tea"],
    description:
      "茶底选自云南勐海核心产区的普洱熟茶，搭配广东新会的五年陈皮，经过精心配比，使得陈皮香和普洱茶香完美融合，柑香明显，茶香醇厚悠长且带有陈皮的清香甘甜、醇、香、润。 — Ripe Pu'er from the Menghai core growing region paired with five-year-aged citrus peel from Xinhui, Guangdong — a balance of citrus fragrance and deep, mellow Pu'er sweetness.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/9a7b8de2-7ef6-4950-a710-3903769f3f13.png",
    ingredients: ["Pu'er tea", "Dried citrus peel"],
    tags: ["pu'er", "citrus peel"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/iced-oriental-tea-series?autoscroll=lists",
  },
  {
    id: "chagee-cn-hunnian-nuoxiang-lvcha",
    name: "Blended Glutinous Rice Green Tea (混捻·糯香绿茶)",
    categories: ["Pure Tea"],
    description:
      "选用信阳野生茶种制作的绿茶和云南的特色香草——糯米香叶混合制作而成。茶汤有明显的糯米香味，茶感鲜浓回甘明显。 — Wild-varietal green tea from Xinyang blended with Yunnan's fragrant glutinous-rice herb for a liquor with a pronounced sticky-rice aroma and a strong, lingering sweetness.",
    imageUrl:
      "https://img-official-prod-cn.chagee.com/web/uploads/20240829/88949eae-a9e3-426c-ba14-491c2a3261be.png",
    ingredients: ["Green tea", "Glutinous rice leaf"],
    tags: ["glutinous rice", "no dairy"],
    shop: "Chagee China",
    shopUrl: "https://chagee.com/zh-cn/product/iced-oriental-tea-series?autoscroll=lists",
  },
];

export const CATEGORIES: DrinkCategory[] = [
  "Milk Tea",
  "Latte",
  "Fruit Tea",
  "Pure Tea",
  "Matcha",
  "Specialty",
];

export const SHOPS: string[] = Array.from(
  new Set(DRINKS.map((drink) => drink.shop))
).sort();
