
export const getAIResponse = (userMessage: string): string => {
  const lowercaseMessage = userMessage.toLowerCase();
  
  // More specific pattern matching with better responses
  const patterns = [
    {
      keywords: ['wifi', 'router', 'password', 'network', 'internet connection'],
      response: `Great question about WiFi safety! Based on "${userMessage}", I recommend checking our WiFi Safety section. You can learn how to secure your home network, change router passwords, and set up content filtering. This will help protect all devices connected to your home network.`
    },
    {
      keywords: ['phone', 'tablet', 'ipad', 'android', 'ios', 'device', 'screen time', 'parental controls'],
      response: `I can help with device safety! For "${userMessage}", our Device Safety section has comprehensive guides. You'll find step-by-step instructions for setting up parental controls on both iOS and Android devices, managing screen time, and configuring content restrictions.`
    },
    {
      keywords: ['app', 'tiktok', 'instagram', 'snapchat', 'youtube', 'social media', 'games'],
      response: `App safety is crucial! Regarding "${userMessage}", our App Safety section provides detailed guidance on monitoring apps, understanding age ratings, and setting up safety controls for popular platforms like TikTok, Instagram, and YouTube.`
    },
    {
      keywords: ['parent helper', 'recommendations', 'personalized', 'advice', 'what should i do'],
      response: `Perfect! For personalized guidance about "${userMessage}", try our Parent Helper tool. It provides customized safety recommendations based on your specific devices, concerns, and family situation. It's like having a personal safety consultant!`
    },
    {
      keywords: ['predator', 'stranger', 'dangerous', 'unsafe', 'online safety', 'protection'],
      response: `Online safety is our top priority. For concerns like "${userMessage}", check our Resources section which covers how to talk to children about online strangers, recognize warning signs, and create a safe digital environment for your family.`
    },
    {
      keywords: ['how do i', 'help me', 'step by step', 'tutorial', 'guide'],
      response: `I'd be happy to guide you! For "${userMessage}", I can direct you to the most relevant section. Could you tell me more specifically what device or platform you're working with? This will help me point you to the exact step-by-step instructions you need.`
    },
    {
      keywords: ['child account', 'family sharing', 'kids account'],
      response: `Creating safe accounts for children is essential! For "${userMessage}", check our instruction guides on setting up iOS Child Accounts or Android Family Link accounts. These provide age-appropriate restrictions and monitoring capabilities.`
    },
    {
      keywords: ['content filtering', 'block websites', 'inappropriate content'],
      response: `Content filtering is a great safety measure! For "${userMessage}", our Content Filtering guide shows you how to block inappropriate websites and content across different devices and platforms. This works at both the router level and individual device level.`
    }
  ];

  // Find the best matching pattern
  for (const pattern of patterns) {
    if (pattern.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
      return pattern.response;
    }
  }

  // Enhanced default response that acknowledges their specific question
  return `Thanks for asking about "${userMessage}". I'm here to help with online safety! I can assist with WiFi security, device parental controls, app safety monitoring, and general protection strategies. Could you be more specific about which area you'd like help with? For example: "How do I set up parental controls on an iPhone?" or "How do I secure my home WiFi?"`;
};
