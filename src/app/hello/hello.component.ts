import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  price: number;
  num: number;
  now: Date;
  styleClass: string;
  count: number;
  input: string;
  visible: boolean;
  data: string[];
  switch: string;
  nowClass: any;
  nowStyle: any;

  constructor() {
    setInterval(
      () => {this.now = new Date();}, 1000);
    setInterval(
      () => {this.num += 1}, 10);
    setInterval(
      () => {
        this.styleClass = this.styleClass == 'red' ? '' : 'red';
        console.log(this.styleClass);
      }
    , 1000);

  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'false, false, false';
    this.price = 123450;
    this.num = 0;
    this.styleClass = 'red';
    this.count = 0;
    this.visible = false;
    this.data = ["Hello", "World"];
    this.nowClass = {
      'thin': false,
      'large': false,
      'frame': false
    }
    this.nowStyle = {
      'border-style': '',
      'border-width': '',
      'border-color': ''
    }
  }

  check(i1: any, i2: any, i3: any) {
    this.nowStyle['border-style'] = i1;
    this.nowStyle['border-width'] = i2 + 'px';
    this.nowStyle['border-color'] = i3;
  }



  today() {
    return new Date().toLocaleString();
  }

  doClick() {
    this.visible = !this.visible;
  }

  doSelect(val: string) {
    this.switch = val;
  }

  doType(val:string) {
    this.input = val;
    this.message = 'you type: ' + this.input;
  }

}
