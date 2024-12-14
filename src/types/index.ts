export interface EVBrand {
  id: string;
  name: string;
  models: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface ServiceLocation {
  city: string;
  areas: string[];
}