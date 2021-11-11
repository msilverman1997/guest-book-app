import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone) { }

  showsSuccess(message: string) {
    this.zone.run(() => {
      this.snackBar.open(message, 'OK', {panelClass: ['success-snackbar'], duration: 5000});
    })
  }

  showFailure(message: string){
    this.zone.run(() => {
      this.snackBar.open(message, 'X', {panelClass: ['error-snackbar'], duration: 5000});
    })
  }

}
