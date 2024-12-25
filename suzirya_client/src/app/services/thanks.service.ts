import { Injectable } from '@angular/core';
import { Thanks } from '../interfaces/thanks';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThanksService {
  private thanks: Thanks[] = [];
  private apiURL = environment.apiURL;
  private thanksSubject = new BehaviorSubject<Thanks[]>(this.thanks);
  constructor(private http: HttpClient) { }

  fetchThanks(): void {
    this.http.get<Thanks[]>(`${this.apiURL}/Thanks`).subscribe((data) => {
      this.thanks = data;
      this.thanksSubject.next(this.thanks);
    });
  }

  getThanks(): BehaviorSubject<Thanks[]> {
    return this.thanksSubject;
  }

  addThanks(thanks: { img: string; name: string; message: string }): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/Thanks`, thanks);
  }

  updateThanks(id: number, thanks: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(`${this.apiURL}/${id}`, thanks, { headers });
  }

  deleteThanks(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/Thanks/${id}`);
  }
}
