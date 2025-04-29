
import React from 'react';
import { Baby, Star, Shield, Lock, Bell } from 'lucide-react';
import InstructionLayout from '@/components/InstructionLayout';

const IosChildAccount = () => {
  return (
    <InstructionLayout
      title="Setting Up a Child Account on iOS"
      subtitle="Create and manage a dedicated Apple ID for your child with parental controls"
      icon={<Baby size={80} className="text-kid-blue" />}
      backLink="/devices"
      backText="Device Safety"
      color="blue"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">What is a Child Account?</h2>
          <p>
            Apple's Family Sharing allows you to create an Apple ID for your child under 13 (age varies by country).
            With a child account, you have parental control over permissions and purchases while still giving
            your child their own personalized device experience.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Step 1: Set Up Family Sharing</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">On your iOS device:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the <strong>Settings</strong> app</li>
              <li>Tap your name at the top of the screen</li>
              <li>Tap <strong>Family Sharing</strong></li>
              <li>Tap <strong>Set Up Your Family</strong> if you haven't already created a family group</li>
              <li>Follow the on-screen instructions to set up Family Sharing</li>
            </ol>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Step 2: Create a Child Account</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">Once Family Sharing is set up:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go back to the <strong>Family Sharing</strong> screen</li>
              <li>Tap <strong>Add Member</strong></li>
              <li>Tap <strong>Create Child Account</strong></li>
              <li>Tap <strong>Continue</strong></li>
              <li>Enter your child's name and birthday</li>
              <li>Read the Parent Privacy Disclosure and tap <strong>Agree</strong></li>
              <li>Enter your payment method password when prompted</li>
              <li>Create an Apple ID for your child (usually firstname.lastname@icloud.com)</li>
              <li>Create a password for your child's account</li>
              <li>Choose security questions and answers</li>
              <li>Choose whether to turn on <strong>Ask to Buy</strong> (recommended)</li>
              <li>Tap <strong>Next</strong> until the process is complete</li>
            </ol>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Step 3: Set Up Screen Time</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">After creating the account, configure Screen Time:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to <strong>Settings</strong> {'>>'} <strong>Screen Time</strong></li>
              <li>Tap <strong>Turn On Screen Time</strong> if not already enabled</li>
              <li>Select <strong>This is My Child's [Device]</strong></li>
              <li>Configure the following settings as needed:</li>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li><strong>Downtime:</strong> Schedule time away from the screen</li>
                <li><strong>App Limits:</strong> Set time limits for app categories</li>
                <li><strong>Communication Limits:</strong> Control who your child can communicate with</li>
                <li><strong>Always Allowed:</strong> Apps that are always accessible</li>
                <li><strong>Content &amp; Privacy Restrictions:</strong> Limit adult content and purchases</li>
              </ul>
            </ol>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Step 4: Set Up the Device</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">If setting up a new device for your child:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Turn on the device and follow the setup process</li>
              <li>When prompted to sign in with an Apple ID, use your child's new Apple ID</li>
              <li>Complete the setup process</li>
              <li>Once setup is complete, you can manage their device from your device via Family Sharing</li>
            </ol>
            
            <p className="font-medium mt-4">If adding to an existing device:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Sign out of any existing Apple ID</li>
              <li>Sign in with your child's new Apple ID</li>
              <li>Configure Screen Time settings as described above</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-kid-blue-light">
          <h3 className="flex items-center text-xl font-semibold mb-2 text-kid-blue-dark">
            <Star className="mr-2" size={20} />
            Tips for Success
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Choose a Screen Time passcode that's different from your device passcode</li>
            <li>Explain to your child why you're setting up these controls</li>
            <li>Review Screen Time reports together weekly</li>
            <li>Adjust restrictions as your child matures</li>
            <li>Use this as an opportunity to discuss digital citizenship</li>
          </ul>
        </div>
      </div>
    </InstructionLayout>
  );
};

export default IosChildAccount;
