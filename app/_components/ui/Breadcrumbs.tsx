import { BreadCrumb } from "@/app/_lib/types";
import Link from "next/link";

export default function BreadCrumbs({ crumbs }: { crumbs: BreadCrumb[] }) {
  const breadcrumbColor = "text-stone-900";

  return (
    <nav
      aria-label="Breadcrumb"
      className="absolute flex mb-4 font-medium top-6 left-6 md:top-12 md:left-12"
    >
      {crumbs.length > 0 &&
        crumbs.map((crumb, index) => {
          return (
            <span key={index} className="flex">
              {crumb.link ? (
                <Link href={crumb.link} className={breadcrumbColor}>
                  {crumb.label}
                </Link>
              ) : (
                <span className={breadcrumbColor}>{crumb.label}</span>
              )}
              {index + 1 < crumbs.length && (
                <span className={`mx-2 ${breadcrumbColor}`}>›</span>
              )}
            </span>
          );
        })}
    </nav>
  );
}
