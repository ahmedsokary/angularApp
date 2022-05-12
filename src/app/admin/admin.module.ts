import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { EventComponent } from './event/event.component';
import { AddToEventComponent } from './add-to-event/add-to-event.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';





@NgModule({
  declarations: [
    StudentComponent,
    SpeakerComponent,
    EventComponent,
    AddToEventComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[StudentComponent,SpeakerComponent,EventComponent,AddToEventComponent,AdminHomeComponent]
})
export class AdminModule { }
