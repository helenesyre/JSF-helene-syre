"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center gap-4 px-12 py-5 justify-between bg-stone-50 shadow-sm">
      <nav className="flex items-center gap-4">
        <Link href={"/"}>
          <Image
            src="/shopflow-logo.svg"
            alt="Shopflow"
            width={40}
            height={40}
            style={{ width: "150px", height: "40px", marginRight: "20px" }}
          />
        </Link>
        <Link
          href={"/"}
          className={
            pathname === "/"
              ? "font-bold hover:text-red-900 mt-1"
              : "font-medium hover:text-red-900 mt-1"
          }
        >
          Home
        </Link>
        <Link
          href={"/coming-soon"}
          className={"font-medium hover:text-red-900 mt-1"}
        >
          Shop
        </Link>
        <Link
          href={"/contact"}
          className={
            pathname === "/contact"
              ? "font-bold hover:text-red-900 mt-1"
              : "font-medium hover:text-red-900 mt-1"
          }
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button
          variant={"Medium"}
          color={"Secondary"}
          icon={true}
          href="/coming-soon"
        >
          <Search size={20} strokeWidth={1.5} />
        </Button>
        <Button variant={"Medium"} color={"Secondary"} icon={true} href="/cart">
          <ShoppingBag size={20} strokeWidth={1.5} />
        </Button>
        <Button variant={"Medium"} color={"Primary"} href="/coming-soon">
          Sign In
        </Button>
      </div>
    </header>
  );
}
