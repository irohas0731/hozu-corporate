import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "会社概要",
  description:
    "HOZU株式会社の会社概要。所在地、代表者情報、連絡先をご案内します。",
};

const companyInfo = [
  { label: "会社名", value: "HOZU株式会社" },
  { label: "所在地", value: "〒579-8003\n大阪府東大阪市日下町7-7-33" },
  { label: "代表取締役", value: "中山 宜範" },
  {
    label: "電話番号",
    value: "072-968-7333",
    href: "tel:072-968-7333",
  },
  { label: "FAX番号", value: "072-968-7356" },
  {
    label: "メールアドレス",
    value: "company@hozu-us.com",
    href: "mailto:company@hozu-us.com",
  },
  { label: "事業内容", value: "巡回健康診断における超音波検査業務" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader title="会社概要" />

      {/* ── 会社情報テーブル ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="font-montserrat text-sm text-light-blue tracking-wider uppercase">
                Company Info
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mt-1">
                基本情報
              </h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-xl border border-border-light shadow-sm">
              <table className="w-full text-sm">
                <tbody>
                  {companyInfo.map((item, i) => (
                    <tr
                      key={item.label}
                      className={i % 2 === 1 ? "bg-white" : ""}
                    >
                      <th className="bg-bg-section text-text-main font-bold text-left px-6 py-4 w-40 sm:w-48 align-top border-b border-border-light">
                        {item.label}
                      </th>
                      <td className="px-6 py-4 text-text-main border-b border-border-light">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-light-blue hover:text-medical-blue underline underline-offset-2 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value.split("\n").map((line, j) => (
                            <span key={j}>
                              {j > 0 && <br />}
                              {line}
                            </span>
                          ))
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-main mb-4">
              お気軽にお問い合わせください
            </h2>
            <p className="text-text-sub mb-8 max-w-xl mx-auto">
              サービスに関するご質問やお見積りのご依頼など、お気軽にご連絡ください。
            </p>
            <Link
              href="/contact/business"
              className="inline-flex items-center gap-2 bg-medical-blue text-white rounded-lg px-8 py-3 font-medium hover:bg-medical-blue-dark transition-colors shadow-sm"
            >
              事業者様お問い合わせ
              <ArrowRight size={16} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
