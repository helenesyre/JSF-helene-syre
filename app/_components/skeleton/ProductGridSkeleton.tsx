export default function ProductGridSkeleton({
  productsPerPage = 8,
}: {
  productsPerPage: number;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: productsPerPage }).map((_, index) => (
        <div
          key={index}
          className="h-86 bg-stone-200 animate-pulse rounded"
        ></div>
      ))}
    </div>
  );
}
