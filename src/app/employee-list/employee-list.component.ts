import { Component, OnInit } from '@angular/core';
import  EmployeesJson  from '../../assets/employee-list.json';

interface EMPLOYEE {
  sn: number;
  name: string;
  code: string;
  joinedDate: string;
  email: string;
  gender: string;
  address: string;
  position: string;
  mobile: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  title="Employee List";
  joinedDate= Date();
  Employees: Array<EMPLOYEE> = EmployeesJson;

  constructor(){
    console.log(this.Employees);
  }

  ngOnInit(): void {
  }

}
