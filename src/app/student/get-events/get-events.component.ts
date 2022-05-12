import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Event } from 'src/app/_model/event';
import { StudentTest } from 'src/app/_model/student-test';

@Component({ 
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.css']
})
export class GetEventsComponent implements OnInit {

  constructor(public serv:StudentService,public router:Router) { }

  studentArray:StudentTest[]=[];
  studentId=JSON.parse(sessionStorage.getItem("student")!)._id;
  eventsArray:Event[]=[];

  ngOnInit(): void {
    
    this.serv.getEvent(this.studentId).subscribe(s=>{
      this.eventsArray=s;
    }
    ,e=>{
      console.log(e);
    }
    )
  }

}
