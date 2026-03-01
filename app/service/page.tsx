import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import {
  Users,
  Globe,
  Clock,
  ClipboardCheck,
  PlayCircle,
  Phone,
  Shield,
  Lock,
  FileCheck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "事業内容",
  description:
    "巡回健康診断での超音波検査サービスの詳細をご紹介。腹部エコー、頸動脈エコー、乳腺エコー等の検査に対応しています。",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader title="事業内容" />

      {/* ── サービス概要セクション ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="font-montserrat text-sm text-light-blue tracking-wider uppercase">
                Service Overview
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mt-1">
                巡回健康診断の超音波検査
              </h2>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-text-sub leading-relaxed">
                HOZU株式会社は、巡回健康診断における超音波検査（エコー検査）を専門とする企業です。
                企業や団体の健康診断会場に検査技師を派遣し、各種エコー検査を実施いたします。
                被検者の負担を軽減しながら、高い精度の検査結果を提供します。
              </p>
            </div>
          </ScrollFadeIn>

          {/* 対応検査部位 */}
          <ScrollFadeIn>
            <h3 className="text-xl font-bold text-text-main text-center mb-8">
              対応検査部位
            </h3>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "腹部エコー",
                description:
                  "肝臓・胆のう・膵臓・脾臓・腎臓などの腹部臓器を超音波で検査。脂肪肝や胆石、腫瘍などの早期発見に貢献します。",
              },
              {
                title: "頸動脈エコー",
                description:
                  "首の血管（頸動脈）の壁の厚さやプラークの有無を検査。動脈硬化の進行度を把握し、脳梗塞や心筋梗塞のリスク評価に役立ちます。",
              },
              {
                title: "乳腺エコー",
                description:
                  "乳腺組織を超音波で検査し、しこりや腫瘍の有無を確認。マンモグラフィと併用することで、乳がんの早期発見率を高めます。",
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-white border border-border-light rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                  <h4 className="text-lg font-bold text-text-main mb-3">
                    {item.title}
                  </h4>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* 検査の流れ */}
          <ScrollFadeIn>
            <h3 className="text-xl font-bold text-text-main text-center mb-8">
              検査の流れ
            </h3>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {[
                { step: "01", label: "受付", description: "受診者の確認と案内" },
                { step: "02", label: "検査", description: "超音波検査の実施" },
                { step: "03", label: "結果報告", description: "検査レポートの作成・提出" },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center text-center w-48">
                    <div className="w-20 h-20 rounded-full bg-medical-blue flex items-center justify-center mb-3">
                      <span className="font-montserrat text-2xl font-bold text-white">
                        {item.step}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-text-main">{item.label}</p>
                    <p className="text-text-sub text-sm mt-1">{item.description}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:flex items-center px-4">
                      <ChevronRight size={28} className="text-light-blue" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ── HOZUの強み ── */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="font-montserrat text-sm text-light-blue tracking-wider uppercase">
                Strengths
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mt-1">
                HOZUの強み
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "経験豊富な検査技師陣",
                description:
                  "各種超音波検査に精通した臨床検査技師が多数在籍。豊富な経験と高い技術力で、正確な検査を実施します。",
              },
              {
                icon: Globe,
                title: "出張対応可能",
                description:
                  "健康診断の実施会場へ直接お伺いし、超音波検査を実施いたします。お客様のご要望に合わせた柔軟な対応が可能です。",
              },
              {
                icon: Clock,
                title: "迅速で正確な検査結果",
                description:
                  "効率的な検査体制と提携医師による読影体制により、迅速かつ正確な検査結果をお届けします。",
              },
            ].map((card, i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-white rounded-xl p-8 shadow-sm h-full flex flex-col items-center text-center">
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
        </div>
      </section>

      {/* ── 品質管理体制セクション ── */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="font-montserrat text-sm text-light-blue tracking-wider uppercase">
                Quality Control
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mt-1">
                徹底した品質管理体制
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardCheck,
                title: "検査プロトコル・チェックリストの整備",
                description:
                  "検査の手順をプロトコル化し、全技師が同一基準で検査を実施。チェックリストにより抜け漏れを防止し、均一な検査品質を担保します。",
              },
              {
                icon: PlayCircle,
                title: "動画によるダブルチェック工程",
                description:
                  "検査中の超音波画像を動画で記録し、後日別の技師や読影医師がダブルチェック。見落としを防ぎ、検査精度を向上させます。",
              },
              {
                icon: Phone,
                title: "照会対応・連絡体制の標準化",
                description:
                  "検査結果に関する照会対応、返却期限管理、健診機関との連絡体制を標準化。迅速かつ確実な情報共有を実現します。",
              },
            ].map((card, i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-full bg-medical-blue/10 flex items-center justify-center mb-5">
                    <card.icon size={26} className="text-medical-blue" />
                  </div>
                  <h3 className="text-base font-bold text-text-main mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 個人情報・データ管理セクション ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="font-montserrat text-sm text-light-blue tracking-wider uppercase">
                Data Security
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mt-1">
                厳格な個人情報・データ管理
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "情報セキュリティ規程の整備",
                description:
                  "データの暗号化、持出管理、アクセス権限設定、保管・廃棄ルールを規程化。組織全体で統一されたセキュリティ基準を運用しています。",
              },
              {
                icon: Lock,
                title: "所見用紙の一貫管理",
                description:
                  "所見用紙の回収・搬送・保管・返却または廃棄まで、すべてのプロセスを一貫管理。紛失や情報漏洩のリスクを最小限に抑えます。",
              },
              {
                icon: FileCheck,
                title: "秘密保持契約の締結",
                description:
                  "提携医師への読影依頼時には秘密保持契約（NDA）を締結。個人情報の取り扱いに関する責任範囲を明確にし、安全な運用を確保します。",
              },
            ].map((card, i) => (
              <ScrollFadeIn key={i}>
                <div className="bg-white border border-border-light rounded-xl p-8 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-full bg-medical-blue/10 flex items-center justify-center mb-5">
                    <card.icon size={26} className="text-medical-blue" />
                  </div>
                  <h3 className="text-base font-bold text-text-main mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-main mb-4">
              サービスに関するご質問・ご依頼
            </h2>
            <p className="text-text-sub mb-8 max-w-xl mx-auto">
              巡回健康診断での超音波検査について、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-medical-blue text-white rounded-lg px-8 py-3 font-medium hover:bg-medical-blue-dark transition-colors shadow-sm"
            >
              お問い合わせはこちら
              <ArrowRight size={16} />
            </Link>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
