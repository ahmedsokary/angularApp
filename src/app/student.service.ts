import { Injectable } from '@angular/core';
//to connect to daatbsee
import { HttpClient } from '@angular/common/http';
import { Student } from './_model/student';
import { Event } from './_model/event';
import { StudentTest } from './_model/student-test';

@Injectable({
  providedIn: 'root'
}) 
export class StudentService {
  baseUrl="http://localhost:8000/student/";

   head = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  })
  constructor(public http:HttpClient) { }
  getEvent(id:number)
  {
   return this.http.get<Event[]>(this.baseUrl+id,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }


  updateStudent(std:Student)
  {
    return this.http.put<StudentTest>(this.baseUrl,std,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  getAllStudents()
  {
   return this.http.get<StudentTest[]>(this.baseUrl,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }
}

