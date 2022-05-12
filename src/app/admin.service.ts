import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentTest } from './_model/student-test';
import { Student } from './_model/student';
import { SpeakerTest } from './_model/speaker-test';
import { Speaker } from './_model/speaker';
import { EventTest } from './_model/event-test';
import { Event } from './_model/event';
import { AddingToEvent } from './_model/adding-to-event';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl="http://localhost:8000/admin/";

  constructor(public http:HttpClient) { }

  getAllStudents()
  {
   return this.http.get<StudentTest[]>("http://localhost:8000/student/",{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  editStudent(std:Student) 
  {
    return this.http.put<StudentTest>(this.baseUrl+"student",std,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  deleteStudent(id:Number)
  {
    return this.http.delete<StudentTest>(this.baseUrl+"student/"+id,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  getAllSpeakers()
  {
   return this.http.get<SpeakerTest[]>("http://localhost:8000/speaker",{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  editSpeaker(spk:Speaker) 
  {
    return this.http.put<Speaker>(this.baseUrl+"speaker",spk,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }
  
  deleteSpeaker(id:Number)
  {
    return this.http.delete<Speaker>(this.baseUrl+"speaker/"+id,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  getAllEvents()
  {
    return this.http.get<Event[]>(this.baseUrl+"event",{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })

  }

  editEvent(eve:EventTest) 
  {
    return this.http.put<Event>(this.baseUrl+"event",eve,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  deleteEvent(id:Number)
  {
    return this.http.delete<Event>(this.baseUrl+"event/"+id,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  addEvent(ev:EventTest)
  {
    return this.http.post<Event>(this.baseUrl+"event/",ev,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })

  }

  addStudentToEvent(s:AddingToEvent)
  {
    return this.http.put<Event>(this.baseUrl+"event/student",s,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  addSpeakerToEvent(s:AddingToEvent)
  {
    return this.http.put<Event>(this.baseUrl+"event/speaker",s,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }
} 
