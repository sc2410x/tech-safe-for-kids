import React from 'react';
import { ArrowRight, Baby, Shield, Heart, BookOpen, Award, Wifi, Smartphone, Link as LinkIcon, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import CategoryCard from '@/components/CategoryCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Reworked */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background gradient with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-kid-purple-light/80 via-kid-blue-light/60 to-kid-yellow-light/70"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/8095043e-830f-419a-9d31-14b03f54443a.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-blob bg-kid-yellow opacity-40 animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-blob bg-kid-purple opacity-30 animate-bounce-slow delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 rounded-blob bg-kid-green opacity-40 animate-bounce-slow delay-500"></div>
        
        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Hero content */}
            <div className="w-full md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-kid-purple-dark font-display leading-tight">
                Keep Your Kids{" "}
                <span className="relative inline-block text-kid-blue-dark">
                  Safe
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                    <path d="M0,5 Q50,15 100,5" stroke="#FFD43B" strokeWidth="8" fill="none" />
                  </svg>
                </span>{" "}
                Online
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-700 font-light max-w-lg">
                Simple, practical steps for parents to protect children in the digital world.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-kid-purple text-white hover:bg-kid-purple-dark hover:scale-105 transition-all duration-300 shadow-lg rounded-full"
                  onClick={() => window.scrollTo({ top: document.getElementById('get-started')?.offsetTop, behavior: 'smooth' })}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-kid-yellow text-kid-yellow-dark bg-white/80 backdrop-blur-sm hover:bg-kid-yellow-light hover:border-kid-yellow-dark hover:scale-105 transition-all duration-300 rounded-full"
                  asChild
                >
                  <a href="#why-it-matters">Why It Matters</a>
                </Button>
              </div>
            </div>
            
            {/* Hero image/carousel */}
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40 animate-slide-up">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4">
                        <img 
                          src="/lovable-uploads/8095043e-830f-419a-9d31-14b03f54443a.png" 
                          alt="Children using digital devices safely" 
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg text-kid-purple-dark">Device Safety</h3>
                          <p className="text-gray-600">Configure proper settings on all your family's devices</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4">
                        <img 
                          src="/lovable-uploads/14cc5096-4b81-46b7-8dbd-ffa4c3227411.png" 
                          alt="Family discussing online safety" 
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg text-kid-blue-dark">Family Conversations</h3>
                          <p className="text-gray-600">Tips for talking to kids about internet safety</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4">
                        <img 
                          src="/lovable-uploads/d00299a9-802f-4f1d-92a3-ab508e93c8f6.png" 
                          alt="Secure home network setup" 
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg text-kid-yellow-dark">WiFi Security</h3>
                          <p className="text-gray-600">Create a secure home network environment</p>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="flex justify-center mt-4 gap-2">
                    <CarouselPrevious className="static translate-y-0 ml-0" />
                    <CarouselNext className="static translate-y-0 mr-0" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#FFFFFF" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,266.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Why It Matters */}
      <section id="why-it-matters" className="bg-white py-20">
        <div className="section-container">
          <SectionHeader 
            title="Why Online Safety Matters" 
            subtitle="In today's connected world, children face various online risks that parents need to understand and address."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-kid-blue-light/30 border-2 border-kid-blue/20 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-blob flex items-center justify-center bg-gradient-to-br from-kid-blue to-kid-blue-dark text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M2 12h10M9 8l4 4-4 4M22 18V6a2 2 0 0 0-2-2H9"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-kid-blue-dark font-display">Inappropriate Content</h3>
              <p className="text-gray-700">Children can accidentally access content that's not age-appropriate, including violent or explicit material.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-kid-purple-light/30 border-2 border-kid-purple/20 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-blob flex items-center justify-center bg-gradient-to-br from-kid-purple to-kid-purple-dark text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-kid-purple-dark font-display">Online Predators</h3>
              <p className="text-gray-700">Social platforms can expose children to contact from strangers with harmful intentions.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-kid-yellow-light/30 border-2 border-kid-yellow/20 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-blob flex items-center justify-center bg-gradient-to-br from-kid-yellow to-kid-yellow-dark text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M21.7 16.4l-3 1.7v-3.4l3-1.7z"></path><path d="M21.7 11.4l-3 1.7v-3.4l3-1.7z"></path><path d="M21.7 6.4l-3 1.7v-3.4l3-1.7z"></path><path d="M11.8 18.1l-3-1.7v3.4l3 1.7z"></path><path d="M11.8 13.1l-3-1.7v3.4l3 1.7z"></path><path d="M11.8 8.1l-3-1.7v3.4l3 1.7z"></path><path d="M11.8 3.1l-3-1.7v3.4l3 1.7z"></path><path d="m16.8 5.7-3 1.7v3.4l3-1.7z"></path><path d="m6.8 12.4-3-1.7v3.4l3 1.7z"></path><path d="m6.8 17.4-3-1.7v3.4l3 1.7z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-kid-yellow-dark font-display">Cyberbullying</h3>
              <p className="text-gray-700">Children may experience harassment, threats or humiliation through digital platforms.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Started Section */}
      <section id="get-started" className="bg-gray-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/d00299a9-802f-4f1d-92a3-ab508e93c8f6.png')] bg-cover bg-center opacity-5"></div>
        
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-blob bg-kid-green-light opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-blob bg-kid-blue-light opacity-30"></div>
        <div className="absolute top-20 right-20 w-24 h-24 rounded-blob bg-kid-yellow-light opacity-50"></div>
        
        <div className="section-container relative z-10">
          <SectionHeader 
            title="Get Started with Simple Steps" 
            subtitle="Choose the area where you'd like to implement online safety measures."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <CategoryCard 
              title="Home WiFi Safety"
              description="Secure your home network and set up parental controls on your router."
              icon={<Wifi className="text-white" />}
              to="/wifi"
              color="blue"
              imageSrc="/lovable-uploads/d00299a9-802f-4f1d-92a3-ab508e93c8f6.png"
            />
            
            <CategoryCard 
              title="Phones & Tablets"
              description="Configure device-level controls and monitoring for mobile devices."
              icon={<Smartphone className="text-white" />}
              to="/devices"
              color="teal"
              imageSrc="/lovable-uploads/14cc5096-4b81-46b7-8dbd-ffa4c3227411.png"
            />
            
            <CategoryCard 
              title="Apps & Websites"
              description="Learn which apps are safe and how to manage online accounts."
              icon={<LinkIcon className="text-white" />}
              to="/apps"
              color="purple"
              imageSrc="/lovable-uploads/8095043e-830f-419a-9d31-14b03f54443a.png"
            />
          </div>
        </div>
      </section>
      
      {/* Why Parents Trust Us */}
      <section className="bg-white py-20">
        <div className="section-container">
          <SectionHeader 
            title="Why Parents Trust Us" 
            subtitle="Simple and effective tools for creating a safe online environment"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-kid-purple-light/30 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-kid-purple-light transition-colors duration-300">
              <div className="w-16 h-16 bg-kid-purple rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">Easy to Understand</h3>
              <p className="text-gray-700">Simple explanations without technical jargon, so you can implement protections quickly.</p>
            </div>
            
            <div className="bg-kid-blue-light/30 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-kid-blue-light transition-colors duration-300">
              <div className="w-16 h-16 bg-kid-blue rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">Expert Guidance</h3>
              <p className="text-gray-700">Created by cybersecurity and child development specialists with families in mind.</p>
            </div>
            
            <div className="bg-kid-yellow-light/30 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-kid-yellow-light transition-colors duration-300">
              <div className="w-16 h-16 bg-kid-yellow rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">Free Resources</h3>
              <p className="text-gray-700">Access to all guides and tools at no cost, because online safety should be available to everyone.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-white py-10 pb-20">
        <div className="section-container">
          <div className="bg-gradient-to-r from-kid-purple via-kid-blue to-kid-yellow rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/lovable-uploads/14cc5096-4b81-46b7-8dbd-ffa4c3227411.png')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
            
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <Heart size={64} className="text-white opacity-90" />
              </div>
              <h2 className="text-4xl font-bold mb-6 drop-shadow-sm font-display">Ready to create a safer online environment?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Start with the basics and gradually implement more advanced safety measures as your children grow.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-kid-purple hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg rounded-full"
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
