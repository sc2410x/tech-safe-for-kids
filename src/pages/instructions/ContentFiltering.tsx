
import React from 'react';
import { Shield } from 'lucide-react';
import InstructionLayout from '@/components/InstructionLayout';

const ContentFiltering = () => {
  return (
    <InstructionLayout 
      title="Router Content Filtering"
      subtitle="Learn how to enable content filtering through your router to block inappropriate websites across all devices on your home network."
      icon={<Shield size={120} className="text-kid-blue" />}
      backLink="/wifi"
      backText="WiFi Safety"
      color="blue"
    >
      <div className="space-y-8">
        <div className="bg-kid-blue-light/30 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Why use router-based content filtering?</h2>
          <p className="mb-2">Content filtering at the router level offers several advantages:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Applies to <strong>all devices</strong> connected to your home network</li>
            <li>Cannot be easily bypassed by children</li>
            <li>Protects devices that don't support their own parental controls</li>
            <li>Requires setup only once (vs. setting up on each device)</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">General Instructions</h2>
          <p className="mb-4 text-gray-600">Router interfaces vary widely by manufacturer and model. Below are general instructions that apply to most routers, but you may need to consult your router's manual for specific steps.</p>
          
          <ol className="space-y-6">
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Access your router's admin panel</h3>
                  <p className="text-gray-700 mb-3">Open a web browser and enter your router's IP address (typically 192.168.0.1 or 192.168.1.1). Log in with your admin username and password.</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600"><strong>Note:</strong> If you haven't changed your router's default password yet, see the "Change Default Router Passwords" guide first.</p>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Locate the content filtering settings</h3>
                  <p className="text-gray-700 mb-3">Look for options labeled "Parental Controls," "Access Restrictions," "Content Filtering," "Website Filtering," or similar. These options are often found under security settings.</p>
                  <img 
                    src="https://images.unsplash.com/photo-1614064548237-096d7a417aca?q=80&w=2370&auto=format&fit=crop" 
                    alt="Router settings interface" 
                    className="w-full max-w-md rounded-lg shadow-md mb-3"
                  />
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Enable content filtering</h3>
                  <p className="text-gray-700 mb-3">Turn on the content filtering feature. Depending on your router, you'll typically have several options:</p>
                  <ul className="list-disc ml-6 mb-3 space-y-1">
                    <li>Select preset filtering levels (e.g., High, Medium, Low)</li>
                    <li>Choose content categories to block (e.g., Adult, Violence, Gambling)</li>
                    <li>Enter specific websites to block or allow</li>
                    <li>Set up a whitelist (only allowed websites) or blacklist (blocked websites)</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600"><strong>Recommendation:</strong> For younger children, block all potentially inappropriate categories. For teens, consider a more targeted approach focusing on high-risk categories.</p>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Configure schedules (if available)</h3>
                  <p className="text-gray-700 mb-3">Many routers allow you to set specific times when content filtering is active. This can be useful for implementing internet "bedtimes" or limiting usage during certain hours.</p>
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">5</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Save your settings</h3>
                  <p className="text-gray-700 mb-3">Click "Apply," "Save," or "OK" to activate your content filtering settings.</p>
                </div>
              </div>
            </li>
            
            <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start">
                <span className="bg-kid-blue text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">6</span>
                <div>
                  <h3 className="text-xl font-medium mb-2">Test your filters</h3>
                  <p className="text-gray-700 mb-3">Try accessing a few websites that should be blocked by your filters to verify they're working properly. Make adjustments as needed.</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600"><strong>Important:</strong> No content filter is 100% effective. Regular supervision and open discussions about online safety remain important.</p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="text-lg font-medium text-yellow-800 mb-2">Popular Router Brands</h3>
          <p className="mb-2">For brand-specific instructions, visit these manufacturer websites:</p>
          <ul className="space-y-1 text-gray-700">
            <li><strong>Netgear:</strong> <a href="https://www.netgear.com/support/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">netgear.com/support</a></li>
            <li><strong>Linksys:</strong> <a href="https://www.linksys.com/support/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linksys.com/support</a></li>
            <li><strong>TP-Link:</strong> <a href="https://www.tp-link.com/support/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tp-link.com/support</a></li>
            <li><strong>Asus:</strong> <a href="https://www.asus.com/support/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">asus.com/support</a></li>
          </ul>
        </div>
      </div>
    </InstructionLayout>
  );
};

export default ContentFiltering;
