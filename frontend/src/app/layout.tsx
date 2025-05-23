import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: "Zeyad Awadalla",
  description: "Personal Portfolio of Zeyad Awadalla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}