import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  message: string;

  constructor() {}

  ngOnInit() {
    this.message = "Plz select button.";
  }

  change(v: string) {
    this.message = 'select: "' + v + '".';
  }

}
