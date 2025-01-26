import { SubscriptionHeader } from "./subscription/SubscriptionHeader";
import { PricingCard } from "./subscription/PricingCard";

export const Subscription = () => {
  return (
    <section id="subscribe-section" className="py-12 bg-white">
      <div className="container">
        <SubscriptionHeader />
        <PricingCard />
      </div>
    </section>
  );
};