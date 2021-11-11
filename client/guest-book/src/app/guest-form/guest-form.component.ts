import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Guest, GuestRequest } from '../models/guests.model';
import { GuestBookService } from '../services/guest-book.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css']
})
export class GuestFormComponent implements OnInit {

  guestForm: FormGroup;

  constructor(private guestService: GuestBookService, private notificationService: NotificationService) {
    this.guestForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  submit(){
    let guest: GuestRequest = this.createGuestRequest();
    this.guestService.createGuest(guest).subscribe(res => {
      this.notificationService.showsSuccess("Guest entry saved successfully");
    },
    (err) => {
      this.notificationService.showFailure("Error occurred while saving guest");
    })
  }

  createGuestRequest(){
    let guest: GuestRequest = {
      first_name: '',
      last_name: '',
      phone_number: '',
      message: ''
    };
    guest.first_name = this.guestForm.controls['first_name'].value;
    guest.last_name = this.guestForm.controls['last_name'].value;
    guest.phone_number = this.guestForm.controls['phone_number'].value;
    guest.message = this.guestForm.controls['message'].value;

    return guest;
  }

}
