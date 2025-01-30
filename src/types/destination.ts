export interface Listing {
  title: string;
  location: string;
  price: string;
  image: string;
  discount: string;
  rating: number;
  bookingLink?: string;
}

export interface Destination {
  title: string;
  description: string;
  listings: Listing[];
  note?: string;
}

export interface Categories {
  [key: string]: Destination;
}