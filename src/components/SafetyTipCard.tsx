
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

  const CardComponent = to ? Link : 'div';
  const linkProps = to ? { to } : {};
  
  return (
    <CardComponent
      {...linkProps}
      onClick={onClick}
      className={cn(
        'block transition-all duration-200',
        to && 'hover:-translate-y-1 hover:shadow-xl cursor-pointer',
        className
      )}
    >
      <Card className={cn('card-shadow border-l-4 h-full', levelColors[level])}>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <div className="flex items-center">
              {icon && <div className="text-kid-blue-dark mr-2">{icon}</div>}
              {to && <ArrowRight size={18} className="text-gray-400" />}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-gray-700">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </CardComponent>
  );
};

export default SafetyTipCard;
