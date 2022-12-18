import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesAssignment';
  name:string ="Your Name : Yogeshwari Jhala";
  isPara:boolean=false;
  counter:number = 0;
  arrayCounter:number[] =[];

  show()
  {
    this.arrayCounter.push(++this.counter);
    this.isPara = !this.isPara;
  }
  getColor(i:number)
  {
    if(i>=5)
    return "blue";
    else
    return "white";
  }
}
