
import { Product } from '@/types';

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'MacBook Pro 16"',
    price: 2499,
    description: 'Powerful laptop with M2 Pro chip, perfect for developers and creative professionals.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 999,
    description: 'Latest iPhone with titanium design and advanced camera system.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Dell XPS 13',
    price: 1299,
    description: 'Ultra-portable laptop with stunning InfinityEdge display.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.6,
    reviews: 67
  },
  {
    id: '4',
    name: 'iPad Air',
    price: 599,
    description: 'Versatile tablet perfect for work, creativity, and entertainment.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
    category: 'Electronics',
    inStock: false,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24',
    price: 849,
    description: 'Premium Android smartphone with advanced AI features.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    reviews: 203
  },

  // Books
  {
    id: '6',
    name: 'Clean Code',
    price: 45,
    description: 'A handbook of agile software craftsmanship by Robert C. Martin.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
    category: 'Books',
    inStock: true,
    rating: 4.8,
    reviews: 312
  },
  {
    id: '7',
    name: 'The Pragmatic Programmer',
    price: 42,
    description: 'Your journey to mastery in software development.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    category: 'Books',
    inStock: true,
    rating: 4.9,
    reviews: 198
  },
  {
    id: '8',
    name: 'Design Patterns',
    price: 55,
    description: 'Elements of reusable object-oriented software.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    category: 'Books',
    inStock: true,
    rating: 4.6,
    reviews: 87
  },
  {
    id: '9',
    name: 'JavaScript: The Good Parts',
    price: 38,
    description: 'Unearthing the excellence in JavaScript by Douglas Crockford.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    category: 'Books',
    inStock: true,
    rating: 4.4,
    reviews: 145
  },
  {
    id: '10',
    name: 'System Design Interview',
    price: 48,
    description: 'An insider guide to system design interviews.',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&h=600&fit=crop',
    category: 'Books',
    inStock: false,
    rating: 4.7,
    reviews: 234
  },

  // Apparel
  {
    id: '11',
    name: 'Premium Cotton T-Shirt',
    price: 29,
    description: 'Soft, comfortable, and durable cotton t-shirt in various colors.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop',
    category: 'Apparel',
    inStock: true,
    rating: 4.3,
    reviews: 89
  },
  {
    id: '12',
    name: 'Designer Hoodie',
    price: 79,
    description: 'Cozy and stylish hoodie perfect for casual wear.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop',
    category: 'Apparel',
    inStock: true,
    rating: 4.5,
    reviews: 156
  },
  {
    id: '13',
    name: 'Denim Jacket',
    price: 89,
    description: 'Classic denim jacket that never goes out of style.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop',
    category: 'Apparel',
    inStock: true,
    rating: 4.4,
    reviews: 73
  },
  {
    id: '14',
    name: 'Sneakers',
    price: 129,
    description: 'Comfortable and stylish sneakers for everyday wear.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop',
    category: 'Apparel',
    inStock: true,
    rating: 4.6,
    reviews: 201
  },
  {
    id: '15',
    name: 'Wool Sweater',
    price: 95,
    description: 'Warm and comfortable wool sweater for cold weather.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop',
    category: 'Apparel',
    inStock: false,
    rating: 4.7,
    reviews: 112
  }
];
