
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeader = ({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-8', alignmentClasses[align], className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
