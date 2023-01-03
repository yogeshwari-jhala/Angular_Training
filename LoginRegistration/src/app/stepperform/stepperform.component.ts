import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServicesService } from '../service/shared-services.service';

@Component({
  selector: 'app-stepperform',
  templateUrl: './stepperform.component.html',
  styleUrls: ['./stepperform.component.css']
})
export class StepperformComponent {

  hide = true;
  firstFormGroup!:FormGroup; 
  selected="Angular Basics";
  constructor(private fb:FormBuilder,private ss:SharedServicesService) { }
  ngOnInit(): void {
    this.firstFormGroup=this.fb.group({
      fullname:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      emailid:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      fathername:['',[Validators.required,Validators.minLength(6)]],
      mothername:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required],
      mob:['', Validators.required,Validators.minLength(10)],
      bfullname:['', Validators.required],
      bankaccount:['', Validators.required],
      bankname:['', Validators.required],
      ifsc:['', Validators.required],
      internetbanking:['', Validators.required],
      mobilebanking:['',Validators.required],
      presentaddress:['', Validators.required],
      permanentaddress:['', Validators.required]
      })
    }
    onSubmit()
    {
      
    console.log(this.firstFormGroup.value);
    this.ss.stepperregisterform(this.firstFormGroup.value).subscribe(
      {
        next:()=>{
          alert("Form Submitted");
        },
        error:()=>{
          alert("Error");
        }
      }
    );
  }
}
