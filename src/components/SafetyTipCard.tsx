
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SafetyTipCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  to?: string;
  onClick?: () => void;
}

const SafetyTipCard = ({
  title,
  description,
  icon,
  className,
  level = 'beginner',
  to,
  onClick,
}: SafetyTipCardProps) => {
  const levelColors = {
    beginner: 'border-l-kid-blue',
    intermediate: 'border-l-kid-teal',
    advanced: 'border-l-kid-purple',
  };
  
  const levelBadges = {
    beginner: <span className="bg-kid-blue/20 text-kid-blue-dark px-2 py-0.5 rounded-full text-xs font-medium">Beginner</span>,
    intermediate: <span className="bg-kid-teal/20 text-kid-teal-dark px-2 py-0.5 rounded-full text-xs font-medium">Intermediate</span>,
    advanced: <span className="bg-kid-purple/20 text-kid-purple-dark px-2 py-0.5 rounded-full text-xs font-medium">Advanced</span>,
  };

  // Create the content that will be shared between Link and div
  const cardContent = (
    <Card className={cn('card-shadow border-l-4 h-full', levelColors[level])}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold mb-1">{title}</CardTitle>
            {levelBadges[level]}
          </div>
          <div className="flex items-center">
            {icon && <div className="text-kid-blue-dark mr-2">{icon}</div>}
            {to && <div className="bg-gray-100 p-1 rounded-full"><ArrowRight size={18} className="text-gray-500" /></div>}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
  
  // Return either a Link or a div based on whether a 'to' prop is provided
  if (to) {
    return (
      <Link 
        to={to}
        onClick={onClick}
        className={cn(
          'block transition-all duration-200',
          'hover:-translate-y-1 hover:shadow-xl cursor-pointer',
          className
        )}
      >
        {cardContent}
      </Link>
    );
  }
  
  return (
    <div 
      onClick={onClick}
      className={cn('block transition-all duration-200', className)}
    >
      {cardContent}
    </div>
  );
};

export default SafetyTipCard;
