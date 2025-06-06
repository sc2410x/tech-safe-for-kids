
export const getAIResponse = (userMessage: string, conversationHistory: Array<{content: string, isUser: boolean}>): string => {
  const lowercaseMessage = userMessage.toLowerCase();
  
  // Get the last few messages for context
  const recentMessages = conversationHistory.slice(-4); // Last 4 messages
  const conversationContext = recentMessages.map(msg => msg.content.toLowerCase()).join(' ');
  
  // Check if this is a follow-up question by looking at conversation context
  const isFollowUp = recentMessages.length > 2; // More than just the initial greeting
  
  // Intelligent platform detection with variations and misspellings
  const detectPlatform = (message: string): string | null => {
    const msg = message.toLowerCase().trim();
    
    // Xbox variations
    if (msg.includes('xbox') || msg.includes('x box') || msg.includes('xb') || 
        msg.match(/xbox\s*(one|series|360)/i) || msg.includes('microsoft console')) {
      return 'xbox';
    }
    
    // PlayStation variations
    if (msg.includes('playstation') || msg.includes('play station') || msg.includes('ps5') || 
        msg.includes('ps4') || msg.includes('ps3') || msg.includes('pstation') || 
        msg.includes('sony') || msg.match(/play\s*station/i)) {
      return 'playstation';
    }
    
    // Nintendo Switch variations
    if (msg.includes('nintendo') || msg.includes('switch') || msg.includes('nintedo') || 
        msg.includes('nitendo') || msg.includes('nin switch') || msg.includes('n switch') ||
        msg.includes('nintendo switch') || msg.match(/nin.*switch/i)) {
      return 'nintendo_switch';
    }
    
    // PC variations
    if (msg.includes('pc') || msg.includes('computer') || msg.includes('desktop') || 
        msg.includes('laptop') || msg.includes('windows') || msg.includes('mac') ||
        msg.includes('steam') || msg.includes('epic games')) {
      return 'pc';
    }
    
    // Mobile variations
    if (msg.includes('phone') || msg.includes('mobile') || msg.includes('tablet') || 
        msg.includes('iphone') || msg.includes('ipad') || msg.includes('android') ||
        msg.includes('ios') || msg.includes('samsung') || msg.includes('cell phone')) {
      return 'mobile';
    }
    
    return null;
  };

  // Gaming-specific responses with context awareness and platform detection
  if (lowercaseMessage.includes('fortnite') || conversationContext.includes('fortnite')) {
    const detectedPlatform = detectPlatform(lowercaseMessage);
    
    // Handle platform-specific responses
    if (detectedPlatform === 'xbox' || detectedPlatform === 'playstation') {
      const consoleName = detectedPlatform === 'xbox' ? 'Xbox' : 'PlayStation';
      return `Great! I can see you mentioned ${consoleName}. For Fortnite on ${consoleName}, here's what I recommend:

• **Enable Console Parental Controls**: Set up parental controls directly on the ${consoleName} to restrict chat, limit spending, and control who can contact your son.

• **Turn Off Voice Chat**: In Fortnite settings, disable voice chat to prevent your son from talking to strangers during matches.

• **Restrict Friend Requests**: Only allow friend requests from people your son knows in real life.

• **Monitor In-Game Purchases**: Fortnite has many cosmetic items for purchase - consider removing payment methods or setting spending limits.

Would you like step-by-step instructions for setting up ${consoleName} parental controls, or do you have questions about any of these safety measures?`;
    }
    
    if (detectedPlatform === 'nintendo_switch') {
      return `Perfect! I understand you're asking about Nintendo Switch. For Fortnite on Nintendo Switch, here are the essential safety steps:

• **Nintendo Switch Parental Controls App**: Download the free Nintendo Switch Parental Controls app on your phone to monitor and control your son's gaming time and spending.

• **Disable Voice Chat**: In Fortnite settings, turn off voice chat to prevent communication with strangers during matches.

• **Nintendo Account Settings**: Set up a child account linked to your family group, which gives you control over friend requests and communication.

• **eShop Purchase Restrictions**: Remove saved payment methods or set up purchase approval requirements to prevent unauthorized V-Bucks purchases.

• **Friend Code Privacy**: Teach your son never to share his Nintendo Switch friend code with strangers online.

Would you like detailed steps for setting up the Nintendo Switch Parental Controls app, or do you need help with any specific safety setting?`;
    }
    
    if (detectedPlatform === 'pc') {
      return `I see you're asking about PC gaming! For Fortnite on PC, here are the key safety steps:

• **Epic Games Parental Controls**: Set up parental controls in your son's Epic Games account to restrict chat, purchases, and friend requests.

• **Disable Voice Chat**: Turn off voice chat in Fortnite settings to prevent communication with strangers.

• **Use Steam Family View** (if playing through Steam): This adds an extra layer of content and purchase restrictions.

• **Monitor Friends List**: Regularly check who your son is playing with and discuss only adding real-life friends.

• **Router-Level Filtering**: Since it's on PC, consider setting up content filtering on your home WiFi for additional protection.

Would you like detailed instructions for Epic Games parental controls, or do you need help with any other aspect of PC gaming safety?`;
    }
    
    if (detectedPlatform === 'mobile') {
      return `Got it - you're asking about mobile gaming! For Fortnite on mobile devices, here's your safety checklist:

• **Device Parental Controls**: Use iOS Screen Time or Android Family Link to limit gaming time and restrict in-app purchases.

• **Epic Games Account Settings**: Disable chat features and friend requests from strangers in the Epic Games account.

• **Remove Payment Methods**: Mobile games make purchases very easy - remove stored payment methods from the app store.

• **Location Services**: Turn off location sharing for Fortnite to protect your son's privacy.

• **Physical Supervision**: Mobile gaming often happens anywhere - establish rules about where and when gaming is allowed.

Do you need help setting up Screen Time/Family Link, or would you like more details about Epic Games account safety settings?`;
    }
    
    // If context suggests they answered a platform question but we didn't detect it clearly
    if (isFollowUp && conversationContext.includes('what platform') && !detectedPlatform) {
      return `I want to make sure I understand correctly - it sounds like you mentioned a gaming platform, but I want to give you the most accurate advice. 

Could you clarify which device your son uses to play Fortnite? For example:
• **Xbox** (Xbox One, Xbox Series X/S)
• **PlayStation** (PS4, PS5) 
• **Nintendo Switch**
• **PC/Computer** (Windows, Mac)
• **Mobile** (iPhone, iPad, Android phone/tablet)

Once I know the exact platform, I can give you step-by-step safety instructions specifically for that device.`;
    }
    
    // If they mentioned Fortnite but no platform detected yet
    if (!detectedPlatform) {
      return `Fortnite safety is definitely important! The specific safety steps depend on what platform your son is playing on. Could you tell me:

• Is he playing on **Xbox, PlayStation, Nintendo Switch, PC, or mobile device**?

This will help me give you the most relevant safety instructions for protecting him while gaming.`;
    }
  }
  
  // Device-specific follow-ups with better detection
  if (isFollowUp && (lowercaseMessage.includes('iphone') || lowercaseMessage.includes('ipad') || conversationContext.includes('ios'))) {
    if (lowercaseMessage.includes('screen time') || lowercaseMessage.includes('set up') || lowercaseMessage.includes('how')) {
      return `Here's how to set up Screen Time on your child's iOS device:

1. **Open Settings** → **Screen Time** → **Turn On Screen Time**
2. **Choose "This is My Child's Device"** or set up Family Sharing
3. **Set a Screen Time Passcode** (different from device passcode)
4. **Go to Content & Privacy Restrictions** → **Enable restrictions**
5. **Set App Limits** for games, social media, etc.
6. **Configure Downtime** for bedtime/homework hours

For detailed step-by-step instructions with screenshots, check our iOS Screen Time guide. Would you like help with any specific part of this setup?`;
    }
  }
  
  if (isFollowUp && (lowercaseMessage.includes('android') || lowercaseMessage.includes('family link') || conversationContext.includes('android'))) {
    if (lowercaseMessage.includes('set up') || lowercaseMessage.includes('how') || lowercaseMessage.includes('install')) {
      return `Here's how to set up Google Family Link for Android safety:

1. **Download Family Link** on both your phone and your child's device
2. **Create a Google Account** for your child (if under 13)
3. **Link the accounts** using the Family Link setup process
4. **Set app approval requirements** so new downloads need your permission
5. **Configure screen time limits** and bedtime restrictions
6. **Enable location tracking** to see where your child's device is

Our Android Family Link guide has detailed instructions with screenshots. Do you need help with any specific step, or have questions about the features?`;
    }
  }
  
  // Nintendo Switch follow-ups
  if (isFollowUp && (conversationContext.includes('nintendo') || conversationContext.includes('switch'))) {
    if (lowercaseMessage.includes('how') || lowercaseMessage.includes('set up') || lowercaseMessage.includes('app') || lowercaseMessage.includes('parental controls')) {
      return `Here's how to set up Nintendo Switch Parental Controls:

1. **Download the Nintendo Switch Parental Controls app** on your smartphone
2. **Create or sign in** to your Nintendo Account
3. **Link your Switch console** by scanning the QR code or entering the registration code
4. **Set time limits** for daily play time
5. **Restrict games by age rating** (ESRB ratings)
6. **Control communication features** and social media posting
7. **Set bedtime alarms** to remind when it's time to stop playing

The app also sends you monthly reports about your child's gaming habits. Would you like help with any specific setting or have questions about monitoring features?`;
    }
  }
  
  // WiFi-related follow-ups
  if (isFollowUp && (conversationContext.includes('wifi') || conversationContext.includes('router'))) {
    if (lowercaseMessage.includes('how') || lowercaseMessage.includes('set up') || lowercaseMessage.includes('change')) {
      return `Here's how to improve your WiFi security:

**First Priority - Router Password:**
1. Open your web browser and go to your router's admin page (usually 192.168.1.1)
2. Log in with current admin credentials
3. Look for "Wireless Security" or "WiFi Settings"
4. Change both the admin password and WiFi password to strong, unique passwords

**Content Filtering Setup:**
• Most routers have built-in parental controls in the admin settings
• Look for "Parental Controls," "Access Restrictions," or "Content Filtering"
• You can block specific websites or categories of content

Would you like the detailed step-by-step guide for router password changes, or do you need help finding your router's admin page?`;
    }
  }
  
  // General patterns with better context awareness
  const patterns = [
    {
      keywords: ['wifi', 'router', 'password', 'network', 'internet connection'],
      response: `WiFi security is crucial for protecting your family online! Here's what I recommend:

• **Change default router passwords** - most people never change these!
• **Set up content filtering** to block inappropriate websites automatically
• **Create a guest network** for visitors and smart devices
• **Enable parental controls** directly on your router

What specific aspect would you like help with first - changing router passwords, setting up content filtering, or something else?`
    },
    {
      keywords: ['phone', 'tablet', 'ipad', 'android', 'ios', 'device', 'screen time', 'parental controls'],
      response: `Device safety is so important! I can help you set up proper protections. 

For the best guidance, could you tell me:
• What type of device (iPhone, iPad, Android phone/tablet)?
• What's your main concern (screen time, inappropriate content, app downloads, or something else)?

This way I can give you specific, actionable steps rather than generic advice.`
    },
    {
      keywords: ['app', 'tiktok', 'instagram', 'snapchat', 'youtube', 'social media', 'games'],
      response: `App safety requires a multi-layered approach! Different apps have different risks:

• **Social media apps** (TikTok, Instagram) - privacy settings and age verification
• **Gaming apps** - chat features and in-app purchases  
• **Video apps** (YouTube) - content filtering and restricted mode

Which specific app or type of app are you most concerned about? I can give you detailed safety steps for that particular platform.`
    }
  ];

  // Find matching pattern
  for (const pattern of patterns) {
    if (pattern.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
      return pattern.response;
    }
  }

  // Default response that acknowledges their input and asks for clarification
  return `I understand you're asking about "${userMessage}". I'm here to provide specific, actionable safety advice for your family.

To give you the most helpful guidance, could you share a bit more detail? For example:
• What devices or platforms are involved?
• What's your main safety concern?
• How old are your children?

The more specific you can be, the better I can help you create a safer digital environment for your family!`;
};
