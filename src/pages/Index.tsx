
import React from 'react';
import { Wifi, Smartphone, Link, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import CategoryCard from '@/components/CategoryCard';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Keep Your Kids Safe Online
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Simple, practical steps for parents to protect children in the digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-kid-blue-dark hover:bg-gray-100"
                onClick={() => window.scrollTo({ top: document.getElementById('get-started')?.offsetTop, behavior: 'smooth' })}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="#why-it-matters">Why It Matters</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section id="why-it-matters" className="bg-white py-16">
        <div className="section-container">
          <SectionHeader 
            title="Why Online Safety Matters" 
            subtitle="In today's connected world, children face various online risks that parents need to understand and address."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-lg bg-kid-blue-light">
              <h3 className="text-xl font-semibold mb-3">Inappropriate Content</h3>
              <p className="text-gray-700">Children can accidentally access content that's not age-appropriate, including violent or explicit material.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-kid-teal-light">
              <h3 className="text-xl font-semibold mb-3">Online Predators</h3>
              <p className="text-gray-700">Social platforms can expose children to contact from strangers with harmful intentions.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-kid-purple-light">
              <h3 className="text-xl font-semibold mb-3">Cyberbullying</h3>
              <p className="text-gray-700">Children may experience harassment, threats or humiliation through digital platforms.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Started Section */}
      <section id="get-started" className="bg-gray-50 py-16">
        <div className="section-container">
          <SectionHeader 
            title="Get Started with Simple Steps" 
            subtitle="Choose the area where you'd like to implement online safety measures."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <CategoryCard 
              title="Home WiFi Safety"
              description="Secure your home network and set up parental controls on your router."
              icon={<Wifi className="text-kid-blue" />}
              to="/wifi"
              color="blue"
            />
            
            <CategoryCard 
              title="Phones & Tablets"
              description="Configure device-level controls and monitoring for mobile devices."
              icon={<Smartphone className="text-kid-teal" />}
              to="/devices"
              color="teal"
            />
            
            <CategoryCard 
              title="Apps & Websites"
              description="Learn which apps are safe and how to manage online accounts."
              icon={<Link className="text-kid-purple" />}
              to="/apps"
              color="purple"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="section-container">
          <div className="bg-gradient-to-r from-kid-blue to-kid-teal rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to create a safer online environment?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Start with the basics and gradually implement more advanced safety measures as your children grow.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-kid-blue hover:bg-gray-100"
              asChild
            >
              <a href="/wifi" className="inline-flex items-center">
                Start with WiFi Safety <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
