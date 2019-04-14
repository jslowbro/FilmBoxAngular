import {Component, Input, OnInit} from '@angular/core';
import { ReviewService} from '../shared/services/review/review.service';
import {Review} from '../shared/models/Review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() reviews: Review[];
  @Input() size: number;
  @Input() sortBy: string;
  @Input() header: string;
  displayReviews: Review[];

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.updateReviews();
  }
  updateReviews() {
    if (!this.sortBy){
      this.sortBy = 'date';
      // TODO
    }
    this.displayReviews = this.sortReviews().slice(0, this.size);
  }

  sortReviews(): Review[] {
    const sortedReviews: Review[] = this.reviews.sort((a: Review, b: Review) => {
      if (this.sortBy === 'author') {
        return a.author.localeCompare(b.author);
      } else if (this.sortBy === 'upvotes') {
        return b.upvotes - a.upvotes;
      } else if (this.sortBy === 'date'){
        return 0;
        // TODO
      }
      return 0;
    });
    return sortedReviews;
  }
  incUpvotes(review: Review) {
    review.upvotes++;
    this.reviewService.updateReview(review);

  }
  incDownvotes(review: Review) {
    review.downvotes++;
    this.reviewService.updateReview(review);
  }
  setSize(size: number) {
    this.size = size;
    this.updateReviews();
  }
}
