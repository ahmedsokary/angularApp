import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterAllComponent } from './register-all/register-all.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterAllComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[RegisterAllComponent]
})
export class RegisterModule { }
