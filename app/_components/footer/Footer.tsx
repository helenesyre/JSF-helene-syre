import Link from "next/link";
import Logo from "../ui/Logo";

// Footer component for the application
export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 py-12 bg-stone-50 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
        {/* Footer heading */}
        <h2 className="font-extrabold text-red-900 sr-only">Shopflow footer</h2>
        <Logo />
        {/* Footer navigation links */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
          <li>
            <Link
              href={"/coming-soon"}
              className="font-medium hover:text-red-900"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="font-medium hover:text-red-900">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href={"/coming-soon"}
              className="font-medium hover:text-red-900"
            >
              Term of Service
            </Link>
          </li>
          <li>
            <Link
              href={"/coming-soon"}
              className="font-medium hover:text-red-900"
            >
              Cookie Policy
            </Link>
          </li>
        </ul>
      </div>
      <hr className="mt-8 mb-4 text-stone-300" />
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-between">
        {/* Social media links */}
        <ul className="flex flex-row gap-4">
          <li>
            <Link href={"https://facebook.com"} className="hover:text-red-900">
              Facebook
            </Link>
          </li>
          <li>
            <Link href={"https://instagram.com"} className="hover:text-red-900">
              Instagram
            </Link>
          </li>
        </ul>
        {/* Copyright information */}
        <p>&copy;{new Date().getFullYear()} Shopflow. All rights reserved.</p>
      </div>
    </footer>
  );
}
