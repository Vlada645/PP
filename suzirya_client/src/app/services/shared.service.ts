import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private languageSubject = new BehaviorSubject<string>('UA'); // Initial language is Ukrainian  sharedValue$ = this.sharedValue.asObservable();

  currentLanguage$ = this.languageSubject.asObservable();
  CharityFundraiser$: any;

  setCurrentLanguage(language: string): void {
    this.languageSubject.next(language);
  }

  getCurrentLanguage(): string {
    return this.languageSubject.value;
  }
  
  
}
