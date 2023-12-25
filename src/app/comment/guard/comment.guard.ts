import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from '../comment.service';
import { Comments } from '../comment';

@Injectable({
  providedIn: 'root',
})
export class CommentGuard implements Resolve<Comments[]> {
  constructor(private CommentService: CommentService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Comments[] | Observable<Comments[]> | Promise<Comments[]> {
    return this.CommentService.getComments();
  }
}
