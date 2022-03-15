import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header_first = "Acceuil";
  header_second = "Jeu";
  header_third = "Tips";
  
  constructor() { }

  ngOnInit(): void {
  }

}
