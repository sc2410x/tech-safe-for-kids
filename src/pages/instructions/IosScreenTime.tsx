
import React from 'react';
import { Settings, Clock, Shield } from 'lucide-react';
import InstructionLayout from '@/components/InstructionLayout';

const IosScreenTime = () => {
  const steps = [
    {
      title: "Open Settings",
      description: "On your iOS device, tap on the Settings app from your home screen.",
      icon: <Settings />
    },
    {
      title: "Tap Screen Time",
      description: "Scroll down and tap on 'Screen Time' in the settings menu.",
      icon: <Clock />
    },
    {
      title: "Turn On Screen Time",
      description: "Tap 'Turn On Screen Time', then tap 'Continue'.",
      icon: <Clock />
    },
    {
      title: "Select Device Owner",
      description: "Choose 'This is My Child's iPhone/iPad' or 'This is My iPhone/iPad' as appropriate.",
      icon: <Shield />
    },
    {
      title: "Set Up Screen Time Passcode",
      description: "Create a four-digit Screen Time passcode that's different from your device passcode. This prevents your child from changing any restrictions you set.",
      icon: <Shield />
    },
    {
      title: "Configure Features",
      description: "You can now configure downtime, app limits, content restrictions, and privacy settings according to your preferences.",
      icon: <Settings />
    }
  ];

  return (
    <InstructionLayout
      title="Setting Up Screen Time on iOS"
      description="Screen Time helps you monitor and manage your child's device usage. Here's how to set it up on an iPhone or iPad."
      steps={steps}
      relatedInstructions={[
        { title: "Content & Privacy Restrictions", link: "/instructions/ios-content-restrictions" },
        { title: "Set Up a Child Account", link: "/instructions/ios-child-account" }
      ]}
      icon={<Clock size={64} className="text-kid-blue" />}
    />
  );
};

export default IosScreenTime;
