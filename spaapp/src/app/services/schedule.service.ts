import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
@Injectable()
export class ScheduleService {
  employees: any;
  constructor(public db: AngularFireDatabase) { }

  getCustomers(query = {}): FirebaseListObservable<any[]> {
    return this.db.list('/customers', {
      query: query
    });
  }
  getEmployees(query = {}): any {
    return this.db.list('/employees', {
      query: query
    });
  }
}
