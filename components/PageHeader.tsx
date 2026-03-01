import Breadcrumb from "./Breadcrumb";

type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="bg-gradient-to-r from-medical-blue/5 to-light-blue/10 pt-24 lg:pt-28 pb-10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb currentPage={title} />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-main mt-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-text-sub mt-2 text-base lg:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
