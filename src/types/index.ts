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
  image: string;
}

export interface ServiceLocation {
  city: string;
  areas: string[];
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}