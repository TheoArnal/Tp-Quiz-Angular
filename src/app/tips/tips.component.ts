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

  tips = [
    "Ne mets pas ton doigt dans la friteuse",
    "Fais attention avec une agrafeuse, tu risques de te pincer très fort"
  ]

  ngOnInit(): void {
    this.generated.push(this.getRandomArrayElement(this.tips))
  }

  getRandomArrayElement = (arr: any[]) => {
    const randomInt = Math.floor(Math.random() * (arr.length+1))
    return arr[randomInt];
  }

}
