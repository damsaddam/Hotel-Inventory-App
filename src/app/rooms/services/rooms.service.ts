// Services handle how to get the data or any business logic. Keep this in mind
import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../appconfig/appconfig.service';
import { AppConfig } from '../../appconfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  hotelName = 'Saddam Hotel';
  // How to use Http get call from an API
  roomList: RoomList[] = [];
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
    console.log('The services is initialized');
  }
  // We can't modify the stream after we subscribe to it but it can be modify by using pipe
  // RxJs operators
  // shareReplay to catch the data
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1));

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }
  // Make a post call an API
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }
  // Make a put call an API
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  // Delete an API
  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
  getPhotos() {
    const req = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(req);
  }
}
