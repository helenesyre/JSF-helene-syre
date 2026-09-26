import Image from "next/image";
import ProductSection from "./_components/product/ProductSection";

// Home page
export default function Home() {
  return (
    <div>
      <section className="relative h-96 p-6 md:p-12">
        {/* Hero image */}
        <Image
          src="/images/home-hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-900 opacity-70"></div>
        {/* Hero title and description */}
        <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center text-center px-12 ">
          <h1 className="relative text-4xl font-bold text-stone-50">
            Welcome to Our Online Shop
          </h1>
          <p className="relative text-lg text-stone-300">
            Discover our wide range of products and enjoy a seamless shopping
            flow.
          </p>
        </div>
      </section>
      {/* Product section */}
      <ProductSection />
    </div>
  );
}
