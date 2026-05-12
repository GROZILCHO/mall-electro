export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    <div className="w-12 h-[2px] bg-brand-orange mx-auto mt-4"></div>
  </div>
);
export default SectionTitle;