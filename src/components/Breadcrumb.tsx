interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  lastUpdated?: string;
}

export default function Breadcrumb({ items, lastUpdated }: BreadcrumbProps) {
  return (
    <section className="bg-gray-50 py-4 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {item.href ? (
                <a href={item.href} className="text-blue-600 hover:text-blue-800 font-medium">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-600 font-medium">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <span className="text-gray-400">&gt;</span>
              )}
            </div>
          ))}
        </nav>
        {lastUpdated && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              {lastUpdated}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}