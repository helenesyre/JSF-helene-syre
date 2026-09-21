import { BreadCrumb } from "@/app/_lib/types";
import Link from "next/link";

export default function BreadCrumbs({ crumbs }: { crumbs: BreadCrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="relative flex mb-4 font-medium">
      {crumbs.length > 0 &&
        crumbs.map((crumb, index) => {
          return (
            <span key={index} className="flex">
              {crumb.link ? (
                <Link href={crumb.link}>{crumb.label}</Link>
              ) : (
                crumb.label
              )}
              {index + 1 < crumbs.length && <span className="mx-2">›</span>}
            </span>
          );
        })}
    </nav>
  );
}
