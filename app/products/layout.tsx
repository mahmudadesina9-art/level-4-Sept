import type { Metadata } from "next";
import Navbar from "../components/navbar/Navbar";

export const metadata: Metadata = {
  title: "My Level 4 App",
  description: "Toyota, Lexus, ",
};

export default function ProductsLayout({
  children,
  modal,
}: LayoutProps<"/products">) {
  return (
    <div className="min-h-full flex flex-col">
      {children}
      {modal}
    </div>
  );
}
