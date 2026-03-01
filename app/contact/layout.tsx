import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用お問い合わせ",
  description:
    "HOZU株式会社の採用に関するお問い合わせはこちら。正社員・契約社員・アルバイトの応募やご質問をお気軽にお寄せください。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
