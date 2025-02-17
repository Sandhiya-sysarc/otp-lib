import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-otp',
  standalone: false,
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {

  OTP = {
    first: '',
    second: '',
    third: '',
    four: '',
    five: '',
    six: '',
  };

  @Input() clear:boolean = false;
  @Output() otpValues = new EventEmitter();
  otpSub!: Subscription;
  clearOTP = new Subject<boolean>();  
  
  ngOnInit() {
     this.otpSub = this.clearOTP.subscribe((value: boolean) => {
      if (value) {
        this.resetOTP();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("hello",changes)
   if(changes["clear"].currentValue){
  this.OTP ={
  first: '',
  second: '',
  third: '',
  four: '',
  five: '',
  six: '',
   }
 }
   console.log(this.OTP)
}

  ngOnDestroy() {
    if (this.otpSub) {
      this.otpSub.unsubscribe();
    }
  } 

  private resetOTP() {
    this.OTP = {
      first: '',
      second: '',
      third: '',
      four: '',
      five: '',
      six: '',
    };
  }

  otpController(event: any, next?: any, prev?: any,index?:any): void {
    setTimeout(() => {
      if (event.target.value.length < 1 && prev) {
        prev.setFocus();
      } else if (next && event.target.value.length > 0) {
        next.setFocus();
      }
    }, 0);
  } 
  
 verifyOtp(){
    if (Object.values(this.OTP).every((val) => val != '')){
      console.log('submit');
      this.otpValues.emit(this.OTP);
    } else {
      this.otpValues.emit('');
    }
  } 
}
