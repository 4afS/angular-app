import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageComponent} from '../message/message.component'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  title: string;
  message: string[];
  lastTarget: any;
  lastColor: string;
  input1: string;

  @ViewChild(MessageComponent)
  private msgComponent: MessageComponent;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message =
      ['New Component!'
        , 'We can display some messages'
        , 'the attribute is setting array'
      ];
    this.input1 = '';
  }

  doClick(event) {
    if (this.lastTarget != null) {
      this.lastTarget.style.color = this.lastColor;
      this.lastTarget.style.backgroundColor = 'white';
    }
    this.lastTarget = event.target;
    this.lastColor = event.target.style.color;
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';
  }

  push() {
    if (this.input1 == '') {
      alert('plz input text');
      return;
    }
    this.msgComponent.push(this.input1);
    return
  }

  pop() {
    this.msgComponent.pop();
  }

  clear() {
    this.msgComponent.clear();
  }

}
