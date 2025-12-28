interface FeatureCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
  className?: string;
}

export function FeatureCard({
  title,
  subtitle,
  description,
  bullets,
  className = '',
}: FeatureCardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 space-y-3 text-gray-600">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">-</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
