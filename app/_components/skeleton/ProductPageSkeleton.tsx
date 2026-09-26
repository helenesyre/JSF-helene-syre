// Product page skeleton component
export default function ProductPageSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative">
      {/* Image Section */}
      <section className="relative w-full h-80 lg:h-screen">
        {/* Product Image */}
        <div className="w-full h-full bg-stone-300 animate-pulse"></div>
        {/* Breadcrumbs */}
        <div className="w-full h-6 bg-stone-300 animate-pulse mt-4"></div>
      </section>
      {/* Product Details Section */}
      <section className="min-w-0 px-6 md:px-12 2xl:px-32 py-12">
        <div className="flex flex-col gap-1 mb-3">
          {/* Product Title */}
          <div className="w-full h-8 bg-stone-300 animate-pulse"></div>
          {/* Price Section */}
          <div className="w-24 h-6 bg-stone-300 animate-pulse"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 mb-6">
          <div className="w-32 h-6 bg-stone-300 animate-pulse"></div>
          <p className="hidden md:block text-stone-300 font-semibold">|</p>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="w-20 h-6 bg-stone-300 animate-pulse"></div>
          </div>
        </div>
        {/* Description */}
        <div className="mb-4">
          <p className="text-lg font-bold mb-2">Description:</p>
          <ul className="list-disc pl-5">
            <li className="w-full h-full bg-stone-300 animate-pulse"></li>
          </ul>
        </div>
        {/* Reviews */}
        <div>
          <p className="text-lg font-bold mb-2">Reviews:</p>
          <div className="w-full h-20 bg-stone-300 animate-pulse mb-2"></div>
          <div className="w-full h-20 bg-stone-300 animate-pulse mb-2"></div>
          <div className="w-full h-20 bg-stone-300 animate-pulse mb-2"></div>
        </div>
      </section>
    </div>
  );
}
