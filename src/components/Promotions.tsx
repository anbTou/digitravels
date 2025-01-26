import { PromotionCard } from "./promotions/PromotionCard";
import { PromotionsHeader } from "./promotions/PromotionsHeader";
import { ViewMoreButton } from "./promotions/ViewMoreButton";

const promotionsData = [
  {
    image: "/lovable-uploads/275fe9a9-4b15-4590-a867-fd7732f8b60a.png",
    discount: "40% off",
    title: "Hotel Mousai Ocean Front",
    location: "Mexico",
    price: "From $780/night",
    bookingUrl: "https://booking.digitravels.io/url/e8f52a7f-0814-4c79-bb86-66899518b897",
  },
  {
    image: "/lovable-uploads/6305321c-f462-45b5-887e-ef0b91391ccd.png",
    discount: "63% off",
    title: "Hotel Mousai - All Inclusive",
    location: "Mexico",
    price: "From $680/night",
    bookingUrl: "https://booking.digitravels.io/url/5301f54a-898b-4b00-8b04-acee89d7d8ab",
  },
  {
    image: "/lovable-uploads/816bcbbb-2dd0-4f9d-bda1-57d8ed69db6e.png",
    discount: "55% off",
    title: "SLS Cancun",
    location: "Mexico",
    price: "From $225/night",
    bookingUrl: "https://booking.digitravels.io/url/5292643b-0957-4878-9842-98fc9d635488",
  },
];

export const Promotions = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <PromotionsHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotionsData.map((promotion, index) => (
            <PromotionCard key={index} index={index} {...promotion} />
          ))}
        </div>
        <ViewMoreButton />
      </div>
    </section>
  );
};