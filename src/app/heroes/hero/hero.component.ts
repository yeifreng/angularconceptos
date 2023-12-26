import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age:number = 45;


  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
  return `${this.name} - ${this.age}`;
  }

  changeHero():void{

    this.name = 'Spiderman';

  }

  changeAge():void{
    this.age = 25;
  }

}
