import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Guest, GuestRequest } from '../models/guests.model';


@Injectable({
  providedIn: 'root'
})
export class GuestBookService {

  apiUrl = "";

  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:5000/api";
   }

   getGuestBookData(): Observable<Guest[]>{
    return this.http.get(`${this.apiUrl}/guests`)
    .pipe(map(res => res['guests'] as Guest[]))
   }

   createGuest(guest: GuestRequest): Observable<Guest> {
     return this.http.post(`${this.apiUrl}/guests`, guest)
     .pipe(map(res => res['guest'] as Guest));
   }

   deleteGuest(id): Observable<Guest> {
     return this.http.delete(`${this.apiUrl}/guests/${id}`)
     .pipe(map(res => res['guest'] as Guest));
   }




}
