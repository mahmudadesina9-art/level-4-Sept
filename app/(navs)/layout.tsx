import type { Metadata } from "next";
import Navbar from "../components/navbar/Navbar";

export const metadata: Metadata = {
  title: "My Level 4 App",
  description: "Toyota, Lexus, ",
};

export default function NavLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <h1>This represent our navbar</h1>
      {children}
    </div>
  );
}
