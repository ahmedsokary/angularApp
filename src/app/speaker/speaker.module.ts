import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerHomeComponent } from './speaker-home/speaker-home.component';
import { UpdateSpeakerComponent } from './update-speaker/update-speaker.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    SpeakerHomeComponent,
    UpdateSpeakerComponent,
    ShowEventComponent,
 
    
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[SpeakerHomeComponent,UpdateSpeakerComponent,ShowEventComponent]
})
export class SpeakerModule { }
