
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import QuickStartPrompts from './QuickStartPrompts';
import { Card } from '@/components/ui/card';
import { Sparkles, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const MentalHealthBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 'welcome',
      text: "Hello! I'm here to provide a supportive space for you to share your thoughts and feelings. I can offer gentle guidance, suggest coping strategies, and help you work through what's on your mind. How are you feeling today?",
      isUser: false,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  const generateEmpathethicResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Responses for different emotional states and concerns
    if (lowerMessage.includes('overwhelmed') || lowerMessage.includes('stressed')) {
      return "I hear that you're feeling overwhelmed, and that sounds really challenging. When we feel this way, it can help to break things down into smaller, manageable pieces. Try taking three deep breaths with me: breathe in for 4 counts, hold for 4, and breathe out for 6. What's one small thing you could focus on right now that might feel more manageable?";
    }
    
    if (lowerMessage.includes('sleep') || lowerMessage.includes('tired') || lowerMessage.includes('insomnia')) {
      return "Sleep troubles can be so draining and affect everything else in our lives. I understand how frustrating this must be. Some gentle strategies that might help include creating a calming bedtime routine, avoiding screens an hour before bed, and trying progressive muscle relaxation. Have you noticed any patterns in what might be keeping you awake?";
    }
    
    if (lowerMessage.includes('motivated') || lowerMessage.includes('motivation') || lowerMessage.includes('lazy')) {
      return "It's completely normal to go through periods where motivation feels low. You're not alone in this, and it doesn't mean anything is wrong with you. Sometimes starting with the tiniest step can help - even just making your bed or going for a 5-minute walk. What's one small thing that usually brings you a bit of joy or accomplishment?";
    }
    
    if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('worried')) {
      return "Anxiety can feel so overwhelming, but I want you to know that what you're experiencing is valid and you're not alone. One technique that many find helpful is the 5-4-3-2-1 grounding method: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This can help bring you back to the present moment. What's causing you the most worry right now?";
    }
    
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      return "I'm sorry you're going through a difficult time. Your feelings are completely valid, and it takes courage to reach out. Sometimes when we're feeling low, small acts of self-care can help - like having a warm drink, listening to music you love, or spending a few minutes in nature. Remember that these feelings are temporary, even when they don't feel that way. What has helped you feel a little better in the past?";
    }
    
    if (lowerMessage.includes('lonely') || lowerMessage.includes('alone') || lowerMessage.includes('isolated')) {
      return "Feeling lonely can be one of the most difficult emotions to experience. Please know that you matter and that reaching out here shows real strength. Even small connections can help - whether it's chatting with a neighbor, calling a family member, or even just smiling at someone you pass by. Is there someone in your life you feel comfortable reaching out to, even if it's been a while?";
    }
    
    if (lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('career')) {
      return "Work-related stress is so common, and it sounds like you're dealing with some real challenges there. It's important to remember that your worth isn't defined by your productivity or job performance. Consider setting small, achievable goals for your workday and celebrating when you complete them. Taking short breaks throughout the day can also help. What aspect of work feels most challenging right now?";
    }
    
    if (lowerMessage.includes('family') || lowerMessage.includes('relationship') || lowerMessage.includes('friends')) {
      return "Relationships can be both our greatest source of joy and sometimes our biggest challenges. It sounds like you're navigating something difficult with people who are important to you. Remember that healthy boundaries are important for everyone involved. Communication, even when it's hard, often helps. What would feel like a positive step forward in this situation?";
    }
    
    // Positive responses
    if (lowerMessage.includes('better') || lowerMessage.includes('good') || lowerMessage.includes('happy') || lowerMessage.includes('great')) {
      return "I'm so glad to hear you're feeling better! It's wonderful that you're taking the time to notice and appreciate the positive moments. These feelings are just as important to acknowledge as the difficult ones. What do you think has contributed to feeling this way? It might be helpful to remember these strategies for future tough days.";
    }
    
    // Default empathetic response
    return "Thank you for sharing that with me. It takes courage to open up about what you're experiencing. I'm here to listen and support you through this. Sometimes just expressing our thoughts and feelings can be the first step toward feeling better. Can you tell me more about what's been on your mind lately? Remember, there's no judgment here - this is a safe space for you.";
  };

  const handleSendMessage = async (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate thinking time for more natural conversation
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Generate empathetic response
    const botResponse = generateEmpathethicResponse(messageText);
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handlePromptSelect = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const showQuickPrompts = messages.length <= 1;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Mental Health Companion</h1>
              <p className="text-sm text-gray-600">Your supportive AI friend</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-green-50 px-3 py-2 rounded-full">
            <Shield className="w-3 h-3" />
            <span>Safe & Confidential</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Quick Start Prompts */}
          <QuickStartPrompts 
            onPromptSelect={handlePromptSelect}
            isVisible={showQuickPrompts}
          />
          
          {/* Messages */}
          <div className="p-4 space-y-1">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="message-bubble-bot px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-gray-500">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      
      {/* Disclaimer */}
      <div className="bg-amber-50 border-t border-amber-200 p-3">
        <p className="text-xs text-amber-800 text-center max-w-4xl mx-auto">
          <Shield className="w-3 h-3 inline mr-1" />
          This is an AI companion for supportive conversations. For urgent mental health concerns, please contact a healthcare professional or crisis helpline.
        </p>
      </div>
    </div>
  );
};

export default MentalHealthBot;
