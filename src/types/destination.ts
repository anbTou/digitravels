export interface Listing {
  title: string;
  location: string;
  price: string;
  image: string;
  discount: string;
  rating: number;
}

export interface Destination {
  title: string;
  description: string;
  listings: Listing[];
}

export interface Categories {
  [key: string]: Destination;
}