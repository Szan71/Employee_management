import { Component, OnInit } from '@angular/core';
import { Employee }    from '../employee';  

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  genders =['Male', 'Female', 'Others'];
  
  userModel = new Employee(1,'Sujan Khadka', 'Sujan', '2056-07-04', 'khadkasujan7@gmail.com','Male', 'kathmandu', 'hero', 9818056580)

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
  }

}
