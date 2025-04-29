
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  organization: string;
}

const ResourceCard = ({
  title,
  description,
  url,
  organization,
}: ResourceCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full border-kid-blue text-kid-blue hover:bg-kid-blue hover:text-white"
          onClick={() => window.open(url, '_blank')}
        >
          Visit Resource
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
