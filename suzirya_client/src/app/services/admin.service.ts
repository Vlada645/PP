import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private admin: user[] = [];
  private apiURL = 'http://localhost:3000';
  private adminSubject = new BehaviorSubject<user[]>(this.admin);
  constructor(private http: HttpClient) { }

  fetchAdmin(): void {
    this.http.get<user[]>(`${this.apiURL}/Admin`).subscribe((data) => {
      this.admin = data;
      this.adminSubject.next(this.admin);
    });
  }

  getAdmin(): BehaviorSubject<user[]> {
    return this.adminSubject;
  }

  loginAdmin(admin: { email: string; password: string }): void {
    this.http.post<any>(`${this.apiURL}/Admin/login`, admin).subscribe((data) => {
      localStorage.setItem('token', data.token);
    });
  }
}
