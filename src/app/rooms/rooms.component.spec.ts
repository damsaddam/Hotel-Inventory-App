import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from './services/rooms.service';
import { ConfigService } from '../services/config.service';
import { ShareddataService } from '../shareddata.service';
import { APP_SERVICE_CONFIG } from '../appconfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { RouteConfigToken } from '../services/routeconfig.service';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RoomsComponent],
      providers: [
        RoomsService,
        ConfigService,
        ShareddataService,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: { apiEndpoint: 'http://localhost:3000' },
        },
        {
          provide: RouteConfigToken,
          useValue: { title: 'Rooms' },
        },
      ],
    });
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
