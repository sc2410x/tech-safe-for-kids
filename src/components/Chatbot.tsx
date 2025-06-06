
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your TechSafe assistant. I can help you with online safety questions or direct you to the right resources. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(currentInput),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={cn(
            "rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-kid-purple to-kid-blue hover:shadow-xl transition-all duration-300 transform hover:scale-110",
            isOpen && "hidden"
          )}
          size="icon"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)]">
          <Card className="h-full flex flex-col shadow-2xl border-0 bg-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-kid-purple to-kid-blue text-white flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="h-6 w-6" />
                  <CardTitle className="text-lg">TechSafe Assistant</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              {/* Messages Container with proper scrolling */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex w-full",
                      message.isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-lg px-3 py-2 text-sm break-words",
                        message.isUser
                          ? "bg-kid-blue text-white"
                          : "bg-gray-100 text-gray-800"
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start w-full">
                    <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input Area */}
              <div className="border-t p-4 flex-shrink-0">
                <div className="flex gap-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about online safety..."
                    className="flex-1 min-h-[40px] max-h-[100px] resize-none text-sm"
                    rows={1}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-kid-blue hover:bg-kid-blue/90 flex-shrink-0"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;
