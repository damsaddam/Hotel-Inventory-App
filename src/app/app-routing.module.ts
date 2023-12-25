import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },                    /* Default URL */
  { path: 'login', component: LoginComponent },
  {
    /*  This rooms and booking path use the lazy loading. The lazy loading is useful for the modules which are really big or have a lot of components and you think won't be used frequently by your end-users. An example is a profile section for users which is used only once a month. That's a rare case where users change their email or password. */
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
    canActivate: [LoginGuard],
    canMatch: [LoginGuard],
  },
  {
    path: 'booking/:roomnumber',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
    canActivate: [LoginGuard],
    canMatch: [LoginGuard],
  },
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  {
    path: '**',                                                   /* In case the user enters the wrong URL */
    component: NotfoundComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
