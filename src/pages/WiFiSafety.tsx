
import React from 'react';
import { Wifi, Shield, Settings, Lock, Smartphone, WifiHigh, Router, Clock, Globe, Network } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import SafetyTipCard from '@/components/SafetyTipCard';
import { Link } from 'react-router-dom';

const WiFiSafety = () => {
  return (
    <Layout>
      <div className="section-container">
        {/* Hero Section */}
        <div className="bg-kid-blue-light rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f')] bg-cover bg-center opacity-10"></div>
          <div className="flex flex-col md:flex-row items-center md:space-x-8 relative z-10">
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
            to="/instructions/change-router-password"
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
            to="/instructions/content-filtering"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
        
        {/* Mesh WiFi Systems */}
        <SectionHeader 
          title="Mesh WiFi Systems" 
          subtitle="Enhanced protection with modern mesh WiFi networks"
          align="left"
        />
        
        <div className="bg-gradient-to-r from-kid-blue-light/30 to-kid-purple-light/30 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <WifiHigh size={80} className="text-kid-blue" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-3">What is Mesh WiFi?</h3>
              <p className="text-gray-700 mb-4">
                Mesh WiFi systems use multiple devices (nodes) to create a single, seamless WiFi network throughout your home, 
                eliminating dead zones and providing consistent coverage. These modern systems often come with powerful parental 
                control features built directly into their companion apps.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SafetyTipCard
            title="Family Profiles with Eero"
            description="Eero's mesh WiFi system allows you to create individual profiles for each family member. You can then apply specific rules, content filters, and time schedules to each profile separately."
            icon={<Network />}
            level="intermediate"
          />
          
          <SafetyTipCard
            title="Content Filtering by Category"
            description="Eero and similar mesh systems offer content filtering by categories such as adult, illegal, violent, or social media content. This filtering works across all devices on your network without installing additional software."
            icon={<Shield />}
            level="intermediate"
          />
          
          <SafetyTipCard
            title="Scheduled Pauses"
            description="Set automatic internet pauses during bedtime, homework, or dinner time. Eero lets you schedule these pauses for individual profiles or the entire network, encouraging healthy tech habits."
            icon={<Clock />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Usage Insights"
            description="Monitor your children's internet usage with detailed reports showing which devices are most active and when. These insights help you have informed conversations about healthy online habits."
            icon={<Globe />}
            level="advanced"
          />
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6 mb-12">
          <h3 className="text-2xl font-bold mb-4">Popular Mesh WiFi Systems Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left px-4 py-2">System</th>
                  <th className="text-left px-4 py-2">Parental Controls</th>
                  <th className="text-left px-4 py-2">Content Filtering</th>
                  <th className="text-left px-4 py-2">User Profiles</th>
                  <th className="text-left px-4 py-2">Time Scheduling</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Eero</td>
                  <td className="px-4 py-3">Advanced</td>
                  <td className="px-4 py-3">✅ (with subscription)</td>
                  <td className="px-4 py-3">✅</td>
                  <td className="px-4 py-3">✅</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Google Nest WiFi</td>
                  <td className="px-4 py-3">Good</td>
                  <td className="px-4 py-3">✅</td>
                  <td className="px-4 py-3">✅</td>
                  <td className="px-4 py-3">✅</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">Netgear Orbi</td>
                  <td className="px-4 py-3">Advanced</td>
                  <td className="px-4 py-3">✅ (with subscription)</td>
                  <td className="px-4 py-3">✅</td>
                  <td className="px-4 py-3">✅</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">TP-Link Deco</td>
                  <td className="px-4 py-3">Good</td>
                  <td className="px-4 py-3">✅</td>
                  <td className="px-4 py-3">✅</td>
                  <td className="px-4 py-3">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">Note: Features may vary based on model and firmware version. Check manufacturer websites for specific details.</p>
        </div>
      </div>
    </Layout>
  );
};

export default WiFiSafety;
