import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Guest } from '../models/guests.model';


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
    .pipe(map(res => res as Guest[]))
    .pipe(catchError(err => {
      console.log(`Found error ${err}`);
      return of([]);
    }))
   }




}
