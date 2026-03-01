import ScrollFadeIn from "@/components/ScrollFadeIn";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "個人情報保護方針",
  description: "HOZU株式会社の個人情報保護方針です。",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="個人情報保護方針" />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            {/* 1. 基本方針 */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              1. 基本方針
            </h2>
            <p className="text-text-main text-sm lg:text-base leading-relaxed mb-4">
              HOZU株式会社（以下「当社」）は、個人情報の重要性を認識し、その保護の徹底を図るため、個人情報の保護に関する法律（個人情報保護法）およびその他の関連法令を遵守し、適切な取り扱いと保護に努めます。
            </p>

            {/* 2. 個人情報の定義 */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              2. 個人情報の定義
            </h2>
            <p className="text-text-main text-sm lg:text-base leading-relaxed mb-4">
              本方針における「個人情報」とは、生存する個人に関する情報であって、氏名、住所、電話番号、メールアドレス等により特定の個人を識別できるものをいいます。
            </p>

            {/* 3. 個人情報の収集方法 */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              3. 個人情報の収集方法
            </h2>
            <p className="text-text-main text-sm lg:text-base leading-relaxed mb-4">
              当社は、お問い合わせフォーム、採用応募等を通じて、適法かつ公正な手段により個人情報を収集いたします。
            </p>

            {/* 4. 利用目的 */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              4. 利用目的
            </h2>
            <ul className="list-disc list-inside text-sm lg:text-base text-text-main space-y-2 mb-4">
              <li>お問い合わせへの回答および対応</li>
              <li>採用選考に関するご連絡</li>
              <li>サービスに関する情報提供</li>
              <li>上記に付随する業務</li>
            </ul>

            {/* 5. 第三者提供の制限 */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              5. 第三者提供の制限
            </h2>
            <p className="text-text-main text-sm lg:text-base leading-relaxed mb-4">
              当社は、以下の場合を除き、個人情報を第三者に提供いたしません。
            </p>
            <ul className="list-disc list-inside text-sm lg:text-base text-text-main space-y-2 mb-4">
              <li>ご本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
            </ul>

            {/* 6. 個人情報の安全管理 */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              6. 個人情報の安全管理
            </h2>
            <p className="text-text-main text-sm lg:text-base leading-relaxed mb-4">
              当社は、個人情報の漏えい、滅失またはき損の防止のため、以下の安全管理措置を講じています。
            </p>
            <ul className="list-disc list-inside text-sm lg:text-base text-text-main space-y-2 mb-4">
              <li>
                データの暗号化、持出管理、アクセス権限の設定、保管・廃棄ルールの規程化と運用
              </li>
              <li>
                所見用紙を持ち帰る案件における、回収・搬送・保管・返却/廃棄までの一貫した管理体制（記録・権限の徹底）
              </li>
              <li>
                提携医師への読影依頼時には、秘密保持・データ取扱い・再委託禁止等を含む契約の締結
              </li>
            </ul>

            {/* 7. 個人情報の開示・訂正・削除 */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              7. 個人情報の開示・訂正・削除
            </h2>
            <p className="text-text-main text-sm lg:text-base leading-relaxed mb-4">
              ご本人からの個人情報の開示・訂正・削除等のご請求には、ご本人確認の上、合理的な期間内に対応いたします。
            </p>

            {/* 8. Cookieの使用について */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              8. Cookieの使用について
            </h2>
            <p className="text-text-main text-sm lg:text-base leading-relaxed mb-4">
              当社ウェブサイトでは、利便性の向上やアクセス解析のためにCookieを使用する場合があります。Cookieの使用を望まない場合は、ブラウザの設定により無効にすることが可能です。
            </p>

            {/* 9. 本ポリシーの変更について */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              9. 本ポリシーの変更について
            </h2>
            <p className="text-text-main text-sm lg:text-base leading-relaxed mb-4">
              当社は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>

            {/* 10. お問い合わせ窓口 */}
            <h2 className="text-xl font-bold text-text-main mb-4 mt-10 border-b border-border-light pb-2">
              10. お問い合わせ窓口
            </h2>
            <div className="text-text-main text-sm lg:text-base leading-relaxed mb-4 space-y-1">
              <p className="font-semibold">HOZU株式会社</p>
              <p>〒579-8003 大阪府東大阪市日下町7-7-33</p>
              <p>TEL: 072-968-7333</p>
              <p>Email: company@hozu-us.com</p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
