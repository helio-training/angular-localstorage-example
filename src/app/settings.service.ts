import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

const ATTENDEE_KEY = 'attendees';

// export class Attendee {
//
//   public id:string;
//
//   constructor() {
//
//   }
// }


@Injectable()
export class SettingsService {

  addAttendee(attendee:any = {}): void {
    const attendees = this.loadFromLocalStorage();
    attendee.id = attendee.id || UUID.UUID();
    attendees.push(attendee);

    this.saveToLocalStorage(attendees);
  }

  removeAttendee(id): void {
    const attendees = this.loadFromLocalStorage()
                          .filter(attendee => attendee.id != id);
    this.saveToLocalStorage(attendees);
  }

  getAttendees(): any[] {
    return this.loadFromLocalStorage();
  }

  private saveToLocalStorage(attendees) {
    localStorage.setItem(ATTENDEE_KEY, JSON.stringify(attendees));
  }

  private loadFromLocalStorage() {
    const attendees = localStorage.getItem(ATTENDEE_KEY);
    if (!attendees) {
      return [];
    } else {
      return JSON.parse(attendees);
    }
  }

}
