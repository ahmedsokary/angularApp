import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Speaker } from 'src/app/_model/speaker';
import { SpeakerTest } from 'src/app/_model/speaker-test';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
 
  constructor(public serv:AdminService,public route:Router) { }
  speakers:SpeakerTest[]=[];
  spk:Speaker=new Speaker(0,"","","",{city:"",building:0,street:""});

  error=""

  showItemList=0;
  showSpeakerList=0;

  editSpeakerButton(s:SpeakerTest)
  {
    this.error=""
    this.showItemList=1;
    this.showSpeakerList=1;


    this.spk.id=s._id;
    this.spk.email=s.email;
    this.spk.password=s.password;
    this.spk.userName=s.userName;
    this.spk.address=s.address;

  }

  editSpeaker()
  {
    console.log(this.spk);
    
    this.serv.editSpeaker(this.spk).subscribe(s=>
      {
        //hide list
        this.showItemList=0;

        this.showSpeakerList=0;
      },
      e=>
      {
        this.error=e.error;
      }
      )

  }

  removeSpeaker(s:SpeakerTest)
  {
    this.error="";
    if(confirm("Are you sure to delete "+s.email)) {
      this.serv.deleteSpeaker(s._id).subscribe(s=>
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

  ngOnInit(): void {
    this.serv.getAllSpeakers().subscribe(s=>{this.speakers=s},e=>{console.log(e);
    })
  }

}
