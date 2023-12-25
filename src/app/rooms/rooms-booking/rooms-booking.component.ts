import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hiapp-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  /* Activated Route Service */
  id: number = 0;
  id$ = this.router.paramMap.pipe(map((params) => params.get('roomnumber')));
  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {

  }
}

// Solve the booking button in roomlist so that it leads to the booking menu. Reference in roomadd