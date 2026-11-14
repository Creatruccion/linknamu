import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Pretendard: 한글·영문이 고르게 어울리는 둥근 산세리프 (가변 폰트, 자체 호스팅)
const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  title: "감성 ICT 크리에이터 - IngeMo Esfutech",
  description: "내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf6ec" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1712" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
