import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./_components/navigation/Navbar";
import Footer from "./_components/footer/Footer";
import ToastProvider from "./_components/toast/ToastProvider";

// Fonts configuration for the application
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Shopflow | Online Shop",
  description:
    "Shopflow is an online shop where you can discover a wide range of products, good prices, read reviews, and find great deals for your everyday needs.",
};

// Root layout for the application
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-100 relative">
        {/* Navigation */}
        <Navbar />
        {/* Toast notifications */}
        <ToastProvider />
        {/* Main content */}
        <main className="flex flex-col flex-1">
          <Providers>{children}</Providers>
        </main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
