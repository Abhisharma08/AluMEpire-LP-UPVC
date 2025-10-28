import "./globals.css";
import Script from "next/script";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Script
          src="https://code.tidio.co/bdmtqpq4b4dqdre0zp8envvhzqjx6kye.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
