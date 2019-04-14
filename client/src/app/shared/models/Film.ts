import {Review} from './Review';

export class Film {
  id: number;
  title: string;
  theatricalRelease: Date;
  duration: number;
  genre: string;
  reviews: Review[];
  rating: number;
}
