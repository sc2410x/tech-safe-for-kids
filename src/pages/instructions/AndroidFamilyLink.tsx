
import React from 'react';
import { Smartphone, Download, Link as LinkIcon, Shield } from 'lucide-react';
import InstructionLayout from '@/components/InstructionLayout';

const AndroidFamilyLink = () => {
  const steps = [
    {
      title: "Download Family Link",
      description: "On your device, download and install Google Family Link for Parents from the Google Play Store. On your child's device, download Google Family Link for Children.",
      icon: <Download />
    },
    {
      title: "Set Up Parent Device",
      description: "Open the Family Link app on your device and tap 'Get Started'. Sign in with your Google account.",
      icon: <Smartphone />
    },
    {
      title: "Create Child Account",
      description: "If your child doesn't have a Google account yet, create one through the app. If they already have one, tap 'Next'.",
      icon: <Shield />
    },
    {
      title: "Link Devices",
      description: "Follow the on-screen instructions to link your device with your child's device. You'll need to enter a linking code.",
      icon: <LinkIcon />
    },
    {
      title: "Confirm Account",
      description: "On your child's device, sign in with their Google account and accept the parent supervision.",
      icon: <Shield />
    },
    {
      title: "Set Up Features",
      description: "Choose which features to enable, including app approval, screen time limits, and content filters.",
      icon: <Smartphone />
    },
    {
      title: "Complete Setup",
      description: "Follow any remaining prompts to complete the setup. You can now manage your child's device from the Family Link app.",
      icon: <Shield />
    }
  ];

  return (
    <InstructionLayout
      title="Setting Up Google Family Link"
      description="Google Family Link helps parents monitor and manage their child's Android device usage. Follow our step-by-step guide to set it up properly."
      steps={steps}
      relatedInstructions={[
        { title: "Set Up a Child Account", link: "/instructions/android-child-account" }
      ]}
      icon={<Smartphone size={64} className="text-kid-teal" />}
    />
  );
};

export default AndroidFamilyLink;
