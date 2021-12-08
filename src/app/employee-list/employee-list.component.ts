import { Component, OnInit } from '@angular/core';
// import  EmployeesJson  from '../../assets/employee-list.json';

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
  // Employees: Array<EMPLOYEE> = EmployeesJson;
  Employees: EMPLOYEE[]=[
    {
      "sn": 1,
      "name": "Sujan Khadka",
      "code": "Szan",
      "joinedDate": "June-07-2021",
      "email": "szan@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Trainee",
      "mobile": "9810000000"
    },
    {
      "sn": 2,
      "name": "Hari Saran Shrestha",
      "code": "Hari",
      "joinedDate": "August-06-2019",
      "email": "hs@infodev.com.np",
      "gender": "Male",
      "address": "123 st Lalitpur",
      "position": "Senior Software Developer",
      "mobile": "9810000000"
    },
    {
      "sn": 3,
      "name": "Ashok Biswokarma",
      "code": "Ashok",
      "joinedDate": "November-06-2020",
      "email": "ashok@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Senior Software Developer",
      "mobile": "9810000000"
    },
    {
      "sn": 4,
      "name": "Saran Sonar",
      "code": "Saran",
      "joinedDate": "June-07-2013",
      "email": "saran@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Senior Software Developer",
      "mobile": "9810000000"
    },
    {
      "sn": 5,
      "name": "Yubraj Shrestha",
      "code": "Yubraj",
      "joinedDate": "July-04-2015",
      "email": "yubraj@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Junior Software Developer",
      "mobile": "9810000000"
    },
    {
      "sn": 6,
      "name": "Sujal Duwa",
      "code": "Sujal",
      "joinedDate": "August-01-2013",
      "email": "sujal@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Senior Software Engineer",
      "mobile": "9810000000"
    },
    {
      "sn": 7,
      "name": "Abi Chitrakar",
      "code": "Abi",
      "joinedDate": "September-07-2013",
      "email": "abi@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Junior Software Developer",
      "mobile": "9810000000"
    },
    {
      "sn": 8,
      "name": "Surya Bista",
      "code": "Surya",
      "joinedDate": "April-07-2013",
      "email": "surya@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Senior Software Developer",
      "mobile": "9810000000"
    },
    {
      "sn": 9,
      "name": "Nischal Chand",
      "code": "Nischal",
      "joinedDate": "May-07-2013",
      "email": "nischal@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Junior Software Developer",
      "mobile": "9810000000"
    },
    {
      "sn": 10,
      "name": "Babin Rawat",
      "code": "Babin",
      "joinedDate": "April-07-2013",
      "email": "babin@infodev.com.np",
      "gender": "Male",
      "address": "123 st Kathmandu",
      "position": "Senior Software Developer",
      "mobile": "9810000000"
    }
  ]
  constructor(){
    console.log(this.Employees);
  }

  ngOnInit(): void {
  }

}
