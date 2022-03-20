import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getRandomArrayElement } from "../../../utils/array-utils";
import { Observable } from "rxjs";

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss']
})
export class TipComponent implements OnInit, OnChanges {

  @Input()
  reload?: Observable<void>

  @Input()
  classes = ''


  backgrounds = [
    "feuilles-dores-carre.png",
    "feuilles-orange.png",
    "feuilles-vertes-carres-06.png",
  ]

  tips = [
    "Ne mets pas ton doigt dans la friteuse",
    "Fais attention avec une agrafeuse, tu risques de te pincer très très très très très très très très très très très très très très fort",
    '3',
    '4',
    '5',
    '6',
  ]

  currentBg!: string
  tipText!: string


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.newTip();
  }

  ngOnInit(): void {
    this.tipText = this.tips[0];
    this.currentBg = this.backgrounds[0];
    this.newTip();
    this.reload?.subscribe(this.newTip)
  }

  newTip = () => {
    this.getRandomBg();
    this.getRandomTip();
  }

  getRandomBg = () => {
    const bg = getRandomArrayElement(
      this.backgrounds.filter((it) => ((this.currentBg?.indexOf(it) ?? -1) === -1))
    )
    this.currentBg = `url(assets/${ bg })`
  }

  getRandomTip = () => {
    this.tipText = getRandomArrayElement(
      this.tips.filter((it) => it !== this.tipText)
    );
  }

}
