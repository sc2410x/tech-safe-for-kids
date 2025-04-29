
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SafetyTipCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

const SafetyTipCard = ({
  title,
  description,
  icon,
  className,
  level = 'beginner',
}: SafetyTipCardProps) => {
  const levelColors = {
    beginner: 'border-l-kid-blue',
    intermediate: 'border-l-kid-teal',
    advanced: 'border-l-kid-purple',
  };

  return (
    <Card className={cn('card-shadow border-l-4', levelColors[level], className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {icon && <div className="text-kid-blue-dark">{icon}</div>}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SafetyTipCard;
