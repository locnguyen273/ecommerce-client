export interface BrandProductType {
  _id: string;
  title: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CategoryProductType {
  _id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ColorProductType {
  _id: string;
  colorName: string;
  colorValue: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductType {
  name: string,
  slug: string,
  description: string,
  price: number,
  category: string,
  brand: string,
  quantity: number,
  images: Array<string>,
  colors: Array<string>,
}
