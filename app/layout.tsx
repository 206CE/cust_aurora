
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* App router SEO  */
export const metadata = {
  title: "Aurora Tax Consultants",
  description: "Enlightening your Tax Worries",
  metadataBase: new URL("https://..."),
  openGraph: {
    title: "fda",
    description: "",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "",
    site: "@", // Your Twitter handle
    description: "",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/Logo.png",
  },
};

import {Navigation} from "@/app/components/Navigation";
import {Logo} from "@/app/components/Logo";


import { Social } from "@/app/components/Social"; 
import { CopyRight } from "./components";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
  
];

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
        <div className="flex p-2  px-5  gap-15 text-(--text-primary) border-b-2 border-(--border) items-center">
          <div className="">
            <Logo
              compStyling=""
              imgPath="/logo.png"
              size={40}
              text="AURORA"
              href="/Contact"
            />
          </div>

          {/* Desktop Navbar */}
          <div className="">
            <Navigation items={items} />
          </div>

        </div>

        {children}

        <footer className="flex-col items-center justify-between p-4 gap-4">
          <Social urls={['']} />
          <div className="hidden md:block grow text-center ml-20">
            <Navigation
              items={items}
            />
          </div>
          <CopyRight />
        </footer>
      </body>
    </html>
  );
}
