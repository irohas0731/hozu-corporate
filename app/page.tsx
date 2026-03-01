import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import {
  Stethoscope,
  UserCheck,
  MapPin,
  ClipboardCheck,
  Shield,
  ArrowRight,
  Building2,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background: gradient + subtle pattern */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-medical-blue via-light-blue to-medical-blue"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        {/* Decorative circles */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-[1.6rem] sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            確かな技術で、
            <br className="sm:hidden" />
            健康をサポートする
          </h1>
          <p className="mt-6 text-[0.9rem] sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            巡回健康診断の超音波検査を
            <br className="sm:hidden" />
            専門とするプロフェッショナル集団
          </p>
          <div className="mt-10">
            <Link
              href="/contact/business"
              className="inline-flex items-center gap-2 bg-white text-medical-blue font-bold rounded-lg px-8 py-4 text-base hover:bg-gray-100 transition-colors shadow-lg"
            >
              事業者様お問い合わせ
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 事業紹介セクション ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="font-montserrat text-sm text-light-blue tracking-wider uppercase">
                Service
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mt-1">
                事業内容
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "巡回健康診断対応",
                description:
                  "企業や団体の健康診断会場へ直接伺い、超音波検査を実施。受診者の負担を最小限に抑えた効率的な検査体制を整えています。",
              },
              {
                icon: UserCheck,
                title: "専門技師による超音波検査",
                description:
                  "経験豊富な臨床検査技師が、腹部・頸動脈・乳腺など各部位の超音波検査を高い精度で行います。",
              },
              {
                icon: MapPin,
                title: "出張対応可能",
                description:
                  "健康診断の実施会場へ直接お伺いし、超音波検査を実施。お客様のご要望に合わせた柔軟な対応が可能です。",
              },
            ].map((card, i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-white border border-border-light rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-medical-blue/10 flex items-center justify-center mb-5">
                    <card.icon size={28} className="text-medical-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          <ScrollFadeIn className="text-center mt-10">
            <Link
              href="/service"
              className="inline-flex items-center gap-2 border border-medical-blue text-medical-blue rounded-lg px-8 py-3 font-medium hover:bg-medical-blue hover:text-white transition-colors"
            >
              詳しく見る
              <ArrowRight size={16} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── 品質・安全セクション ── */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="font-montserrat text-sm text-light-blue tracking-wider uppercase">
                Quality & Safety
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mt-1">
                品質・安心への取り組み
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollFadeIn>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-medical-blue/10 flex items-center justify-center shrink-0">
                    <ClipboardCheck size={26} className="text-medical-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-text-main">品質管理</h3>
                </div>
                <ul className="space-y-3 text-text-sub text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-0.5 shrink-0">&#10003;</span>
                    検査プロトコル・チェックリストの整備により、均一な検査品質を維持
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-0.5 shrink-0">&#10003;</span>
                    動画によるダブルチェック工程で見落としを防止
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-0.5 shrink-0">&#10003;</span>
                    照会対応・返却期限・連絡体制の運用標準化
                  </li>
                </ul>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-medical-blue/10 flex items-center justify-center shrink-0">
                    <Shield size={26} className="text-medical-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-text-main">データ管理</h3>
                </div>
                <ul className="space-y-3 text-text-sub text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-0.5 shrink-0">&#10003;</span>
                    暗号化・アクセス権限管理による厳格なデータ保護
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-0.5 shrink-0">&#10003;</span>
                    所見用紙の回収から廃棄までの一貫管理体制
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green mt-0.5 shrink-0">&#10003;</span>
                    提携医師との秘密保持契約による情報漏洩防止
                  </li>
                </ul>
              </div>
            </ScrollFadeIn>
          </div>

          <ScrollFadeIn className="text-center mt-10">
            <Link
              href="/service"
              className="inline-flex items-center gap-2 border border-medical-blue text-medical-blue rounded-lg px-8 py-3 font-medium hover:bg-medical-blue hover:text-white transition-colors"
            >
              詳しく見る
              <ArrowRight size={16} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── 会社概要セクション ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="font-montserrat text-sm text-light-blue tracking-wider uppercase">
                Company
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mt-1">
                会社概要
              </h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="max-w-2xl mx-auto bg-bg-section rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-medical-blue/10 flex items-center justify-center shrink-0">
                  <Building2 size={26} className="text-medical-blue" />
                </div>
                <div>
                  <p className="text-lg font-bold text-text-main">HOZU株式会社</p>
                </div>
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <dt className="text-text-sub w-20 shrink-0">所在地</dt>
                  <dd className="text-text-main">
                    〒579-8003 大阪府東大阪市日下町7-7-33
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-text-sub w-20 shrink-0">代表</dt>
                  <dd className="text-text-main">中山 宜範</dd>
                </div>
              </dl>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn className="text-center mt-10">
            <Link
              href="/company"
              className="inline-flex items-center gap-2 border border-medical-blue text-medical-blue rounded-lg px-8 py-3 font-medium hover:bg-medical-blue hover:text-white transition-colors"
            >
              詳しく見る
              <ArrowRight size={16} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── 採用CTAセクション ── */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-light-blue/10 via-medical-blue/10 to-light-blue/10"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-medical-blue/10 flex items-center justify-center">
                <Users size={28} className="text-medical-blue" />
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-main">
              一緒に働く仲間を募集しています
            </h2>
            <p className="mt-4 text-text-sub max-w-xl mx-auto">
              超音波検査の技術を活かし、健康診断を支えるやりがいのある仕事です。
            </p>
            <div className="mt-8">
              <Link
                href="/recruit"
                className="inline-flex items-center gap-2 bg-accent-green text-white font-bold rounded-lg px-8 py-3 hover:bg-accent-green-dark transition-colors shadow-sm"
              >
                採用情報を見る
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
