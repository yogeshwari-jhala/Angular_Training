import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from './model/employee';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
 
  constructor(public http:HttpClient) {

   }
  url:string="http://localhost:3000";
  emp = new Employee();
  id = new Subject(); //subject gives upcoming values
  saveEmployee(emp:Employee)
  {
      return this.http.post<Employee>(this.url+"/getAllData",emp);
  }
  setId(id:any)
  {
    console.log(id);
    this.id.next(id);  // data stored in observable
  }
  getAllData():Observable<Employee[]>
  {
     return this.http.get<Employee[]>(this.url+"/getAllData");
  }
  getEmployeeById(id:any)
  {
    return this.http.get<Employee>(this.url+"/getAllData/"+id);
  }

 deleteEmployee(id:number)
 {
     return this.http.delete(this.url+"/getAllData/"+id);
 }
  editEmployee(id:any, emp:Employee):Observable<Employee>
  {
    return this.http.put<Employee>(this.url+"/getAllData/"+id,emp);
  }

}
