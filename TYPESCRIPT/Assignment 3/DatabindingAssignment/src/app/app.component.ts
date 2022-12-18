import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatabindingAssignment';
  username:string ="";
  reset()
  {
    this.username = "";
  }
  
}
