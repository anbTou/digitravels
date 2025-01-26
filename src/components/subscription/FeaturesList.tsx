import { Check } from "lucide-react";

export const FeaturesList = () => {
  const features = [
    "14 days trial",
    "No booking fees",
    "Exclusive hotel rates",
    "Premium customer support",
    "Cancel anytime",
  ];

  return (
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-green-500" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};