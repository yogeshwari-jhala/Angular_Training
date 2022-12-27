import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from './model/Form';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) {

  }
 url:string="http://localhost:3000";
 saveEmployee(emp:Form)
  {
      return this.http.post<Form>(this.url+"/data",emp);
  }
}
