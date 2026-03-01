import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  currentPage: string;
};

export default function Breadcrumb({ currentPage }: Props) {
  return (
    <nav aria-label="パンくずリスト" className="text-sm text-text-sub">
      <ol className="flex items-center gap-1">
        <li>
          <Link href="/" className="hover:text-medical-blue transition-colors">
            トップ
          </Link>
        </li>
        <li className="flex items-center gap-1">
          <ChevronRight size={14} />
          <span className="text-text-main font-medium">{currentPage}</span>
        </li>
      </ol>
    </nav>
  );
}
