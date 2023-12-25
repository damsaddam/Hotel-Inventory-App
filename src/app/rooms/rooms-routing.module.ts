import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsGuard } from './guards/rooms.guard';

const routes: Routes = [
  {
    /* Nested routing */
    path: '',                                                             /* Use the lazy loading */
    component: RoomsComponent,
    canActivateChild: [RoomsGuard],
    children: [
      { path: 'add', component: RoomsAddComponent },
      // { path: ':roomid', component: RoomsBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
