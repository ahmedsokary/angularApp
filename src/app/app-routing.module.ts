import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToEventComponent } from './admin/add-to-event/add-to-event.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EventComponent } from './admin/event/event.component';
import { SpeakerComponent } from './admin/speaker/speaker.component';
import { StudentComponent } from './admin/student/student.component';
import { LoginAllComponent } from './login/login-all/login-all.component';
import { RegisterAllComponent } from './register/register-all/register-all.component';
import { ShowEventComponent } from './speaker/show-event/show-event.component';
import { SpeakerHomeComponent } from './speaker/speaker-home/speaker-home.component';
import { UpdateSpeakerComponent } from './speaker/update-speaker/update-speaker.component';
import { GetEventsComponent } from './student/get-events/get-events.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
const routes: Routes = [
  {path:"login",component:LoginAllComponent},
  {path:"register",component:RegisterAllComponent},
  {path:"student",component:GetEventsComponent},
  {path:"update",component:UpdateStudentComponent},
  {path:"studentHome",component:StudentHomeComponent},
  // {path:"updateSpeaker",component:GetEventsComponent},
  {path:"speakerEvent",component:ShowEventComponent},
  {path:"speakerUpdate",component:UpdateSpeakerComponent},
  {path:"speakerHome",component:SpeakerHomeComponent},
  //admin
  {path:"studentAdmin",component:StudentComponent}, 
  {path:"speakerAdmin",component:SpeakerComponent},  
  {path:"eventAdmin",component:EventComponent},  
  {path:"addEventAdmin",component:AddToEventComponent},  

  {path:"adminHome",component:AdminHomeComponent},  

 



  {path:"",redirectTo:"login",pathMatch:"full"}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
