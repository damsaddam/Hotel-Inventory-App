import { Component, Inject } from '@angular/core';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hiapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(LocalStorageToken) private localStorage: any, private initService: InitService, private configService: ConfigService, private router: Router) {
    console.log(initService.config)
  }
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('Navigation started')
    })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('Navigation completed')
    })
    this.localStorage.setItem('name', 'The Hotel');
  }
}
