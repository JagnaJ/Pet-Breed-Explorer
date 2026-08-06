export interface Breed {
  id: string | number;
  name: string;
  temperament?: string;
  origin?: string;
  life_span?: string;
  description?: string;
  image?: {
    url: string;
  };
}