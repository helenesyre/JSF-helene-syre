export default function Pagination({
  page,
  pageCount,
  setPage,
}: {
  page: number;
  pageCount: number;
  setPage: (page: number) => void;
}) {
  return (
    <div className="flex gap-4 justify-center">
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <span>
        Page {page} of {pageCount}
      </span>
      <button onClick={() => setPage(page + 1)} disabled={page >= pageCount}>
        Next
      </button>
    </div>
  );
}
