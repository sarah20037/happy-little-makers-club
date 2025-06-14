
import React from 'react';
import { User, Bot, Heart } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`flex items-start gap-3 mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center shadow-md">
          <Heart className="w-5 h-5 text-white" />
        </div>
      )}
      
      <div className={`flex flex-col max-w-xs sm:max-w-md lg:max-w-lg ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`px-4 py-3 rounded-2xl shadow-sm ${
            isUser
              ? 'message-bubble-user text-white rounded-br-md'
              : 'message-bubble-bot text-gray-800 rounded-bl-md'
          }`}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        
        <span className="text-xs text-gray-500 mt-1 px-2">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-md">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
