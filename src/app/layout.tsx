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
  title: "Custify - Phân tích phản hồi khách hàng trong vài phút",
  description: "Được xây dựng cho các nhà nghiên cứu cần chuyển đổi các phản hồi mở thành những hiểu biết rõ ràng, thuyết phục. Nhanh chóng.",
  icons: {
    icon: [
      { url: '/custify.jpg', sizes: 'any' },
      { url: '/custify.jpg', type: 'image/jpeg' }
    ],
    shortcut: '/custify.jpg',
    apple: '/custify.jpg',
    other: [
      { rel: 'icon', url: '/custify.jpg' }
    ]
  },
  openGraph: {
    title: "Custify - Phân tích phản hồi khách hàng trong vài phút",
    description: "Được xây dựng cho các nhà nghiên cứu cần chuyển đổi các phản hồi mở thành những hiểu biết rõ ràng, thuyết phục. Nhanh chóng.",
    images: ['/custify.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Custify - Phân tích phản hồi khách hàng trong vài phút",
    description: "Được xây dựng cho các nhà nghiên cứu cần chuyển đổi các phản hồi mở thành những hiểu biết rõ ràng, thuyết phục. Nhanh chóng.",
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
        <link rel="icon" href="/custify.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/custify.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/custify.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
