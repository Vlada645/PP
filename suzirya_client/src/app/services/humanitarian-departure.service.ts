import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HumanitarianDeparture } from '../interfaces/humanitarian-departure';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from './firebase.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HumanitarianDepartureService {

  constructor(private serviceForIT: FirebaseService, private http : HttpClient) { }
  private apiUrl = environment.apiURL;
  private humanitarianDepartures: HumanitarianDeparture[] = [];
  private humanitarianDeparturesSubject = new BehaviorSubject<HumanitarianDeparture[]>(this.humanitarianDepartures);

  addHumanitarianDeparture(humanitarianDepartures: HumanitarianDeparture): Observable<any> {  
    return this.http.get<HumanitarianDeparture[]>(`${this.apiUrl}/HumanitarianDepartures`, {observe: 'events'})
  }

  fetchHumanitarianDepartures(): void {
    this.http.get<HumanitarianDeparture[]>(`${this.apiUrl}/HumanitarianDepartures`).subscribe((data) => {
      this.humanitarianDepartures = data;
      this.humanitarianDeparturesSubject.next(this.humanitarianDepartures);
    });
  }

  getHumanitarianDepartures(): Observable<HumanitarianDeparture[]> {
    return this.http.get<HumanitarianDeparture[]>(`${this.apiUrl}/HumanitarianDepartures`);
  }

  deleteHumanitarianDeparture(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/HumanitarianDepartures/${id}`);
  }

  updateHumanitarianDeparture(id: number, updatedValues: Partial<HumanitarianDeparture>): Observable<any> {
    return this.http.put(`${this.apiUrl}/HumanitarianDepartures/${id}`, updatedValues);
  }

  // getHumanitarianDepartures(): Observable<HumanitarianDeparture[]> {
  //   this.serviceForIT.collection("").get().then((querySnapshot: any) => {
  //     querySnapshot.forEach((doc: any) => {
  //       this.humanitarianDepartures.push(doc.data());
  //     });
  //     this.humanitarianDeparturesSubject.next(this.humanitarianDepartures);
  //   }).catch((error: any) => { throw error; });
  //   return this.humanitarianDeparturesSubject.asObservable();
  // }

  // getHumanitarianDepartures(): Observable<any[]> {
  //   return this.serviceForIT.collection(`{apiURL}/HumanitarianDepartures`).snapshotChangs().pipe(
  //     map((actions: any[]) => actions.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
  //       const data = a.payload.doc.data();
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   ); 
  // }

  // updateHumanitarianDeparture(humanitarianDeparture: HumanitarianDeparture): Promise<void> {
  //   return this.serviceForIT.collection(`{apiURL}/HumanitarianDepartures`).doc(humanitarianDeparture.id).update(humanitarianDeparture).then(() => { }).catch((error: any) => { throw error; });
  // }

  // deleteHumanitarianDeparture(id: string): Promise<void> {
  //   return this.serviceForIT.collection(`{apiURL}/HumanitarianDepartures`).doc(id).delete().then(() => { }).catch((error: any) => { throw error; });
  // }
}
