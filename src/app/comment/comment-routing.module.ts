import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment.component';
import { CommentGuard } from './guard/comment.guard';

const routes: Routes = [
  {
    path: '', component: CommentComponent,
    resolve: { comments: CommentGuard }         /* comments is the key */
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule { }
