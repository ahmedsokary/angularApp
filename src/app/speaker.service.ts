import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './_model/event';
import { Speaker } from './_model/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  baseUrl="http://localhost:8000/speaker/";

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


  updateSpeaker(spk:Speaker)
  {
    return this.http.put<Speaker>(this.baseUrl,spk,{
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  }

  // getAllStudents()
  // {
  //  return this.http.get<StudentTest[]>(this.baseUrl,{
  //     headers: {
  //       'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  //     }
  //   })
  // }
}

