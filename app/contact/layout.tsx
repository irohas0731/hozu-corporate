import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "HOZU株式会社へのお問い合わせはこちら。サービスや採用に関するご質問をお気軽にお寄せください。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
