"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

type FormData = {
  company: string;
  name: string;
  furigana: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  company: "",
  name: "",
  furigana: "",
  email: "",
  phone: "",
  category: "",
  message: "",
  privacy: false,
};

const categories = [
  "超音波検査の依頼",
  "サービスに関するご質問",
  "その他",
];

export default function BusinessContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.company.trim()) {
      newErrors.company = "会社名・団体名を入力してください";
    }

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formData.furigana.trim()) {
      newErrors.furigana = "ふりがなを入力してください";
    } else if (!/^[ぁ-ん\s]*$/.test(formData.furigana)) {
      newErrors.furigana = "ひらがなで入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }

    if (formData.phone && !/^[0-9\-]*$/.test(formData.phone)) {
      newErrors.phone = "数字とハイフンのみ入力できます";
    }

    if (!formData.category) {
      newErrors.category = "お問い合わせ種別を選択してください";
    }

    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください";
    }

    if (!formData.privacy) {
      newErrors.privacy = "個人情報保護方針に同意してください";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_BUSINESS_TEMPLATE_ID!,
        {
          company: formData.company,
          name: formData.name,
          furigana: formData.furigana,
          email: formData.email,
          phone: formData.phone || "未入力",
          category: formData.category,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setIsSubmitted(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      alert("送信エラー: " + msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full border ${
      errors[field] ? "border-red-500" : "border-border-light"
    } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-medical-blue/30 focus:border-medical-blue transition-colors`;

  return (
    <>
      <PageHeader title="事業者様お問い合わせ" />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="flex justify-center mb-6">
                <CheckCircle size={64} className="text-accent-green" />
              </div>
              <h2 className="text-2xl font-bold text-text-main mb-4">
                お問い合わせありがとうございます
              </h2>
              <p className="text-text-sub leading-relaxed">
                内容を確認次第、担当者よりご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                {/* 会社名・団体名 */}
                <div>
                  <label htmlFor="business-company" className="block text-sm font-medium text-text-main mb-2">
                    会社名・団体名
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">
                      必須
                    </span>
                  </label>
                  <input
                    id="business-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className={inputClass("company")}
                    placeholder="株式会社○○"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                  )}
                </div>

                {/* お名前 */}
                <div>
                  <label htmlFor="business-name" className="block text-sm font-medium text-text-main mb-2">
                    お名前
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">
                      必須
                    </span>
                  </label>
                  <input
                    id="business-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClass("name")}
                    placeholder="山田 太郎"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* ふりがな */}
                <div>
                  <label htmlFor="business-furigana" className="block text-sm font-medium text-text-main mb-2">
                    ふりがな
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">
                      必須
                    </span>
                  </label>
                  <input
                    id="business-furigana"
                    type="text"
                    value={formData.furigana}
                    onChange={(e) => handleChange("furigana", e.target.value)}
                    className={inputClass("furigana")}
                    placeholder="やまだ たろう"
                  />
                  {errors.furigana && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.furigana}
                    </p>
                  )}
                </div>

                {/* メールアドレス */}
                <div>
                  <label htmlFor="business-email" className="block text-sm font-medium text-text-main mb-2">
                    メールアドレス
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">
                      必須
                    </span>
                  </label>
                  <input
                    id="business-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass("email")}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* 電話番号 */}
                <div>
                  <label htmlFor="business-phone" className="block text-sm font-medium text-text-main mb-2">
                    電話番号
                    <span className="bg-gray-400 text-white text-xs px-2 py-0.5 rounded ml-2">
                      任意
                    </span>
                  </label>
                  <input
                    id="business-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={inputClass("phone")}
                    placeholder="090-1234-5678"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* お問い合わせ種別 */}
                <div>
                  <label htmlFor="business-category" className="block text-sm font-medium text-text-main mb-2">
                    お問い合わせ種別
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">
                      必須
                    </span>
                  </label>
                  <select
                    id="business-category"
                    value={formData.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    className={inputClass("category")}
                  >
                    <option value="">選択してください</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label htmlFor="business-message" className="block text-sm font-medium text-text-main mb-2">
                    お問い合わせ内容
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">
                      必須
                    </span>
                  </label>
                  <textarea
                    id="business-message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${inputClass("message")} min-h-[160px] resize-y`}
                    maxLength={1000}
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                  <p className="text-text-sub text-xs mt-1 text-right">
                    {formData.message.length} / 1000
                  </p>
                </div>

                {/* 個人情報同意 */}
                <div>
                  <label htmlFor="business-privacy" className="flex items-start gap-3 cursor-pointer">
                    <input
                      id="business-privacy"
                      type="checkbox"
                      checked={formData.privacy}
                      onChange={(e) =>
                        handleChange("privacy", e.target.checked)
                      }
                      className="mt-1 w-4 h-4 shrink-0 accent-medical-blue"
                    />
                    <span className="text-sm text-text-main leading-relaxed">
                      <Link
                        href="/privacy"
                        className="text-light-blue underline hover:text-medical-blue transition-colors"
                        target="_blank"
                      >
                        個人情報保護方針
                      </Link>
                      に同意する
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.privacy}
                    </p>
                  )}
                </div>
              </div>

              {/* 送信ボタン */}
              <div className="mt-10 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-medical-blue text-white rounded-lg px-8 py-3 font-medium hover:bg-medical-blue-dark transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      送信中...
                    </span>
                  ) : (
                    "送信する"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
