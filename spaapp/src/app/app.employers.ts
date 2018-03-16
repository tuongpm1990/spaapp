import { Injectable } from '@angular/core';

export class EmployerData {
  EmployeeName: string;
  EmployeeID: number;
  color: string;
  age: number;
  job: string;
}

const employee: EmployerData[] = [{
  EmployeeName: 'Phạm Văn Tú',
  EmployeeID: 0,
  color: '#56ca85',
  age: 28,
  job: 'nail, spa'
}, {
  EmployeeName: 'Phạm Thị Hoa',
  EmployeeID: 1,
  color: '#ff9747',
  age: 20,
  job: 'spa'
}];

@Injectable()
export  class Employers {
  getEmployers() {
    return employee;
  }
}
