import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas03',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directivas03.component.html',
  styleUrl: './directivas03.component.css'
})
export class Directivas03Component {
  generos = ['Mujer','Hombre','Otro'];
  generoS:string = '';
  nacionalidades = ['Española','Portuguesa','Inglesa'];
  nacionalidadS:string = '';
  lenguajes = ['C++','Java','JS','Python'];
  lenguajeS:string[] = [];
  respuesta:string = '';
  mostrar2():void{
    this.respuesta=' Genero: '+this.generoS+' nacionalidad: '+this.nacionalidadS+' Lenguajes: '+this.lenguajeS;
  }
}
