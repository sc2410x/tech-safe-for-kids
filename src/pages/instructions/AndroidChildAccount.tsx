
import React from 'react';
import { Child, Star, Shield, Smartphone, Bell } from 'lucide-react';
import InstructionLayout from '@/components/InstructionLayout';

const AndroidChildAccount = () => {
  return (
    <InstructionLayout
      title="Setting Up a Child Account on Android"
      subtitle="Create and manage a dedicated Google account for your child with parental controls"
      icon={<Child size={80} className="text-kid-teal" />}
      backLink="/devices"
      backText="Device Safety"
      color="teal"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">What is a Child Account?</h2>
          <p>
            A child account on Android is managed through Google Family Link, which allows parents
            to set digital ground rules and monitor their child's Android device usage. You can manage
            app usage, screen time, content restrictions, and more.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Step 1: Download Google Family Link</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">On your device (parent device):</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the <strong>Google Play Store</strong></li>
              <li>Search for <strong>Google Family Link for parents</strong></li>
              <li>Download and install the app</li>
              <li>Open the app and sign in with your Google account</li>
            </ol>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Step 2: Create a Google Account for Your Child</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">In the Family Link app:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Tap the <strong>+</strong> icon to add a child</li>
              <li>Select <strong>Create a Google Account for your child</strong></li>
              <li>Follow the prompts to create your child's account:
                <ul className="list-disc list-inside ml-5 space-y-1">
                  <li>Enter your child's name</li>
                  <li>Create a username (email address)</li>
                  <li>Create a strong password</li>
                  <li>Enter your child's birthday</li>
                  <li>Enter your payment method for verification</li>
                </ul>
              </li>
              <li>Review the Parent Consent and tap <strong>I agree</strong></li>
              <li>Set up additional account features as prompted</li>
            </ol>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Step 3: Set Up Your Child's Device</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">On your child's device:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>If it's a new device, follow the initial setup process until you reach the Google sign-in screen</li>
              <li>If it's an existing device, go to <strong>Settings</strong> {'>>'} <strong>Accounts</strong> and remove any existing accounts</li>
              <li>Download the <strong>Google Family Link for children &amp; teens</strong> app from the Play Store</li>
              <li>Open the app and sign in with your child's new Google account credentials</li>
              <li>A code will appear on the child's device</li>
              <li>On your device, enter this code when prompted in your Family Link parent app</li>
              <li>Follow the prompts to complete the setup process</li>
            </ol>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Step 4: Configure Parental Controls</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">In the Family Link parent app, configure:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>App approval:</strong> Choose whether to approve app downloads</li>
              <li><strong>Screen time limits:</strong> Set daily time limits and bedtime schedules</li>
              <li><strong>Content restrictions:</strong> Filter content by maturity rating</li>
              <li><strong>Location tracking:</strong> Monitor your child's device location</li>
              <li><strong>Google Play restrictions:</strong> Control what content can be purchased or downloaded</li>
              <li><strong>Web filtering:</strong> Restrict websites or enable SafeSearch</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-teal-50 p-6 rounded-xl border border-kid-teal-light">
          <h3 className="flex items-center text-xl font-semibold mb-2 text-kid-teal-dark">
            <Star className="mr-2" size={20} />
            Tips for Success
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Discuss the rules and reasons for parental controls with your child</li>
            <li>Start with reasonable limits and adjust as needed</li>
            <li>Review the activity reports together regularly</li>
            <li>Use the "bonus time" feature for special occasions</li>
            <li>Remember that Family Link controls stop working when your child turns 13 (varies by country)</li>
            <li>Use this as a teaching tool for responsible digital habits</li>
          </ul>
        </div>
      </div>
    </InstructionLayout>
  );
};

export default AndroidChildAccount;
