import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DbzListComponent {


//Con este decorador estoy permitiendo que me llamen en la propiedad del HTMl
//desde el elemento padre que es main-page
  @Input()
  public characterList: Character[] =
  [

  ];


  //Decorador para emitir datos al padre
@Output()
//Aqui estamos creando una variable tipo EventEmitter
//para instanciar un objeto llamado EventEmitter
public onDeleteId:EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(indice:number):void{
    //Emitir el ID del personaje
    this.onDeleteId.emit(indice);
  }

}
