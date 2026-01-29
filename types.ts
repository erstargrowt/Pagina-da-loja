export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  hoverImage: string;
  memberPrice: number;
  regularPrice: number;
  rating: number;
  reviews: number;
  stockLeft: number;
}

export interface Category {
  id: number;
  name: string;
  iconName: string; // Mapping string to Lucide icon
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}