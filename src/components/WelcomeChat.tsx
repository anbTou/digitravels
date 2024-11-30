import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function WelcomeChat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show dialog after a short delay
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center text-travel-800">
            Welcome to Digi Travels!
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
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
      </DialogContent>
    </Dialog>
  );
}