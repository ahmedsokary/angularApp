import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';
import { Speaker } from 'src/app/_model/speaker';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-register-all', 
  templateUrl: './register-all.component.html',
  styleUrls: ['./register-all.component.css']
})
export class RegisterAllComponent implements OnInit {
  std:Student=new Student(0,"","");
  spk:Speaker=new Speaker(0,"","","",{city:"",street:"",building:0});
  type:number=0;
  constructor(public ser:RegisterService,public route:Router) { }
  error=""


 Register()
  { 
    if(this.type==0)
    {
      this.error=" ";
      this.ser.registerStudent(this.std).subscribe(s=>
        {
          sessionStorage.setItem("token",s.token.toString());
          sessionStorage.setItem("student",JSON.stringify(s.data));

          //route to the student
         this.route.navigate(['/studentHome'])
          
        }
      ,e=>
      {
        this.error=e.error;
      })
    }
    else if(this.type==1)
    {
      this.error=" ";
      this.ser.registerSpeaker(this.spk).subscribe(s=>
        {
          sessionStorage.setItem("token",s.token.toString());
          //when sending a json send it like that is session
              //sending json containg all the student data
          sessionStorage.setItem("speaker",JSON.stringify(s.data));


          this.route.navigate(['/speakerHome']);
        }
      ,e=>{
        this.error=e.error;
      })
    }
    
  }
  ngOnInit(): void {
  }

}
