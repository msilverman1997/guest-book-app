import { Component, OnInit } from '@angular/core';
import { GuestBookService } from '../services/guest-book.service';
import { Guest } from '../models/guests.model';
import { Constants } from '../constants';
import { Observable } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-guest-book-list',
  templateUrl: './guest-book-list.component.html',
  styleUrls: ['./guest-book-list.component.css']
})
export class GuestBookListComponent implements OnInit {

  guestBookData: Guest[];
  gridApi;

  columnDefs = Constants.GUEST_BOOK_COLUMN_DEFS;

  constructor(private guestService: GuestBookService, private notificationService: NotificationService) {
    this.guestService.getGuestBookData()
    .subscribe(res => {
      this.guestBookData = res;
    },
    (err) => {
      this.notificationService.showFailure("Error while retrieving guest data");
    });
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
