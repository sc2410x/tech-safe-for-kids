
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <Layout>
      <div className="section-container flex flex-col items-center justify-center py-16">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-kid-blue mb-4">404</h1>
          <p className="text-2xl font-semibold mb-4">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
