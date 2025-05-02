import { CategoryName } from "./categories";

export interface Product{
  id: string;
  name: string;
  price: number;
  description: string;
  category: CategoryName;
  image: string;
  supplierId: string;
}

export const PRODUCT_MOCK: Product[] = [
  {
    id: "1",
    name: "iPhone 13",
    price: 999,
    description: "The latest iPhone model with advanced features.",
    category: "Electronics",
    image: "https://example.com/iphone13.jpg",
    supplierId: "1",
  },
  {
    id: "2",
    name: "Nike Air Max",
    price: 120,
    description: "Comfortable running shoes with a unique design.",
    category: "Clothing",
    image: "https://example.com/nikeairmax.jpg",
    supplierId: "2",
  },
  {
    id: "3",
    name: "KitchenAid Mixer",
    price: 250,
    description: "Powerful kitchen mixer for baking and blending.",
    category: "Home & Kitchen",
    image: "https://example.com/kitchenaidmixer.jpg",
    supplierId: "3",
  },
  {
    id: "4",
    name: "Apple Watch Series 7",
    price: 399,
    description: "Smartwatch with advanced health tracking features.",
    category: "Electronics",
    image: "https://example.com/applewatchseries7.jpg",
    supplierId: "1",
  },
  {
    id: "5",
    name: "Samsung Galaxy S21",
    price: 799,
    description: "The latest Samsung smartphone with advanced features.",
    category: "Electronics",
    image: "https://example.com/samsunggalaxys21.jpg",
    supplierId: "2",
  },
  {
    id: "6",
    name: "Sony PlayStation 5",
    price: 499,
    description: "Next-generation gaming console with stunning graphics.",
    category: "Electronics",
    image: "https://example.com/sonyps5.jpg",
    supplierId: "3",
  },
  {
    id: "7",
    name: "Nike Air Force 1",
    price: 100,
    description: "Classic running shoes with a timeless design.",
    category: "Clothing",
    image: "https://example.com/nikeairforce1.jpg",
    supplierId: "2",
  },
  {
    id: "8",
    name: "Adidas Ultraboost",
    price: 150,
    description: "High-performance running shoes with a responsive cushioning.",
    category: "Clothing",
    image: "https://example.com/adidasultraboost.jpg",
    supplierId: "1",
  },
  {
    id: "9",
    name: "Levi's Jeans",
    price: 50,
    description: "Classic denim jeans with a timeless design.",
    category: "Clothing",
    image: "https://example.com/levi'sjeans.jpg",
    supplierId: "3",
  },
  {
    id: "10",
    name: "H&M T-Shirt",
    price: 20,
    description: "Comfortable cotton t-shirt with a trendy design.",
    category: "Clothing",
    image: "https://example.com/h&mTshirt.jpg",
    supplierId: "4",
  },

];
