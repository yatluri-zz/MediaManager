import { TestBed, inject } from '@angular/core/testing';

import { NotificationCenterService } from './notification-center.service';

describe('NotificationCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationCenterService]
    });
  });

  it('should be created', inject([NotificationCenterService], (service: NotificationCenterService) => {
    expect(service).toBeTruthy();
  }));
});
