import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function WelcomeChat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show chat after a short delay
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
          <div className="space-y-4">
            <p className="text-travel-600">How can I assist you today?</p>
            <div className="space-y-2 text-travel-700">
              <p>Are you looking for accommodation?</p>
              <p>Where would you like to stay?</p>
              <p>And what are your dates?</p>
            </div>
            <p className="text-travel-600 italic mt-4">
              Share these details with me, and I'll provide you with personalized suggestions!
            </p>
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