import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  rams = ['RAM32','RAM16','RAM8'];
  ramS:string = '';
  procesadores = ['Corei9','Corei7','Corei5'];
  procesadorS:string = '';
  tarjetaS:boolean = false;
  discos = ['HDD','SSD'];
  discoS:string = '';
  fuentes = ['600','400','200'];
  fuenteS:string = '';
  respuesta:string = '';
  mostrar1():void{
      this.respuesta=' RAM: '+this.ramS+' Procesador: '+this.procesadorS+' Tarjeta: '+this.tarjetaS+' Disco Duro: '+this.discoS+' Fuente: '+this.fuenteS;
  }
}
