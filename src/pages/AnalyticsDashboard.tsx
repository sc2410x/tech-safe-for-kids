
import React from 'react';
import Layout from '@/components/Layout';
import SEOAnalyticsDashboard from '@/components/SEOAnalyticsDashboard';
import { useScrollDepthTracking, trackEvent } from '@/utils/analytics';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnalyticsDashboard = () => {
  // Track scroll depth on this page
  useScrollDepthTracking();
  
  // Example of manually tracking an event
  const handleExportData = () => {
    trackEvent({
      category: 'Dashboard',
      action: 'Export',
      label: 'Analytics Data Export'
    });
    // In a real app, this would trigger the export functionality
    alert('Exporting data... (Demo only)');
  };

  return (
    <Layout>
      <div className="section-container py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600 text-lg">
              Monitor your site's SEO performance and visitor analytics
            </p>
          </div>
          <Button onClick={handleExportData} className="bg-kid-blue hover:bg-kid-blue-dark">
            Export Data
          </Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <SEOAnalyticsDashboard />
        </div>
        
        <div className="mt-8 bg-kid-purple-light/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-kid-purple" size={24} />
            <h3 className="text-xl font-bold text-kid-purple-dark">Analytics Privacy Note</h3>
          </div>
          <p className="text-gray-700">
            This dashboard uses anonymized data to help you understand your website's performance.
            No personally identifiable information about your site visitors is collected or stored.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AnalyticsDashboard;
