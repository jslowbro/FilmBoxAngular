import { Component, OnInit } from '@angular/core';
import {FilmService} from '../shared/services/film/film.service';
import {Film} from '../shared/models/Film';
import {ActivatedRoute, Router} from '@angular/router';
import {Review} from '../shared/models/Review';
import {ReviewService} from '../shared/services/review/review.service';
import {Creator} from '../shared/models/Creator';
import {CreatorService} from '../shared/services/creator/creator.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(private filmService: FilmService,
              private route: ActivatedRoute,
              private reviewService: ReviewService,
              private creatorService: CreatorService,
              private router: Router) { }
  film: Film;
  reviews: Review[];
  creator: Creator;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getFilm(id);
    this.getReviews(id);
    this.getCreator(id);
  }
  getFilm(id: number): void {
    this.filmService.getById(id).subscribe(film => this.film = film);
  }
  getReviews(id: number): void {
    this.reviewService.getReviewsByFilmId(id).subscribe(reviews => this.reviews = reviews);
  }
  getCreator(id: number): void {
    this.creatorService.getByFilmId(id).subscribe(creator => this.creator = creator);
  }
  gotoCreator(creator: Creator) {
    const link = ['/creators', creator.id];
    this.router.navigate(link);
  }

}
