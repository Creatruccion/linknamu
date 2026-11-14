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
  description: "AI 시대에 필요한 다양한 ICT 관련 노력, 미래, 기술을 이야기 합니다.",
  // 카카오톡·SNS 등에서 링크 공유 시 미리보기 카드에 표시되는 제목·설명
  openGraph: {
    title: "감성 ICT 크리에이터 - IngeMo Esfutech",
    description: "AI 시대에 필요한 다양한 ICT 관련 노력, 미래, 기술을 이야기 합니다.",
    type: "website",
    locale: "ko_KR",
  },
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
