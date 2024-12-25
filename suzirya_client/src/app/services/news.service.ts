import { Injectable } from '@angular/core';
import { News } from '../interfaces/news';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: News[] = [];
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  fetchNews(): void {
    this.http.get<News[]>(`${this.apiURL}/News`).subscribe((data) => {
      this.news = data;
    });
  }


  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiURL}/News`);
  }

  addNews( news: News): Observable<any> {
    return this.http.post(`${this.apiURL}/News`, news);
  }

  updateNews(id: number, updatedValues: Partial<News>): Observable<any> {
    return this.http.put(`${this.apiURL}/News/${id}`, updatedValues);
  }

  deleteNews(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/News/${id}`);
  }
}
