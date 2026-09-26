import { ReactNode } from "react";

// Product image type definition
export type ProductImage = {
  url: string;
  alt: string;
};

// Product review type definition
export type ProductReview = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

// Product type definition
export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number | null;
  image: ProductImage;
  rating: number;
  tags: Array<string>;
  reviews: Array<ProductReview>;
};

// Response metadata type definition
export type ResponseMetadata = {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: null;
  nextPage: null;
  pageCount: number;
  totalCount: number;
};

// Product response type definition
export type ProductResponse = {
  data: Array<Product>;
  meta: ResponseMetadata;
};

// Single product response type definition
export type SingleProductResponse = {
  data: Product;
  meta: object;
};

// BreadCrumb type definition
export type BreadCrumb = {
  label: ReactNode;
  link?: string;
};
