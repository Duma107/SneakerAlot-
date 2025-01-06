export interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  category: string;
  sizes: number[];
  colors: string[];
  images: string[];
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
  selectedColor: string;
}

export interface ShippingDetails {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}