import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { SpeakerTest } from 'src/app/_model/speaker-test';
import { Student } from 'src/app/_model/student';

@Component({
  selector: 'app-login-all',
  templateUrl: './login-all.component.html',
  styleUrls: ['./login-all.component.css']
})
export class LoginAllComponent implements OnInit { 

  std:Student=new Student(0,"","");
  spk:SpeakerTest=new SpeakerTest(0,"","","",{city:"",street:"",building:0});
  type:number=1;
  error="";
  constructor(public serv:LoginService,public route:Router) { }



  login()
  {
    if(this.type==1)
    {
      this.serv.checkStudent(this.std).subscribe(s=>
        {
          sessionStorage.setItem("token",s.token.toString());
          //when sending a json send it like that is session
          //sending json containg all the student data
          sessionStorage.setItem("student",JSON.stringify(s.data));
          //route to the student
         this.route.navigate(['/studentHome'])
          
        }
      ,e=>
      {
        this.error=e.error;
      })
    }
    else if(this.type==2)
    {
      this.serv.checkSpeaker(this.std).subscribe(s=>
        {
          sessionStorage.setItem("token",s.token.toString());
          //when sending a json send it like that is session
              //sending json containg all the student data
          sessionStorage.setItem("speaker",JSON.stringify(s.data));


          this.route.navigate(['/speakerHome']);

        }
      ,e=>
      {
        this.error=e.error;
      })
    }
    else if(this.type==3)
    {
      this.serv.checkAdmin(this.std).subscribe(s=>
        {
          sessionStorage.setItem("token",s.token.toString());
          
          this.route.navigate(['/adminHome']);
        }
      ,e=>
      {
        this.error=e.error;
        
      })
    }

  }

  ngOnInit(): void {
  }

}
