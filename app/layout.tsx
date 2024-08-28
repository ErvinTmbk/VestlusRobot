import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AI } from "./components/actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mingisugune Vestlus Robot",
  description: "Proovime tööd või midagi sellist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AI>{children}</AI>
      </body>
    </html>
  );
}
