import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  show: boolean = true;
  res: number;
  res1: number;
  add(num: string, num2: string) {
    this.res = parseInt(num) + parseInt(num2);
  }
  sub(num: string, num2: string) {
    this.res = parseInt(num) - parseInt(num2);
  }
  mul(num: string, num2: string) {
    this.res = parseInt(num) * parseInt(num2);
  }
  div(num: string, num2: string) {
    this.res = parseInt(num) / parseInt(num2);
  }
  modu(num: string, num2: string) {
    this.res = parseInt(num) % parseInt(num2);
  }
  inc(num: string, num2?: string) {
    if (num2 == undefined) {
      this.res = parseInt(num) + 1;
    }
    else {
    this.res = parseInt(num) + 1;
      this.res1 = parseInt(num2) + 1;
    }
  }
  dec(num: string, num2?: string) {
    
    if (num2 == undefined) {
      this.show=false;
      this.res = parseInt(num) - 1;
    }
    else {
      this.res = parseInt(num) - 1;
      this.res1 = parseInt(num2) - 1;
    }
  }
}
