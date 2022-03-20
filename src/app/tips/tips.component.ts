import { Component, OnInit } from '@angular/core';
import { getRandomArrayElement } from "../../utils/array-utils";
import { Subject } from "rxjs";

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  constructor() { }

  generated: string[] = [];
  currentCardIndex = 0;

  tips = [
    "Ne mets pas ton doigt dans la friteuse",
    "Fais attention avec une agrafeuse, tu risques de te pincer très très très très très très très très très très très très très très fort"
  ]

  // backgrounds = [
  //   "feuilles-dores-carre.png",
  //   "feuilles-orange.png",
  //   "feuilles-vertes-carres-06.png",
  // ]

  loadNewTip = new Subject<void>()

  ngOnInit(): void {
    this.generated.push(getRandomArrayElement(this.tips))
  }


  moveCursor(direction: 'forward' | 'backward') {
    this.loadNewTip.next()
    // this.getRandomBg()
    this.currentCardIndex += direction === 'forward' ? 1 : -1;
    if (this.currentCardIndex === this.generated.length) {
      this.generated.push(getRandomArrayElement(
        this.tips.filter((it) => it !== this.generated[this.currentCardIndex-1])
      ));
      console.log(`current: ${this.generated[this.currentCardIndex]}, last: ${this.generated[this.generated.length-1]}`);
      return;
    }
    if (this.currentCardIndex === -1) {
      this.generated = [getRandomArrayElement(this.tips), ...this.generated];
      this.currentCardIndex = 0;
    }
  }
}
