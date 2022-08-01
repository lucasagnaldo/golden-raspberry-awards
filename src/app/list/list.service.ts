import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  filter?: string;

  constructor(private http: HttpClient) {}

  findMovies(page?: number, size?: number, isWinner?: boolean, year?: number): Observable<any[]> {
    this.filter = `?page=${page}&size=${size}`;

    if (isWinner !== undefined && isWinner !== null) {
      this.filter += `&winner=${isWinner}`;
    }

    if (year !== undefined && year !== null) {
      this.filter += `&year=${year}`;
    }

    return this.http.get<any[]>(`${environment.apiUrl}${this.filter}`);

  }
  
}
