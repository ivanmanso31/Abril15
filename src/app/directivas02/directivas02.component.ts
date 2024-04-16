import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas02',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directivas02.component.html',
  styleUrl: './directivas02.component.css'
})
export class Directivas02Component {
  salidas = ['Madrid','Bilbao','Sevilla'];
  salidaS:string = '';
  destinos = ['Barcelona','Granada','Valencia'];
  destinoS:string = '';
  fechaIda:string = '';
  fechaVuelta:string = '';
  pasajeros:number = 0;
  mostrar3(){
    alert('Origen: '+this.salidaS+' Destino: '+this.destinoS+' Salida: '+this.fechaIda+' Vuelta: '+this.fechaVuelta+' Pasajeros: '+this.pasajeros);
  }
}
