import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  SkipSelf,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';
import { ShareddataService } from '../shareddata.service';

@Component({
  selector: 'hiapp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers: [RoomsService],
})
export class RoomsComponent
  implements OnInit, AfterViewInit, DoCheck, OnDestroy {
  ngDoCheck(): void {
    console.log('on changes is called');
  }
  hotelName = 'Saddam Hotel';
  rooms: Room = {
    totalRooms: 20,
    bookedRooms: 10,
  };

  roomList: RoomList[] = [];

  message$ = this.sharedDataService.message$;

  // Use @Self() in case you aware that your service only be registered at this particular level.
  constructor(
    @SkipSelf() private roomService: RoomsService,
    private configService: ConfigService,
    private sharedDataService: ShareddataService,
  ) { }

  stream = new Observable((observer) => {
    // next method means getting a new data of stream
    observer.next('data1');
    observer.next('data2');
    observer.next('data3');
    // complete method means finish the data of stream
    observer.complete();
    // error method means in case you have the errors, it can handle it
    // spotter.error();
  });
  subsciption!: Subscription;
  totalBytes = 0;
  // Cacth the error/handle the exception
  error$: Subject<string> = new Subject<string>();
  getErrors$ = this.error$.asObservable();
  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      this.error$.next(err.message);
      return of([]);
    })
  );

  // Map operators
  roomsCounts$ = this.roomService.getRooms$.pipe(map((rooms) => rooms.length));

  // 0 is a default value
  priceFilter = new FormControl(0);

  ngOnInit(): void {
    // The data should come from your service, like this one
    // Render the data of stream
    this.stream.subscribe({
      next: (values) => console.log(values),
      complete: () => console.log('the stream was completed'),
      error: (err) => console.log(err),
    });
    this.stream.subscribe((data) => console.log(data));
    // How to use Http get call from an API
    // this.roomService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms
    // })
    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    });
  }

  // A lifecycle hook that is called after Angular has fully initialized a component's view. Define a ngAfterViewInit() method to handle any additional initialization tasks.
  ngAfterViewInit(): void { }
  selectedRoom!: RoomList;
  selectRoom(rooms: RoomList) {
    this.selectedRoom = rooms;
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber: '',
      roomType: 'Additional Type',
      amenities:
        'ac, wi-fi, bathroom with cold shower, triple bed, kitchen, tv',
      image: '',
      price: 500000,
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: '7.8',
    };
    // this.roomList.push(addRoom);
    // this.roomList = [...this.roomList, addRoom];
    // Make a post call an API
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: '5',
      roomType: 'Weird Type',
      amenities:
        'ac, wi-fi, bathroom with cold shower, triple bed, kitchen, tv',
      image: '',
      price: 500000,
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: '7.8',
    };
    // Make a put call an API
    this.roomService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  // Delete an API
  deleteRoom() {
    // Make a put call an API
    this.roomService.deleteRoom('1').subscribe((data) => {
      this.roomList = data;
    });
  }
  // unsubscribe to an active subscription
  ngOnDestroy() {
    if (this.subsciption) {
      this.subsciption.unsubscribe();
    }
  }
}
