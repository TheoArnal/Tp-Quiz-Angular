import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getRandomArrayElement } from "../../../utils/array-utils";

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss']
})
export class TipComponent implements OnInit, OnChanges {

  @Input()
  tipText!: string

  @Input()
  classes = ''

  backgrounds = [
    "feuilles-dores-carre.png",
    "feuilles-orange.png",
    "feuilles-vertes-carres-06.png",
  ]

  currentBg!: string


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getRandomBg();
  }

  ngOnInit(): void {
    this.getRandomBg();
  }

  getRandomBg = () => {
    const bg = getRandomArrayElement(
      this.backgrounds.filter((it) => ((this.currentBg?.indexOf(it) ?? -1) === -1))
    )
    this.currentBg = `url(assets/${ bg })`
  }

}
