import { Injectable } from '@angular/core';

export class CustomerData {
  customerName: string;
  customerID: number;
  startDate: Date;
  endDate: Date;
  address: string;
  services: string;
}

const customer: CustomerData[] = [{
  customerName: 'Nguyễn Trịnh Tùng',
  customerID: 0,
  startDate: new Date(),
  endDate: new Date(),
  address: 'Hà Nội',
  services: 'Làm móng tay, Spa chân'
}, {
  customerName: 'Phạm Thị Đào',
  customerID: 1,
  startDate: new Date(),
  endDate: new Date(),
  address: 'Quảng Ninh',
  services: 'Làm móng chân, Spa toàn thân'
}];

@Injectable()
export  class Customers {
  getCustomers() {
    return customer;
  }
}
