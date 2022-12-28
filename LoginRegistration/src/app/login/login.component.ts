import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  FormSubmit!:FormGroup; 
  selected="Angular Basics";
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.FormSubmit=this.fb.group({
      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.minLength(6)]],
      dob:['',Validators.required],
      gender:['',Validators.required],
      phone:['', Validators.required,Validators.minLength(10)],
      skills:['', Validators.required],
      })
    }

    onSubmit()
    {
      
    console.log(this.FormSubmit.value);
    window.location.reload();
    }
}
