import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ServerConfig} from '../serverconfig';
import {catchError, map} from 'rxjs/operators';
import {Film} from '../../models/Film';
import {Review} from '../../models/Review';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiAddress = ServerConfig.serverAddress + '/films';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiAddress).
    pipe(map(data => data), catchError(this.handleError));
  }
  getById(id: number): Observable<Film> {
    return this.http.get<Film>(this.apiAddress + '/' + id).
      pipe(map(data => data), catchError(this.handleError));
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return throwError(res.error || 'Server error');
  }
  getByCreatorId(id: number): Observable<Film[]> {
    return this.http.get<Film[]>(ServerConfig.serverAddress + '/creators/' + id + '/films').
      pipe(map(data => data), catchError(this.handleError));
  }
}
