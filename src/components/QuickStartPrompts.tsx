
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Moon, Zap, Heart } from 'lucide-react';

interface QuickStartPromptsProps {
  onPromptSelect: (prompt: string) => void;
  isVisible: boolean;
}

const QuickStartPrompts: React.FC<QuickStartPromptsProps> = ({ onPromptSelect, isVisible }) => {
  const prompts = [
    {
      text: "I feel overwhelmed with my studies",
      icon: Brain,
      color: "from-purple-400 to-purple-500"
    },
    {
      text: "I'm not sleeping well these days",
      icon: Moon,
      color: "from-indigo-400 to-indigo-500"
    },
    {
      text: "I don't feel motivated to go to work",
      icon: Zap,
      color: "from-orange-400 to-orange-500"
    },
    {
      text: "I'm feeling anxious about the future",
      icon: Heart,
      color: "from-pink-400 to-pink-500"
    }
  ];

  if (!isVisible) return null;

  return (
    <Card className="p-6 m-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          How are you feeling today?
        </h3>
        <p className="text-sm text-gray-600">
          Choose a topic to start our conversation, or type your own message below.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prompts.map((prompt, index) => {
          const IconComponent = prompt.icon;
          return (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 text-left bg-white hover:bg-gray-50 border-gray-200 transition-all duration-200 hover:shadow-md"
              onClick={() => onPromptSelect(prompt.text)}
            >
              <div className="flex items-center gap-3 w-full">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${prompt.color} flex-shrink-0`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">
                  "{prompt.text}"
                </span>
              </div>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};

export default QuickStartPrompts;
