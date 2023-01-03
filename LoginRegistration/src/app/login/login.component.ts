import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServicesService } from '../service/shared-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  flag=0;
  hide = true;
  FormSubmit!:FormGroup; 
  registered:any=[];
  selected="Angular Basics";
  constructor(private fb:FormBuilder, private router:Router, private s:SharedServicesService) { }
  ngOnInit(): void {
    this.FormSubmit=this.fb.group({
      name:['',[Validators.required]],
      password:['',[Validators.required]],
      })
    }

onSubmit()
  {
     this.s.getAllData().subscribe({
   next:(response)=>{
   console.log(response);
   this.registered=response;
   // if(this.loginFormGroup.valid)
   // {
    this.registered.forEach((student:any) => {
     if(this.FormSubmit.value.name==student.name && this.FormSubmit.value.password==student.password)
     {
      this.flag=1;
      alert("login Success");
      this.router.navigateByUrl("/");
     }
     });
     if(this.flag==0)
     {
      alert("Login Failed");
    }
   //}
   },
   error:()=>{
     console.log("login Failed");
   }
  })
  }
}
