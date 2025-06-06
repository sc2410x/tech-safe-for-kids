
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isDisabled: boolean;
}

const ChatInput = ({ value, onChange, onSend, onKeyPress, isDisabled }: ChatInputProps) => {
  return (
    <div className="border-t p-4 flex-shrink-0">
      <div className="flex gap-2">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Ask me about online safety..."
          className="flex-1 min-h-[40px] max-h-[100px] resize-none text-sm"
          rows={1}
        />
        <Button
          onClick={onSend}
          disabled={isDisabled}
          className="bg-kid-blue hover:bg-kid-blue/90 flex-shrink-0"
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
