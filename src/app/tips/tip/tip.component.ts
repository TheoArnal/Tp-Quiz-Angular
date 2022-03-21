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
    "Pour économiser de l'eau aux toilettes, je deplace le flotteur de la chasse pour réduire le volume d'eau, ou j'utilise des bouteilles d'eau pour la petite commission.",
    "Pour mes déplacements, j'essaie le vélo ou la marche au lieu de la voiture lorsque le temps le permet, sinon je préfère les transport en commun.\n",
    "Je remplace l'eau de Javel, toxique, par du vinaigre blanc: il ne pollue pas les eaux et est très économique.\n",
    "Ma plaquette de médicament n'est pas terminé mais est pérnimée depuis longtemps ? Je la rapport à la pharmacie.\n",
    "Quand c'est possible pour les longs trajets en France, je privilegie le train à l'avion: j'arriverai souvent plus vite et la planète me dira merci.\n",
    "Chauffer son intérieur à 19°C et le baisser lorsque vous vous absentez.\n",
    "Pour laver votre sol, vous pouvez utiliser le savon noir : une cuillère à soupe de savon noir par litre d’eau chaude (eau tiède pour tomettes ou parquet !).\n",
    "Utiliser des lampes basse consommation (remplacez les halogènes par des LED).\n",
    "Privilégier les programmes « ECO » si vous utilisez un lave-vaisselle/lave-linge.\n",
    "Privilégier les douches aux bains.\n",
    "Faire pipi dans la douche c’est écolo et ça évite une chasse d’eau tous les matins ! (et acheter du papier toilette recyclé et recyclable labellisé par l’écolabel européen)\n",
    "On privilégie l’achat de matières plus écologiques comme le bois, le verre ou l’inox.\n",
    "Pour faire des économies d’énergie, privilégiez le matériel informatique et bureautique avec le label Energy Star.\n",
    "Optimiser ses recherches sur internet, en enregistrant ses sites souvent consultés en favoris.\n",
    "Et utiliser un moteur de recherche écologique qui aide à planter des arbres grâce à Ecosia.\n",
    "Votre boite e-mail ne doit pas être trop surchargée. Faites un tri régulièrement, desinscrivez vous de certains abonnements qui ne vous intéressent plus.\n",
    "Optimisez la taille des documents que vous envoyez par mail pour qu’ils soient le plus léger possible.",
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
