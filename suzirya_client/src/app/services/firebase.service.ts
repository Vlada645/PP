import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private analytics: any;
  constructor() {
    // Initialize Firebase app with the configuration directly
    const app = initializeApp({
      apiKey: "AIzaSyAe2w8QSfGuQ9TNm2cJ78CrIYcg7gaAW58",
      authDomain: "suzirya-f5b51.firebaseapp.com",
      projectId: "suzirya-f5b51",
      storageBucket: "suzirya-f5b51.appspot.com",
      messagingSenderId: "709767487154",
      appId: "1:709767487154:web:824bc65907224be93b73ab",
      measurementId: "G-FZMC5TEHY2"
    });

    // Check if Analytics is supported and initialize
    isSupported().then((supported) => {
      if (supported) {
        this.analytics = getAnalytics(app);
      } else {
        console.log('Analytics is not supported in this environment.');
      }
    }).catch((error) => {
      console.error('Error checking analytics support:', error);
    });
  }
}
