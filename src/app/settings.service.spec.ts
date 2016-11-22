/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsService]
    });
  });

  beforeEach(() => {
    localStorage.clear();
  });

  it('is empty by default', inject([SettingsService], (service: SettingsService) => {
    expect(service.getAttendees()).toEqual([]);
  }));

  it('persists attendees', inject([SettingsService], (service: SettingsService) => {
    service.addAttendee({ name: 'Tyler' });
    const attendees = service.getAttendees();
    const attendee = attendees[0];

    expect(attendee.name).toEqual('Tyler');
  }));

  it('removes an attendee', inject([SettingsService], (service: SettingsService) => {
    service.addAttendee({name: 'Tyler'});
    const attendees = service.getAttendees();
    const attendee = attendees[0];
    expect(attendee.id).toBeDefined();

    service.removeAttendee(attendee.id);
    expect(service.getAttendees()).toEqual([]);
  }));

});
