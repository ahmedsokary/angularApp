import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_model/speaker';

@Component({
  selector: 'app-update-speaker',
  templateUrl: './update-speaker.component.html', 
  styleUrls: ['./update-speaker.component.css']
})
export class UpdateSpeakerComponent implements OnInit {

  constructor(public serv:SpeakerService,router:Router) { }

  speaker=JSON.parse(sessionStorage.getItem("speaker")!);
  




  spk:Speaker=new Speaker(this.speaker._id,this.speaker.email,this.speaker.userName,this.speaker.password,{city:this.speaker.address.city,street:this.speaker.address.street,building:this.speaker.address.building});
  error="";
  success="";
  editSpeaker()
  {    
    this.error="";
    this.success="";
    this.serv.updateSpeaker(this.spk).subscribe(s=>{
      this.success="Student Updated Successfully"

    }
    ,e=>{
      this.error=e.error;
    }
    )
  }
  ngOnInit(): void {
  }

}
