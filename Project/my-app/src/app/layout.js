// Project/my-app/src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import logo from "./components/assets/logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Next.js Metadata API (no manual <head> needed)
export const metadata = {
  title: "Neer Nirikshan",
  description: "A modern Next.js application with custom fonts",
  icons: {
    icon: "/logo.png", // from public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
