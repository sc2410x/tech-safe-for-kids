
import React from 'react';
import Layout from '@/components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InstructionLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  backLink: string;
  backText: string;
  color: 'blue' | 'teal' | 'purple';
}

const InstructionLayout = ({
  children,
  title,
  subtitle,
  icon,
  backLink,
  backText,
  color = 'blue',
}: InstructionLayoutProps) => {
  
  const colorClasses = {
    blue: 'bg-kid-blue-light text-kid-blue-dark border-kid-blue',
    teal: 'bg-kid-teal-light text-kid-teal-dark border-kid-teal',
    purple: 'bg-kid-purple-light text-kid-purple-dark border-kid-purple',
  };
  
  return (
    <Layout>
      <div className="section-container">
        {/* Header */}
        <div className={`rounded-2xl p-8 mb-8 ${colorClasses[color]}`}>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="mb-8 md:mb-0 md:w-1/4 flex justify-center">
              {icon}
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-gray-700 mb-4">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        
        {/* Back button */}
        <Link 
          to={backLink} 
          className="inline-flex items-center mb-6 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="mr-2" size={16} />
          <span>Back to {backText}</span>
        </Link>
        
        {/* Content */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default InstructionLayout;
