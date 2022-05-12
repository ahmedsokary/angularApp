import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { Event } from 'src/app/_model/event';
import { EventTest } from 'src/app/_model/event-test';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public serv:AdminService,public route:Router) { }
  events:Event[]=[]
  ev:EventTest= new EventTest(0,"","",0,[0],[0]);
  error=""
  success=""

  showItemList=0;
  showEventList=0;
  showAddButton=0;
   convertToArraySpeaker : string[] = [];
   convertTonumberSpeaker : number[] = [];
   
   convertToArrayStudent : string[] = [];
   convertTonumberStudent : number[] = [];

  inputData:Event= new Event(0,"","",0,[0],[0]);

  editEventrButton(s:Event)
  {
    this.inputData=s;

    this.error=""
    this.showItemList=1;
    this.showEventList=1;

  
    this.ev.id=s._id;
    this.ev.title=s.title;
    this.ev.eventDate=s.eventDate;
    this.ev.mainSpeakerId=s.mainSpeakerId;

   this.ev.otherSpeakersIds=s.otherSpeakersIds;
    this.ev.studentsIds=s.studentsIds;


  }

  convertingToArray()
  {
    this.convertToArraySpeaker=[];
   this.convertTonumberSpeaker=[];

   this.convertToArrayStudent=[];
   this.convertTonumberStudent=[];
    this.error=""
    //we did all this bec when we add numbers it turns into string
    const s=this.ev.otherSpeakersIds.toString();
    const x=this.ev.studentsIds.toString();

    if(typeof(this.ev.otherSpeakersIds)=='string')
    {
      this.convertToArraySpeaker=s.split(',');

      for (let i = 0; i < this.convertToArraySpeaker.length; i++) {
       this.convertTonumberSpeaker.push( parseInt( this.convertToArraySpeaker[i])) 
      }
       //the new vales are addeed
    this.ev.otherSpeakersIds= this.convertTonumberSpeaker;

    }

    
   
    if(typeof(this.ev.studentsIds)=='string')
    {
      this.convertToArrayStudent=x.split(',');

      for (let i = 0; i < this.convertToArrayStudent.length; i++) {
       this.convertTonumberStudent.push( parseInt( this.convertToArrayStudent[i])) 
      }
      this.ev.studentsIds= this.convertTonumberStudent;
    
    }
    
  }



  editSpeaker()
  {
   
    this.convertingToArray();

    this.serv.editEvent(this.ev).subscribe(s=>
      {
        //hide list
        this.showItemList=0;

        this.showEventList=0;
      },
      e=>
      {
        this.error=e.error;
      }
      )

  }

  removeEvent(s:Event)
  {
    this.error="";
    if(confirm("Are you sure to delete "+s.title)) {
      this.serv.deleteEvent(s._id).subscribe(s=>
        {
          console.log("deleteed");
        },
        e=>
        {
         this.error=e.error;
        }
        )
    }
    
  }

  addEvent()
  {
    this.convertingToArray();
    this.serv.addEvent(this.ev).subscribe(s=>{this.success="Event Added succesfully"},e=>{this.error=e.error})
  }
  addlist()
  {
    this.showItemList=1;
    this.showEventList=1;
    this.showAddButton=1;
  }

  ngOnInit(): void {
    this.serv.getAllEvents().subscribe(s=>this.events=s,e=>{console.log(e);
    })
  }

}
