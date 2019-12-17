import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

class Weights {
  body_weight: BodyInfo[] = [];
  constructor(weights: BodyInfo[]) {
    this.body_weight = weights;
  }
}

class BodyInfo {
  date: string;
  weight: string;
}

@Injectable({
  providedIn: 'root'
})

export class MycheckService {
  private _weights: Weights;
  url: string = 'http://localhost:3000/db';
  // url: string = 'https://osakainstituteof.tech/show/';


  constructor(private client: HttpClient) {
    this.client.get(this.url)
      .subscribe((result: Weights) => {
        this._weights = result;
      });
  }

  get weights() {
    return this._weights.body_weight;
  }

  get weight() {
    return this._weights.body_weight.map((x: BodyInfo) => x.weight)
  }

  get date() {
    return this._weights.body_weight.map((x: BodyInfo) => x.date)
  }

  sortByWeight() {
    return this._weights.body_weight
      .sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
  }

}
