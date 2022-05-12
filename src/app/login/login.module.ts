import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LoginAllComponent } from './login-all/login-all.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginAllComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  exports:[LoginAllComponent]
})
export class LoginModule { }
