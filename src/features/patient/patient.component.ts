import { Component, OnInit } from '@angular/core';
import { IPatient, SeedsService } from '../../services/seeds-service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  standalone:true
})
export class PatientComponent {
  name:string='Patient'
  patients: IPatient[]=[];
  constructor(private seedsService : SeedsService) { }

  ngOnInit() 
  {
    this.patients = this.seedsService.GetPatients();
  }

}
