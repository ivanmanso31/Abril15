import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjInterfacesComponent } from './ej-interfaces/ej-interfaces.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { Directivas03Component } from './directivas03/directivas03.component';
import { Directivas02Component } from './directivas02/directivas02.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EjInterfacesComponent, DirectivasComponent, Directivas03Component, Directivas02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril15';
}
