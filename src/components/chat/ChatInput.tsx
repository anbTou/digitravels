import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  name: string;
  email: string;
  message: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onMessageChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function ChatInput({
  name,
  email,
  message,
  onNameChange,
  onEmailChange,
  onMessageChange,
  onSend,
  onKeyPress,
}: ChatInputProps) {
  return (
    <div className="space-y-4 mt-8">
      <Input
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Your name *"
        required
        className="flex-grow"
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder="Your email *"
        required
        className="flex-grow"
      />
      <div className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Type your message... *"
          required
          className="flex-grow"
        />
        <button
          onClick={onSend}
          disabled={!name || !email || !message}
          className="bg-travel-600 hover:bg-travel-700 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}