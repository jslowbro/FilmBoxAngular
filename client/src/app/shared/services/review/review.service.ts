import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ServerConfig} from '../serverconfig';
import {Review} from '../../models/Review';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})


export class ReviewService {
  constructor(private http: HttpClient) { }
  private resource = '/reviews';
  private apiAddress = ServerConfig.serverAddress + this.resource;
  private repoAddress = ServerConfig.serverAddress + ServerConfig.repoAddress + this.resource;
  getAll(): Observable<Review[]> {
    console.log(this.apiAddress);
    return this.http.get<Review[]>(this.apiAddress)
      .pipe(map(data => data), catchError(this.handleError));
  }
  getEmbedded(): Observable<any> {
    return this.http.get(ServerConfig.serverAddress + '/api/reviews');
  }
  getReviewsByFilmId(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(ServerConfig.serverAddress + '/films/' + id + '/reviews')
      .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return throwError(res.error || 'Server error');
  }
  saveReview(review: Review, filmId: number) {
    const address = ServerConfig.serverAddress + '/films/' + filmId + '/reviews';
    return this.http.post<Review>(address , review, httpOptions)
      .subscribe(response => console.log(response));
  }
  updateReview(review: Review) {
    return this.http.put<Review>(ServerConfig.serverAddress + this.resource + '/' + review.id, review)
      .subscribe(response => console.log(response));
  }
}
