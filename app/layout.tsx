import type { Metadata } from "next";
import { Open_Sans, Geist_Mono } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A1 Vertex Athletics | Elite Track Club",
  description:
    "Join A1 Vertex Athletics, a premier track club dedicated to developing elite athletes through expert coaching, advanced training methods, and competitive excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
