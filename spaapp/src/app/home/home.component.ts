import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Service, ServiceData } from '../app.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Service, AngularFireDatabase]
})
export class HomeComponent implements OnInit {
  dataSource: any;
  currentDate: Date = new Date();
  resourcesDataSource: any;
  dataService: any[];
  books: FirebaseListObservable<any>;
  constructor(service: Service, public db: AngularFireDatabase) {
    this.books = db.list('/customers');
    this.books.subscribe(customer => {
        customer.filter({})
        this.dataSource = new DataSource({
          store: customer
        });
      console.log(customer);
    });
    db.list('/services').subscribe(dataService => {
      this.dataService = dataService;
    });
    // this.resourcesDataSource = new DataSource ({
    //   store: new CustomStore ({
    //     load: (options) => this.getDataEmployees(options)
    //   })
    // });
    db.list('/employees').subscribe(courses => {
      this.resourcesDataSource = courses;
    });
  }
  static isWeekEnd(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }
  onAppointmentAdded (appointment) {
    this.books.push(appointment.appointmentData);
    // Handler of the "appointmentAdding" event
  }
  dataCellTemplate(cellData, index, container) {
    const employeeID = cellData.groups.employeeID, dataCellElement = container;
    if (HomeComponent.isWeekEnd(cellData.startDate)) {
      dataCellElement.classList.add('employee-weekend-' + employeeID);
    }
    const element = document.createElement('div');
      element.classList.add('day-cell', 'employee-' + employeeID);
      element.textContent = cellData.text;
    return element;
  }
  ngOnInit() {
  }

}
