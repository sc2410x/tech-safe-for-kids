
import React from 'react';
import { Wifi, Smartphone, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import CategoryCard from '@/components/CategoryCard';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-10"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
              Keep Your Kids Safe Online
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-sm">
              Simple, practical steps for parents to protect children in the digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-kid-blue-dark hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                onClick={() => window.scrollTo({ top: document.getElementById('get-started')?.offsetTop, behavior: 'smooth' })}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/20 hover:border-white/80 hover:scale-105 transition-all duration-300"
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
            <div className="text-center p-6 rounded-lg bg-kid-blue-light border border-kid-blue/10 shadow-md transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-kid-blue to-kid-blue-dark text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M2 12h10M9 8l4 4-4 4M22 18V6a2 2 0 0 0-2-2H9"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inappropriate Content</h3>
              <p className="text-gray-700">Children can accidentally access content that's not age-appropriate, including violent or explicit material.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-kid-teal-light border border-kid-teal/10 shadow-md transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-kid-teal to-kid-teal-dark text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Online Predators</h3>
              <p className="text-gray-700">Social platforms can expose children to contact from strangers with harmful intentions.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-kid-purple-light border border-kid-purple/10 shadow-md transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-kid-purple to-kid-purple-dark text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M21.7 16.4l-3 1.7v-3.4l3-1.7z"></path><path d="M21.7 11.4l-3 1.7v-3.4l3-1.7z"></path><path d="M21.7 6.4l-3 1.7v-3.4l3-1.7z"></path><path d="M11.8 18.1l-3-1.7v3.4l3 1.7z"></path><path d="M11.8 13.1l-3-1.7v3.4l3 1.7z"></path><path d="M11.8 8.1l-3-1.7v3.4l3 1.7z"></path><path d="M11.8 3.1l-3-1.7v3.4l3 1.7z"></path><path d="m16.8 5.7-3 1.7v3.4l3-1.7z"></path><path d="m6.8 12.4-3-1.7v3.4l3 1.7z"></path><path d="m6.8 17.4-3-1.7v3.4l3 1.7z"></path></svg>
              </div>
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
              imageSrc="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2360&auto=format&fit=crop"
            />
            
            <CategoryCard 
              title="Phones & Tablets"
              description="Configure device-level controls and monitoring for mobile devices."
              icon={<Smartphone className="text-kid-teal" />}
              to="/devices"
              color="teal"
              imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2370&auto=format&fit=crop"
            />
            
            <CategoryCard 
              title="Apps & Websites"
              description="Learn which apps are safe and how to manage online accounts."
              icon={<LinkIcon className="text-kid-purple" />}
              to="/apps"
              color="purple"
              imageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2370&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="section-container">
          <div className="bg-gradient-to-r from-kid-blue to-kid-teal rounded-2xl p-8 md:p-12 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591017403286-fd8493524e1e')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">Ready to create a safer online environment?</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Start with the basics and gradually implement more advanced safety measures as your children grow.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-kid-blue hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-md"
                asChild
              >
                <a href="/wifi" className="inline-flex items-center">
                  Start with WiFi Safety <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
