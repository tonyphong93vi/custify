import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custify - Công cụ hỗ trợ khách hàng hiện đại cho doanh nghiệp của bạn",
  description: "Trợ lý AI, bàn hỗ trợ đa kênh, cơ sở tri thức. Mọi thứ bạn cần cho hỗ trợ khách hàng liền mạch, tất cả trong một nơi.",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
    other: [
      { rel: 'icon', url: '/favicon.png' }
    ]
  },
  openGraph: {
    title: "Custify - Công cụ hỗ trợ khách hàng hiện đại cho doanh nghiệp của bạn",
    description: "Trợ lý AI, bàn hỗ trợ đa kênh, cơ sở tri thức. Mọi thứ bạn cần cho hỗ trợ khách hàng liền mạch, tất cả trong một nơi.",
    images: ['/custify.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Custify - Công cụ hỗ trợ khách hàng hiện đại cho doanh nghiệp của bạn",
    description: "Trợ lý AI, bàn hỗ trợ đa kênh, cơ sở tri thức. Mọi thứ bạn cần cho hỗ trợ khách hàng liền mạch, tất cả trong một nơi.",
    images: ['/custify.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
