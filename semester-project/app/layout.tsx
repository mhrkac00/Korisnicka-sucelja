import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js lab project",
  description: "Next.js lab project",
};

const pages = {
  home: "/",
  about: "/about",
  pets: "/pets",
  community: "/community",
  resources: "/resources",
  contact: "/contact",
  account: "/acount",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center p-14 text-lg">
          <ul className="navig flex gap-5">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name} className="dropdown">
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
