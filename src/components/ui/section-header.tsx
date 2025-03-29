
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  badge,
  align = 'center',
  className = ''
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 bg-coveo-gray text-coveo-blue text-sm font-medium rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{title}</h2>
      <p className="text-lg text-muted-foreground max-w-3xl text-balance">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
