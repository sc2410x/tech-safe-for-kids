
import React from 'react';
import { Lock } from 'lucide-react';
import InstructionLayout from '@/components/InstructionLayout';

const ChangeRouterPassword = () => {
  return (
    <InstructionLayout 
      title="Change Default Router Passwords"
      subtitle="Most routers come with default usernames and passwords that are easy to guess. Changing them is an essential first step in securing your home network."
      icon={<Lock size={120} className="text-kid-blue" />}
      backLink="/wifi"
      backText="WiFi Safety"
      color="blue"
    >
      <div className="space-y-8">
        <div className="bg-kid-blue-light/30 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Why is this important?</h2>
          <p>Default router passwords are often publicly available online. If not changed, anyone within range of your WiFi could potentially access your router settings and:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Change your network settings</li>
            <li>Monitor your internet traffic</li>
            <li>Use your internet connection for illegal activities</li>
            <li>Access shared files and devices on your network</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Instructions</h2>
          
          <ol className="space-y-6">
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Find your router's IP address</h3>
                  <p className="text-gray-700 mb-3">Look for a sticker on your router that shows the default IP address (often 192.168.0.1 or 192.168.1.1), along with the default username and password.</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600"><strong>Tip:</strong> If you can't find this information, check the router's manual or search online for "[Your Router Brand] default login".</p>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Access your router's admin panel</h3>
                  <p className="text-gray-700 mb-3">Open a web browser and type the IP address in the address bar. Log in using the default username and password.</p>
                  <img 
                    src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2370&auto=format&fit=crop" 
                    alt="Router login screen" 
                    className="w-full max-w-md rounded-lg shadow-md mb-3"
                  />
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600"><strong>Common login credentials:</strong> Username: "admin" and Password: "admin" or "password"</p>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Navigate to password settings</h3>
                  <p className="text-gray-700 mb-3">Look for "Administration," "System," "Password," or similar sections in the menu. Each router brand organizes their settings differently.</p>
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Create strong passwords</h3>
                  <p className="text-gray-700 mb-3">Change both the admin password (for router access) and the WiFi password (for network access). Use different strong passwords for each.</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600"><strong>Strong password tips:</strong> Use at least 12 characters with a mix of uppercase and lowercase letters, numbers, and special characters. Avoid using easily guessable information like birthdays or names.</p>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">5</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Save your changes</h3>
                  <p className="text-gray-700 mb-3">Click "Apply," "Save," or "OK" to save your changes. The router may reboot automatically.</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600"><strong>Important:</strong> Store your new passwords securely - consider using a password manager or writing them down and keeping them in a safe place.</p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </InstructionLayout>
  );
};

export default ChangeRouterPassword;
