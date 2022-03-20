import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from "./tips/tips.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'tips', component: TipsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
