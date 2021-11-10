import { Component, OnInit } from '@angular/core';
import { GuestBookService } from '../services/guest-book.service';
import { Guest } from '../models/guests.model';
import { Constants } from '../constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guest-book-list',
  templateUrl: './guest-book-list.component.html',
  styleUrls: ['./guest-book-list.component.css']
})
export class GuestBookListComponent implements OnInit {

  guestBookData: Observable<Guest[]>;
  gridApi;

  columnDefs = Constants.GUEST_BOOK_COLUMN_DEFS;

  constructor(private guestService: GuestBookService) {
    this.guestBookData = this.guestService.getGuestBookData();
   }

  ngOnInit(): void {
  }

  onFirstDataRendered(params){
    console.log(params);
    params.api.sizeColumnsToFit();
  }

  onGridReady(params){
    console.log(params);
    this.gridApi = params.api;
  }

}
