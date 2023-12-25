import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hiapp-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // Change detection strategy
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  constructor() { };
  ngOnDestroy(): void {
    console.log('On Destroy is called');
  }
  // Input means to get the data
  @Input() list: RoomList[] = [];
  @Input() price: any = 0;

  // Output means to give out the data
  @Output() selectedRoom = new EventEmitter<RoomList>();
  // ngOnInit
  ngOnInit(): void {

  }
  // ngOnChanges. ngOnChanges will work only if you have @Input properties and your Input properties get updated or get a new value, array, whatever it is.
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  selectRoom(rooms: RoomList) {
    this.selectedRoom.emit(rooms);
  }
}
