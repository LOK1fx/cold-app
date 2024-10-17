import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const NunitoMono = Nunito(
  {
    subsets: ['cyrillic'],
    preload: true,
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"]
  }
);

export const metadata: Metadata = {
  title: "Полюс холода",
  description: "VI зимний экстремальный марафон",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${NunitoMono.className}`}>      
      <body>
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
