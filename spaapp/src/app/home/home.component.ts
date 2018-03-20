import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as moment from 'moment';
import { ScheduleService } from '../services/schedule.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ AngularFireDatabase, ScheduleService]
})
export class HomeComponent implements OnInit {
  dataCustomers: any;
  currentDate: Date = new Date();
  dataEmployees: any;
  dataServices: any;
  constructor(private serviceSchedule: ScheduleService) {}
  static isWeekEnd(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
  }
  onAppointmentAdded (appointment) {
    this.serviceSchedule.createOppointment(appointment.appointmentData);
    // Handler of the "appointmentAdding" event
    this.serviceSchedule.getOppointment().then((customers) => {
      this.dataCustomers = customers;
      console.log(this.dataCustomers);
    });
  }
  onAppointmentDeleted (appointment) {
    this.serviceSchedule.deleteOppointment(appointment.appointmentData);
    // Handler of the "appointmentAdding" event
    this.serviceSchedule.getOppointment().then((customers) => {
      this.dataCustomers = customers;
      console.log(this.dataCustomers);
    });
  }
  onAppointmentUpdated (appointment) {
    console.log(appointment);
    this.serviceSchedule.updateOppointment(appointment.newData, appointment.oldData);
    // Handler of the "appointmentAdding" event
    this.serviceSchedule.getOppointment().then((customers) => {
      this.dataCustomers = customers;
      console.log(this.dataCustomers);
    });
  }
  ngOnInit() {
    this.serviceSchedule.getEmployees().then((employees) => {
      this.dataEmployees = employees;
    });
    this.serviceSchedule.getOppointment().then((customers) => {
        this.dataCustomers = customers;
        console.log(this.dataCustomers);
    });
    this.serviceSchedule.getServices().then((dataServices) => {
      this.dataServices = dataServices;
    });
  }
}
