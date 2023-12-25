import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { Comments } from './comment';

@Component({
  selector: 'hiapp-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  /* The advantage of using this one is the web page loaded without any blank page. It's not like navigating to the route and then getting the data, but prefetching the data */

  /* Call the method to get the data after we landed on the view */
  comments$ = this.commentService.getComments(); // getComments() from comment.component.ts */

  /* Using the resolve method and then using it as a stream */
  comment$ = this.router.data.pipe(pluck('comments'));

  comments: Comments[] = [];

  constructor(
    private commentService: CommentService,
    private router: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.router.data.subscribe((data) => {
      this.comments = data['comments'];
    });
  }
}
