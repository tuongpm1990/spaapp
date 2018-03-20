import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import DataSource from 'devextreme/data/data_source';
import * as moment from 'moment';
@Injectable()
export class ScheduleService {
  Employees: any;
  DataService: any[];

  constructor(public db: AngularFireDatabase) {
  }

  getOppointment(query = {}) {
    return new Promise ((resolve, reject) => {
      this.db.list('/customers', {
        query: query
      }).subscribe( customers => {
        customers.forEach(obj => {
          obj.startDate = moment.unix(obj.startDate);
          obj.endDate = moment.unix(obj.endDate);
        });
        const dataSource = new DataSource ({
          store: customers
        });
        return resolve(dataSource);
      });
    });
  }
  getEmployees(query = {}) {
    return new Promise((resolve, reject) => {
      this.db.list('/employees', {
        query: query
      }).subscribe(employees => {
        return resolve(employees);
      });
    });
  }
  getServices(query = {}) {
    return new Promise((resolve, reject) => {
      this.db.list('/services', {
        query: query
      }).subscribe(dataService => {
        return resolve(dataService);
      });
    });
  }

  createOppointment(appointmentData) {
    const objPost = appointmentData;
    objPost.startDate = moment(objPost.startDate).unix();
    objPost.endDate = moment(objPost.endDate).unix();
    this.db.list('/customers').push(objPost);
  }
}
