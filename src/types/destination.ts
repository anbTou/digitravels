export interface Listing {
  title: string;
  location: string;
  price: string;
  image: string;
  discount: string;
  rating: number;
}

export interface Section {
  title: string;
  description: string;
  listings: Listing[];
}

export interface Continent {
  title: string;
  sections: {
    beach: Section;
    mountain: Section;
    urban: Section;
  };
}

export interface Categories {
  [key: string]: Continent;
}