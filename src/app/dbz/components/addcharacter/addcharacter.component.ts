import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class DbzAddcharacterComponent {
//Decorador para emitir datos al padre
@Output()
//Aqui estamos creando una variable tipo EventEmitter
//para instanciar un objeto llamado EventEmitter
public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name: '',
    power: 0
  }

  emitCharacter(){

    if(this.character.name.length === 0) return;
//Despues de instanciado solo llamamos el metodo emit para decirle
//que emitiremos un personaje

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};


  }



}
