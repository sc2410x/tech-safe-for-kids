import React from 'react';
import { Smartphone, Shield, Settings, Lock, Eye, Bell, Baby } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import SafetyTipCard from '@/components/SafetyTipCard';

const DeviceSafety = () => {
  return (
    <Layout>
      <div className="section-container">
        {/* Hero Section with improved background */}
        <div className="bg-kid-teal-light rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591348278999-ee1d0c8e195f')] bg-cover bg-center opacity-15"></div>
          <div className="flex flex-col md:flex-row items-center md:space-x-8 relative z-10">
            <div className="mb-8 md:mb-0 md:w-1/4 flex justify-center">
              <Smartphone size={120} className="text-kid-teal" />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Phones & Tablets Safety</h1>
              <p className="text-xl text-gray-700 mb-4">
                Mobile devices give children direct access to the internet anywhere they go. Learn how to set up appropriate controls on these devices to ensure safety beyond your home network.
              </p>
            </div>
          </div>
        </div>

        {/* iOS Devices */}
        <SectionHeader 
          title="iPhone & iPad Safety" 
          subtitle="Apple provides robust parental controls through Screen Time"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SafetyTipCard
            title="Set Up Screen Time"
            description="Go to Settings > Screen Time to enable parental controls. Set a passcode that's different from the device passcode to prevent children from changing settings."
            icon={<Settings />}
            level="beginner"
            to="/instructions/ios-screen-time"
          />
          
          <SafetyTipCard
            title="Content & Privacy Restrictions"
            description="Under Screen Time, enable Content & Privacy Restrictions to limit adult content, purchases, downloads, and privacy settings changes."
            icon={<Shield />}
            level="beginner"
            to="/instructions/ios-content-restrictions"
          />
          
          <SafetyTipCard
            title="App Limits & Downtime"
            description="Set daily time limits for specific apps or categories of apps, and schedule periods when the device cannot be used (like bedtime)."
            icon={<Bell />}
            level="intermediate"
          />
          
          <SafetyTipCard
            title="Communication Limits"
            description="Restrict who children can communicate with during allowed screen time and downtime, helping prevent contact with strangers."
            icon={<Lock />}
            level="intermediate"
          />

          {/* Child Account Setup */}
          <SafetyTipCard
            title="Set Up a Child Account"
            description="Learn how to create and configure a dedicated child account on iOS devices using Apple Family Sharing and parental controls."
            icon={<Baby />}
            level="beginner"
            to="/instructions/ios-child-account"
          />
        </div>
        
        {/* Android Devices */}
        <SectionHeader 
          title="Android Device Safety" 
          subtitle="Google offers parental controls through Family Link and device settings"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SafetyTipCard
            title="Set Up Google Family Link"
            description="Download Google Family Link on both your device and your child's. Create a Google account for your child and link it to your Family Link parent account."
            icon={<Smartphone />}
            level="beginner"
            to="/instructions/android-family-link"
          />
          
          <SafetyTipCard
            title="App Approval & Time Limits"
            description="Family Link allows you to approve or block apps your child wants to download from Google Play, and set daily screen time limits."
            icon={<Shield />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Content Filtering"
            description="Set content restrictions for Google Play (apps, games, movies, TV) based on age ratings, and enable SafeSearch for Google."
            icon={<Eye />}
            level="intermediate"
          />
          
          <SafetyTipCard
            title="Location Tracking"
            description="Family Link allows you to see your child's device location, helping ensure they're where they're supposed to be."
            icon={<Lock />}
            level="intermediate"
          />

          {/* Android Child Account */}
          <SafetyTipCard
            title="Set Up a Child Account"
            description="Create and configure a dedicated child account on Android devices using Google Family Link for improved safety and monitoring."
            icon={<Baby />}
            level="beginner"
            to="/instructions/android-child-account"
          />
        </div>
        
        {/* General Mobile Safety */}
        <SectionHeader 
          title="General Mobile Safety Tips" 
          subtitle="Best practices for all mobile devices"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SafetyTipCard
            title="App Store Account Controls"
            description="Require a password for all downloads and purchases, even free ones, and consider using gift cards instead of linking a credit card to the account."
            icon={<Lock />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Regular Check-ins"
            description="Have regular conversations with children about their online activities and occasionally review their devices together."
            icon={<Eye />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Charging Outside the Bedroom"
            description="Establish a rule that all devices charge overnight in a common area, not in bedrooms, to prevent late-night unsupervised usage."
            icon={<Bell />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Third-Party Security Apps"
            description="Consider additional security apps like Qustodio, Norton Family, or Bark that provide more comprehensive monitoring and control options."
            icon={<Shield />}
            level="advanced"
          />
        </div>
      </div>
    </Layout>
  );
};

export default DeviceSafety;
