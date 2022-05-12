import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-home',
  templateUrl: './speaker-home.component.html',
  styleUrls: ['./speaker-home.component.css']
})
export class SpeakerHomeComponent implements OnInit {

  constructor() { }
  //flag for the appearance of the table
  eventFlag=0;
  updateFlag=0;
  //get email
  userEmail=JSON.parse(sessionStorage.getItem("speaker")!).email;
  
  getEvents()
    { 
      this.updateFlag=0;
  
      if(this.eventFlag==0)
      this.eventFlag=1;
      else
      this.eventFlag=0;
    }
  
    updateStudent()
    {
      this.eventFlag=0;
  
      if(this.updateFlag==0)
      this.updateFlag=1;
      else
      this.updateFlag=0;
    }
  
  
  
  
    ngOnInit(): void {
    }
  
  }
  