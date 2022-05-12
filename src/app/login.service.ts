import { Injectable } from '@angular/core';
//to connect to daatbsee
import { HttpClient } from '@angular/common/http';
import { Student } from './_model/student';
import { Login } from './_model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8000/login/";

  constructor(public http:HttpClient) { }

  checkStudent(std:Student)
  {
   return this.http.post<Login>(this.baseUrl+'student',std)
  }
  checkSpeaker(std:Student)
  {
    return this.http.post<Login>(this.baseUrl+'speaker',std)
  }
  checkAdmin(std:Student)
  {
    return this.http.post<Login>(this.baseUrl+'admin',std)
  }

}


