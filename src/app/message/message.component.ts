import {Component, OnInit} from '@angular/core';
import {MycheckService} from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService]
})

export class MessageComponent implements OnInit {
  message: string;

  constructor(private service: MycheckService) {
  }

  ngOnInit() {
    this.message = this.service.url;
  }

  getWeights() {
    return this.service.weights;
  }

  getNumberOfVisitors() {
    return this.service.number_of_visitors;
  }

  getWaight() {
    return this.service.weight;
  }

  getDate() {
    return this.service.date;
  }

  getWeightsSortedByWeight() {
    return this.service.sortByWeight();
  }
}
