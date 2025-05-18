
import React from 'react';
import { Link, HelpCircle, Shield, Eye, Lock, ArrowRight, Gamepad, Joystick } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import ResourceCard from '@/components/ResourceCard';

const Resources = () => {
  return (
    <Layout>
      <div className="section-container">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-kid-blue-light via-kid-teal-light to-kid-purple-light rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Additional Child Safety Resources</h1>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Explore these trusted resources from leading organisations dedicated to children's online safety and wellbeing.
            </p>
          </div>
        </div>

        {/* Organisations */}
        <SectionHeader 
          title="Organisations & Websites" 
          subtitle="Expert resources from trusted child safety organisations"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ResourceCard
            title="Common Sense Media"
            description="Age-based media reviews, app recommendations, and digital literacy resources for parents and educators."
            url="https://www.commonsensemedia.org"
            organization="Common Sense Media"
          />
          
          <ResourceCard
            title="Internet Matters"
            description="Age-specific advice about online safety issues and step-by-step guides to set up parental controls."
            url="https://www.internetmatters.org"
            organization="Internet Matters"
          />
          
          <ResourceCard
            title="Connect Safely"
            description="Research-based safety tips, advice, and resources for parents and educators."
            url="https://www.connectsafely.org"
            organization="Connect Safely"
          />
          
          <ResourceCard
            title="National Online Safety"
            description="Educational resources including guides about platforms, games, and apps that children use."
            url="https://nationalonlinesafety.com"
            organization="National Online Safety"
          />
          
          <ResourceCard
            title="Family Online Safety Institute"
            description="International non-profit organisation working to make the online world safer for children and families."
            url="https://www.fosi.org"
            organization="FOSI"
          />
          
          <ResourceCard
            title="Net Aware"
            description="Guide to social networks, apps, and games that children use, created by the NSPCC."
            url="https://www.net-aware.org.uk"
            organization="NSPCC & O2"
          />
        </div>
        
        {/* Gaming Safety Section - NEW */}
        <SectionHeader 
          title="Gaming Safety" 
          subtitle="Essential safety settings for popular games your children may play"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-kid-blue-light p-3 rounded-full mr-4">
                <Gamepad className="text-kid-blue" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Fortnite Safety Settings</h3>
                <p className="text-gray-600">How to configure parental controls, limit voice chat, filter mature language, and set screen time limits in Fortnite.</p>
              </div>
            </div>
            <a 
              href="https://www.epicgames.com/help/en-US/epic-accounts-c74/parental-controls-c59/parental-controls-for-epic-accounts-a4807"
              className="text-kid-blue hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Safety Guide <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-kid-teal-light p-3 rounded-full mr-4">
                <Joystick className="text-kid-teal" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Minecraft Safety Guide</h3>
                <p className="text-gray-600">Setting up child accounts, configuring online safety settings, managing multiplayer access, and monitoring your child's gameplay.</p>
              </div>
            </div>
            <a 
              href="https://help.minecraft.net/hc/en-us/articles/4408968616077-How-to-Manage-Parental-Consent-Family-Settings-and-Minecraft-Realms-Access-for-a-Child-Account"
              className="text-kid-teal hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Safety Guide <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-kid-purple-light p-3 rounded-full mr-4">
                <Joystick className="text-kid-purple" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Roblox Parent's Guide</h3>
                <p className="text-gray-600">How to set up account restrictions, privacy settings, communication filters, and spending limits for your child on Roblox.</p>
              </div>
            </div>
            <a 
              href="https://corp.roblox.com/parents/" 
              className="text-kid-purple hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Safety Guide <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-kid-blue-light p-3 rounded-full mr-4">
                <Gamepad className="text-kid-blue" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call of Duty Parental Controls</h3>
                <p className="text-gray-600">Setting content filters, communication restrictions, playtime limits, and purchase controls for Call of Duty games.</p>
              </div>
            </div>
            <a 
              href="https://support.activision.com/articles/managing-your-activision-profile"
              className="text-kid-blue hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Safety Guide <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
        
        {/* Articles & Guides */}
        <SectionHeader 
          title="Helpful Guides" 
          subtitle="In-depth resources on specific online safety topics"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-kid-blue-light p-3 rounded-full mr-4">
                <HelpCircle className="text-kid-blue" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Talking to Children About Online Safety</h3>
                <p className="text-gray-600">Age-appropriate conversation starters and tips for discussing internet safety with children.</p>
              </div>
            </div>
            <a 
              href="https://www.commonsensemedia.org/privacy-and-internet-safety" 
              className="text-kid-blue hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Guide <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-kid-teal-light p-3 rounded-full mr-4">
                <Shield className="text-kid-teal" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Digital Citizenship Guide</h3>
                <p className="text-gray-600">Teaching children responsible online behaviour, digital literacy, and critical thinking.</p>
              </div>
            </div>
            <a 
              href="https://www.digitalcitizenship.net/parents-home.html" 
              className="text-kid-teal hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Guide <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-kid-purple-light p-3 rounded-full mr-4">
                <Eye className="text-kid-purple" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Cyberbullying Prevention</h3>
                <p className="text-gray-600">How to recognise signs of cyberbullying and steps to take if your child is affected.</p>
              </div>
            </div>
            <a 
              href="https://www.stopbullying.gov/cyberbullying/prevention" 
              className="text-kid-purple hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Guide <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-kid-blue-light p-3 rounded-full mr-4">
                <Lock className="text-kid-blue" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Online Privacy for Families</h3>
                <p className="text-gray-600">Essential privacy practices that every family should implement to protect personal information.</p>
              </div>
            </div>
            <a 
              href="https://www.consumer.ftc.gov/topics/protecting-kids-online" 
              className="text-kid-blue hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Guide <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
