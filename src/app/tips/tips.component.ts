import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  constructor() { }

  generated: string[] = [];
  currentCardIndex = 0;
  currentBg!: string;

  tips = [
    "Ne mets pas ton doigt dans la friteuse",
    "Fais attention avec une agrafeuse, tu risques de te pincer très très très très très très très très très très très très très très fort"
  ]

  backgrounds = [
    "feuilles-dores-carre.png",
    "feuilles-orange.png",
    "feuilles-vertes-carres-06.png",
  ]

  ngOnInit(): void {
    this.generated.push(this.getRandomArrayElement(this.tips))
    this.getRandomBg()
    console.log(this.generated);
  }

  getRandomArrayElement = (arr: any[]) => {
    const randomInt = Math.floor(Math.random() * arr.length)
    return arr[randomInt];
  }

  getRandomBg = () => {
    const bg = this.getRandomArrayElement(
      this.backgrounds.filter((it) => ((this.currentBg?.indexOf(it) ?? -1) === -1))
    )
    this.currentBg = `url(assets/${bg})`
  }

  moveCursor(direction: 'forward' | 'backward') {
    this.getRandomBg()
    this.currentCardIndex += direction === 'forward' ? 1 : -1;
    if (this.currentCardIndex === this.generated.length) {
      this.generated.push(this.getRandomArrayElement(
        this.tips.filter((it) => it !== this.generated[this.currentCardIndex-1])
      ));
      console.log(`current: ${this.generated[this.currentCardIndex]}, last: ${this.generated[this.generated.length-1]}`);
      return;
    }
    if (this.currentCardIndex === -1) {
      this.generated = [this.getRandomArrayElement(this.tips), ...this.generated];
      this.currentCardIndex = 0;
    }
  }
}
