import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './_model/register';
import { Student } from './_model/student';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http:HttpClient) { }
  baseUrl="http://localhost:8000/register/";

  registerStudent(std:Student)
  {
   return this.http.post<Register>(this.baseUrl+'student',std);
  }
  registerSpeaker(std:Student)
  {
   return this.http.post<Register>(this.baseUrl+'speaker',std);
  }
}
