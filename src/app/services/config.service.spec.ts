import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { RouteConfigToken } from './routeconfig.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RouteConfigToken,
          useValue: { title: 'Home' },
        },
      ]
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
