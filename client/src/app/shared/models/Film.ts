import {Creator} from './Creator';
import {Review} from './Review';

export class Film {
  id: number;
  title: string;
  theatricalRelease: Date;
  duration: number;
  genre: string;
  reviews: Review[];
}
