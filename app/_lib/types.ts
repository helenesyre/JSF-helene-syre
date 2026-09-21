import { ReactNode } from "react";

export type ProductImage = {
  url: string;
  alt: string;
};

export type ProductReview = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

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

export type ResponseMetadata = {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: null;
  nextPage: null;
  pageCount: number;
  totalCount: number;
};

export type ProductResponse = {
  data: Array<Product>;
  meta: ResponseMetadata;
};

export type SingleProductResponse = {
  data: Product;
  meta: object;
};

export type BreadCrumb = {
  label: ReactNode;
  link?: string;
};
