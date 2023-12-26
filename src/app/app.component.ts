import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Contador en angular';

  contador: number = 0;


   incremento() {
    this.contador += 1;
  }
  decremento() {
    this.contador -= 1;
  }

}
