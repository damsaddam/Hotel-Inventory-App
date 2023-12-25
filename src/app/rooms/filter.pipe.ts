import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: RoomList[], price: number): RoomList[] {
    return list.filter((rooms) => rooms.price >= price);
  }
}
