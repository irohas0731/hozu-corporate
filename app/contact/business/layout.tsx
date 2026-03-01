import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業者様お問い合わせ",
  description:
    "HOZU株式会社への事業者様向けお問い合わせはこちら。超音波検査の依頼やサービスに関するご質問をお気軽にお寄せください。",
};

export default function BusinessContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
