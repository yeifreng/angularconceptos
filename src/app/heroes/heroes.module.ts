import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { HeroListComponent } from "./hero-list/hero-list.component";




@NgModule({
  declarations:[
    HeroComponent,
    HeroListComponent
  ],
  exports:[
    HeroComponent,
    HeroListComponent
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule{ }
