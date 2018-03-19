import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
export class Employee {
  text: string;
  id: number;
  avatar: string;
  employeeName: string;
  employeeID: number;
  color: string;
  age: number;
  job: string;
}

export class Customer {
  text: string;
  employeeID: number;
  customerName: string;
  customerID: number;
  startDate: Date;
  endDate: Date;
  address: string;
  services: string;
}

export class ServiceData {
  text: string;
  serviceDataID: number;
  id: number;
}

const serviceData: ServiceData[] = [{
  id: 0,
  text: 'Làm móng tay',
  serviceDataID: 0
  }, {
  id: 1,
  text: 'Làm móng chân',
  serviceDataID: 1
}, {
  id: 2,
  text: 'Liệu pháp toàn thân',
  serviceDataID: 2
}];

const employees: Employee[] = [{
  id: 0,
  text: 'Phạm Văn Tú',
  avatar: 'assets/images/default-avatar.png',
  employeeName: 'Phạm Văn Tú',
  employeeID: 0,
  color: '#56ca85',
  age: 28,
  job: 'nail, spa'
}, {
  id: 1,
  text: 'Phạm Thị Hoa',
  avatar: 'assets/images/default-avatar.png',
  employeeName: 'Phạm Thị Hoa',
  employeeID: 1,
  color: '#ff9747',
  age: 20,
  job: 'spa'
}];

const customer: Customer[] = [{
  text: 'Nguyễn Trịnh Tùng',
  employeeID: 0,
  customerName: 'Nguyễn Trịnh Tùng',
  customerID: 0,
  startDate: new Date(),
  endDate: new Date(),
  address: 'Hà Nội',
  services: 'Làm móng tay, Spa chân'
}, {
  text: 'Phạm Thị Đào',
  employeeID: 1,
  customerName: 'Phạm Thị Đào',
  customerID: 1,
  startDate: new Date(),
  endDate: new Date(),
  address: 'Quảng Ninh',
  services: 'Làm móng chân, Spa toàn thân'
  }];

@Injectable()
export class Service {
  getEmployees() {
    return employees;
  }

  getCustomer() {
    return customer;
  }
  getServiceData() {
    return serviceData;
  }
}
