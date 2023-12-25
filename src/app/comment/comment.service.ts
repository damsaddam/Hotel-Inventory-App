import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  /* inject */
  constructor(private http: HttpClient) { }

  getComments() {
    /* get<Comments[]> from the interface of comment.ts */
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments');   /* After inject call the http */
  }
}
