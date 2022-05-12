import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { AddingToEvent } from 'src/app/_model/adding-to-event';

@Component({
  selector: 'app-add-to-event',
  templateUrl: './add-to-event.component.html',
  styleUrls: ['./add-to-event.component.css']
})
export class AddToEventComponent implements OnInit {

  constructor(public serv:AdminService,public router:Router) { }
  error=""
  success=""
  addEvent:AddingToEvent = new AddingToEvent(0,0);
  showStudent=1
  showSpeaker=0

  addStudentToEvent()
  {
    this.error=""
    this.success=""
    this.serv.addStudentToEvent(this.addEvent).subscribe(s=>{this.success="Added Succesfully"},e=>{this.error=e.error})
  }

  addSpeakerToEvent()
  {
    this.error=""
    this.success=""
    this.serv.addSpeakerToEvent(this.addEvent).subscribe(s=>{this.success="Added Succesfully"},e=>{this.error=e.error})
  }

  showStudentButton()
  {
    this.showStudent=1
    this.showSpeaker=0
  }


  showSpeakerButton()
  {
    this.showStudent=0
    this.showSpeaker=1
  }

  ngOnInit(): void {
  }

}
