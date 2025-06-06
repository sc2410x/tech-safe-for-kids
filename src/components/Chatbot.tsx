
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
    
    // WiFi Safety responses
    if (lowercaseMessage.includes('wifi') || lowercaseMessage.includes('router') || lowercaseMessage.includes('password')) {
      return "For WiFi safety, I recommend checking our WiFi Safety section. You can learn how to change your router password, set up content filtering, and secure your home network. Would you like me to direct you there?";
    }
    
    // Device Safety responses
    if (lowercaseMessage.includes('device') || lowercaseMessage.includes('phone') || lowercaseMessage.includes('tablet') || lowercaseMessage.includes('computer')) {
      return "Device safety is crucial for protecting your children online. Our Device Safety section covers parental controls for iOS and Android devices, screen time management, and content restrictions. Should I take you to the device safety guides?";
    }
    
    // App Safety responses
    if (lowercaseMessage.includes('app') || lowercaseMessage.includes('social media') || lowercaseMessage.includes('tiktok') || lowercaseMessage.includes('instagram') || lowercaseMessage.includes('snapchat')) {
      return "App safety is very important! Our App Safety section provides guidance on monitoring apps, understanding age ratings, and setting up parental controls for popular social media platforms. Want to explore our app safety resources?";
    }
    
    // Parent Helper responses
    if (lowercaseMessage.includes('help') || lowercaseMessage.includes('guidance') || lowercaseMessage.includes('advice') || lowercaseMessage.includes('recommend')) {
      return "Our Parent Helper tool can provide personalized safety recommendations based on your specific device and concerns. It's like having a personal safety consultant! Would you like to try the Parent Helper?";
    }
    
    // Screen time responses
    if (lowercaseMessage.includes('screen time') || lowercaseMessage.includes('time limit') || lowercaseMessage.includes('usage')) {
      return "Screen time management is essential for healthy digital habits. I can guide you to our device-specific instructions for setting up screen time controls on iOS and Android devices. Which device type are you using?";
    }
    
    // Online predators/safety concerns
    if (lowercaseMessage.includes('predator') || lowercaseMessage.includes('stranger') || lowercaseMessage.includes('dangerous') || lowercaseMessage.includes('unsafe')) {
      return "Online safety from predators is a serious concern. Our resources cover how to talk to children about online strangers, recognize warning signs, and set up proper privacy settings. Check our Resources section for comprehensive guides on this topic.";
    }
    
    // General safety
    if (lowercaseMessage.includes('safe') || lowercaseMessage.includes('protect') || lowercaseMessage.includes('security')) {
      return "Online safety involves multiple layers of protection. I recommend starting with our WiFi Safety guides, then setting up device controls, and finally reviewing app-specific safety measures. Which area would you like to focus on first?";
    }
    
    // Default response
    return "I'm here to help with online safety questions! I can assist with WiFi security, device safety controls, app monitoring, and general online protection strategies. What specific area would you like help with?";
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
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(userMessage.content),
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
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px]">
          <Card className="h-full flex flex-col shadow-2xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-kid-purple to-kid-blue text-white rounded-t-lg">
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
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.isUser ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-3 py-2 text-sm",
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
                  <div className="flex justify-start">
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
              
              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about online safety..."
                    className="flex-1 min-h-[40px] max-h-[100px] resize-none"
                    rows={1}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-kid-blue hover:bg-kid-blue/90"
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
