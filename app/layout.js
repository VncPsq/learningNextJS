import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Checklist to become an NextJs expert !",
  description: "Steps to master NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        <main className="flex flex-col items-center gap-8 w-10/12 max-w-7xl px-8 mx-auto bg-gray-100 rounded-lg h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
