import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  playBtn = faPlay

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log('Start Game');
  }

  onLoad($event: any) {
    
  }
}
