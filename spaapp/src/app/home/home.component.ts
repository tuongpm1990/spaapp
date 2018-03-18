import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Service, ServiceData } from '../app.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import CustomStore from 'devextreme/data/custom_store';

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
  dataService: ServiceData[];
  constructor(service: Service,  public db: AngularFireDatabase) {
    this.dataSource = new DataSource({
      store: service.getCustomer()
    });
    this.dataService = service.getServiceData();
    // this.resourcesDataSource = new DataSource ({
    //   store: new CustomStore ({
    //     load: (options) => this.getDataEmployees(options)
    //   })
    // });
    db.list('/employees').subscribe(courses => {
      this.resourcesDataSource = courses;
      console.log(this.resourcesDataSource);
    });
  }
  static isWeekEnd(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }
  onAppointmentAdded (appointment) {
    console.log(appointment);
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
