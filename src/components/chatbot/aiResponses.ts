
export const getAIResponse = (userMessage: string, conversationHistory: Array<{content: string, isUser: boolean}>): string => {
  const lowercaseMessage = userMessage.toLowerCase();
  
  // Get the last few messages for context
  const recentMessages = conversationHistory.slice(-4); // Last 4 messages
  const conversationContext = recentMessages.map(msg => msg.content.toLowerCase()).join(' ');
  
  // Check if this is a follow-up question by looking at conversation context
  const isFollowUp = recentMessages.length > 2; // More than just the initial greeting
  
  // Gaming-specific responses with context awareness
  if (lowercaseMessage.includes('fortnite') || conversationContext.includes('fortnite')) {
    if (lowercaseMessage.includes('xbox') || lowercaseMessage.includes('playstation') || lowercaseMessage.includes('console')) {
      return `Great! For Fortnite on gaming consoles, here's what I recommend:

• **Enable Console Parental Controls**: Set up parental controls directly on the Xbox/PlayStation to restrict chat, limit spending, and control who can contact your son.

• **Turn Off Voice Chat**: In Fortnite settings, disable voice chat to prevent your son from talking to strangers during matches.

• **Restrict Friend Requests**: Only allow friend requests from people your son knows in real life.

• **Monitor In-Game Purchases**: Fortnite has many cosmetic items for purchase - consider removing payment methods or setting spending limits.

Would you like step-by-step instructions for setting up console parental controls, or do you have questions about any of these safety measures?`;
    }
    
    if (lowercaseMessage.includes('pc') || lowercaseMessage.includes('computer')) {
      return `Perfect! For Fortnite on PC, here are the key safety steps:

• **Epic Games Parental Controls**: Set up parental controls in your son's Epic Games account to restrict chat, purchases, and friend requests.

• **Disable Voice Chat**: Turn off voice chat in Fortnite settings to prevent communication with strangers.

• **Use Steam Family View** (if playing through Steam): This adds an extra layer of content and purchase restrictions.

• **Monitor Friends List**: Regularly check who your son is playing with and discuss only adding real-life friends.

• **Router-Level Filtering**: Since it's on PC, consider setting up content filtering on your home WiFi for additional protection.

Would you like detailed instructions for Epic Games parental controls, or do you need help with any other aspect of PC gaming safety?`;
    }
    
    if (lowercaseMessage.includes('mobile') || lowercaseMessage.includes('phone') || lowercaseMessage.includes('tablet')) {
      return `Excellent! For Fortnite on mobile devices, here's your safety checklist:

• **Device Parental Controls**: Use iOS Screen Time or Android Family Link to limit gaming time and restrict in-app purchases.

• **Epic Games Account Settings**: Disable chat features and friend requests from strangers in the Epic Games account.

• **Remove Payment Methods**: Mobile games make purchases very easy - remove stored payment methods from the app store.

• **Location Services**: Turn off location sharing for Fortnite to protect your son's privacy.

• **Physical Supervision**: Mobile gaming often happens anywhere - establish rules about where and when gaming is allowed.

Do you need help setting up Screen Time/Family Link, or would you like more details about Epic Games account safety settings?`;
    }
    
    // If they mentioned Fortnite but no platform yet
    return `Fortnite safety is definitely important! The specific safety steps depend on what platform your son is playing on. Could you tell me:

• Is he playing on Xbox, PlayStation, Nintendo Switch, PC, or mobile device?

This will help me give you the most relevant safety instructions for protecting him while gaming.`;
  }
  
  // Device-specific follow-ups
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

  // Default response that acknowledges their input
  return `I understand you're asking about "${userMessage}". I'm here to provide specific, actionable safety advice for your family.

To give you the most helpful guidance, could you share a bit more detail? For example:
• What devices or platforms are involved?
• What's your main safety concern?
• How old are your children?

The more specific you can be, the better I can help you create a safer digital environment for your family!`;
};
