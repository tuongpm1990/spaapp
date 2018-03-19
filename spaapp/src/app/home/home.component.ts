import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as moment from 'moment';
import { ScheduleService } from '../services/schedule.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ AngularFireDatabase, ScheduleService]
})
export class HomeComponent implements OnInit {
  dataSource: DataSource;
  currentDate: Date = new Date();
  resourcesDataSource: any;
  dataService: any[];
  books: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase, private serviceSchedule: ScheduleService) {
    // this.books = db.list('/customers');
    // db.list('/services').subscribe(dataService => {
    //   this.dataService = dataService;
    // });
    // this.books.subscribe(customer => {
    //     customer.forEach(obj => {
    //       obj.startDate = moment.unix(obj.startDate);
    //       obj.endDate = moment.unix(obj.endDate);
    //     });
    //     this.dataSource = new DataSource({
    //       store: customer
    //     });
    //   console.log(customer);
    // });

    // this.resourcesDataSource = new DataSource ({
    //   store: new CustomStore ({
    //     load: (options) => this.getDataEmployees(options)
    //   })
    // });
    // db.list('/employees').subscribe(courses => {
    //   this.resourcesDataSource = courses;
    // });
  }
  static isWeekEnd(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }
  onAppointmentAdded (appointment) {
    const objPost = appointment.appointmentData;
    objPost.startDate = moment(objPost.startDate).unix();
    objPost.endDate = moment(objPost.endDate).unix();
    this.books.push(objPost);
    // Handler of the "appointmentAdding" event
  }
  dataCellTemplate(cellData, index, container) {
    const employeeID = cellData.groups.employeeID, dataCellElement = container;
    if (HomeComponent.isWeekEnd(cellData.startDate)) {
      dataCellElement.classList.add('employee-weekend-' + employeeID);
    }
  }
  getCustomers(): any {
    this.serviceSchedule.getCustomers().subscribe( customer => {
      customer.forEach(obj => {
        obj.startDate = moment.unix(obj.startDate);
        obj.endDate = moment.unix(obj.endDate);
      });
      console.log(customer)
        return customer;
      });
  }

  ngOnInit() {
    // this.books = this.serviceSchedule.getCustomers();
    // this.books.subscribe( customer => {
    //       customer.forEach(obj => {
    //         obj.startDate = moment.unix(obj.startDate);
    //         obj.endDate = moment.unix(obj.endDate);
    //       });
    //       this.dataSource = new DataSource({
    //         store: customer
    //       });
    //     console.log(this.dataSource);
    // });
    // this.serviceSchedule.getEmployees().subscribe( employees => {
    //   this.resourcesDataSource = employees;
    // });
  }
}
