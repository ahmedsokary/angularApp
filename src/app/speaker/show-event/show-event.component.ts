import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Event } from 'src/app/_model/event';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {


  constructor(public serv:SpeakerService,public router:Router) { }


  //speaker=JSON.parse(sessionStorage.getItem('speaker')!); 
  speakerId=JSON.parse(sessionStorage.getItem("speaker")!)._id; 
    eventsArray:Event[]=[];
  
    ngOnInit(): void {
      console.log(this.speakerId);
      
      this.serv.getEvent(this.speakerId).subscribe(s=>{
        this.eventsArray=s;
      }
      ,e=>{
        console.log(e);
      }
      )
    }
  
  }
  