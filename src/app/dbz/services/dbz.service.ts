import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //Este es el elemento padre que le paso como propiedad
  //al elemento hijo
public characters: Character[] =
[
  { name:'krilin', power: 1000 },
  { name:'goku', power: 9500 },
  { name:'vegeta', power: 7000 }
];

//Creamos un metodo que recibe el personaje emitido por el hijo
onNewCharacter(character:Character):void{
  this.characters.push(character);
  console.log(character);
}

onDeleteCharacter(indice:number){
  this.characters.splice(indice,1);
}
}
