
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-kid-yellow-light/20 to-white">
      {/* Decorative blobs */}
      <div className="fixed top-20 left-10 w-40 h-40 rounded-blob bg-kid-purple-light opacity-10 blur-3xl"></div>
      <div className="fixed bottom-20 right-10 w-60 h-60 rounded-blob bg-kid-blue-light opacity-10 blur-3xl"></div>
      <div className="fixed top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-blob bg-kid-yellow-light opacity-10 blur-3xl"></div>
      
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
