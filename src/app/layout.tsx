import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wiki Page Pro",
    template: "%s | WikiPage Pro",
  },
  description: "Your go-to location for Wiki Services and othe ronline services.",
  metadataBase: new URL("https://wikipagepro.com"),
  openGraph: {
    title: "Wiki Page Pro",
    description: "Your go-to location for Wiki Services and othe ronline services.",
    url: "https://wikipagepro.com",
    siteName: "Wiki Page Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wiki Page Pro Banner",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="mx-2 my-12 md:mx-12 lg:mx-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
