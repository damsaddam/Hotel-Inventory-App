import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class BookingGuard implements CanDeactivate<BookingComponent> {
  constructor(private _snackBar: MatSnackBar) { }
  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.bookingForm.pristine) {
      return component.bookingForm.pristine;
    } else {
      /* Use snackbar in Angular Material */
      this._snackBar.open(
        'You have unsaved changes, please complete it first. If you click the wrong room that you booked, just refresh the web (CTRL+R) and starting from the beginning again.',
        'DISCARD'
      );
      return false;
    }
  }
}
