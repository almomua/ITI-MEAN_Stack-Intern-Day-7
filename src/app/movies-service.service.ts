import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  apiKey: string = 'd13e2faf8886770e2002576bb7493745';

  constructor(private http: HttpClient) {}
  getAllMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`
    );
  }
  getMovieById(Id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${Id}?api_key=${this.apiKey}`
    );
  }

  getTv(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`
    );
  }
  getTvById(Id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${Id}?api_key=${this.apiKey}`
    );
  }
}
