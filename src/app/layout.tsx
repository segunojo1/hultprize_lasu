import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const metadata: Metadata = {
  title: "Hult Prize LASU",
  description: "Hult Prize LASU Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`poppins font-sans`}>{children}</body>
    </html>
  );
}
