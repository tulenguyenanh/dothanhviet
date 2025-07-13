import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Đô Thành Việt - Dịch vụ vệ sinh nhà cửa chuyên nghiệp",
  description:
    "Đô Thành Việt cung cấp dịch vụ vệ sinh nhà cửa, vệ sinh công nghiệp, uy tín – chuyên nghiệp – giá tốt. Đảm bảo sạch sẽ, an toàn, hài lòng khách hàng.",
  keywords: [
    "Dịch vụ vệ sinh nhà cửa",
    "Vệ sinh công nghiệp",
    "Vệ sinh Đô Thành Việt",
    "Vệ sinh nhà cửa chuyên nghiệp",
    "Vệ sinh giá rẻ",
    "Dịch vụ vệ sinh TPHCM",
  ],
  authors: [{ name: "Đô Thành Việt" }],
  openGraph: {
    title: "Đô Thành Việt - Dịch vụ vệ sinh nhà cửa",
    description:
      "Chuyên cung cấp dịch vụ vệ sinh nhà cửa, vệ sinh công nghiệp, uy tín – giá tốt – chuyên nghiệp. Liên hệ ngay Đô Thành Việt để nhận tư vấn miễn phí!",
    url: "https://your-domain.com",
    siteName: "Đô Thành Việt",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Đô Thành Việt - Dịch vụ vệ sinh nhà cửa",
      },
    ],
    locale: "vi_VN",
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
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
