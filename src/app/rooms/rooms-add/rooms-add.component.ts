import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hiapp-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {
  /* Use Template Driven Forms */
  constructor(private roomService: RoomsService) { }
  successMessage: string = '';
  addRoom(roomsForm: NgForm) {
    this.roomService
      .addRoom(this.rooms)
      .subscribe(() => {
        this.successMessage = 'Thanks. Room has added';
        setTimeout(() => {
          this.successMessage = '';
        }, 2000);                           /* Reset successMessage after 1 seconds (adjust as needed) */
        roomsForm.resetForm({
          roomType: '',
          amenities: '',
          image: '',
          price: 0,
          checkinTime: new Date(),
          checkoutTime: new Date(),
          rating: '',
        });                                 /* Reset the form after adding the data */
      })
  }
  rooms: RoomList = {
    roomType: '',
    amenities: '',
    image: '',
    price: 0,
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: '',
  }
}
