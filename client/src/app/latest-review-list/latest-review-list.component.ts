import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../shared/services/review/review.service';
import {Review} from '../shared/models/Review';

@Component({
  selector: 'app-latest-review-list',
  templateUrl: './latest-review-list.component.html',
  styleUrls: ['./latest-review-list.component.css']
})
export class LatestReviewListComponent implements OnInit {
  reviews: Review[];
  constructor(private reviewService: ReviewService) { }
  ngOnInit() {
    this.getReviews()
  }
  getReviews() {
    this.reviewService.getAll().subscribe(data =>
    this.reviews = data);
  }

}
