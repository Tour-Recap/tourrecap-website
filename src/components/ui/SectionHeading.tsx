interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wide text-primary">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </div>
  );
}
