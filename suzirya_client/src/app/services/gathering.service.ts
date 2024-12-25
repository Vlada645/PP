import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharityFundraiser } from '../interfaces/charity-fundraiser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatheringService {
  private apiURL = environment.apiURL;
  private charitableGathering = new BehaviorSubject<CharityFundraiser[]>([]);
  charitableGathering$ = this.charitableGathering.asObservable();
  constructor(private http: HttpClient) {}


// Fetch all charitable gatherings from the backend
fetchGatherings(): void {
  this.http.get<CharityFundraiser[]>(this.apiURL).subscribe((data) => {
    this.charitableGathering.next(data);
  });
}

// shared.service.ts
addGathering(newGathering: CharityFundraiser): Observable<CharityFundraiser> {
  return this.http.post<CharityFundraiser>(`${this.apiURL}/Charity`, newGathering);
}

// Remove a gathering by ID via HTTP DELETE
removeGathering(id: number): Observable<any> {
  return this.http.delete(`${this.apiURL}/HumanitarianDepartures/${id}`);
}

// Get a gathering by ID via HTTP GET
getGatheringById(id: number): Observable<CharityFundraiser> {
  return this.http.get<CharityFundraiser>(`${this.apiURL}/${id}`);
}

// Update a gathering by ID via HTTP PATCH
updateGathering(id: number, updatedValues: Partial<CharityFundraiser>): Observable<any> {
  return this.http.patch(`${this.apiURL}/${id}`, updatedValues);
}
}
