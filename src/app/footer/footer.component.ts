import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  footer_info = "Informations Général";
  footer_contact = "Contact";
  footer_src = "Sources";
  footer_partenaire = "Partenaires"

  ngOnInit(): void {
  }

}
