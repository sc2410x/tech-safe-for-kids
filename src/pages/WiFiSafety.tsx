
import React from 'react';
import { Wifi, Shield, Settings, Lock, Smartphone } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import SafetyTipCard from '@/components/SafetyTipCard';

const WiFiSafety = () => {
  return (
    <Layout>
      <div className="section-container">
        {/* Hero Section */}
        <div className="bg-kid-blue-light rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="mb-8 md:mb-0 md:w-1/4 flex justify-center">
              <Wifi size={120} className="text-kid-blue" />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Home WiFi Safety</h1>
              <p className="text-xl text-gray-700 mb-4">
                Your home WiFi is the gateway to the internet for all devices in your household. Securing it properly is the first step to creating a safer online environment for your children.
              </p>
            </div>
          </div>
        </div>

        {/* Basic Security */}
        <SectionHeader 
          title="Basic WiFi Security" 
          subtitle="Start with these fundamental steps to secure your home network"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SafetyTipCard
            title="Change Default Router Passwords"
            description="Most routers come with default usernames and passwords that are easy to guess. Change both your router's admin password and your WiFi network password to strong, unique combinations."
            icon={<Lock />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Update Router Firmware"
            description="Router manufacturers regularly release firmware updates that fix security vulnerabilities. Check your router model's support page for how to update your specific device."
            icon={<Settings />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Use WPA3 Encryption"
            description="Make sure your WiFi is using WPA3 encryption (or at least WPA2) to protect the data transmitted on your network. This setting can be found in your router's security settings."
            icon={<Shield />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Create A Guest Network"
            description="Set up a separate guest WiFi network for visitors and less secure devices. This keeps them separated from your main network where your children's devices connect."
            icon={<Wifi />}
            level="intermediate"
          />
        </div>
        
        {/* Parental Controls */}
        <SectionHeader 
          title="Router Parental Controls" 
          subtitle="Most modern routers include built-in parental control features"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SafetyTipCard
            title="Content Filtering"
            description="Enable content filtering through your router to block inappropriate websites across all devices on your network. Most routers allow you to select categories of content to block."
            icon={<Shield />}
            level="intermediate"
          />
          
          <SafetyTipCard
            title="Time Restrictions"
            description="Set up time-based access rules to limit when certain devices can access the internet. This helps enforce healthy screen time limits automatically."
            icon={<Settings />}
            level="intermediate"
          />
          
          <SafetyTipCard
            title="Device Access Control"
            description="Identify your children's devices by their MAC addresses and set specific access rules for each. This allows you to customize internet access for each family member."
            icon={<Smartphone />}
            level="advanced"
          />
          
          <SafetyTipCard
            title="Activity Monitoring"
            description="Some routers provide reports on internet usage. Review these regularly to understand your children's online habits and identify any concerns."
            icon={<Lock />}
            level="advanced"
          />
        </div>
        
        {/* Advanced Solutions */}
        <SectionHeader 
          title="Advanced Protection" 
          subtitle="For additional protection beyond basic router settings"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SafetyTipCard
            title="DNS Filtering"
            description="Consider using a service like OpenDNS Family Shield or CleanBrowsing that filters content at the DNS level. Change your router's DNS settings to use these services."
            icon={<Shield />}
            level="advanced"
          />
          
          <SafetyTipCard
            title="Dedicated Parental Control Devices"
            description="Products like Circle by Disney connect to your router to provide comprehensive parental controls across all devices, including detailed reporting and time management."
            icon={<Settings />}
            level="advanced"
          />
        </div>
      </div>
    </Layout>
  );
};

export default WiFiSafety;
