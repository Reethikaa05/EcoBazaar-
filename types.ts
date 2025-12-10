export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  mobile?: string;
  password?: string; // In a real app, never store plain text
}

export interface AuthResponse {
  user: User;
  token: string;
}

export enum Category {
  ALL = "All Categories",
  ELECTRONICS = "Electronics",
  FASHION = "Fashion",
  HOME = "Home & Kitchen",
  BOOKS = "Books",
  TOYS = "Toys & Games"
}