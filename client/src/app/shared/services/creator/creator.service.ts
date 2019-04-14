import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ServerConfig} from '../serverconfig';
import {catchError, map} from 'rxjs/operators';
import {Creator} from '../../models/Creator';
import {Film} from '../../models/Film';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {
  private apiAddress = ServerConfig.serverAddress + '/creators';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Creator[]> {
    return this.http.get<Creator[]>(this.apiAddress).
      pipe(map(data => data), catchError(this.handleError));
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return throwError(res.error || 'Server error');
  }
  getById(id: number): Observable<Creator> {
    return this.http.get<Creator>(this.apiAddress + '/' + id).
      pipe(map(data => data), catchError(this.handleError));
  }

  getByFilmId(id: number): Observable<Creator> {
    return this.http.get<Creator>(ServerConfig.serverAddress + '/films/' + id + '/creator').
      pipe(map(data => data), catchError(this.handleError));
  }


}
