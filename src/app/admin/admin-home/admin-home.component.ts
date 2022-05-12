import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  showstudent=0;
  showSpeaker=0;
  showEvent=0;
  showAddToEvents=0

  students()
  {
    this.showstudent=1;
    this.showSpeaker=0;
    this.showEvent=0;
    this.showAddToEvents=0;

  }
  speakers()
  {
    this.showSpeaker=1;
    this.showstudent=0;
    this.showEvent=0;
    this.showAddToEvents=0;

  }
  events()
  {
    this.showEvent=1;
    this.showstudent=0;
    this.showSpeaker=0;
    this.showAddToEvents=0;
  }
  addToEvents()
  {
    this.showAddToEvents=1;
    this.showstudent=0;
    this.showSpeaker=0;
    this.showEvent=0;
    
  }
  ngOnInit(): void {
  }

}
