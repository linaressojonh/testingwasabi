import mangoRoll from "@/assets/mango-roll.jpg";
import misoSoup from "@/assets/miso-soup.jpg";
import bento from "@/assets/bento.jpg";
import hibachi from "@/assets/hibachi.jpg";

export type DietTag = "vegan" | "vegetarian" | "gf" | "spicy";
export type AllergenTag = "gluten" | "soy" | "shellfish" | "fish" | "egg" | "dairy" | "sesame" | "nuts";

export interface MenuItem {
  name: string;
  price: string; // "$12.99"
  desc: string;
  diet?: DietTag[];
  allergens?: AllergenTag[];
}

export const ALLERGEN_LABEL: Record<AllergenTag, string> = {
  gluten: "Gluten / Wheat",
  soy: "Soy",
  shellfish: "Shellfish",
  fish: "Fish",
  egg: "Egg",
  dairy: "Dairy",
  sesame: "Sesame",
  nuts: "Tree Nuts",
};

export const DIET_LABEL: Record<DietTag, string> = {
  vegan: "Vegan",
  vegetarian: "Vegetarian",
  gf: "Gluten-Free Option",
  spicy: "Spicy",
};

export const favorites = [
  { name: "Dragon Roll", desc: "Eel, avocado and cucumber finished with sweet eel sauce.", price: "$13.99", img: mangoRoll, tag: "🐉 Signature" },
  { name: "Spicy Tuna Roll", desc: "Fresh tuna tossed in spicy mayo with a kick of heat.", price: "$7.99", img: mangoRoll, tag: "🔥 Best Seller" },
  { name: "California Roll", desc: "The classic — crab, avocado and cucumber.", price: "$6.99", img: mangoRoll, tag: "⭐ Popular" },
  { name: "Hibachi Chicken", desc: "Grilled chicken with fried rice, vegetables and yum-yum sauce.", price: "$12.99", img: hibachi, tag: "🔥 Best Seller" },
  { name: "Chicken Teriyaki", desc: "Grilled chicken brushed with sweet house teriyaki glaze.", price: "$11.99", img: bento, tag: "⭐ Popular" },
  { name: "Shrimp Tempura", desc: "Lightly battered shrimp fried to a golden crunch.", price: "$7.99", img: misoSoup, tag: "⭐ Popular" },
];

export const fullMenu: { category: string; jp: string; items: MenuItem[] }[] = [
  {
    category: "Starters & Appetizers",
    jp: "前菜",
    items: [
      { name: "Edamame", price: "$4.50", desc: "Steamed young soybeans, lightly salted.", diet: ["vegan", "gf"], allergens: ["soy"] },
      { name: "Gyoza", price: "$6.50", desc: "Pan-fried pork dumplings with dipping sauce.", allergens: ["gluten", "soy"] },
      { name: "Shrimp Tempura", price: "$7.99", desc: "Lightly battered fried shrimp with tempura sauce.", allergens: ["gluten", "shellfish", "egg", "soy"] },
      { name: "Vegetable Tempura", price: "$6.50", desc: "Fried mixed seasonal vegetables.", diet: ["vegetarian"], allergens: ["gluten", "egg", "soy"] },
      { name: "Calamari", price: "$7.50", desc: "Crispy fried squid with dipping sauce.", allergens: ["gluten", "shellfish", "egg"] },
      { name: "Spring Rolls", price: "$4.99", desc: "Crispy vegetable rolls with sweet chili sauce.", diet: ["vegan"], allergens: ["gluten", "soy"] },
      { name: "Kani Salad", price: "$6.99", desc: "Crab stick salad with cucumber and mayo dressing.", allergens: ["shellfish", "egg", "gluten"] },
      { name: "Spicy Kani Salad", price: "$7.50", desc: "Spicy version of our kani salad.", diet: ["spicy"], allergens: ["shellfish", "egg", "gluten"] },
    ],
  },
  {
    category: "Soups & Salads",
    jp: "汁・サラダ",
    items: [
      { name: "Miso Soup", price: "$3.50", desc: "Traditional soybean broth with tofu and seaweed.", diet: ["vegetarian", "gf"], allergens: ["soy", "fish"] },
      { name: "Clear Soup", price: "$3.50", desc: "Light broth with mushrooms and vegetables.", diet: ["gf"] },
      { name: "House Salad", price: "$3.99", desc: "Lettuce, cucumber and tomato with ginger dressing.", diet: ["vegan", "gf"], allergens: ["soy"] },
      { name: "Avocado Salad", price: "$5.99", desc: "Fresh avocado over greens with ginger dressing.", diet: ["vegan", "gf"], allergens: ["soy"] },
      { name: "Seaweed Salad", price: "$5.99", desc: "Marinated seaweed with sesame flavor.", diet: ["vegan"], allergens: ["soy", "sesame"] },
    ],
  },
  {
    category: "Popular Sushi Rolls",
    jp: "人気の巻き",
    items: [
      { name: "Dragon Roll", price: "$13.99", desc: "Eel, avocado, cucumber and eel sauce.", allergens: ["fish", "soy", "gluten"] },
      { name: "Rainbow Roll", price: "$12.99", desc: "Assorted fresh fish over a California roll.", allergens: ["fish", "shellfish", "soy", "egg"] },
      { name: "Spicy Tuna Roll", price: "$7.99", desc: "Tuna tossed in spicy mayo.", diet: ["spicy"], allergens: ["fish", "egg", "soy", "gluten"] },
      { name: "California Roll", price: "$6.99", desc: "Crab, avocado and cucumber.", allergens: ["shellfish", "egg"] },
      { name: "Philadelphia Roll", price: "$8.99", desc: "Salmon, cream cheese and cucumber.", allergens: ["fish", "dairy"] },
    ],
  },
  {
    category: "Specialty Rolls",
    jp: "特製巻き",
    items: [
      { name: "Caterpillar Roll", price: "$12.99", desc: "Eel and avocado topped roll.", allergens: ["fish", "soy", "gluten"] },
      { name: "Volcano Roll", price: "$11.99", desc: "Baked seafood topping over a California roll.", diet: ["spicy"], allergens: ["shellfish", "fish", "egg", "dairy"] },
      { name: "Shrimp Tempura Roll", price: "$9.99", desc: "Crispy shrimp with sauce inside.", allergens: ["shellfish", "gluten", "egg", "soy"] },
      { name: "Spider Roll", price: "$11.50", desc: "Soft shell crab with avocado and cucumber.", allergens: ["shellfish", "gluten", "egg"] },
      { name: "Crunchy Roll", price: "$8.99", desc: "Tempura flakes with spicy mayo.", diet: ["spicy"], allergens: ["gluten", "egg", "soy"] },
    ],
  },
  {
    category: "Vegetable Rolls",
    jp: "野菜巻き",
    items: [
      { name: "Avocado Roll", price: "$4.50", desc: "Fresh avocado wrapped in nori and rice.", diet: ["vegan", "gf"] },
      { name: "Cucumber Roll", price: "$4.00", desc: "Crisp cucumber with sushi rice.", diet: ["vegan", "gf"] },
      { name: "Asparagus Roll", price: "$4.50", desc: "Tender asparagus rolled simply.", diet: ["vegan", "gf"] },
      { name: "Sweet Potato Roll", price: "$5.50", desc: "Tempura sweet potato with eel sauce.", diet: ["vegetarian"], allergens: ["gluten", "soy", "egg"] },
    ],
  },
  {
    category: "Sushi & Sashimi À La Carte",
    jp: "寿司・刺身",
    items: [
      { name: "Tuna (Maguro)", price: "$5.50", desc: "Served as sushi over rice or sashimi slices.", diet: ["gf"], allergens: ["fish"] },
      { name: "Salmon (Sake)", price: "$5.50", desc: "Served as sushi over rice or sashimi slices.", diet: ["gf"], allergens: ["fish"] },
      { name: "Yellowtail (Hamachi)", price: "$6.00", desc: "Served as sushi over rice or sashimi slices.", diet: ["gf"], allergens: ["fish"] },
      { name: "Eel (Unagi)", price: "$6.00", desc: "Grilled freshwater eel with sweet glaze.", allergens: ["fish", "soy", "gluten"] },
      { name: "Shrimp (Ebi)", price: "$4.50", desc: "Cooked shrimp, sushi or sashimi style.", allergens: ["shellfish"] },
      { name: "Octopus (Tako)", price: "$5.00", desc: "Tender sliced octopus.", allergens: ["shellfish"] },
      { name: "Crab Stick (Kani)", price: "$4.00", desc: "Sweet crab stick over rice.", allergens: ["shellfish", "egg", "gluten"] },
    ],
  },
  {
    category: "Teriyaki Entrées",
    jp: "照り焼き",
    items: [
      { name: "Chicken Teriyaki", price: "$11.99", desc: "Grilled chicken with sweet teriyaki glaze.", allergens: ["soy", "gluten"] },
      { name: "Beef Teriyaki", price: "$15.99", desc: "Sliced beef with teriyaki sauce.", allergens: ["soy", "gluten"] },
      { name: "Salmon Teriyaki", price: "$15.99", desc: "Grilled salmon brushed with glaze.", allergens: ["fish", "soy", "gluten"] },
      { name: "Shrimp Teriyaki", price: "$14.99", desc: "Plump shrimp with teriyaki sauce.", allergens: ["shellfish", "soy", "gluten"] },
    ],
  },
  {
    category: "Tempura & Katsu",
    jp: "天ぷら・カツ",
    items: [
      { name: "Chicken Tempura", price: "$11.99", desc: "Lightly battered fried chicken.", allergens: ["gluten", "egg", "soy"] },
      { name: "Shrimp Tempura Plate", price: "$13.99", desc: "Crispy shrimp tempura entrée.", allergens: ["shellfish", "gluten", "egg", "soy"] },
      { name: "Vegetable Tempura Plate", price: "$10.99", desc: "Assorted fried seasonal vegetables.", diet: ["vegetarian"], allergens: ["gluten", "egg", "soy"] },
      { name: "Tempura Combo", price: "$14.99", desc: "Mixed shrimp and vegetable tempura.", allergens: ["shellfish", "gluten", "egg", "soy"] },
      { name: "Chicken Katsu", price: "$11.99", desc: "Breaded fried chicken cutlet.", allergens: ["gluten", "egg", "soy"] },
      { name: "Pork Katsu", price: "$12.99", desc: "Breaded fried pork cutlet.", allergens: ["gluten", "egg", "soy"] },
    ],
  },
  {
    category: "Noodles & Fried Rice",
    jp: "麺・炒飯",
    items: [
      { name: "Yakisoba", price: "$10.99", desc: "Stir-fried noodles with vegetables.", allergens: ["gluten", "soy", "egg"] },
      { name: "Udon", price: "$9.99", desc: "Thick wheat noodles in savory soup.", allergens: ["gluten", "soy", "fish"] },
      { name: "Fried Rice", price: "$8.99", desc: "Egg, vegetables and soy sauce base.", allergens: ["egg", "soy", "gluten"] },
      { name: "Seafood Noodles", price: "$13.99", desc: "Noodles tossed with assorted seafood.", allergens: ["gluten", "shellfish", "fish", "soy", "egg"] },
    ],
  },
  {
    category: "Hibachi & Dinner Boxes",
    jp: "鉄板焼き",
    items: [
      { name: "Hibachi Chicken", price: "$12.99", desc: "Grilled chicken with fried rice and vegetables.", allergens: ["soy", "egg", "gluten", "sesame"] },
      { name: "Hibachi Steak", price: "$16.99", desc: "Tender steak with fried rice and vegetables.", allergens: ["soy", "egg", "gluten", "sesame"] },
      { name: "Hibachi Shrimp", price: "$15.99", desc: "Grilled shrimp with fried rice and vegetables.", allergens: ["shellfish", "soy", "egg", "gluten", "sesame"] },
      { name: "Mixed Hibachi", price: "$19.99", desc: "Chicken, steak and shrimp combo.", allergens: ["shellfish", "soy", "egg", "gluten", "sesame"] },
      { name: "Dinner Box", price: "$17.99", desc: "Entrée, fried rice, salad, California roll, gyoza & tempura.", allergens: ["shellfish", "soy", "egg", "gluten", "sesame"] },
    ],
  },
  {
    category: "Drinks",
    jp: "飲み物",
    items: [
      { name: "Soft Drinks", price: "$2.50", desc: "Coke, Diet Coke, Sprite and more.", diet: ["vegan", "gf"] },
      { name: "Iced Tea", price: "$2.50", desc: "Freshly brewed black tea.", diet: ["vegan", "gf"] },
      { name: "Hot Green Tea", price: "$2.50", desc: "Traditional Japanese sencha.", diet: ["vegan", "gf"] },
      { name: "Lemonade", price: "$2.99", desc: "Sweet, refreshing lemonade.", diet: ["vegan", "gf"] },
      { name: "Ramune", price: "$3.99", desc: "Classic marble-bottle Japanese soda.", diet: ["vegan", "gf"] },
    ],
  },
  {
    category: "Desserts",
    jp: "デザート",
    items: [
      { name: "Fried Cheesecake", price: "$5.99", desc: "Golden-fried cheesecake with drizzle.", diet: ["vegetarian"], allergens: ["gluten", "egg", "dairy"] },
      { name: "Ice Cream", price: "$3.99", desc: "Green tea or vanilla.", diet: ["vegetarian", "gf"], allergens: ["dairy", "egg"] },
      { name: "Mochi Ice Cream", price: "$4.99", desc: "Sweet rice cake wrapped around ice cream (seasonal).", diet: ["vegetarian"], allergens: ["dairy", "egg"] },
    ],
  },
];

export const dietBadgeStyle: Record<DietTag, string> = {
  vegan: "border-green-700/40 text-green-700 bg-green-700/5",
  vegetarian: "border-green-700/40 text-green-700 bg-green-700/5",
  gf: "border-amber-700/40 text-amber-700 bg-amber-700/5",
  spicy: "border-primary/50 text-primary bg-primary/5",
};

export const priceToNumber = (p: string) => parseFloat(p.replace(/[^0-9.]/g, "")) || 0;
