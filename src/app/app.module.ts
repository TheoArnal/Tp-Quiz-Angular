import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { TipComponent } from './tips/tip/tip.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    FooterComponent,
    HeaderComponent,
    TipsComponent,
    TipComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
