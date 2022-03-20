import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  constructor() { }

  generated: string[] = [];

  loadNewTip = new Subject<void>()

  ngOnInit(): void {
  }


  moveCursor() {
    this.loadNewTip.next()
  }
}
