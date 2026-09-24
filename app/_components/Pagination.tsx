import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  page,
  pageCount,
  setPage,
}: {
  page: number;
  pageCount: number;
  setPage: (page: number) => void;
}) {
  const baseButtonClass =
    "w-10 h-10 flex items-center justify-center border rounded-md";
  const arrowButtonClass = `${baseButtonClass} cursor-pointer border-stone-300 bg-stone-50`;
  const disabledArrowButtonClass = `${baseButtonClass} cursor-not-allowed text-stone-300 border-stone-300 bg-stone-50`;
  const pageButtonClass = `${baseButtonClass} cursor-pointer border-stone-300 bg-stone-50`;
  const activePageButtonClass = `${baseButtonClass} cursor-pointer border-stone-800 bg-stone-800 text-white`;
  return (
    <div className="flex items-center gap-4 justify-center">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        className={page <= 1 ? disabledArrowButtonClass : arrowButtonClass}
      >
        <ChevronLeft />
      </button>
      <span className="flex items-center gap-2">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? activePageButtonClass : pageButtonClass}
          >
            {i + 1}
          </button>
        ))}
      </span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page >= pageCount}
        className={
          page >= pageCount ? disabledArrowButtonClass : arrowButtonClass
        }
      >
        <ChevronRight />
      </button>
    </div>
  );
}
