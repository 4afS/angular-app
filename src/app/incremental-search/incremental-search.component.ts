import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-incremental-search',
  templateUrl: './incremental-search.component.html',
  styleUrls: ['./incremental-search.component.css']
})
export class IncrementalSearchComponent implements OnInit {
  s: string;
  message: string;
  date: string[];
  date_searched: string[];

  constructor() {}

  ngOnInit() {
    this.date =
      ["ab"
        , "aba"
        , "abb"
        , "abba"
        , "abbc"
        , "ac"
        , "acb"
      ]
    this.date_searched = this.date;
  }

  doType(val: string) {
    this.date_searched = this.date.filter((item) => item.match(val));
  }


}
