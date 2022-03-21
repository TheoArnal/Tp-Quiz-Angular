import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  constructor() { }

  generated: string[] = [];

  arrowLeft = faLongArrowLeft;
  arrowRight = faLongArrowRight;

  loadNewTip = new Subject<void>()

  ngOnInit(): void {
  }


  moveCursor() {
    this.loadNewTip.next()
  }
}
