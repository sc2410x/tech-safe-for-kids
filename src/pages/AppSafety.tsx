
import React from 'react';
import { Link, Shield, Settings, Lock, Eye, AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionHeader from '@/components/SectionHeader';
import SafetyTipCard from '@/components/SafetyTipCard';

const AppSafety = () => {
  return (
    <Layout>
      <div className="section-container">
        {/* Hero Section */}
        <div className="bg-kid-purple-light rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="mb-8 md:mb-0 md:w-1/4 flex justify-center">
              <Link size={120} className="text-kid-purple" />
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Apps & Websites Safety</h1>
              <p className="text-xl text-gray-700 mb-4">
                Children access countless apps and websites, each with their own risks and privacy concerns. Learn how to evaluate them and implement safety measures at the app level.
              </p>
            </div>
          </div>
        </div>

        {/* Evaluating Apps */}
        <SectionHeader 
          title="Evaluating Apps & Sites" 
          subtitle="How to determine if an app or website is appropriate for your child"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SafetyTipCard
            title="Check Age Ratings"
            description="Review app store age ratings, but don't rely on them exclusively. Some apps rated for children still contain inappropriate content or risky features."
            icon={<AlertTriangle />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Research Before Downloading"
            description="Search online for parent reviews of apps and sites on platforms like Common Sense Media before allowing your child to use them."
            icon={<Eye />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Review Privacy Policies"
            description="Check what data the app collects about users, particularly children, and how that data is used or shared with third parties."
            icon={<Shield />}
            level="intermediate"
          />
          
          <SafetyTipCard
            title="Test Apps Yourself First"
            description="Download and use apps yourself before allowing your child to use them to understand their features and potential risks."
            icon={<Smartphone />}
            level="intermediate"
          />
        </div>
        
        {/* Social Media Safety */}
        <SectionHeader 
          title="Social Media Safety" 
          subtitle="Special considerations for social platforms"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <SafetyTipCard
            title="Privacy Settings"
            description="Set accounts to private and review all privacy settings. Disable location sharing and restrict who can send friend requests or messages."
            icon={<Lock />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Friend/Follower Monitoring"
            description="Regularly review your child's friends/followers list and discuss why they should only connect with people they know in real life."
            icon={<Eye />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Content Filtering & Reporting"
            description="Enable any available content filtering options and teach your child how to block inappropriate users and report concerning content."
            icon={<Shield />}
            level="intermediate"
          />
          
          <SafetyTipCard
            title="Be a Connection"
            description="Follow or friend your children on their social accounts, but establish respectful boundaries about how you'll interact with their online presence."
            icon={<Link />}
            level="intermediate"
          />
        </div>
        
        {/* Gaming Safety */}
        <SectionHeader 
          title="Gaming Platform Safety" 
          subtitle="Protecting children on gaming platforms and communities"
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SafetyTipCard
            title="Use Platform Parental Controls"
            description="Enable parental controls on gaming platforms (Xbox, PlayStation, Nintendo, etc.) to restrict purchases, chat functions, and mature content."
            icon={<Settings />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Disable or Monitor Chat Features"
            description="Game chats can expose children to inappropriate content or predators. Either disable chat features or monitor them closely."
            icon={<AlertTriangle />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Check ESRB/PEGI Ratings"
            description="Always check game age ratings and content descriptors to ensure games are appropriate for your child's age and maturity level."
            icon={<Eye />}
            level="beginner"
          />
          
          <SafetyTipCard
            title="Set Spending Limits"
            description="Many games include in-app purchases. Remove payment methods from accounts or set up spending allowances and notifications."
            icon={<Lock />}
            level="intermediate"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AppSafety;
