import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  baseApiUrl:string="http://localhost:3000";

  constructor(private http:HttpClient ) { }

  registered(registerStudentRequest:Employee):Observable<Employee>

  {

    return this.http.post<Employee>(this.baseApiUrl+"/registered",registerStudentRequest);

  }

  stepperregisterform(addData:Employee):Observable<Employee>

  {

    return this.http.post<Employee>(this.baseApiUrl+"/stepper",addData);

  }

  getAllData()
  {

    return this.http.get<Employee[]>(this.baseApiUrl+"/registered")

  }
}
