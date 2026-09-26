# JSF Helene Syre Project

## Overview

This is a Noroff project using the [Noroff shop api](https://docs.noroff.dev/docs/v2/basic/online-shop).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework.
- [Lucide React](https://lucide.dev) - Icon library for React.
- [Vercel](https://vercel.com) - Deployment platform for Next.js applications.
- [React Hook Form](https://react-hook-form.com) - Form management library for React.
- [Zustand](https://zustand-demo.pmnd.rs/) - State management library for React.
- [TanStack Query](https://tanstack.com/query/latest) - Data fetching and state management library.
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema declaration and validation library.

## Project Structure

```
app/
  ├─ _components/       # Reusable UI components
  │   ├── cart/            # Shopping cart related components
  │   ├── footer/          # Footer related components
  │   ├── forms/           # Form related components
  │   ├── navigation/      # Navigation related components
  │   ├── product/         # Product related components
  │   ├── skeleton/        # Skeleton loading related components
  │   ├── ui/              # General UI components
  │   └── pagination.tsx   # Pagination component
  ├─ _lib/              # Utility functions and types
  ├─ product/           # Product pages
  │   └── [product_id]/   # Dynamic product pages
  │       └── page.tsx       # Individual product page
  ├─ cart/              # Shopping cart components
  │   ├── page.tsx       # Shopping cart page
  │   └── success/        # Success page after checkout
  │       └── page.tsx   # Individual success page
  ├─ comming-soon/         # Coming soon pages
  │   └── page.tsx       # Coming soon page
  ├─ contact/           # Contact pages
  │   └── page.tsx       # Contact page
  └─ page.tsx           # Main entry page
public/                 # Static assets
README.md               # Project documentation
```

## Deploy

The app is deployed on Vercel. You can find the deployment instructions and more details in the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
