import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const siteLinks = [
  { href: "/", label: "トップ" },
  { href: "/service", label: "事業内容" },
  { href: "/company", label: "会社概要" },
  { href: "/recruit", label: "採用情報" },
  { href: "/contact", label: "採用お問い合わせ" },
  { href: "/contact/business", label: "事業者様お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      {/* Upper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-montserrat text-2xl font-bold tracking-tight">
                HOZU
              </span>
              <span className="text-sm text-gray-300">株式会社</span>
            </div>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                〒579-8003 大阪府東大阪市日下町7-7-33
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:072-968-7333" className="hover:text-white transition-colors">
                  TEL: 072-968-7333
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                FAX: 072-968-7356
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:company@hozu-us.com" className="hover:text-white transition-colors">
                  company@hozu-us.com
                </a>
              </p>
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-lg font-bold mb-4">サイトマップ</h3>
            <ul className="grid grid-cols-2 gap-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <Link
            href="/privacy"
            className="text-gray-400 text-xs hover:text-white transition-colors"
          >
            個人情報保護方針
          </Link>
          <p className="text-gray-400 text-xs">
            &copy; 2026 HOZU株式会社
          </p>
        </div>
      </div>
    </footer>
  );
}
