import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHeader from "@/components/PageHeader";
import { Briefcase, Clock, MapPin, ArrowRight, Info } from "lucide-react";

export const metadata = {
  title: "採用情報",
  description:
    "HOZU株式会社の採用情報。正社員・契約社員・アルバイト募集中。出張手当あり、交通費全額支給。",
};

const positions = [
  {
    type: "正社員",
    icon: Briefcase,
    items: [
      { label: "雇用形態", value: "正社員" },
      { label: "月給", value: "260,000円〜" },
      { label: "勤務条件", value: "宿泊を伴う出張に対応できる方" },
      { label: "出張手当", value: "あり" },
      { label: "交通費", value: "全額支給" },
    ],
  },
  {
    type: "契約社員",
    icon: Clock,
    items: [
      { label: "雇用形態", value: "契約社員" },
      { label: "月給", value: "200,000円〜" },
      { label: "勤務日数", value: "年間約150日（繁忙期・閑散期あり）" },
      { label: "勤務条件", value: "宿泊を伴う出張に対応できる方" },
      { label: "出張手当", value: "あり" },
      { label: "交通費", value: "全額支給" },
    ],
  },
  {
    type: "アルバイト",
    icon: MapPin,
    items: [
      { label: "雇用形態", value: "アルバイト" },
      { label: "時給", value: "3,200円（最低保証 16,000円）" },
      { label: "勤務条件", value: "宿泊を伴う出張に対応できる方歓迎" },
      { label: "出張手当", value: "あり" },
      { label: "交通費", value: "全額支給" },
    ],
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHeader
        title="採用情報"
        subtitle="HOZUでは、共に成長できる仲間を募集しています。"
      />

      {/* 募集職種セクション */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 募集職種カード */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {positions.map((pos, i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-white border border-border-light rounded-xl shadow-sm p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-medical-blue/10 flex items-center justify-center shrink-0">
                      <pos.icon size={22} className="text-medical-blue" />
                    </div>
                    <span className="bg-medical-blue text-white rounded px-3 py-1 text-sm font-medium">
                      {pos.type}
                    </span>
                  </div>
                  <dl className="space-y-4 flex-1">
                    {pos.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex flex-col sm:flex-row sm:gap-4 border-b border-border-light pb-3 last:border-b-0 last:pb-0"
                      >
                        <dt className="text-text-sub text-sm shrink-0 sm:w-24 font-medium">
                          {item.label}
                        </dt>
                        <dd className="text-text-main text-sm lg:text-base">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 応募方法セクション */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mb-4">
                応募方法
              </h2>
              <p className="text-text-sub mb-8">
                お問い合わせフォームからご応募ください
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-green text-white font-bold rounded-lg px-8 py-3 hover:bg-accent-green-dark transition-colors shadow-sm"
              >
                応募する
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
