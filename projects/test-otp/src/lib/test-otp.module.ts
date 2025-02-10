import { NgModule } from '@angular/core';
import { TestOtpComponent } from './test-otp.component';
import { CustomBtnComponent } from './custom-btn/custom-btn.component';
import {IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { OtpComponent } from '../public-api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestOtpComponent,
    CustomBtnComponent,
    OtpComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CustomBtnComponent,
    TestOtpComponent,
    OtpComponent
  ]
})
export class TestOtpModule { }
