import { Banner, Category, Product, Testimonial } from './types';

// Mock Data
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Smartwatch Elite Pro X",
    category: "Smartwatches",
    image: "https://picsum.photos/id/1/400/400",
    hoverImage: "https://picsum.photos/id/119/400/400",
    memberPrice: 229.90, // 50% discount logic applied for impact
    regularPrice: 459.90,
    rating: 4.9,
    reviews: 128,
    stockLeft: 4
  },
  {
    id: 2,
    name: "Fone Bluetooth NoiseCancel",
    category: "Eletrônicos",
    image: "https://picsum.photos/id/3/400/400",
    hoverImage: "https://picsum.photos/id/4/400/400",
    memberPrice: 149.90,
    regularPrice: 220.00,
    rating: 4.7,
    reviews: 85,
    stockLeft: 12
  },
  {
    id: 3,
    name: "Kit Panelas Chef Premium",
    category: "Casa & Cozinha",
    image: "https://picsum.photos/id/225/400/400",
    hoverImage: "https://picsum.photos/id/431/400/400",
    memberPrice: 350.00,
    regularPrice: 500.00,
    rating: 4.8,
    reviews: 210,
    stockLeft: 5
  },
  {
    id: 4,
    name: "Mochila Escolar Tech",
    category: "Material Escolar",
    image: "https://picsum.photos/id/367/400/400",
    hoverImage: "https://picsum.photos/id/403/400/400",
    memberPrice: 89.90,
    regularPrice: 139.90,
    rating: 4.6,
    reviews: 56,
    stockLeft: 20
  },
  {
    id: 5,
    name: "Cama Pet Ortopédica",
    category: "Pet Shop",
    image: "https://picsum.photos/id/237/400/400",
    hoverImage: "https://picsum.photos/id/1025/400/400",
    memberPrice: 120.00,
    regularPrice: 180.00,
    rating: 4.9,
    reviews: 340,
    stockLeft: 2
  },
  {
    id: 6,
    name: "Conjunto Moda Kids Verão",
    category: "Moda Kids",
    image: "https://picsum.photos/id/450/400/400",
    hoverImage: "https://picsum.photos/id/451/400/400",
    memberPrice: 59.90,
    regularPrice: 99.90,
    rating: 4.5,
    reviews: 42,
    stockLeft: 8
  },
  {
    id: 7,
    name: "Cafeteira Expressa Italiana",
    category: "Casa & Cozinha",
    image: "https://picsum.photos/id/1060/400/400",
    hoverImage: "https://picsum.photos/id/1063/400/400",
    memberPrice: 199.90,
    regularPrice: 299.90,
    rating: 4.8,
    reviews: 99,
    stockLeft: 3
  },
  {
    id: 8,
    name: "Tablet Ultra Slim 10\"",
    category: "Eletrônicos",
    image: "https://picsum.photos/id/119/400/400",
    hoverImage: "https://picsum.photos/id/160/400/400",
    memberPrice: 899.90,
    regularPrice: 1200.00,
    rating: 4.7,
    reviews: 67,
    stockLeft: 7
  },
  // New Fashion Items
  {
    id: 9,
    name: "Óculos de Sol Aviador Luxury",
    category: "Moda Exclusiva",
    image: "https://picsum.photos/id/64/400/400",
    hoverImage: "https://picsum.photos/id/91/400/400",
    memberPrice: 129.90,
    regularPrice: 259.90, // ~50% off
    rating: 4.9,
    reviews: 45,
    stockLeft: 3
  },
  {
    id: 10,
    name: "Bolsa de Couro Genuíno",
    category: "Moda Exclusiva",
    image: "https://picsum.photos/id/325/400/400",
    hoverImage: "https://picsum.photos/id/339/400/400",
    memberPrice: 450.00,
    regularPrice: 600.00,
    rating: 4.8,
    reviews: 32,
    stockLeft: 6
  },
  {
    id: 11,
    name: "Tênis Urban Comfort",
    category: "Moda Exclusiva",
    image: "https://picsum.photos/id/103/400/400",
    hoverImage: "https://picsum.photos/id/107/400/400",
    memberPrice: 199.90,
    regularPrice: 299.90,
    rating: 4.7,
    reviews: 89,
    stockLeft: 10
  }
];

export const CATEGORIES: Category[] = [
  { id: 1, name: "Smartwatches", iconName: "Watch" },
  { id: 2, name: "Casa & Cozinha", iconName: "ChefHat" },
  { id: 3, name: "Material Escolar", iconName: "BookOpen" },
  { id: 4, name: "Pet Shop", iconName: "Dog" },
  { id: 5, name: "Moda Kids", iconName: "Smile" },
  { id: 6, name: "Supermercado", iconName: "ShoppingBasket" },
];

export const BANNERS: Banner[] = [
  {
    id: 1,
    title: "SEUS BENEFÍCIOS COMEÇAM AQUI! 🚀",
    subtitle: "Entre para o Clube StarGrowth e desbloqueie descontos de até 30% em todo o site, além de ofertas exclusivas que você não encontra em nenhum outro lugar.",
    cta: "QUERO MEUS BENEFÍCIOS",
    image: "https://picsum.photos/id/6/1920/600" // Laptop/Workspace vibe
  },
  {
    id: 2,
    title: "O FUTURO NA SUA MÃO ⌚",
    subtitle: "Smartwatches, fones Bluetooth e os últimos lançamentos em eletrônicos com preços de atacado e segurança total na entrega.",
    cta: "CONFERIR NOVIDADES",
    image: "https://picsum.photos/id/201/1920/600" // Tech vibe
  },
  {
    id: 3,
    title: "TRANSFORME SEU LAR 🏠",
    subtitle: "De utensílios inteligentes a decorações únicas. Renove seu ambiente com a qualidade que você merece e o frete grátis que você ama.",
    cta: "APROVEITAR OFERTAS",
    image: "https://picsum.photos/id/314/1920/600" // Home vibe
  }
];

export const ABOUT_TEXT = {
  history: `A StarGrowth nasceu com um propósito claro: democratizar o acesso a produtos inovadores, de alta qualidade e com preços justos. Em um mercado cada vez mais complexo, surgimos como um porto seguro para quem busca o equilíbrio perfeito entre variedade, tecnologia e economia.

  Mais do que uma plataforma de e-commerce, somos curadores de experiências. Nossa equipe trabalha incansavelmente para selecionar desde os últimos gadgets tecnológicos e materiais escolares até soluções inteligentes para sua casa e bem-estar. Cada item em nosso catálogo passa por um rigoroso processo de seleção para garantir que ele realmente transforme o seu dia a dia.`,
  ecosystem: `Não queremos apenas vender um produto; queremos criar um relacionamento. Por isso, desenvolvemos o nosso exclusivo Plano de Assinatura StarGrowth. Acreditamos que a fidelidade deve ser recompensada, e por isso oferecemos aos nossos membros descontos imbatíveis, frete diferenciado e acesso antecipado a lançamentos.`
};

export const TERMS_TEXT = `Bem-vindo à StarGrowth. Ao acessar nosso site e utilizar nossos serviços, você concorda em cumprir e estar vinculado aos seguintes termos e condições. Recomendamos a leitura atenta antes de efetuar qualquer compra ou assinatura.

Ao navegar no site stargrowth.com.br, você declara ser maior de 18 anos ou estar sob supervisão de um responsável legal e aceita integralmente estas condições.

Para realizar compras e acessar o Plano de Assinatura, o usuário deve fornecer informações verdadeiras e atualizadas. A segurança da senha é de responsabilidade do cliente.`;