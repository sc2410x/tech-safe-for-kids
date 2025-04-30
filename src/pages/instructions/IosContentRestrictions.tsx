
import React from 'react';
import { Settings, Lock, Shield, Eye } from 'lucide-react';
import InstructionLayout from '@/components/InstructionLayout';

const IosContentRestrictions = () => {
  const steps = [
    {
      title: "Open Settings",
      description: "On your iOS device, tap on the Settings app from your home screen.",
      icon: <Settings />
    },
    {
      title: "Tap Screen Time",
      description: "Scroll down and tap on 'Screen Time' in the settings menu.",
      icon: <Shield />
    },
    {
      title: "Content & Privacy Restrictions",
      description: "Tap on 'Content & Privacy Restrictions' to access these settings.",
      icon: <Lock />
    },
    {
      title: "Enable Restrictions",
      description: "Toggle on 'Content & Privacy Restrictions'. You'll be asked to enter your Screen Time passcode if you haven't already.",
      icon: <Lock />
    },
    {
      title: "iTunes & App Store Purchases",
      description: "Tap this option to control whether apps can be installed, deleted, or make in-app purchases.",
      icon: <Shield />
    },
    {
      title: "Allowed Apps",
      description: "Choose which built-in apps are allowed on the device, such as Safari, Camera, or FaceTime.",
      icon: <Shield />
    },
    {
      title: "Content Restrictions",
      description: "Set age restrictions for music, movies, TV shows, books, apps, and web content.",
      icon: <Eye />
    },
    {
      title: "Web Content",
      description: "Choose to limit access to adult websites or only allow specific websites.",
      icon: <Eye />
    },
    {
      title: "Privacy Settings",
      description: "Control which apps have access to location services, contacts, calendars, etc.",
      icon: <Lock />
    },
    {
      title: "Allow Changes",
      description: "Prevent changes to privacy settings, accounts, cellular data, and more.",
      icon: <Lock />
    }
  ];

  return (
    <InstructionLayout
      title="Content & Privacy Restrictions on iOS"
      description="Learn how to set up content restrictions and privacy controls on iPhone or iPad to keep your child safe online."
      steps={steps}
      relatedInstructions={[
        { title: "Set Up Screen Time", link: "/instructions/ios-screen-time" },
        { title: "Set Up a Child Account", link: "/instructions/ios-child-account" }
      ]}
    />
  );
};

export default IosContentRestrictions;
