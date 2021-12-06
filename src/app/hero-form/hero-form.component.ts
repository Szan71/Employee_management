import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';  

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  submitted = false;  
  onSubmit() { this.submitted = true; } 
  
  model = new Hero();
  // TODO: Remove this when we're done  
  get diagnostic() { return JSON.stringify(this.model); }  

  constructor() { }

  ngOnInit(): void {
  }

}
