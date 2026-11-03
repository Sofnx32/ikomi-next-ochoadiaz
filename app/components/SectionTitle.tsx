interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-10`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-1 bg-red-600 mx-auto mt-4 mb-4" />
      {subtitle && (
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}