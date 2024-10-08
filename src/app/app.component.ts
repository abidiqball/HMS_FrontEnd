import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DoctorComponent } from "../features/doctor/doctor.component";
import { PatientComponent } from '../features/patient/patient.component';
import { DepartmentComponent } from '../features/department/department.component';
import { AppointmentComponent } from '../features/appointment/appointment.component';
import { BillingComponent } from '../features/billing/billing.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from '../features/admin/admin.component';
import { AdminCreateComponent } from '../features/admin-create/admin-create.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NgbModule,RouterLink,RouterLinkActive, DoctorComponent, 
            PatientComponent, DepartmentComponent, AppointmentComponent, BillingComponent, 
            AdminComponent, AdminCreateComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
