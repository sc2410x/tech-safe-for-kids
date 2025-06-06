
import React from 'react';
import { cn } from '@/lib/utils';
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
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
  );
};

export default ChatMessage;
