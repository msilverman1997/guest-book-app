import { Component, OnInit } from '@angular/core';
import { GuestBookService } from '../services/guest-book.service';
import { Guest } from '../models/guests.model';
import { Constants } from '../constants';
import { Observable } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { DeleteComponentComponent } from '../delete-component/delete-component.component';

@Component({
  selector: 'app-guest-book-list',
  templateUrl: './guest-book-list.component.html',
  styleUrls: ['./guest-book-list.component.css']
})
export class GuestBookListComponent implements OnInit {

  guestBookData: Guest[];
  gridApi;
  context: any;

  gridOptions = {
    getRowNodeId: (data) => data.id
  }

  columnDefs = [
    {field: '', headerName: 'Delete', cellRendererFramework: DeleteComponentComponent, flex: .15},
    {field: "first_name", headerName: "First Name", flex: .15},
    {field: "last_name", headerName: "Last Name", flex: .15},
    {field: "message", headerName: "Message", flex: .55}
];

  constructor(private guestService: GuestBookService, private notificationService: NotificationService) {
    this.context = {
      componentParent: this
    }
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

  onGridReady(params){
    this.gridApi = params.api;
  }

  deleteGuest(guest){
    this.guestService.deleteGuest(guest.id).subscribe(res => {
      this.notificationService.showsSuccess(`Guest ${res.id} deleted`);
      this.gridApi.applyTransaction({remove: [{id: res.id}]});
    },
    (err) => {
      this.notificationService.showFailure(err.message);
    })
  }

  createGuest(guest){
    this.guestService.createGuest(guest).subscribe(res => {
      this.notificationService.showsSuccess("Guest entry saved successfully");
      this.gridApi.applyTransaction({add: [res]});
    },
    (err) => {
      this.notificationService.showFailure("Error occurred while saving guest");
    })
  }

}
