import type { Metadata } from "next";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "mc-maag consulting GmbH",
  description: "Website of mc-maag consulting GmbH, Germany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
