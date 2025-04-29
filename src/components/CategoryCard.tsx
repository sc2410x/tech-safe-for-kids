
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

  return (
    <Link 
      to={to} 
      className={`block rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden ${colorClasses[color]}`}
    >
      {imageSrc && (
        <div className="h-40 -mx-6 -mt-6 mb-6 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <ArrowRight size={20} className="text-gray-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default CategoryCard;
