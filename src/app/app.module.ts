import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tips', component: TipsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
