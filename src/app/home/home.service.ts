import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  filter?: string;

  constructor(private http: HttpClient) {}

  findYearsWithMultipleWinners(): Observable<any> {
    this.filter = `?page=0&size=100&winner=true`;
    return this.http.get<any[]>(`${environment.apiUrl}${this.filter}`);
  }

  findStudiosWithWinCount(): Observable<any> {
    this.filter = `?projection=studios-with-win-count`;
    return this.http.get<any[]>(`${environment.apiUrl}${this.filter}`);
  }

  findProducersWithLongestAndShortestIntervalBetweenWins(): Observable<any> {
    this.filter = `?projection=max-min-win-interval-for-producers`;
    return this.http.get<any[]>(`${environment.apiUrl}${this.filter}`);
  }

  findMovieWinnersByYear(yearOfTheWinningFilm: number): Observable<any> {
    this.filter = `?winner=true&year=${yearOfTheWinningFilm}`;
    return this.http.get<any[]>(`${environment.apiUrl}${this.filter}`);
  }

}