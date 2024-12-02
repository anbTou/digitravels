import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChatContent } from "./chat/ChatContent";
import { ChatInput } from "./chat/ChatInput";

export function WelcomeChat() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (name.trim() && email.trim() && message.trim()) {
      console.log("Message sent:", { name, email, message });
      setMessage("");
      setShowThankYou(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="bg-travel-600 hover:bg-travel-700 text-white p-3 rounded-full shadow-lg">
            <MessageCircle className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[400px] sm:max-w-[400px] p-6">
          <SheetHeader className="mb-4">
            <SheetTitle className="text-xl font-semibold text-center text-travel-800">
              Welcome to Digi Travels!
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-[calc(100vh-200px)]">
            <div className="flex-grow mb-4">
              <ChatContent showThankYou={showThankYou} />
            </div>
            {!showThankYou && (
              <ChatInput
                name={name}
                email={email}
                message={message}
                onNameChange={setName}
                onEmailChange={setEmail}
                onMessageChange={setMessage}
                onSend={handleSendMessage}
                onKeyPress={handleKeyPress}
              />
            )}
          </div>
          <button 
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
        </SheetContent>
      </Sheet>
    </div>
  );
}