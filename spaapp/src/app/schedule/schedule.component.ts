import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [ScheduleService]
})
export class ScheduleComponent implements OnInit {

  dataCustomers: any;
  currentDate: Date = new Date();
  dataEmployees: any;
  dataServices: any;
  constructor(private serviceSchedule: ScheduleService) {
    this.serviceSchedule.getOppointment().then((customers) => {
      this.dataCustomers = customers;
    });
  }
  onAppointmentAdded (appointment) {
    this.serviceSchedule.createOppointment(appointment.appointmentData);
    // Handler of the "appointmentAdding" event
    this.serviceSchedule.getOppointment().then((customers) => {
      this.dataCustomers = customers;
    });
  }
  onAppointmentDeleted (appointment) {
    this.serviceSchedule.deleteOppointment(appointment.appointmentData);
    // Handler of the "appointmentAdding" event
    this.serviceSchedule.getOppointment().then((customers) => {
      this.dataCustomers = customers;
    });
  }
  onAppointmentUpdated (appointment) {
    this.serviceSchedule.updateOppointment(appointment.newData, appointment.oldData);
    // Handler of the "appointmentAdding" event
    this.serviceSchedule.getOppointment().then((customers) => {
      this.dataCustomers = customers;
    });
  }
  ngOnInit() {
    this.serviceSchedule.getEmployees().then((employees) => {
      this.dataEmployees = employees;
    });
    this.serviceSchedule.getServices().then((dataServices) => {
      this.dataServices = dataServices;
    });
  }
}
