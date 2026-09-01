import type { Metadata } from "next";

// dark mode wrapper
import { Providers } from './providers'

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "mc-maag consulting GmbH",
  description: "Website of mc-maag consulting GmbH, Germany",
  openGraph: {
    title: "mc-maag consulting GmbH",
    description: "Website of mc-maag consulting GmbH, Germany",
    url: "https://www.mc-maag-consulting.com",
    siteName: "mc-maag consulting GmbH",
    images: [
      {
        url: "https://www.mc-maag-consulting.com/logo.jpg",
        width: 349,
        height: 178,
        alt: "mc-maag consulting GmbH",
      },
      // The og-image.png should be a real image you place in 
      // public/, ideally 1200×630px — that's the standard Open 
      // Graph image size most platforms expect.
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mc-maag consulting GmbH",
    description: "Website of mc-maag consulting GmbH, Germany",
    images: ["https://www.mc-maag-consulting.com/logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
