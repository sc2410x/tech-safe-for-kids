
import React from 'react';
import Layout from '@/components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface RelatedInstruction {
  title: string;
  link: string;
}

interface InstructionLayoutProps {
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  backLink?: string;
  backText?: string;
  color?: 'blue' | 'teal' | 'purple';
  steps?: Step[];
  relatedInstructions?: RelatedInstruction[];
}

const InstructionLayout = ({
  children,
  title,
  subtitle,
  description,
  icon,
  backLink = '/devices',
  backText = 'Device Safety',
  color = 'blue',
  steps,
  relatedInstructions,
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
                {subtitle || description}
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
          
          {/* Steps */}
          {steps && (
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-kid-blue-light text-kid-blue-dark">
                    {step.icon || <span className="font-bold text-lg">{index + 1}</span>}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Related Instructions */}
          {relatedInstructions && relatedInstructions.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Related Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedInstructions.map((instruction, index) => (
                  <Link 
                    key={index}
                    to={instruction.link}
                    className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors"
                  >
                    <span className="font-medium">{instruction.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default InstructionLayout;
