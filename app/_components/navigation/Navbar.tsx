"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { X, Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/app/_lib/stores";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/coming-soon" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const cartItemCount = useSyncExternalStore(
    useCart.subscribe,
    () => useCart.getState().cartItemCount(),
    () => 0,
  );

  const linkClass = (href: string) =>
    href !== "/coming-soon" && pathname === href
      ? "font-bold hover:text-red-900 mt-1"
      : "font-medium hover:text-red-900 mt-1";

  return (
    <header className="relative w-full flex flex-col bg-stone-50 shadow-sm">
      <div className="w-full flex items-center gap-4 px-6 md:px-12 py-5 justify-between">
        <nav className="flex items-center gap-4">
          <Link href={"/"}>
            <Logo />
          </Link>
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkClass(link.href)} mt-1`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant={"Medium"}
            color={"Secondary"}
            icon={true}
            href="/cart"
            className="relative"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Button>
          {/* Desktop sign in */}
          <div className="hidden md:block">
            <Button variant={"Medium"} color={"Primary"} href="/coming-soon">
              Sign In
            </Button>
          </div>
          {/* Hamburger (mobile only) */}
          <div className="md:hidden">
            <Button
              variant={"Medium"}
              color={"Primary"}
              icon={true}
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X size={20} strokeWidth={1.5} />
              ) : (
                <Menu size={20} strokeWidth={1.5} />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu panel */}
      {isOpen && (
        <>
          <div
            className="md:hidden absolute top-full left-0 w-full h-screen bg-black/40 z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full flex flex-col gap-4 px-6 pb-6 bg-stone-50 shadow-sm z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant={"Medium"} color={"Primary"} href="/coming-soon">
              Sign In
            </Button>
          </div>
        </>
      )}
    </header>
  );
}
