import type { Metadata } from "next";

// dark mode wrapper
import { Providers } from './providers'

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
    <html lang="de" suppressHydrationWarning>
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
