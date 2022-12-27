import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaterialAssignment';
  hide = true;
  FormSubmit!:FormGroup; 
  selected="Angular Basics";
  constructor(private fb:FormBuilder,private s:ServiceService) { }
  ngOnInit(): void {
    this.FormSubmit=this.fb.group({
      name:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      dob:['',Validators.required],
      gender:['',Validators.required],
      phone:['', Validators.required],
      skills:['', Validators.required],
      })
    }

    onSubmit()
    {
      

    this.s.saveEmployee(this.FormSubmit.value).subscribe();
    console.log(this.FormSubmit.value);
    window.location.reload();
    }
}
