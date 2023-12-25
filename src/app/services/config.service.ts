import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeconfig.service';
import { RouteConfig } from './routeconfig';

@Injectable({
  /* the providedIn: 'any' method means to create one instance for the entire code base. It can be used globally */
  providedIn:
    'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    /* Logging the top token value */
    console.log('Config service succeed');
    console.log(this.configToken);
  }
}
