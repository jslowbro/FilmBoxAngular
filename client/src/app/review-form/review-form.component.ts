import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../shared/models/Film';
import {ReviewService} from '../shared/services/review/review.service';
import {Review} from '../shared/models/Review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  @Input() film: Film;
  review: Review;
  constructor(
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.review = new Review();
    this.review.author = 'Anonymous';
    this.review.content = '';
  }

  saveReview() {
    this.film.reviews.push(this.review);
    this.reviewService.saveReview(this.review, this.film.id);
    this.review = new Review();
  }

}
