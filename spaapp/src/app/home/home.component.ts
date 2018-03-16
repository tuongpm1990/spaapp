import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Service, Employee, ServiceData } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Service]
})
export class HomeComponent implements OnInit {
  dataSource: any;
  currentDate: Date = new Date();
  resourcesDataSource: Employee[];
  dataService: ServiceData[];
  constructor(service: Service) {
    this.dataSource = new DataSource({
      store: service.getCustomer()
    });
    this.resourcesDataSource = service.getEmployees();
    this.dataService = service.getServiceData();
  }
  static getCurrentTraining(index, employeeID) {
    let currentTraining;
    const  result = (index + employeeID) % 3;

    switch (result) {
      case 0: {
        currentTraining = 'abs-background';
        break;
      }
      case 1: {
        currentTraining = 'step-background';
        break;
      }
      case 2: {
        currentTraining = 'fitball-background';
        break;
      }
      default: {
        currentTraining = '';
        break;
      }
    }

    return currentTraining;
  }
  static isWeekEnd(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  dataCellTemplate(cellData, index, container) {
    const employeeID = cellData.groups.employeeID,
      dataCellElement = container,
      currentTraining = HomeComponent.getCurrentTraining(index, employeeID);

    if (HomeComponent.isWeekEnd(cellData.startDate)) {
      dataCellElement.classList.add('employee-weekend-' + employeeID);
    }

    const element = document.createElement('div');
    if (element.classList.length > 0) {
      element.classList.add('day-cell', currentTraining, 'employee-' + employeeID);
      element.textContent = cellData.text;
    }
    return element;
  }
  ngOnInit() {
  }

}
