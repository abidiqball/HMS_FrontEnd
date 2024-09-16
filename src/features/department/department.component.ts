import { Component, OnInit } from '@angular/core';
import { SeedsService } from '../../services/seeds-service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  standalone: true
})
export class DepartmentComponent {
  name:string='Department'
  departments: any;

  constructor(private seedsService : SeedsService) 
  { }

  ngOnInit() 
  {
    this.departments = this.seedsService.GetDepartments();
  }

}
