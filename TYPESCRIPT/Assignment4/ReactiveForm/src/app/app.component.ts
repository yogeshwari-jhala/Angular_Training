import { Component } from '@angular/core';
import { ReactiveForm } from './reactive-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';
  name:string ="";
  mail : string ="";
  status : string="";
  submitted:boolean=false;
  onSubmit(item:any)
  {
    let user = new ReactiveForm();
    user.mail= item.mail;
    user.name=item.password;
    user.status=item.status;
    this.submitted=true;
  }
}
