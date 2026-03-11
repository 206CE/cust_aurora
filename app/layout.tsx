

import "./globals.css";

import {Navigation} from "@/app/components/Navigation";
import {Logo} from "@/app/components/Logo";


import { Social } from "@/app/components/Social"; 

//Change font
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { CopyRight } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
  
];

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
        <header className="flex items-center justify-between px-5  gap-10 text-(--text-primary)">
          <div className="mt-6">
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

          {/* CTA Link - shown on medium and up */}
          <div className="hidden lg:inline   ">
            <div>
              <Link className="btn p-2 border rounded-lg" href={'/Contact'}>
                <h2>Get a free quote</h2>
                
              </Link>
            </div>
          </div>
        </header>

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
