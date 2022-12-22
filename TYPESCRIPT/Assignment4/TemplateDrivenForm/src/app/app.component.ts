import { Component } from '@angular/core';
import { UserForm } from './user-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  arr:UserForm[]=[];
  
  //subscriptions = ['Basic', 'Advanced', 'Pro'];
  email:string ="";
  subscription : string ="";
  password : string="";
  submitted:boolean=false;
  title = 'TemplateDrivenForm';
  onSubmit(item:any)
  {
    let user = new UserForm();
    user.email= item.email;
    user.password=item.password;
    user.subscription=item.subscription;
    this.arr.push(user);
    this.submitted=true;
  }
}
