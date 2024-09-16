import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DoctorComponent } from "../features/doctor/doctor.component";
import { PatientComponent } from '../features/patient/patient.component';
import { DepartmentComponent } from '../features/department/department.component';
import { AppointmentComponent } from '../features/appointment/appointment.component';
import { BillingComponent } from '../features/billing/billing.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NgbModule,RouterLink,RouterLinkActive, DoctorComponent, PatientComponent, DepartmentComponent, AppointmentComponent, BillingComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
