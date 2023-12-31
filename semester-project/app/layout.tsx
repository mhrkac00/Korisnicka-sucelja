import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "@/node_modules/next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TRUE PAW",
  description: "Generated by create next app",
};

const pages: Record<string, `/${string}`> = {
  Home: "/",
  About: "/about",
  Pets: "/pets",
  Donations: "/donations",
  Community: "/community",
  Blog: "/blog",
};

const accountIcon: Record<string, `/${string}`> = {
  SignUp: "/",
  LogIn: "/",
  Account: "/account",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar pages={pages} accountIcon={accountIcon} />
        {children}
        <Footer pages={pages} />
      </body>
    </html>
  );
}
