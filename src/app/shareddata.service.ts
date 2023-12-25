import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  constructor() { }
  data: Subject<string> = new Subject<string>();

  subject$ = this.data.asObservable();

  message = new BehaviorSubject<string>('Hi');

  /* This is a stream */
  message$ = this.message.asObservable();

  setData(data: string) {
    this.data.next(data);
  }

  setMessage(message: string) {
    this.message.next(message);
  }
}
