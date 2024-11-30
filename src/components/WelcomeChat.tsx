import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export function WelcomeChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // Show chat after a short delay
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically handle sending the message
      console.log("Message sent:", message);
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
          <SheetHeader className="mb-6">
            <SheetTitle className="text-xl font-semibold text-center text-travel-800">
              Welcome to Digi Travels!
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-[calc(100%-180px)]">
            <div className="flex-grow space-y-4 overflow-y-auto mb-4">
              {!showThankYou ? (
                <>
                  <p className="text-travel-600">How can I assist you today?</p>
                  <div className="space-y-2 text-travel-700">
                    <p>Are you looking for accommodation?</p>
                    <p>Where would you like to stay?</p>
                    <p>And what are your dates?</p>
                  </div>
                  <p className="text-travel-600 italic mt-4">
                    Share these details with me, and I'll provide you with personalized suggestions!
                  </p>
                </>
              ) : (
                <div className="space-y-4 text-travel-600">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We will get back to you as soon as possible with personalized recommendations.</p>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-auto">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <button
                onClick={handleSendMessage}
                className="bg-travel-600 hover:bg-travel-700 text-white p-2 rounded-full"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
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