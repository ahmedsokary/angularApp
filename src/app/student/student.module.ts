import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEventsComponent } from './get-events/get-events.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentHomeComponent } from './student-home/student-home.component';



@NgModule({
  declarations: [
    GetEventsComponent,
    UpdateStudentComponent,
    StudentHomeComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[GetEventsComponent,UpdateStudentComponent,StudentHomeComponent]
})
export class StudentModule { }
