
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color?: 'blue' | 'teal' | 'purple';
  imageSrc?: string;
}

const CategoryCard = ({
  title,
  description,
  icon,
  to,
  color = 'blue',
  imageSrc,
}: CategoryCardProps) => {
  const colorClasses = {
    blue: 'bg-kid-blue-light border-kid-blue hover:bg-kid-blue/10',
    teal: 'bg-kid-teal-light border-kid-teal hover:bg-kid-teal/10',
    purple: 'bg-kid-purple-light border-kid-purple hover:bg-kid-purple/10',
  };

  const iconColorClasses = {
    blue: 'bg-kid-blue/10 text-kid-blue-dark',
    teal: 'bg-kid-teal/10 text-kid-teal-dark',
    purple: 'bg-kid-purple/10 text-kid-purple-dark',
  };

  return (
    <Link 
      to={to} 
      className={cn(
        "block rounded-xl border-2 overflow-hidden shadow-lg",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        colorClasses[color]
      )}
    >
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("p-3 rounded-full", iconColorClasses[color])}>
            {icon}
          </div>
          <ArrowRight size={20} className="text-gray-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
