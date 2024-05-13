import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
//import { ThemeProvider } from "@/context/ThemeContext";

const bodyFont = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Hexashop - Home",
  description: "Discover a world of endless shopping possibilities at our online store. Browse, choose and order your favourite products from the comfort of your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
