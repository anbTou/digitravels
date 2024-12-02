import { Button } from "@/components/ui/button";

interface ChatContentProps {
  showThankYou: boolean;
}

export function ChatContent({ showThankYou }: ChatContentProps) {
  if (showThankYou) {
    return (
      <div className="space-y-4 text-travel-600">
        <p className="font-semibold">Thank you for your message!</p>
        <p>We will get back to you as soon as possible with personalized recommendations.</p>
        <a 
          href="https://www.digitravels.io/agency" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mt-4"
        >
          <Button className="w-full bg-travel-600 hover:bg-travel-700 text-white">
            Explore options and best prices
          </Button>
        </a>
      </div>
    );
  }

  return (
    <>
      <p className="text-black font-medium">How can I assist you today?</p>
      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
        <p className="text-travel-700 flex items-start">
          <span className="mr-2">•</span>
          Are you looking for accommodation?
        </p>
        <p className="text-travel-700 flex items-start">
          <span className="mr-2">•</span>
          Where would you like to stay?
        </p>
        <p className="text-travel-700 flex items-start">
          <span className="mr-2">•</span>
          And what are your dates?
        </p>
      </div>
      <p className="text-travel-600 italic mt-4">
        Share these details with me, and I'll provide you with personalized suggestions!
      </p>
    </>
  );
}