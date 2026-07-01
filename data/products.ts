// data/products.ts

export interface Product {
  id: string;
  brand: string;
  title: string;
  priceExVat: number;
  image: string;
  category: string;
  isBulkAvailable: boolean;
  isGiftingAvailable: boolean;
  specifications: string[];
}

export const appleProducts: Product[] = [
  {
    id: "apple-mbp-16",
    brand: "Apple",
    title: "MacBook Pro 16-inch (M3 Max)",
    priceExVat: 79999.00,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    category: "Laptops",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["M3 Max Chip", "36GB Unified Memory", "1TB SSD", "Liquid Retina XDR display"]
  },
  {
    id: "apple-ipad-pro",
    brand: "Apple",
    title: "iPad Pro 12.9-inch (Wi-Fi + Cellular)",
    priceExVat: 28999.00,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    category: "Tablets",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["M2 Chip", "256GB Storage", "5G Cellular", "Supports Apple Pencil"]
  },
  {
    id: "apple-imac-24",
    brand: "Apple",
    title: "iMac 24-inch Desktop",
    priceExVat: 34500.00,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    category: "Desktops",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["M3 Chip", "8-core CPU", "10-core GPU", "8GB Unified Memory", "256GB SSD"]
  },
  {
    id: "apple-iphone-15-pro",
    brand: "Apple",
    title: "iPhone 15 Pro Max (Titanium)",
    priceExVat: 29999.00,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    category: "Mobile",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["A17 Pro chip", "Natural Titanium", "256GB Storage", "Pro camera system"]
  }
];