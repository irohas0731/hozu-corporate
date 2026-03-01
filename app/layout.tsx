import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HOZU株式会社 | 巡回健康診断の超音波検査",
    template: "%s | HOZU株式会社",
  },
  description:
    "HOZU株式会社は巡回健康診断における超音波検査を専門とする企業です。経験豊富な検査技師が出張対応いたします。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "HOZU株式会社",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HOZU株式会社",
    url: "https://hozu-us.com",
    telephone: "072-968-7333",
    faxNumber: "072-968-7356",
    email: "company@hozu-us.com",
    address: {
      "@type": "PostalAddress",
      postalCode: "579-8003",
      addressRegion: "大阪府",
      addressLocality: "東大阪市",
      streetAddress: "日下町7-7-33",
      addressCountry: "JP",
    },
    description:
      "巡回健康診断における超音波検査を専門とする企業",
  };

  return (
    <html lang="ja" className={`${notoSansJP.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-text-main bg-white antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
