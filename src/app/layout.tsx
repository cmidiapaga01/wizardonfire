// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import Gtm from "@/components/Gtm";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "Magos do Tráfego",
    template: "%s | Magos do Tráfego",
  },
  description:
    "Magos do Tráfego — performance, dados e growth para escalar seus resultados.",
  authors: [{ name: "Magos do Tráfego" }],
  // Ajuste para o seu domínio real:
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://magosdotrafego.com"),
  openGraph: {
    title: "Magos do Tráfego",
    description:
      "Performance e inteligência em mídia paga. Cresça com dados.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://magosdotrafego.com",
    siteName: "Magos do Tráfego",
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_SITE_URL || "https://magosdotrafego.com") +
          "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Magos do Tráfego — Performance em Mídia",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-visual",
};

export const themeColor = "#028e87";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={cormorant.variable}>
      <head>
        <link
          rel="preload"
          href="/images/hero1200w.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="font-sans text-choco bg-cream">
        {/* GTM: renderize uma única vez no <body> */}
        <Gtm />
        <div>{children}</div>
      </body>
    </html>
  );
}
