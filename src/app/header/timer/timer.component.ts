import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  date = new Date();
  time : any
    settime() {
      setInterval(() => {
        this.time = this.date.getHours() + "." + this.date.getMinutes() + "." + this.date.getSeconds() + "." + this.date.getMilliseconds() ;
        this.date = new Date()
     },10)
    }
    
}

