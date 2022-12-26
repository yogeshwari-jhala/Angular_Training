import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Employee } from 'src/app/model/employee';

import { CommonserviceService } from 'src/app/commonservice.service';



@Component({

  selector: 'app-employee',

  templateUrl: './employee.component.html',

  styleUrls: ['./employee.component.css']

})



export class EmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private s:CommonserviceService) { }

  e!:Employee[]  
  employeeForm!:FormGroup;
  namepattern!:"^[a-zA-Z ]{2,20}$";
  editClicked:boolean=false;
  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      id:[''],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      addr:['',[Validators.required]],
      mob:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],

    })
    this.s.id.subscribe(data=>{
      console.log(data);
      this.editClicked=true;
      this.s.getEmployeeById(data).subscribe({
        next:(res)=>{
          this.employeeForm=this.fb.group({
            id:res.id,
            name: res.name,
            addr:res.addr,
            mob:res.mob
          })
        }
      });
    })
  }
  onSubmit()

  {
    if(this.editClicked)
    {
    this.s.editEmployee(this.employeeForm.value.id, this.employeeForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        window.location.reload();
      }
    });
  }
  else{
    if(this.employeeForm.valid)
    {
    this.s.saveEmployee(this.employeeForm.value).subscribe();
    window.location.reload();
    }
  }
  }

  // submitdata(e:Employee){

  //   if(e.id!=null)

  //   {

  //    return this.s.postdata(e).subscribe();

  //    window.location.reload();

  //   }

  //   else{

  //     return this.s.updatedata().subscribe();  

  //   }  

  // }



  reset(){

    this.employeeForm=this.fb.group({
      id:'',
      name:'',
      addr:'',
      mob:'',

    })

  }



}
