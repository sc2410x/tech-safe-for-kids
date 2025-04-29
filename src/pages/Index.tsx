
import React from 'react';
import { Wifi, Smartphone, Link as LinkIcon, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import CategoryCard from '@/components/CategoryCard';
import SafetyTipCard from '@/components/SafetyTipCard';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-kid-blue/90 to-kid-blue-dark/80"></div>
        </div>
        <div className="section-container relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white animate-fade-in">
              <span className="inline-block bg-white/20 text-white rounded-full px-4 py-1 text-sm font-semibold mb-4 backdrop-blur-sm">Trusted by parents</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md leading-tight">
                Protect Your <br /><span className="text-gradient-to-r from-white to-kid-teal-light">Family Online</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-sm max-w-xl text-white/90">
                Simple, practical steps for parents to create a safer digital experience for your children.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-kid-blue-dark hover:bg-kid-teal-light hover:text-kid-blue-dark hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => window.scrollTo({ top: document.getElementById('get-started')?.offsetTop, behavior: 'smooth' })}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white/20 hover:border-white hover:scale-105 transition-all duration-300"
                  onClick={() => window.scrollTo({ top: document.getElementById('why-it-matters')?.offsetTop, behavior: 'smooth' })}
                >
                  Learn Why It Matters
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1974&auto=format&fit=crop" 
                alt="Family using digital devices safely" 
                className="rounded-lg shadow-2xl border-4 border-white/30 transform rotate-2 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <ChevronDown size={30} className="text-white" />
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

          <div className="mt-16 flex justify-center">
            <div className="bg-gray-50 rounded-lg p-6 max-w-3xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1591348278999-ee1c5cbda81e?q=80&w=2574&auto=format&fit=crop" 
                    alt="Family together" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3 text-kid-blue-dark">Did you know?</h3>
                  <p className="text-gray-700 mb-4">Children between the ages of 8 and 12 spend an average of 4-6 hours per day on screens, while teens can spend up to 9 hours online.</p>
                  <p className="text-gray-700 font-medium">Taking simple precautions now can protect your family online for years to come.</p>
                </div>
              </div>
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
              imageSrc="https://images.unsplash.com/photo-1544991936-9464fa9919d3?q=80&w=2670&auto=format&fit=crop"
            />
            
            <CategoryCard 
              title="Phones & Tablets"
              description="Configure device-level controls and monitoring for mobile devices."
              icon={<Smartphone className="text-kid-teal" />}
              to="/devices"
              color="teal"
              imageSrc="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=2574&auto=format&fit=crop"
            />
            
            <CategoryCard 
              title="Apps & Websites"
              description="Learn which apps are safe and how to manage online accounts."
              icon={<LinkIcon className="text-kid-purple" />}
              to="/apps"
              color="purple"
              imageSrc="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      {/* Top Safety Tips */}
      <section className="bg-white py-16">
        <div className="section-container">
          <SectionHeader 
            title="Quick Safety Tips" 
            subtitle="Start with these essential safety measures today"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <SafetyTipCard
              title="Change Default WiFi Password"
              description="Secure your home network by changing the default router password to prevent unauthorized access."
              level="beginner"
              to="/instructions/change-router-password"
            />
            
            <SafetyTipCard
              title="Set Up Content Filtering"
              description="Block inappropriate websites and content at the router level to protect all devices on your network."
              level="intermediate"
              to="/instructions/content-filtering"
            />
            
            <SafetyTipCard
              title="Enable Screen Time Limits"
              description="Use built-in tools on devices to limit how much time children spend on screens each day."
              level="beginner"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2574&auto=format&fit=crop" 
                alt="Family together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-kid-blue/90 to-kid-teal/80"></div>
            </div>
            <div className="relative z-10 p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4 drop-shadow-sm">Ready to create a safer online environment?</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Start with the basics and gradually implement more advanced safety measures as your children grow.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-kid-blue hover:bg-kid-teal-light hover:text-kid-blue-dark hover:scale-105 transition-all duration-300 shadow-md"
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
